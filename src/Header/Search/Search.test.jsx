import React from "react";
import Search from "./Search";
import { shallow, mount } from "enzyme";

describe("Search", () => {
	const defaultProps = {};
	let appContainer;

	beforeEach(() => {
		appContainer = document.createElement("div");
		document.body.appendChild(appContainer);
	});

	afterEach(() => {
		document.body.removeChild(appContainer);
	});

	describe("Rendering", () => {
		it("Matches snapshot", () => {
			const { container } = render(
				<Search {...defaultProps} query="test" skipLinkId="content-start" />
			);
			expect(container).toMatchSnapshot();
		});

		it("Renders SVG search icon", () => {
			const { container } = render(<Search {...defaultProps} />);
			expect(wrapper.find("SvgSearch").length).toEqual(1);
			expect(wrapper.find("SvgSearch").props()).toEqual({ className: "icon" });
		});
	});

	describe("Autocomplete", () => {
		it("Passes props to autocomplete component", () => {
			const { container } = render(
				<Search
					{...defaultProps}
					autocomplete="variableName"
					placeholder="Test placeholder"
					query="diabetes"
				/>
			);
			expect(wrapper.find("Autocomplete").props()).toEqual({
				source: "variableName",
				placeholder: "Test placeholder",
				query: "diabetes",
			});
		});

		it("Passes suggestions and template from object to autocomplete component", () => {
			const suggestionTemplate = jest.fn();
			const { container } = render(
				<Search
					{...defaultProps}
					autocomplete={{ suggestions: "variableName", suggestionTemplate }}
					placeholder="Test placeholder"
					query="diabetes"
				/>
			);
			expect(wrapper.find("Autocomplete").props()).toEqual({
				source: "variableName",
				suggestionTemplate,
				placeholder: "Test placeholder",
				query: "diabetes",
			});
		});
	});

	describe("onSearching", () => {
		describe("Form submit and button click", () => {
			const div = document.createElement("div");

			beforeEach(() => {
				// Avoid `attachTo: document.body` Warning
				div.setAttribute("id", "container");
				document.body.appendChild(div);
			});

			afterEach(() => {
				const div = document.getElementById("container");
				if (div) {
					document.body.removeChild(div);
				}
			});

			it("should call the onSearching prop when the form is submitted", () => {
				const onSearching = jest.fn();
				const wrapper = mount(
					<Search {...defaultProps} onSearching={onSearching} />,
					{ attachTo: div }
				);

				wrapper.find("form").simulate("submit", { preventDefault: () => {} });

				expect(onSearching).toHaveBeenCalled();
				expect(onSearching).toHaveBeenCalledTimes(1);
			});

			it("should call onSearching prop when the button is clicked", () => {
				const onSearching = jest.fn();
				const { container } = render(
					<Search {...defaultProps} onSearching={onSearching} />
				);

				wrapper
					.find("button")
					.at(0)
					.simulate("click", { preventDefault: () => {} });

				expect(onSearching).toHaveBeenCalled();
				expect(onSearching).toHaveBeenCalledTimes(1);
			});
		});

		it("should prevent default and call callback with the search query for a onSearching function", () => {
			const onSearching = jest.fn();
			const wrapper = mount(
				<Search {...defaultProps} query="test" onSearching={onSearching} />,
				{ attachTo: appContainer }
			);

			const preventDefault = jest.fn();

			wrapper
				.find("form")
				.at(0)
				.simulate("submit", { preventDefault: preventDefault });

			expect(preventDefault).toHaveBeenCalled();
			expect(onSearching).toHaveBeenCalledWith({ query: "test" });
		});

		it("should prevent default and call callback for a named onSearching global function", () => {
			const onSearching = jest.fn();
			window.onSearchingHandler = onSearching;

			const wrapper = mount(
				<Search
					{...defaultProps}
					query="test"
					onSearching="onSearchingHandler"
				/>,
				{ attachTo: appContainer }
			);

			const preventDefault = jest.fn();

			wrapper
				.find("form")
				.at(0)
				.simulate("submit", { preventDefault: preventDefault });

			expect(preventDefault).toHaveBeenCalled();
			expect(onSearching).toHaveBeenCalledWith({ query: "test" });
		});

		it("should not prevent default with no onSearching prop", () => {
			const { container } = render(<Search {...defaultProps} />);

			const preventDefault = jest.fn();

			wrapper
				.find("form")
				.at(0)
				.simulate("submit", { preventDefault: preventDefault });

			expect(preventDefault).not.toHaveBeenCalled();
		});

		it("should not prevent default with missing onSearching global function prop", () => {
			const { container } = render(
				<Search {...defaultProps} onSearching="blahblah" />
			);

			const preventDefault = jest.fn();

			wrapper
				.find("form")
				.at(0)
				.simulate("submit", { preventDefault: preventDefault });

			expect(preventDefault).not.toHaveBeenCalled();
		});
	});

	describe("enter key", () => {
		it("should call onSearching callback prop if the enter key is pressed", () => {
			const onSearching = jest.fn();
			const wrapper = mount(
				<Search {...defaultProps} onSearching={onSearching} />,
				{
					attachTo: appContainer,
				}
			);

			wrapper.find("#autocomplete").at(0).simulate("keyDown", { key: "Enter" });

			expect(onSearching).toHaveBeenCalledTimes(1);
		});

		it("should submit form if the enter key is pressed with no onSearching prop", () => {
			const wrapper = mount(<Search {...defaultProps} />, {
				attachTo: appContainer,
			});

			const formSubmit = jest.fn();
			wrapper.find("form").instance().submit = formSubmit;

			wrapper.find("#autocomplete").at(0).simulate("keyDown", { key: "Enter" });

			expect(formSubmit).toHaveBeenCalledTimes(1);
		});
	});
});
