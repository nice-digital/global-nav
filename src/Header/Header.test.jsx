import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Header", () => {
	const defaultProps = {
		service: null,
		enabled: null
	};

	it("Renders without crashing", () => {
		const wrapper = shallow(<Header {...defaultProps} />);
		expect(wrapper).toHaveLength(1);
	});

	describe("Mobile menu button", () => {
		it("Mobile menu button is collapsed by default", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			expect(wrapper.find("button").props()["aria-expanded"]).toEqual(false);
			expect(wrapper.find("button").text()).toEqual("Menu");
		});
		it("Mobile menu button toggles text and aria-expanded on click", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			wrapper.find("button").simulate("click");
			expect(wrapper.find("button").props()["aria-expanded"]).toEqual(true);
			expect(wrapper.find("button").text()).toEqual("Close");
		});
		it("Mobile menu button toggles nav on click", () => {
			const wrapper = shallow(<Header {...defaultProps} />);

			wrapper.find("button").simulate("click");
			expect(wrapper.find("Nav").props().isExpanded).toEqual(true);

			wrapper.find("button").simulate("click");
			expect(wrapper.find("Nav").props().isExpanded).toEqual(false);
		});
	});

	describe("Search", () => {
		it("Renders search by default", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			expect(wrapper.find("Search").length).toEqual(1);
		});

		it("Doesn't render search if search is disabled", () => {
			const wrapper = shallow(<Header {...defaultProps} search={false} />);
			expect(wrapper.find("Search").length).toEqual(0);
		});

		it("Passes search props down to search component", () => {
			const searchOptions = {
				url: "/test",
				placeholder: "Test placeholder",
				query: ""
			};
			const wrapper = shallow(
				<Header {...defaultProps} search={searchOptions} />
			);
			expect(wrapper.find("Search").props()).toEqual(searchOptions);
		});
	});

	describe("Nav", () => {
		it("Nav is collapsed by default", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			expect(wrapper.find("Nav").props().isExpanded).toEqual(false);
		});
	});
});
