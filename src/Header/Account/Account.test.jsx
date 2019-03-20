import React from "react";
import Account from "./Account";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { checkIsLoggedIn } from "./nice-accounts";

const escapeKeyCode = 27;

jest.mock("./nice-accounts", () => ({
	checkIsLoggedIn: jest.fn(() =>
		Promise.resolve({
			test: true
		})
	)
}));

describe("Account", () => {
	const accountsData = {
		display_name: "Joe Bloggs",
		links: {
			"Joe Bloggs": "https://accounts.nice.org.uk/users/12345/editprofile",
			"Sign out": "https://accounts.nice.org.uk/signout"
		}
	};

	it("Renders without crashing", () => {
		const wrapper = shallow(<Account isLoggedIn={false} />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot when logged out", () => {
		const wrapper = shallow(<Account isLoggedIn={false} />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Matches snapshot when logged in", () => {
		const wrapper = shallow(
			<Account isLoggedIn={true} accountsData={accountsData} />
		);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Calls onLoginStatusChecked callback prop when mounted", done => {
		const onLoginStatusChecked = jest.fn();

		shallow(
			<Account isLoggedIn={false} onLoginStatusChecked={onLoginStatusChecked} />
		);

		setImmediate(() => {
			expect(onLoginStatusChecked).toHaveBeenCalledWith({ test: true });
			done();
		});
	});

	it("Expands account menu when button is clicked", () => {
		const wrapper = mount(
			<Account isLoggedIn={true} accountsData={accountsData} />
		);

		wrapper.find("#my-account-button").simulate("click", { pageX: 99 });

		wrapper.instance().forceUpdate();

		expect(wrapper.find("#my-account-button").props()["aria-expanded"]).toBe(
			true
		);
		var menu = wrapper.find("#my-account");
		expect(menu.props()["aria-hidden"]).toBe(false);
		expect(menu.props()["tabIndex"]).toBe(undefined);
	});

	it("Moved focus to menu when enter key is pressed on collapsed button", () => {
		const wrapper = mount(
			<Account isLoggedIn={true} accountsData={accountsData} />
		);

		wrapper.find("#my-account-button").simulate("click");
		wrapper.update();

		var menuElement = wrapper.find("#my-account").getDOMNode();
		expect(menuElement.getAttribute("tabIndex")).toEqual("-1");
		expect(menuElement).toBe(document.activeElement);
	});

	it("Collapses menu when escape key is pressed on button", () => {
		const wrapper = mount(
			<Account isLoggedIn={true} accountsData={accountsData} />
		);

		wrapper.find("#my-account-button").simulate("click", {});
		wrapper
			.find("#my-account-button")
			.simulate("keydown", { keyCode: escapeKeyCode });

		wrapper.instance().forceUpdate();

		expect(wrapper.find("#my-account-button").props()["aria-expanded"]).toBe(
			false
		);
		expect(wrapper.find("#my-account").props()["aria-hidden"]).toBe(true);
	});

	it("Collapses menu when escape key is pressed on link", () => {
		const wrapper = mount(
			<Account isLoggedIn={true} accountsData={accountsData} />
		);

		wrapper.find("#my-account-button").simulate("click", {});

		wrapper
			.find("a[role='menuitem']")
			.first()
			.simulate("keydown", { keyCode: escapeKeyCode });

		expect(
			wrapper.find("[aria-controls='my-account']").props()["aria-expanded"]
		).toBe(false);
		expect(wrapper.find("#my-account").props()["aria-hidden"]).toBe(true);
	});
});
