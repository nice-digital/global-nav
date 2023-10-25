import Pages from "./Pages";
import { render } from "@testing-library/react";

describe("Pages", () => {
	it("Matches snapshot", () => {
		const { container } = render(<Pages />);
		expect(container).toMatchSnapshot();
	});

	// Skipping this test, as the custom pathways feedback URL is no longer used
	// If we start overriding links per service again then we can reinstate the test
	it.skip("Uses overridden feedback URL as href for site with custom feedback URL", () => {
		const { getByText } = render(<Pages service="pathways" />);
		expect(getByText("Leave feedback")).toHaveAttribute(
			"href",
			"https://www.nice.org.uk/NICE-Pathways-feedback"
		);
	});
});
