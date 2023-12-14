import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useEscapeKeydown from "./useEscapeKeydown";

describe("useEscapeKeydown hook", () => {
	let callbackFunction;

	function MyWrapper() {
		callbackFunction = jest.fn();
		const { ref } = useEscapeKeydown(callbackFunction);

		return <div ref={ref}></div>;
	}

	it("Returns true when keydown event is the result of escape key", async () => {
		render(<MyWrapper />);

		const user = userEvent.setup();

		await user.keyboard("{Esc}");

		expect(callbackFunction).toHaveBeenCalledTimes(1);
	});

	it("Returns false when keydown event is not the result of escape key", async () => {
		render(<MyWrapper />);

		const user = userEvent.setup();

		await user.keyboard("a");

		expect(callbackFunction).not.toHaveBeenCalled();
	});
});
