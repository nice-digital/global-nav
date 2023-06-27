import React from "react";

import Footer from "./Footer";
import { render } from "@testing-library/react";

describe("Footer", () => {
	it("Matches snapshot", () => {
		const { container } = render(<Footer service="cks" />);
		expect(container).toMatchSnapshot();
	});
});
