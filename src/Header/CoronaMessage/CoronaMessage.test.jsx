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

	it("Renders after rehydration on the client", () => {
		const wrapper = shallow(<CoronaMessage />);

		wrapper.update();

		expect(wrapper.isEmptyRender()).toBe(false);
	});
});
