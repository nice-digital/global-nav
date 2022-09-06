import React from "react";
import { mount } from "enzyme";

import useEscapeKeydown from "./useEscapeKeydown";

describe("useEscapeKeydown hook", () => {
	let callbackFunction;

	function MyWrapper() {
		callbackFunction = jest.fn();
		const { ref } = useEscapeKeydown(callbackFunction);

		return <div ref={ref}></div>;
	}

	it("Returns true when keydown event is the result of escape key", () => {
		mount(<MyWrapper />);

		const event = new KeyboardEvent("keydown", { key: "Escape" });
		document.dispatchEvent(event);

		expect(callbackFunction).toHaveBeenCalledTimes(1);
	});

	it("Returns false when keydown event is not the result of escape key", () => {
		mount(<MyWrapper />);

		const event = new KeyboardEvent("keydown", { key: "Enter" });
		document.dispatchEvent(event);

		expect(callbackFunction).not.toHaveBeenCalled();
	});
});
