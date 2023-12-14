import MockDate from "mockdate";

import Legal from "./Legal";
import { render } from "@testing-library/react";

describe("Legal", () => {
	it("Matches snapshot", () => {
		MockDate.set("2000-11-22");
		const { container } = render(<Legal />);
		expect(container).toMatchSnapshot();
		MockDate.reset();
	});
});
