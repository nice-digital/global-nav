import React from "react";
import OldIEMessage from "./OldIEMessage";
import { render } from "@testing-library/react";

describe("OldIEMessage", () => {
	it("Doesn't render in IE11", () => {
		const { container } = render(<OldIEMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => 11);
		wrapper.instance().forceUpdate();

		expect(wrapper.get(0)).toBeNull();
	});

	it("Doesn't render in modern browsers", () => {
		const { container } = render(<OldIEMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => null);
		wrapper.instance().forceUpdate();

		expect(wrapper.get(0)).toBeNull();
	});

	it("Matches snapshot in IE 10", () => {
		const { container } = render(<OldIEMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => 10);
		wrapper.instance().forceUpdate();

		expect(container).toMatchSnapshot();
	});

	it("Matches snapshot in IE 8/9", () => {
		const { container } = render(<OldIEMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => 9);
		wrapper.instance().forceUpdate();

		expect(container).toMatchSnapshot();
	});
});
