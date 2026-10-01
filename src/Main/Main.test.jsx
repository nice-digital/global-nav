import Main from "./Main";
import { render } from "@testing-library/react";
import { scriptId } from "../aws-waf";

describe("Main", () => {
	it("Matches snapshot", () => {
		const { container } = render(
			<Main>
				<p>test</p>
			</Main>
		);
		expect(container).toMatchSnapshot();
	});

	describe("AWS WAF challenge", () => {
		const awsWafScriptURL = "https://localhost:4000/mock-aws-waf-jsapi.js";

		afterEach(() => {
			document.head.innerHTML = "";
		});

		it("Loads the AWS WAF script from the awsWafScriptURL prop", () => {
			render(
				<Main awsWafScriptURL={awsWafScriptURL}>
					<p>test</p>
				</Main>
			);

			expect(document.getElementById(scriptId)).toHaveAttribute(
				"src",
				awsWafScriptURL
			);
		});

		it("Doesn't pass the awsWafScriptURL prop on to the main element", () => {
			const { getByRole } = render(
				<Main awsWafScriptURL={awsWafScriptURL} data-test="kept">
					<p>test</p>
				</Main>
			);

			const main = getByRole("main");

			expect(main).toHaveAttribute("data-test", "kept");
			expect(main.getAttributeNames()).toEqual(["class", "data-test"]);
		});
	});
});
