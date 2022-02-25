import React from "react";

import { BackToTop } from "./BackToTop";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("BackToTop", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<BackToTop />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<BackToTop service="bnf" />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Renders a link with the default hash when no scroll target id prop provided", () => {
		const wrapper = shallow(<BackToTop service="bnf" />);
		expect(wrapper.find("a[href='#top']").length).toEqual(1);
	});

	it("Renders a link with the correct hash when a scroll target id prop provided and target exists", () => {
		let scrollTargetDiv = document.createElement("div");
		scrollTargetDiv.id = "content-start";
		document.body.appendChild(scrollTargetDiv);
		const wrapper = shallow(
			<BackToTop service="bnf" scrollTargetId="content-start" />
		);
		expect(wrapper.find("a[href='#content-start']").length).toEqual(1);
	});
});
