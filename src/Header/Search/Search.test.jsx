import React from "react";
import Search from "./Search";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("Search", () => {
	const defaultProps = {};

	describe("Rendering", () => {
		it("Renders without crashing", () => {
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(wrapper).toHaveLength(1);
		});

		it("Matches snapshot", () => {
			const wrapper = shallow(<Search {...defaultProps} query="test" />);
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it("Renders SVG search icon when in an SVG-compatible browser", () => {
			window.SVGRect = {};
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(wrapper.find("SvgSearch").length).toEqual(1);
			expect(wrapper.find("SvgSearch").props()).toEqual({ className: "icon" });
			window.SVGRect = undefined;
		});

		it("Renders fallback unicode search button text when in an non SVG-compatible browser", () => {
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(wrapper.find("button").text()).toEqual("search");
		});
	});

	describe("Autocomplete", () => {
		it("Passes props to autocomplete component", () => {
			const wrapper = shallow(
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
				query: "diabetes"
			});
		});
	});

	describe("onSearching", () => {
		it("should call searchSubmitHandler when the form is submitted", () => {
			const handleSubmit = jest.spyOn(Search.prototype, "searchSubmitHandler");
			const wrapper = shallow(<Search {...defaultProps} />);

			wrapper
				.find("form")
				.at(0)
				.simulate("submit");

			expect(handleSubmit).toHaveBeenCalledTimes(1);
		});

		it("should prevent default and call callback with the search query for a onSearching function", () => {
			var appContainer = document.createElement("div");
			document.body.appendChild(appContainer);

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
			var appContainer = document.createElement("div");
			document.body.appendChild(appContainer);

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
			const wrapper = shallow(<Search {...defaultProps} />);

			const preventDefault = jest.fn();

			wrapper
				.find("form")
				.at(0)
				.simulate("submit", { preventDefault: preventDefault });

			expect(preventDefault).not.toHaveBeenCalled();
		});

		it("should not prevent default with missing onSearching global function prop", () => {
			const wrapper = shallow(
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
});
