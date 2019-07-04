import React from "react";
import MockDate from "mockdate";

import Legal from "./Legal";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Legal", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<Legal />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		MockDate.set("2000-11-22");
		const wrapper = shallow(<Legal />);
		expect(toJson(wrapper)).toMatchSnapshot();
		MockDate.reset();
	});
});
