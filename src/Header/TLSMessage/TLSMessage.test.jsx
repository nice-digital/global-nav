import React from "react";
import TLSMessage from "./TLSMessage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("TLSMessage", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<TLSMessage />);
		expect(wrapper).toHaveLength(1);
	});

	it("Doesn't render in IE11", () => {
		const wrapper = shallow(<TLSMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => 11);
		wrapper.instance().forceUpdate();

		expect(wrapper.get(0)).toBeNull();
	});

	it("Doesn't render in modern browsers", () => {
		const wrapper = shallow(<TLSMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => null);
		wrapper.instance().forceUpdate();

		expect(wrapper.get(0)).toBeNull();
	});

	it("Matches snapshot in old IE", () => {
		const wrapper = shallow(<TLSMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => 8);
		wrapper.instance().forceUpdate();

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
