import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import {
	eventName,
	defaultEventCategory,
	headerClickEventAction,
	eventTimeout
} from "./../tracker";

describe("Header", () => {
	const defaultProps = {
		service: null,
		enabled: null
	};

	beforeEach(() => {
		window.dataLayer = [];
	});

	afterAll(() => {
		// Cleanup
		delete window.dataLayer;
	});

	it("Renders without crashing", () => {
		const wrapper = shallow(<Header {...defaultProps} />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(
			<Header {...defaultProps} onNavigating="onNavigatingHandler" />
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	describe("Mobile menu button", () => {
		it("Mobile menu button is collapsed by default", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			expect(wrapper.find("button").props()["aria-expanded"]).toEqual(false);
			expect(wrapper.find("button").text()).toEqual("Menu");
		});
		it("Mobile menu button toggles text and aria-expanded on click", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			wrapper.find("button").simulate("click");
			expect(wrapper.find("button").props()["aria-expanded"]).toEqual(true);
			expect(wrapper.find("button").text()).toEqual("Close");
		});
		it("Mobile menu button toggles nav on click", () => {
			const wrapper = shallow(<Header {...defaultProps} />);

			wrapper.find("button").simulate("click");
			expect(wrapper.find("Nav").props().isExpanded).toEqual(true);

			wrapper.find("button").simulate("click");
			expect(wrapper.find("Nav").props().isExpanded).toEqual(false);
		});

		it("should track mobile menu button click", () => {
			const wrapper = shallow(<Header {...defaultProps} />);

			wrapper.find("button").simulate("click");

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: defaultEventCategory,
					eventAction: headerClickEventAction,
					eventLabel: "Menu"
				}
			]);
		});
	});

	describe("Cookie banner", () => {
		it("Renders cookie banner by default", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			expect(wrapper.find("CookieBanner").length).toEqual(1);
		});

		it("Doesn't render cookie banner if cookie banner is disabled", () => {
			const wrapper = shallow(<Header {...defaultProps} cookie={false} />);
			expect(wrapper.find("CookieBanner").length).toEqual(0);
		});
	});

	describe("Search", () => {
		it("Renders search by default", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			expect(wrapper.find("Search").length).toEqual(1);
		});

		it("Doesn't render search if search is disabled", () => {
			const wrapper = shallow(<Header {...defaultProps} search={false} />);
			expect(wrapper.find("Search").length).toEqual(0);
		});

		it("Passes search props down to search component", () => {
			const searchOptions = {
				url: "/test",
				placeholder: "Test placeholder",
				query: ""
			};
			const wrapper = shallow(
				<Header {...defaultProps} search={searchOptions} />
			);
			expect(wrapper.find("Search").props()).toEqual(searchOptions);
		});
	});

	describe("Nav", () => {
		it("Nav is collapsed by default", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			expect(wrapper.find("Nav").props().isExpanded).toEqual(false);
		});
	});

	describe("Skip link target", () => {
		it("Doesn't render skip link target when it already exists on the page", () => {
			const contentDiv = document.createElement("div");
			contentDiv.id = "content-start";
			document.body.append(contentDiv);

			const wrapper = shallow(<Header {...defaultProps} />);
			expect(wrapper.find("#content-start").length).toEqual(0);

			contentDiv.parentNode.removeChild(contentDiv);
		});

		it("Render skip link target when it doesn't already exist on the page", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			expect(wrapper.find("#content-start").length).toEqual(1);
		});

		it("Render skip link target with custom skip link id", () => {
			const wrapper = shallow(
				<Header {...defaultProps} skipLinkId="test-skip-link" />
			);
			expect(wrapper.find("#test-skip-link").length).toEqual(1);
		});
	});

	describe("Logo tracking", () => {
		it("should track logo click and prevent default", () => {
			const wrapper = shallow(<Header {...defaultProps} />);

			wrapper.find("a[className='home']").simulate("click", {
				preventDefault: () => {},
				currentTarget: {
					// Mock e.currentTarget.getAttribute("href")
					getAttribute: () => ""
				}
			});

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: defaultEventCategory,
					eventAction: headerClickEventAction,
					eventLabel: "Logo",
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout
				}
			]);
		});

		it("should prevent default and navigate in event callback on logo click", () => {
			const wrapper = shallow(<Header {...defaultProps} />);

			const preventDefault = jest.fn();

			wrapper.find("a[className='home']").simulate("click", {
				preventDefault: preventDefault,
				currentTarget: {
					// Mock e.currentTarget.getAttribute("href")
					getAttribute: () => "http://test-url/"
				}
			});

			expect(preventDefault).toHaveBeenCalled();

			window.dataLayer[0].eventCallback();
			expect(window.location.href).toEqual("http://test-url/");
		});
	});
});
