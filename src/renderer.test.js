import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import { headerId, footerId, renderHeader, renderFooter } from "./renderer";

jest.mock("./services.json", () =>
	require("./Header/Nav/__mocks__/services.json")
);

describe("renderer", () => {
	let headerContainer, footerContainer, reactDOMRenderMock;

	beforeEach(() => {
		reactDOMRenderMock = jest.spyOn(ReactDOM, "render");

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
		reactDOMRenderMock.mockClear();
	});

	describe("Header", () => {
		it("Creates header root div if it doesn't exist", () => {
			headerContainer.parentElement.removeChild(headerContainer);

			renderHeader();

			expect(document.getElementById(headerId)).not.toBeNull();
		});

		it("Renders header into existing header container div", () => {
			expect(headerContainer.textContent).toEqual("");

			renderHeader();

			expect(headerContainer.textContent.length).toBeGreaterThan(0);
		});

		describe("react-dom rendering", () => {
			it("Doesn't call ReactDOM.render if header is disabled", () => {
				window.global_nav_config = {
					service: "test-service",
					header: false,
				};
				const reactDOMRenderMock = jest.spyOn(ReactDOM, "render");
				renderHeader();
				expect(reactDOMRenderMock).not.toHaveBeenCalled();
			});
			it("Calls ReactDOM.render once", () => {
				const reactDOMRenderMock = jest.spyOn(ReactDOM, "render");
				renderHeader();
				expect(reactDOMRenderMock).toHaveBeenCalledTimes(1);
			});

			it("Calls ReactDOM.render with header component with correct props", () => {
				window.global_nav_config = {
					service: "test-service",
					header: {
						test: true,
					},
				};

				renderHeader();
				expect(reactDOMRenderMock.mock.calls[0][0]).toEqual(
					<Header service="test-service" {...{ test: true }} />
				);
			});

			it("Calls ReactDOM.render with container div", () => {
				renderHeader();
				expect(reactDOMRenderMock.mock.calls[0][1]).toEqual(
					document.getElementById(headerId)
				);
			});
		});

		describe("Render callbacks", () => {
			it("Calls onRendering callback from function reference", () => {
				const onRendering = jest.fn();

				window.global_nav_config = {
					header: {
						onRendering: onRendering,
					},
				};

				renderHeader();
				expect(onRendering).toHaveBeenCalledWith(
					document.getElementById(headerId)
				);
			});

			it("Calls onRendering callback from function name", () => {
				const onRendering = jest.fn();

				window.headerRenderingCallback = onRendering;
				window.global_nav_config = {
					header: {
						onRendering: "headerRenderingCallback",
					},
				};

				renderHeader();
				expect(onRendering).toHaveBeenCalledWith(
					document.getElementById(headerId)
				);

				delete window.headerRenderingCallback;
			});

			it("Calls onRendered callback from function reference", () => {
				const onRendered = jest.fn();

				window.global_nav_config = {
					header: {
						onRendered: onRendered,
					},
				};

				renderHeader();
				expect(onRendered).toHaveBeenCalledWith(
					document.getElementById(headerId)
				);
			});

			it("Calls onRendered callback from function name", () => {
				const onRendered = jest.fn();

				window.headerRenderedCallback = onRendered;
				window.global_nav_config = {
					header: {
						onRendered: "headerRenderedCallback",
					},
				};

				renderHeader();
				expect(onRendered).toHaveBeenCalledWith(
					document.getElementById(headerId)
				);

				delete window.headerRenderedCallback;
			});
		});
	});

	describe("Footer", () => {
		it("Creates footer root div if it doesn't exist", () => {
			footerContainer.parentElement.removeChild(footerContainer);

			renderFooter();

			expect(document.getElementById(footerId)).not.toBeNull();
		});

		it("Renders footer into existing header container div", () => {
			expect(footerContainer.textContent).toEqual("");

			renderFooter();

			expect(footerContainer.textContent.length).toBeGreaterThan(0);
		});

		describe("react-dom rendering", () => {
			it("Doesn't call ReactDOM.render if footer is disabled", () => {
				window.global_nav_config = {
					service: "test-service",
					footer: false,
				};
				const reactDOMRenderMock = jest.spyOn(ReactDOM, "render");
				renderFooter();
				expect(reactDOMRenderMock).not.toHaveBeenCalled();
			});

			it("Calls ReactDOM.render once", () => {
				const reactDOMRenderMock = jest.spyOn(ReactDOM, "render");
				renderFooter();
				expect(reactDOMRenderMock).toHaveBeenCalledTimes(1);
			});

			it("Calls ReactDOM.render with footer component with correct props", () => {
				window.global_nav_config = {
					service: "test-service",
					footer: {
						test: true,
					},
				};

				renderFooter();
				expect(reactDOMRenderMock.mock.calls[0][0]).toEqual(
					<Footer service="test-service" {...{ test: true }} />
				);
			});

			it("Calls ReactDOM.render with container div", () => {
				renderFooter();
				expect(reactDOMRenderMock.mock.calls[0][1]).toEqual(
					document.getElementById(footerId)
				);
			});
		});
	});
});
