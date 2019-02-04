import React from "react";
import Nav from "./Nav";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Nav", () => {
	const defaultProps = {
		isLoggedIn: false
	};

	it("Renders without crashing", () => {
		const wrapper = shallow(<Nav {...defaultProps} />);
		expect(wrapper).toHaveLength(1);
	});
	it("Matches snapshot", () => {
		const wrapper = shallow(<Nav {...defaultProps} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
