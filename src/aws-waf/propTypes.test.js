import { awsWafScriptURLPropType } from "./propTypes";

describe("awsWafScriptURLPropType", () => {
	const validate = (awsWafScriptURL) =>
		awsWafScriptURLPropType({ awsWafScriptURL }, "awsWafScriptURL", "Header");

	it.each([
		["a URL", "https://localhost:4000/mock-aws-waf-jsapi.js"],
		["false", false],
		["undefined", undefined],
	])("Accepts %s", (_, value) => {
		expect(validate(value)).toBeNull();
	});

	it.each([
		["true", true],
		["null", null],
		["a number", 1],
		["an object", {}],
	])("Rejects %s", (_, value) => {
		expect(validate(value)).toEqual(expect.any(Error));
	});

	it("Says what it expected", () => {
		expect(validate(true).message).toBe(
			"Invalid prop `awsWafScriptURL` of value `true` supplied to `Header`, expected a string, `false` or `undefined`."
		);
	});
});
