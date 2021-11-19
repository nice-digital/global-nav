import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";

import useClickOutside from "./useClickOutside";

describe("useClickOutside hook", () => {
	it("Passes a test", () => {
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

		mount(<MyWrapper />, { attachTo: document.body });

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
