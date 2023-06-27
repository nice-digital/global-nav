import React from "react";

import Pages from "./Pages";
import { render } from "@testing-library/react";

describe("Pages", () => {
	it("Matches snapshot", () => {
		const { container } = render(<Pages />);
		expect(container).toMatchSnapshot();
	});

	it("Uses overridden feedback URL as href for site with custom feedback URL", () => {
		const { getByText } = render(<Pages service="pathways" />);
		expect(getByText("Leave feedback")).toHaveAttribute(
			"href",
			"https://www.nice.org.uk/NICE-Pathways-feedback"
		);
	});
});
