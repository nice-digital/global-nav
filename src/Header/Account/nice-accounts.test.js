import { whenAwsWafTokenReady } from "../../aws-waf";
import { checkIsLoggedIn, getDomainBaseUrl } from "./nice-accounts";

jest.mock("../../aws-waf", () => ({
	whenAwsWafTokenReady: jest.fn(() => Promise.resolve()),
}));

describe("nice-accounts", () => {
	const flushPromises = async () => {
		for (let i = 0; i < 5; i++) await Promise.resolve();
	};

	const findTopHatScript = () =>
		document.querySelector("script[src*='accounts.nice.org.uk/tophat']");

	afterEach(() => {
		document.body.innerHTML = "";
		delete window._na;
	});

	describe("getDomainBaseUrl", () => {
		it("Has no environment prefix on live", () => {
			expect(getDomainBaseUrl("live")).toBe("https://accounts.nice.org.uk/");
		});

		it("Prefixes the environment when not on live", () => {
			expect(getDomainBaseUrl("beta")).toBe(
				"https://beta-accounts.nice.org.uk/"
			);
		});
	});

	describe("checkIsLoggedIn", () => {
		it("Doesn't call NICE Accounts until the AWS WAF token is ready", async () => {
			let tokenReady;

			whenAwsWafTokenReady.mockImplementationOnce(
				() => new Promise((resolve) => (tokenReady = resolve))
			);

			checkIsLoggedIn("live");
			await flushPromises();

			expect(findTopHatScript()).toBeNull();

			tokenReady();
			await flushPromises();

			expect(findTopHatScript()).not.toBeNull();
		});

		it("Calls tophat on the given environment's NICE Accounts", async () => {
			checkIsLoggedIn("test");
			await flushPromises();

			expect(findTopHatScript().src).toMatch(
				/^https:\/\/test-accounts\.nice\.org\.uk\/tophat\?\d+$/
			);
		});

		it("Resolves with the data from NICE Accounts and removes the script", async () => {
			const accountsData = { display_name: "Joe Bloggs" },
				isLoggedIn = checkIsLoggedIn("live");

			await flushPromises();

			window._na = accountsData;
			findTopHatScript().onload();

			await expect(isLoggedIn).resolves.toBe(accountsData);
			expect(findTopHatScript()).toBeNull();
		});

		it("Rejects when NICE Accounts can't be loaded", async () => {
			const isLoggedIn = checkIsLoggedIn("live"),
				error = new Event("error");

			await flushPromises();

			findTopHatScript().onerror(error);

			await expect(isLoggedIn).rejects.toBe(error);
		});
	});
});
