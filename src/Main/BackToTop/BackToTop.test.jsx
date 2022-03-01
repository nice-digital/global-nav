import React from "react";

import { BackToTop } from "./BackToTop";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("BackToTop", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<BackToTop />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<BackToTop />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Renders a link with the default hash when no scroll target id prop provided", () => {
		const wrapper = shallow(<BackToTop />);
		expect(wrapper.find("a[href='#top']").length).toEqual(1);
	});
});
