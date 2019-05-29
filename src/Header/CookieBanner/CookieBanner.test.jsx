import React from "react";
import Cookies from "js-cookie";
import CookieBanner, { CookieMessageVersion, CookieName } from "./CookieBanner";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("CookieBanner", () => {
	const oldCookie = document.cookie;

	beforeEach(() => {
		// Reset overridden cookie property
		document.cookie = oldCookie;
		Cookies.set(CookieName, null);
	});

	it("Renders without crashing", () => {
		const wrapper = shallow(<CookieBanner />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot for new visitor", () => {
		const wrapper = shallow(<CookieBanner />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Matches snapshot for old cookie value", () => {
		Cookies.set(CookieName, "yes");

		const wrapper = shallow(<CookieBanner />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Hides cookie message when seen correct message version", () => {
		Cookies.set(CookieName, CookieMessageVersion);

		const wrapper = shallow(<CookieBanner />);

		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it("Matches snapshot when seen old message version", () => {
		Cookies.set(CookieName, CookieMessageVersion - 1);

		const wrapper = shallow(<CookieBanner />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Triggers click handler on close button click", () => {
		const handleClick = jest.spyOn(CookieBanner.prototype, "handleClick");
		const wrapper = shallow(<CookieBanner />);

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("Hides banner on close button click", () => {
		const wrapper = shallow(<CookieBanner />);

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it("Stores cookie for 365 days on niceorg domain on button click", () => {
		const cookieSet = jest.fn();

		Object.defineProperty(document, "cookie", {
			get: jest.fn().mockImplementation(() => null),
			set: cookieSet,
			configurable: true
		});

		const wrapper = shallow(<CookieBanner />);

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		expect(cookieSet).toHaveBeenCalledTimes(2);

		const date = new Date();
		date.setDate(date.getDate() + 365);

		expect(cookieSet.mock.calls[1][0]).toEqual(
			`${CookieName}=${CookieMessageVersion}; path=/; expires=${date.toUTCString()}; domain=nice.org.uk`
		);
	});

	it("Stores cookie on evidence domain on button click", () => {
		const oldLocation = global.window.location;
		delete global.window.location;
		global.window.location = new URL("https://www.evidence.nhs.uk/");

		const cookieSet = jest.fn();

		Object.defineProperty(document, "cookie", {
			get: jest.fn().mockImplementation(() => null),
			set: cookieSet,
			configurable: true
		});

		const wrapper = shallow(<CookieBanner />);

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		const date = new Date();
		date.setDate(date.getDate() + 365);

		expect(cookieSet.mock.calls[1][0]).toEqual(
			`${CookieName}=${CookieMessageVersion}; path=/; expires=${date.toUTCString()}; domain=www.evidence.nhs.uk`
		);

		// Tidy up
		global.window.location = oldLocation;
	});
});
