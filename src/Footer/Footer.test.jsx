import Footer from "./Footer";
import { render } from "@testing-library/react";
import { scriptId } from "../aws-waf";

describe("Footer", () => {
	// NOTE: the Legal.tsx cyberlogo exipry will change annually. Dates and snapshots will need updating
	it("Matches snapshot", () => {
		const { container } = render(<Footer service="cks" />);
		expect(container).toMatchSnapshot();
	});

	it("Loads the AWS WAF script from the awsWafScriptURL prop", () => {
		const awsWafScriptURL = "https://localhost:4000/mock-aws-waf-jsapi.js";

		render(<Footer service="cks" awsWafScriptURL={awsWafScriptURL} />);

		expect(document.getElementById(scriptId)).toHaveAttribute(
			"src",
			awsWafScriptURL
		);
	});
});
