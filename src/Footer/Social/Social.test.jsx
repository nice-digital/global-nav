import Social from "./Social";
import { render } from "@testing-library/react";

describe("Social", () => {
	it("Matches snapshot", () => {
		const { container } = render(<Social />);
		expect(container).toMatchSnapshot();
	});
});
