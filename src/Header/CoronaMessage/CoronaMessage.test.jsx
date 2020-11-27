import React from "react";
import toJson from "enzyme-to-json";
import CoronaMessage from "./CoronaMessage";
import { shallow } from "enzyme";

describe("CoronaMessage", () => {
	it("Renders correctly", () => {
		const wrapper = shallow(<CoronaMessage />, {
			disableLifecycleMethods: true,
		});

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Renders without crashing", () => {
		const wrapper = shallow(<CoronaMessage />);

		expect(wrapper).toHaveLength(1);
	});

	it("Renders after rehydration on the client", () => {
		const wrapper = shallow(<CoronaMessage />);

		wrapper.update();

		expect(wrapper.isEmptyRender()).toBe(false);
	});
});
