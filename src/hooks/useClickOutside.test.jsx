import React from "react";
import { mount } from "enzyme";

import useClickOutside from "./useClickOutside";

describe("useClickOutside hook", () => {
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

	it("Returns true when the element clicked is outside the referenced element", () => {
		const callbackFunction = jest.fn();

		function MyWrapper() {
			const { ref } = useClickOutside(callbackFunction);

			return (
				<>
					<div ref={ref}>
						<button id="inside">Inside</button>
					</div>
					<button id="outside">Outside</button>
				</>
			);
		}

		mount(<MyWrapper />, { attachTo: document.getElementById("container") });

		const inside = document.getElementById("inside");
		inside.dispatchEvent(new Event("click"));
		expect(callbackFunction).toHaveBeenCalledTimes(0);

		const outside = document.getElementById("outside");
		outside.dispatchEvent(new Event("click"));
		expect(callbackFunction).toHaveBeenCalledTimes(1);

		outside.dispatchEvent(new Event("click"));
		expect(callbackFunction).toHaveBeenCalledTimes(2);
	});
});
