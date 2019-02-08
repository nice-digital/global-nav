import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Header", () => {
	const defaultProps = {
		service: null,
		enabled: null
	};

	it("Renders without crashing", () => {
		const wrapper = shallow(<Header {...defaultProps} />);
		expect(wrapper).toHaveLength(1);
	});
});
