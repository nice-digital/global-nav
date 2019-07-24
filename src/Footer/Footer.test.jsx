import React from "react";

import Footer from "./Footer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Legal", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot with no SVG support", () => {
		const wrapper = shallow(<Footer service="cks" />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Matches snapshot with SVG support", () => {
		window.SVGRect = "anything";
		const wrapper = shallow(<Footer service="cks" />);
		expect(toJson(wrapper)).toMatchSnapshot();
		delete window.SVGRect;
	});
});
