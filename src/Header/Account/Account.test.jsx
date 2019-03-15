import React from "react";
import Account from "./Account";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { checkIsLoggedIn } from "./nice-accounts";

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

		//checkIsLoggedIn = jest.fn(() => Promise.resolve());

		const wrapper = shallow(
			<Account isLoggedIn={false} onLoginStatusChecked={onLoginStatusChecked} />
		);

		setImmediate(() => {
			expect(onLoginStatusChecked).toHaveBeenCalledWith({ test: true });
			done();
		});
	});

	it("Expands account menu when button is clicked", () => {
		const wrapper = shallow(
			<Account isLoggedIn={true} accountsData={accountsData} />
		);

		wrapper.find("[aria-controls='my-account']").simulate("click");

		expect(
			wrapper.find("[aria-controls='my-account']").props()["aria-expanded"]
		).toBe(true);
		expect(wrapper.find("#my-account").props()["aria-hidden"]).toBe(false);
	});
});
