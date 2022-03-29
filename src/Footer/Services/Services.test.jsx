import React from "react";

import Services from "./Services";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import services from "./__mocks__/services.json";

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

	it("should render link(s) if footer boolean is set to true", () => {
		const wrapper = shallow(<Services service="cks" />);

		expect(wrapper.find({ footer: true }).length).toEqual(
			services.external.filter((service) => service.footer === true).length
		);
	});
});
