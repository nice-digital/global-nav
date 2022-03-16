import React from "react";

import Services from "./Services";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

jest.mock("./../../services.json", () => require("./__mocks__/services.json"));

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

	it("should render link(s) if footer boolean is set to true", () => {
		const wrapper = shallow(<Services service="cks" />);

		expect(wrapper.exists({ text: "Nested link one" })).toBeTruthy();
		expect(wrapper.exists({ text: "Second link" })).toBeFalsy();
	});
});
