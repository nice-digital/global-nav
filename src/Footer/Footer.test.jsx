import Footer from "./Footer";
import { render } from "@testing-library/react";

describe("Footer", () => {
	// NOTE: the Legal.tsx cyberlogo exipry will change annually. Dates and snapshots will need updating
	it("Matches snapshot", () => {
		const { container } = render(<Footer service="cks" />);
		expect(container).toMatchSnapshot();
	});
});
