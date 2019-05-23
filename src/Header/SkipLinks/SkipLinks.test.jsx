import React from "react";
import SkipLinks from "./SkipLinks";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("SkipLinks", () => {
	const skipLinkId = "test-id";
	let contentDiv;

	beforeEach(() => {
		// Create the skip target
		contentDiv = document.createElement("div");
		contentDiv.id = skipLinkId;
		document.body.append(contentDiv);

		// Fake window.scrollTo because it isn't implemented in jsdom AND we want to spy on it
		window.scrollTo = jest.fn();
	});

	afterEach(() => {
		Object.defineProperties(window.HTMLElement.prototype, {
			offsetTop: {
				get: () => 0
			}
		});

		contentDiv.parentNode.removeChild(contentDiv);
	});

	it("Renders without crashing", () => {
		const wrapper = shallow(<SkipLinks skipLinkId="test" />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<SkipLinks skipLinkId="test" />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Renders skip link id href from prop", () => {
		const wrapper = shallow(<SkipLinks skipLinkId="test" />);
		expect(
			wrapper
				.find("a")
				.at(0)
				.props().href
		).toEqual("#test");
	});

	it("Triggers click handler on skip to content click", () => {
		const handleClick = jest.spyOn(SkipLinks.prototype, "handleClick");
		const wrapper = shallow(<SkipLinks skipLinkId="test" />);

		wrapper
			.find("a")
			.at(0)
			.simulate("click", {
				currentTarget: {
					getAttribute: () => "#" + skipLinkId
				},
				preventDefault: () => {}
			});

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("Prevents default and moves focus to the skip link target on click", () => {
		const wrapper = shallow(<SkipLinks skipLinkId="test" />);

		const preventDefault = jest.fn();

		wrapper.instance().getYOffset = jest.fn(() => 99);

		wrapper
			.find("a")
			.at(0)
			.simulate("click", {
				currentTarget: {
					getAttribute: () => "#" + skipLinkId
				},
				preventDefault: preventDefault
			});

		expect(preventDefault).toHaveBeenCalledTimes(1);
		expect(contentDiv.getAttribute("tabIndex")).toEqual("-1");
		expect(document.activeElement).toBe(contentDiv);
		expect(window.scrollTo).toHaveBeenCalledWith(0, 99);
	});

	describe("getYOffset", () => {
		it("should get offset top relative to window", () => {
			const wrapper = shallow(<SkipLinks skipLinkId="test" />);

			var element = {
				offsetLeft: 0,
				offsetTop: 99,
				scrollTop: 9,
				offsetParent: {
					offsetLeft: 0,
					offsetTop: 98,
					scrollTop: 8
				}
			};

			expect(wrapper.instance().getYOffset(element)).toBe(180);
		});
	});
});
