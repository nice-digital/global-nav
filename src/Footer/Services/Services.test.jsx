import React from "react";

import Services from "./Services";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Services", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<Services />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<Services service="pathways" />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Does not render the link to about", () => {
		const wrapper = shallow(<Services service="pathways" />);
		const list = wrapper.find("ul").children();
		const aboutElementText = list.find({ text: "About" });

		expect(aboutElementText).toHaveLength(0);
	});
});
