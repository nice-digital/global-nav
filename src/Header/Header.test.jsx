import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import {
	eventName,
	defaultEventCategory,
	headerClickEventAction,
	eventTimeout,
} from "./../tracker";

describe("Header", () => {
	const defaultProps = {
		service: null,
		enabled: null,
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
					eventLabel: "Menu",
				},
			]);
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
				query: "",
				skipLinkId: "content-start",
			};
			const wrapper = shallow(
				<Header
					{...defaultProps}
					search={searchOptions}
					skipLinkId="content-start"
				/>
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

	describe("Back to top link target", () => {
		it("should contain a back to top scroll target id", () => {
			const wrapper = shallow(<Header {...defaultProps} />);
			const scrollTargetId = wrapper.find("#top");
			expect(scrollTargetId).toHaveLength(1);
		});
	});

	describe("Skip link target", () => {
		it(`If skip link doesn't exist, create a link to the first <h1> in the document`, () => {
			const heading1 = document.createElement("h1");
			document.body.append(heading1);
			shallow(<Header {...defaultProps} />);
			expect(document.querySelector("h1#content-start")).toBeTruthy();
			heading1.parentNode.removeChild(heading1);
		});

		it("Renders a skip link which targets the custom skipLinkId property", () => {
			const heading1 = document.createElement("h1");
			document.body.append(heading1);
			shallow(<Header {...defaultProps} skipLinkId="super-skip-link" />);
			expect(document.querySelector("h1#super-skip-link")).toBeTruthy();
			heading1.parentNode.removeChild(heading1);
		});
	});

	describe("Dropdown open and close callbacks", () => {
		it("should call onDropdownOpen function name callback prop if dropdown is opened", () => {
			window.testFunc = jest.fn();

			const wrapper = mount(
				<Header {...defaultProps} onDropdownOpen={"testFunc"} />
			);

			wrapper.find("#navlink-bnfc").at(0).simulate("click");
			expect(window.testFunc).toHaveBeenCalledTimes(1);
		});

		it("should call onDropdownClose function name callback prop if dropdown is opened", () => {
			window.testFunc = jest.fn();

			const wrapper = mount(
				<Header {...defaultProps} onDropdownClose={"testFunc"} />
			);

			wrapper.find("#navlink-bnfc").at(0).simulate("click");
			wrapper.find("#navlink-bnfc").at(0).simulate("click");
			expect(window.testFunc).toHaveBeenCalledTimes(2);
		});

		it("should call onDropdownOpen callback prop if dropdown is opened", () => {
			const onDropdownOpen = jest.fn();
			const wrapper = mount(
				<Header {...defaultProps} onDropdownOpen={onDropdownOpen} />
			);

			wrapper.find("#navlink-bnfc").at(0).simulate("click");
			expect(onDropdownOpen).toHaveBeenCalledTimes(1);
		});

		it("should call onDropdownClose callback prop if dropdown is closed", () => {
			const onDropdownClose = jest.fn();
			const wrapper = mount(
				<Header {...defaultProps} onDropdownClose={onDropdownClose} />
			);
			wrapper.find("#navlink-bnfc").at(0).simulate("click");
			wrapper.find("#navlink-bnfc").at(0).simulate("click");
			expect(onDropdownClose).toHaveBeenCalledTimes(2);
		});
	});

	describe("Logo tracking", () => {
		it("should track logo click and prevent default", () => {
			const wrapper = shallow(<Header {...defaultProps} />);

			wrapper.find("a[className='home']").simulate("click", {
				preventDefault: () => {},
				currentTarget: {
					// Mock e.currentTarget.getAttribute("href")
					getAttribute: () => "",
				},
			});

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: defaultEventCategory,
					eventAction: headerClickEventAction,
					eventLabel: "Logo",
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout,
				},
			]);
		});

		it("should prevent default and navigate in event callback on logo click", () => {
			const wrapper = shallow(<Header {...defaultProps} />);

			const preventDefault = jest.fn();

			wrapper.find("a[className='home']").simulate("click", {
				preventDefault: preventDefault,
				currentTarget: {
					// Mock e.currentTarget.getAttribute("href")
					getAttribute: () => "http://test-url/",
				},
			});

			expect(preventDefault).toHaveBeenCalled();

			window.dataLayer[0].eventCallback();
			expect(window.location.href).toEqual("http://test-url/");
		});
	});

	describe("Sign in button", () => {
		it("Should not render sign in button if false is supplied to auth prop", () => {
			const wrapper = shallow(<Header {...defaultProps} auth={false} />);
			expect(wrapper.find("Account").length).toEqual(0);
		});
	});
});
