import React from "react";

import Pages from "./Pages";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Pages", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<Pages />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<Pages />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Uses overridden feedback URL as href for site with custom feedback URL", () => {
		const wrapper = shallow(<Pages service="cks" />);
		expect(
			wrapper.find("TrackedLink[children='Leave feedback']").prop("href")
		).toEqual("https://www.nice.org.uk/cks-feedback");
	});
});
