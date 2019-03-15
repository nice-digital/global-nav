import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { headerId, renderHeader } from "./renderer";

describe("renderer", () => {
	describe("Header", () => {
		let headerContainer;
		let reactDOMRenderMock;

		beforeEach(() => {
			reactDOMRenderMock = jest.spyOn(ReactDOM, "render");

			window.global_nav_config = null;

			headerContainer = document.getElementById(headerId);
			headerContainer &&
				headerContainer.parentElement.removeChild(headerContainer);
			headerContainer = document.createElement("div");
			headerContainer.setAttribute("id", headerId);
			document.body.insertBefore(headerContainer, document.body.firstChild);
		});

		afterEach(() => {
			reactDOMRenderMock.mockClear();
		});

		it("Creates header root div if it doesn't exist", () => {
			headerContainer.parentElement.removeChild(headerContainer);

			renderHeader();

			expect(document.getElementById(headerId)).not.toBeNull();
		});

		it("Adds global nav id attribute to created container div", () => {
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
			it("Calls ReactDOM.render once", () => {
				const reactDOMRenderMock = jest.spyOn(ReactDOM, "render");
				renderHeader();
				expect(reactDOMRenderMock).toHaveBeenCalledTimes(1);
			});

			it("Calls ReactDOM.render with header component with correct props", () => {
				window.global_nav_config = {
					service: "test-service",
					header: {
						test: true
					}
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
						onRendering: onRendering
					}
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
						onRendering: "headerRenderingCallback"
					}
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
						onRendered: onRendered
					}
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
						onRendered: "headerRenderedCallback"
					}
				};

				renderHeader();
				expect(onRendered).toHaveBeenCalledWith(
					document.getElementById(headerId)
				);

				delete window.headerRenderedCallback;
			});
		});
	});
});
