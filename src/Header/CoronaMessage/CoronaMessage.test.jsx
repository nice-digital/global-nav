import React from "react";
import Cookies from "js-cookie";
import toJson from "enzyme-to-json";
import CoronaMessage, {
	CookieMessageVersion,
	CookieName
} from "./CoronaMessage";
import { shallow } from "enzyme";

describe("CoronaMessage", () => {
	const oldCookie = document.cookie;

	beforeEach(() => {
		// Reset overridden cookie property
		document.cookie = oldCookie;
		Cookies.set(CookieName, null);
	});

	it("Renders without crashing", () => {
		const wrapper = shallow(<CoronaMessage />);

		expect(wrapper).toHaveLength(1);
	});

	it("Doesn't render by default/on the server", () => {
		const wrapper = shallow(<CoronaMessage />, {
			disableLifecycleMethods: true
		});

		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it("Renders after rehydration on the client", () => {
		const wrapper = shallow(<CoronaMessage />);

		wrapper.update();

		expect(wrapper.isEmptyRender()).toBe(false);
	});

	it("Matches snapshot for new visitor", () => {
		const wrapper = shallow(<CoronaMessage />);

		wrapper.update();

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Hides cookie message when seen correct message version", () => {
		Cookies.set(CookieName, CookieMessageVersion);

		const wrapper = shallow(<CoronaMessage />);

		wrapper.update();

		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it("Triggers click handler on close button click", () => {
		const handleClick = jest.spyOn(CoronaMessage.prototype, "handleClick");
		const wrapper = shallow(<CoronaMessage />);

		wrapper.update();

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("Hides message on close button click", () => {
		const wrapper = shallow(<CoronaMessage />);

		wrapper.update();

		wrapper
			.find("button")
			.at(0)
			.simulate("click");

		expect(wrapper.isEmptyRender()).toBe(true);
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

		const wrapper = shallow(<CoronaMessage />);

		wrapper.update();

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
