import React from "react";
import Account from "./Account";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import {
	eventName,
	defaultEventCategory,
	headerClickEventAction,
	eventTimeout
} from "../../tracker";

const escapeKeyCode = 27;

jest.mock("./nice-accounts", () => ({
	checkIsLoggedIn: jest.fn(() =>
		Promise.resolve({
			links: {
				test: true
			},
			test: true
		})
	),
	getDomainBaseUrl: jest.requireActual("./nice-accounts.js").getDomainBaseUrl
}));

const idamProps = {
	provider: "idam",
	links: [{ text: "sign in", url: "/signin" }]
};

describe("Account", () => {
	const accountsData = {
		display_name: "Joe Bloggs",
		links: {
			"Joe Bloggs": "https://accounts.nice.org.uk/users/12345/editprofile",
			"Sign out": "https://accounts.nice.org.uk/signout"
		}
	};

	afterEach(() => {
		document.body.innerHTML = "";
	});

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

	it("Matches snapshot when logged out using IDAM", () => {
		const wrapper = shallow(<Account isLoggedIn={false} {...idamProps} />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Matches snapshot when logged in  using IDAM", () => {
		const wrapper = shallow(
			<Account isLoggedIn={true} accountsData={accountsData} {...idamProps} />
		);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Is the correct authentication environment when supplied", () => {
		const wrapper = shallow(<Account isLoggedIn={false} environment="beta" />);
		expect(wrapper.find(".button").props().href).toBe(
			"https://beta-accounts.nice.org.uk/signin"
		);
	});

	it("Calls onLoginStatusChecked callback prop when mounted", done => {
		const onLoginStatusChecked = jest.fn();

		shallow(
			<Account isLoggedIn={false} onLoginStatusChecked={onLoginStatusChecked} />
		);

		setImmediate(() => {
			expect(onLoginStatusChecked).toHaveBeenCalledWith({
				links: {
					"Consultation responses": "https://www.nice.org.uk/consultations/",
					test: true
				},
				test: true
			});
			done();
		});
	});

	it("Expands account menu when button is clicked", () => {
		var appContainer = document.createElement("div");
		document.body.appendChild(appContainer);

		const wrapper = mount(
			<Account isLoggedIn={true} accountsData={accountsData} />,
			{ attachTo: appContainer }
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
		var appContainer = document.createElement("div");
		document.body.appendChild(appContainer);

		const wrapper = mount(
			<Account isLoggedIn={true} accountsData={accountsData} />,
			{ attachTo: appContainer }
		);

		wrapper.find("#my-account-button").simulate("click");
		wrapper.update();

		var menuElement = wrapper.find("#my-account").getDOMNode();
		expect(menuElement.getAttribute("tabIndex")).toEqual("-1");
		expect(menuElement).toBe(document.activeElement);
	});

	it("Collapses menu when escape key is pressed on button", () => {
		var appContainer = document.createElement("div");
		document.body.appendChild(appContainer);

		const wrapper = mount(
			<Account isLoggedIn={true} accountsData={accountsData} />,
			{ attachTo: appContainer }
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
		var appContainer = document.createElement("div");
		document.body.appendChild(appContainer);

		const wrapper = mount(
			<Account isLoggedIn={true} accountsData={accountsData} />,
			{ attachTo: appContainer }
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

	describe("tracking", () => {
		beforeEach(() => {
			window.dataLayer = [];
		});

		afterAll(() => {
			// Cleanup
			delete window.dataLayer;
		});

		const trackingTest = (accountsData, linkText, eventLabel, href) => {
			const wrapper = shallow(
				<Account
					isLoggedIn={accountsData != null}
					accountsData={accountsData}
				/>
			);

			const preventDefault = jest.fn();

			wrapper.find(`a[children="${linkText}"]`).simulate("click", {
				preventDefault: preventDefault,
				currentTarget: {
					getAttribute: () => href
				}
			});

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: defaultEventCategory,
					eventAction: headerClickEventAction,
					eventLabel: eventLabel,
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout
				}
			]);

			expect(preventDefault).toHaveBeenCalled();

			window.dataLayer[0].eventCallback();
			expect(window.location.href).toEqual(href);
		};

		it("should not send dataLayer event or prevent default for admin link click", () => {
			const wrapper = shallow(
				<Account
					isLoggedIn={true}
					accountsData={{
						display_name: "Joe Bloggs",
						links: {
							Admin: "https://accounts.nice.org.uk/admin"
						}
					}}
				/>
			);

			const preventDefault = jest.fn();

			wrapper.find(`a[children="Admin"]`).simulate("click", {
				preventDefault: preventDefault,
				currentTarget: {
					getAttribute: () => "https://accounts.nice.org.uk/admin"
				}
			});

			expect(preventDefault).not.toHaveBeenCalled();

			expect(window.dataLayer).toHaveLength(0);
		});

		it("should send event to the dataLayer with navigating event callback for sign in button click", () => {
			trackingTest(
				null,
				"Sign in",
				"Sign in",
				"https://beta-accounts.nice.org.uk/signin"
			);
		});

		it("should send event to the dataLayer with navigating event callback for edit profile link click", () => {
			trackingTest(
				accountsData,
				"Joe Bloggs",
				"Edit profile",
				"https://accounts.nice.org.uk/users/12345/editprofile"
			);
		});

		it("should send event to the dataLayer with navigating event callback for sign out link click", () => {
			trackingTest(
				accountsData,
				"Sign out",
				"Sign out",
				"https://beta-accounts.nice.org.uk/signout"
			);
		});
	});
});
