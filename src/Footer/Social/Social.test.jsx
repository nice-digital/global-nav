import React from "react";

import Social from "./Social";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Social", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<Social />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<Social />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
