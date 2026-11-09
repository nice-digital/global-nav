import { act } from "react-dom/test-utils";
import {
	headerId,
	footerId,
	loadAwsWaf,
	renderHeader,
	renderFooter,
} from "./renderer";
import { scriptId } from "./aws-waf";

jest.mock("./services.json", () =>
	require("./Header/Nav/__mocks__/services.json")
);

describe("renderer", () => {
	let headerContainer, footerContainer;

	beforeEach(() => {
		window.global_nav_config = null;

		// Create some dummy body copy so we can test creating the header above/footer below
		const bodyContent = document.createElement("div");
		bodyContent.innerText = "Test";
		document.body.appendChild(bodyContent);

		// Create a header div placeholder
		headerContainer = document.getElementById(headerId);
		headerContainer &&
			headerContainer.parentElement.removeChild(headerContainer);
		headerContainer = document.createElement("div");
		headerContainer.setAttribute("id", headerId);
		document.body.insertBefore(headerContainer, document.body.firstChild);

		// And a footer div placeholder
		footerContainer = document.getElementById(footerId);
		footerContainer &&
			footerContainer.parentElement.removeChild(footerContainer);
		footerContainer = document.createElement("div");
		footerContainer.setAttribute("id", footerId);
		document.body.appendChild(footerContainer);
	});

	afterEach(() => {
		document.body.innerHTML = "";

		delete window.global_nav_config;
	});

	describe("AWS WAF challenge", () => {
		const awsWafScriptURL = "https://localhost:4000/mock-aws-waf-jsapi.js";

		afterEach(() => {
			document.head.innerHTML = "";
		});

		it("Doesn't load the AWS WAF script for a hostname with no web ACL", () => {
			expect(loadAwsWaf()).toBe(false);
			expect(document.getElementById(scriptId)).toBeNull();
		});

		it("Loads the AWS WAF script from config with header and footer disabled", () => {
			window.global_nav_config = {
				awsWafScriptURL,
				header: false,
				footer: false,
			};

			expect(loadAwsWaf()).toBe(true);
			expect(document.getElementById(scriptId)).toHaveAttribute(
				"src",
				awsWafScriptURL
			);
		});

		it("Doesn't load the AWS WAF script when disabled in config", () => {
			window.global_nav_config = {
				awsWafScriptURL: false,
			};

			expect(loadAwsWaf()).toBe(false);

			act(() => {
				renderHeader();
				renderFooter();
			});

			expect(document.getElementById(scriptId)).toBeNull();
		});
	});

	describe("Header", () => {
		it("Creates header root div if it doesn't exist", () => {
			headerContainer.parentElement.removeChild(headerContainer);

			act(() => {
				renderHeader();
			});

			expect(document.getElementById(headerId)).not.toBeNull();
		});

		it("Renders header into existing header container div", () => {
			expect(headerContainer.textContent).toEqual("");

			act(() => {
				renderHeader();
			});

			expect(headerContainer.textContent.length).toBeGreaterThan(0);
		});

		it("Doesn't render header if header is disabled", () => {
			window.global_nav_config = {
				service: "test-service",
				header: false,
			};

			act(() => {
				renderHeader();
			});

			expect(headerContainer).toHaveTextContent("");
		});

		describe("Render callbacks", () => {
			it("Calls onRendering callback from function reference", () => {
				const onRendering = jest.fn();

				window.global_nav_config = {
					header: {
						onRendering: onRendering,
					},
				};

				act(() => {
					renderHeader();
				});

				expect(onRendering).toHaveBeenCalledWith(headerContainer);
			});

			it("Calls onRendering callback from function name", () => {
				const onRendering = jest.fn();

				window.headerRenderingCallback = onRendering;
				window.global_nav_config = {
					header: {
						onRendering: "headerRenderingCallback",
					},
				};

				act(() => {
					renderHeader();
				});

				expect(onRendering).toHaveBeenCalledWith(headerContainer);

				delete window.headerRenderingCallback;
			});

			it("Calls onRendered callback from function reference", () => {
				const onRendered = jest.fn();

				window.global_nav_config = {
					header: {
						onRendered,
					},
				};

				act(() => {
					renderHeader();
				});

				expect(onRendered).toHaveBeenCalledWith(headerContainer);
			});

			it("Calls onRendered callback from function name", () => {
				const onRendered = jest.fn();

				window.headerRenderedCallback = onRendered;
				window.global_nav_config = {
					header: {
						onRendered: "headerRenderedCallback",
					},
				};

				act(() => {
					renderHeader();
				});

				expect(onRendered).toHaveBeenCalledWith(headerContainer);

				delete window.headerRenderedCallback;
			});
		});
	});

	describe("Footer", () => {
		it("Creates footer root div if it doesn't exist", () => {
			footerContainer.parentElement.removeChild(footerContainer);

			act(() => {
				renderFooter();
			});

			expect(document.getElementById(footerId)).not.toBeNull();
		});

		it("Doesn't render footer if footer is disabled", () => {
			window.global_nav_config = {
				footer: false,
			};

			expect(footerContainer.textContent).toEqual("");

			act(() => {
				renderFooter();
			});

			expect(headerContainer).toHaveTextContent("");
		});

		it("Renders footer into existing footer container div", () => {
			expect(footerContainer.textContent).toEqual("");

			act(() => {
				renderFooter();
			});

			expect(footerContainer.textContent.length).toBeGreaterThan(0);
		});
	});
});
