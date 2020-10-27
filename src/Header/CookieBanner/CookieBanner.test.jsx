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

	it("Doesn't render by default/on the server", () => {
		const wrapper = shallow(<CookieBanner />, {
			disableLifecycleMethods: true
		});

		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it("Renders after rehydration on the client", () => {
		const wrapper = shallow(<CookieBanner />);

		wrapper.update();

		expect(wrapper.isEmptyRender()).toBe(false);
	});

	it("Matches snapshot for new visitor", () => {
		const wrapper = shallow(<CookieBanner />);

		wrapper.update();

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Matches snapshot for old cookie value", () => {
		Cookies.set(CookieName, "yes");

		const wrapper = shallow(<CookieBanner />);

		wrapper.update();

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Hides cookie message when seen correct message version", () => {
		Cookies.set(CookieName, CookieMessageVersion);

		const wrapper = shallow(<CookieBanner />);

		wrapper.update();

		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it("Matches snapshot when seen old message version", () => {
		Cookies.set(CookieName, CookieMessageVersion - 1);

		const wrapper = shallow(<CookieBanner />);

		wrapper.update();

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Triggers click handler on close button click", () => {
		const handleClick = jest.spyOn(CookieBanner.prototype, "handleClick");
		const wrapper = shallow(<CookieBanner />);

		wrapper.update();

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("Hides banner on close button click", () => {
		const wrapper = shallow(<CookieBanner />);

		wrapper.update();

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

		wrapper.update();

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		expect(cookieSet).toHaveBeenCalledTimes(2);

		const date = new Date();
		date.setUTCDate(date.getUTCDate() + 365);

		expect(cookieSet.mock.calls[1][0]).toEqual(
			`${CookieName}=${CookieMessageVersion}; path=/; expires=${date.toUTCString()}; domain=nice.org.uk`
		);

		const pastDate = new Date();
		pastDate.setUTCDate(pastDate.getUTCDate() - 1);

		expect(cookieSet.mock.calls[0][0]).toEqual(
			`${CookieName}=; path=/; expires=${pastDate.toUTCString()}`
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

		wrapper.update();

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		const date = new Date();
		date.setUTCDate(date.getUTCDate() + 365);

		expect(cookieSet.mock.calls[1][0]).toEqual(
			`${CookieName}=${CookieMessageVersion}; path=/; expires=${date.toUTCString()}; domain=www.evidence.nhs.uk`
		);

		// Tidy up
		global.window.location = oldLocation;
	});

	it("Calls resize handler function when cookie banner is closed", () => {
		const onResize = jest.fn();
		const wrapper = shallow(<CookieBanner onResize={onResize} />);

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		expect(onResize).toHaveBeenCalled();
	});

	it("Calls named global resize handler function when cookie banner is closed", () => {
		const onResize = jest.fn();
		window.onResizeHandler = onResize;

		const wrapper = shallow(<CookieBanner onResize="onResizeHandler" />);

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		expect(onResize).toHaveBeenCalled();
	});
});
