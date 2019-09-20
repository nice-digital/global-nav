import React from "react";
import OldIEMessage from "./OldIEMessage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("OldIEMessage", () => {
	it("Renders without crashing", () => {
		const wrapper = shallow(<OldIEMessage />);
		expect(wrapper).toHaveLength(1);
	});

	it("Doesn't render in IE11", () => {
		const wrapper = shallow(<OldIEMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => 11);
		wrapper.instance().forceUpdate();

		expect(wrapper.get(0)).toBeNull();
	});

	it("Doesn't render in modern browsers", () => {
		const wrapper = shallow(<OldIEMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => null);
		wrapper.instance().forceUpdate();

		expect(wrapper.get(0)).toBeNull();
	});

	it("Matches snapshot in IE 10", () => {
		const wrapper = shallow(<OldIEMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => 10);
		wrapper.instance().forceUpdate();

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Matches snapshot in IE 8/9", () => {
		const wrapper = shallow(<OldIEMessage />);

		wrapper.instance().getIEVersion = jest.fn(() => 9);
		wrapper.instance().forceUpdate();

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
