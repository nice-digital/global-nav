import { waitFor } from "@testing-library/react";
import { headerId, footerId, renderHeader, renderFooter } from "./renderer";

jest.mock("./services.json", () =>
	require("./Header/Nav/__fixtures__/services.json")
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

	describe("Header", () => {
		it("Creates header root div if it doesn't exist", async () => {
			headerContainer.parentElement.removeChild(headerContainer);

			await waitFor(() => {
				renderHeader();
			});

			expect(document.getElementById(headerId)).not.toBeNull();
		});

		it("Renders header into existing header container div", async () => {
			expect(headerContainer.textContent).toEqual("");

			await waitFor(() => {
				renderHeader();
			});

			await waitFor(() => {
				expect(headerContainer.textContent.length).toBeGreaterThan(0);
			});
		});

		it("Doesn't render header if header is disabled", async () => {
			window.global_nav_config = {
				service: "test-service",
				header: false,
			};

			await waitFor(() => {
				renderHeader();
			});

			expect(headerContainer).toHaveTextContent("");
		});

		describe("Render callbacks", () => {
			it("Calls onRendering callback from function reference", async () => {
				const onRendering = jest.fn();

				window.global_nav_config = {
					header: {
						onRendering: onRendering,
					},
				};

				await waitFor(() => {
					renderHeader();
				});

				expect(onRendering).toHaveBeenCalledWith(headerContainer);
			});

			it("Calls onRendering callback from function name", async () => {
				const onRendering = jest.fn();

				window.headerRenderingCallback = onRendering;
				window.global_nav_config = {
					header: {
						onRendering: "headerRenderingCallback",
					},
				};

				await waitFor(() => {
					renderHeader();
				});

				expect(onRendering).toHaveBeenCalledWith(headerContainer);

				delete window.headerRenderingCallback;
			});

			it("Calls onRendered callback from function reference", async () => {
				const onRendered = jest.fn();

				window.global_nav_config = {
					header: {
						onRendered,
					},
				};

				await waitFor(() => {
					renderHeader();
				});

				await waitFor(() => {
					expect(onRendered).toHaveBeenCalledWith(headerContainer);
				});
			});

			it("Calls onRendered callback from function name", async () => {
				const onRendered = jest.fn();

				window.headerRenderedCallback = onRendered;
				window.global_nav_config = {
					header: {
						onRendered: "headerRenderedCallback",
					},
				};

				await waitFor(() => {
					renderHeader();
				});

				await waitFor(() => {
					expect(onRendered).toHaveBeenCalledWith(headerContainer);
				});

				delete window.headerRenderedCallback;
			});
		});
	});

	describe("Footer", () => {
		it("Creates footer root div if it doesn't exist", async () => {
			footerContainer.parentElement.removeChild(footerContainer);

			await waitFor(() => {
				renderFooter();
			});

			expect(document.getElementById(footerId)).not.toBeNull();
		});

		it("Doesn't render footer if footer is disabled", async () => {
			window.global_nav_config = {
				footer: false,
			};

			expect(footerContainer.textContent).toEqual("");

			await waitFor(() => {
				renderFooter();
			});

			expect(headerContainer).toHaveTextContent("");
		});

		it("Renders footer into existing footer container div", async () => {
			expect(footerContainer.textContent).toEqual("");

			await waitFor(() => {
				renderFooter();
			});

			await waitFor(() => {
				expect(footerContainer.textContent.length).toBeGreaterThan(0);
			});
		});
	});
});
