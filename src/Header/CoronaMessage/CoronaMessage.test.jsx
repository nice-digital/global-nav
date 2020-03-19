import React from "react";
import CoronaMessage from "./CoronaMessage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("CoronaMessage", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<CoronaMessage />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<CoronaMessage />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
