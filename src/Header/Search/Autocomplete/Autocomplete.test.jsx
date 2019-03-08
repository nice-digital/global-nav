import React from "react";
import AccessibleAutocomplete from "accessible-autocomplete/react";

import Autocomplete from "./Autocomplete";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const IE8UserAgent =
	"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)";

describe("Autocomplete", () => {
	const defaultProps = {};

	describe("Rendering", () => {
		it("Renders without crashing", () => {
			const wrapper = shallow(<Autocomplete {...defaultProps} />);
			expect(wrapper).toHaveLength(1);
		});
	});

	describe("Autocomplete", () => {
		it("should render autocomplete component", () => {
			const wrapper = shallow(<Autocomplete {...defaultProps} source="/url" />);
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it("should render query into defaultValue attribute on autocomplete component", () => {
			const wrapper = shallow(
				<Autocomplete {...defaultProps} source="/url" query="diabetes" />
			);
			expect(wrapper.find(AccessibleAutocomplete).props().defaultValue).toEqual(
				"diabetes"
			);
		});
	});

	describe("Non-autocomplete", () => {
		it("should render fallback search box when no source", () => {
			const wrapper = shallow(
				<Autocomplete {...defaultProps} source={false} query="diabetes" />
			);
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it("should render fallback search box in IE8", () => {
			const oldNavigator = global.navigator;
			navigator.userAgent = IE8UserAgent;

			const wrapper = shallow(
				<Autocomplete
					{...defaultProps}
					source="/a-valid-source"
					query="diabetes"
				/>
			);
			expect(toJson(wrapper)).toMatchSnapshot();

			navigator.userAgent = oldNavigator;
		});
	});
});
