import React from "react";
import SubNav from "./SubNav";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("SubNav", () => {
	const links = [
		{
			text: "Home",
			href: "/"
		},
		{
			text: "Drugs",
			href: "/drug/"
		},
		{
			text: "Interactions",
			href: "/interaction/"
		}
	];

	it("Renders without crashing", () => {
		const wrapper = shallow(<SubNav text="BNF" links={links} />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<SubNav text="BNF" links={links} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Adds aria-current=page attribute to link when matches current URL", () => {
		window.location.pathname = links[1].href;
		const wrapper = shallow(<SubNav text="BNF" links={links} />);

		expect(
			wrapper
				.find("a")
				.at(0)
				.props()["aria-current"]
		).toEqual("page");
	});

	it("Adds aria-current=true attribute to link when partially matches current URL", () => {
		window.location.pathname = links[1].href + "abacavir.html";
		const wrapper = shallow(<SubNav text="BNF" links={links} />);

		expect(
			wrapper
				.find("a")
				.at(0)
				.props()["aria-current"]
		).toEqual(true);
	});
});
