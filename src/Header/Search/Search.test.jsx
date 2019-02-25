import React from "react";
import Search from "./Search";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Search", () => {
	const defaultProps = {};

	describe("Rendering", () => {
		it("Renders without crashing", () => {
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(wrapper).toHaveLength(1);
		});

		it("Matches snapshot", () => {
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it("Renders SVG search icon when in an SVG-compatible browser", () => {
			window.SVGRect = {};
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(wrapper.find("SvgSearch").length).toEqual(1);
			window.SVGRect = undefined;
		});

		it("Renders fallback unicode search icon when in an non SVG-compatible browser", () => {
			const wrapper = shallow(<Search {...defaultProps} />);
			expect(wrapper.find("button").text()).toEqual("⌕");
		});
	});

	describe("Autocomplete", () => {
		it("Passes props to autocomplete component", () => {
			const wrapper = shallow(
				<Search
					{...defaultProps}
					autocomplete="variableName"
					placeholder="Test placeholder"
				/>
			);
			expect(wrapper.find("Autocomplete").props()).toEqual({
				source: "variableName",
				placeholder: "Test placeholder"
			});
		});
	});
});
