import React from "react";
import Nav from "./Nav";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

jest.mock("./links.json", () => require("./__mocks__/links.json"));

describe("Nav", () => {
	const defaultProps = {
		isExpanded: false,
		accountsData: null,
		service: null
	};

	it("Renders without crashing", () => {
		const wrapper = shallow(<Nav {...defaultProps} />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot with no accounts links", () => {
		const wrapper = shallow(<Nav {...defaultProps} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Matches snapshot with accounts links", () => {
		const accountsLinks = {
			"Joe Bloggs": "https://accounts.nice.org.uk/profile",
			"Sign out": "https://accounts.nice.org.uk/signout"
		};
		const wrapper = shallow(
			<Nav {...defaultProps} accountsLinks={accountsLinks} />
		);
		expect(toJson(wrapper.find("ul"))).toMatchSnapshot();
	});

	it("Adds aria current atrribute for selected service", () => {
		const wrapper = shallow(<Nav {...defaultProps} service="link2" />);
		expect(
			wrapper
				.find("a")
				.at(1)
				.props()["aria-current"]
		).toEqual(true);
	});

	it("Adds lastAccountsMenuItem css class to the last Accounts menu item", () => {
		const accountsLinks = {
			"Joe Bloggs": "https://accounts.nice.org.uk/profile",
			"Sign out": "https://accounts.nice.org.uk/signout"
		};
		const wrapper = shallow(
			<Nav {...defaultProps} accountsLinks={accountsLinks} />
		);
		expect(
			wrapper
				.find("li")
				.at(1)
				.props().className
		).toContain("lastAccountsMenuItem");
	});

	it("Add expanded class to nav when passed isExpanded prop", () => {
		const wrapper = shallow(<Nav {...defaultProps} isExpanded={false} />);
		expect(wrapper.props().className).not.toContain("navExpanded");
		wrapper.setProps({ isExpanded: true });
		expect(wrapper.props().className).toContain("navExpanded");
	});
});
