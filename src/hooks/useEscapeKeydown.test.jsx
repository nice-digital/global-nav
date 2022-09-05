import React from "react";
import { mount } from "enzyme";

import useEscapeKeydown from "./useEscapeKeydown";

describe("useEscapeKeydown hook", () => {
	beforeEach(() => {
		// Avoid `attachTo: document.body` Warning
		const div = document.createElement("div");
		div.setAttribute("id", "container");
		document.body.appendChild(div);
	});

	afterEach(() => {
		const div = document.getElementById("container");
		if (div) {
			document.body.removeChild(div);
		}
	});

	it("Returns true when keydown event is the result of escape key", () => {
		const callbackFunction = jest.fn();

		function MyWrapper() {
			const { ref } = useEscapeKeydown(callbackFunction);

			return (
				<>
					<ul ref={ref}>
						<li>some test item</li>
					</ul>
				</>
			);
		}

		mount(<MyWrapper />, { attachTo: document.getElementById("container") });

		const event = new KeyboardEvent("keydown", { key: "Escape" });
		document.dispatchEvent(event);

		expect(callbackFunction).toHaveBeenCalledTimes(1);

		const event2 = new KeyboardEvent("keydown", { key: "Enter" });
		document.dispatchEvent(event2);
		expect(callbackFunction).toHaveBeenCalledTimes(1);
	});
});
