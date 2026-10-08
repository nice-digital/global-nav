import { render } from "@testing-library/react";

import { loadAwsWafChallenge } from "../aws-waf";
import { useAwsWafChallenge } from "./useAwsWafChallenge";

jest.mock("../aws-waf", () => ({ loadAwsWafChallenge: jest.fn() }));

describe("useAwsWafChallenge hook", () => {
	// eslint-disable-next-line react/prop-types
	function MyWrapper({ scriptURL }) {
		useAwsWafChallenge(scriptURL);

		return <div></div>;
	}

	beforeEach(() => {
		loadAwsWafChallenge.mockClear();
	});

	it("Loads the challenge on mount", () => {
		render(<MyWrapper />);

		expect(loadAwsWafChallenge).toHaveBeenCalledTimes(1);
		expect(loadAwsWafChallenge).toHaveBeenCalledWith(undefined);
	});

	it("Passes the given script URL through", () => {
		render(<MyWrapper scriptURL="https://localhost:4000/mock.js" />);

		expect(loadAwsWafChallenge).toHaveBeenCalledWith(
			"https://localhost:4000/mock.js"
		);
	});

	it("Passes false through, to switch the challenge off", () => {
		render(<MyWrapper scriptURL={false} />);

		expect(loadAwsWafChallenge).toHaveBeenCalledWith(false);
	});

	it("Doesn't load the challenge again on re-render", () => {
		const { rerender } = render(<MyWrapper />);

		rerender(<MyWrapper />);

		expect(loadAwsWafChallenge).toHaveBeenCalledTimes(1);
	});
});
