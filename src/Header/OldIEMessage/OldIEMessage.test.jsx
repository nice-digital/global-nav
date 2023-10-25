import OldIEMessage from "./OldIEMessage";
import { render } from "@testing-library/react";

import { getIEVersion } from "./ie";

jest.mock("./ie", () => ({
	getIEVersion: jest.fn().mockReturnValue(undefined),
}));

describe("OldIEMessage", () => {
	it("Doesn't render in IE11", () => {
		getIEVersion.mockReturnValue(11);

		const { container } = render(<OldIEMessage />);

		expect(container).toBeEmptyDOMElement();
	});

	it("Doesn't render in modern browsers", () => {
		getIEVersion.mockReturnValue(undefined);

		const { container } = render(<OldIEMessage />);

		expect(container).toBeEmptyDOMElement();
	});

	it("Matches snapshot in IE 10", () => {
		getIEVersion.mockReturnValue(10);

		const { container } = render(<OldIEMessage />);

		expect(container).toMatchSnapshot();
	});

	it("Matches snapshot in IE 8/9", () => {
		getIEVersion.mockReturnValue(9);

		const { container } = render(<OldIEMessage />);

		expect(container).toMatchSnapshot();
	});
});
