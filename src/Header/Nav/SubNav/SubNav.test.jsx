import React from "react";
import SubNav from "./SubNav";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import {
	eventName,
	defaultEventCategory,
	headerClickEventAction,
	eventTimeout,
} from "../../../tracker";

describe("SubNav", () => {
	const links = [
		{
			text: "Home",
			href: "/",
		},
		{
			text: "Drugs",
			href: "/drugs/",
		},
		{
			text: "Interactions",
			href: "/interactions/",
		},
	];

	it("Renders without crashing", () => {
		const wrapper = shallow(<SubNav text="BNF" links={links} />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(<SubNav text="BNF" links={links} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Adds aria-current=page attribute to link when matches current URL", () => {
		window.location.pathname = links[1].href;
		const wrapper = shallow(<SubNav text="BNF" links={links} />);

		expect(wrapper.find("a").at(1).props()["aria-current"]).toEqual("page");
	});

	it("Adds aria-current=true attribute to link when partially matches current URL", () => {
		window.location.pathname = links[1].href + "abacavir.html";
		const wrapper = shallow(<SubNav text="BNF" links={links} />);

		expect(wrapper.find("a").at(0).props()["aria-current"]).toEqual(true);
	});

	describe("Tracking", () => {
		beforeEach(() => {
			window.dataLayer = [];
		});

		afterAll(() => {
			// Cleanup
			delete window.dataLayer;
		});

		// it("should call onNavigating on click", () => {
		// 	const wrapper = shallow(<SubNav text="BNF" links={links} />);

		// 	const handleClick = jest.spyOn(wrapper.instance(), "handleClick");

		// 	wrapper.instance().forceUpdate();

		// 	wrapper
		// 		.find("a")
		// 		.at(0)
		// 		.simulate("click", {
		// 			preventDefault: () => {},
		// 			currentTarget: {
		// 				getAttribute: () => "",
		// 			},
		// 		});

		// 	expect(handleClick).toHaveBeenCalled();
		// });

		it("should prevent default on click", () => {
			const wrapper = shallow(<SubNav text="BNF" links={links} />);

			const preventDefault = jest.fn();

			wrapper
				.find("a")
				.at(0)
				.simulate("click", {
					preventDefault: preventDefault,
					currentTarget: {
						getAttribute: () => "",
					},
				});

			expect(preventDefault).toHaveBeenCalled();
		});

		it("should send event to dataLayer on click ", () => {
			const wrapper = shallow(<SubNav text="BNF" links={links} />);

			const eventLabel = links[0].text;

			wrapper
				.find("a")
				.at(0)
				.simulate("click", {
					preventDefault: () => {},
					currentTarget: {
						innerText: eventLabel,
						getAttribute: () => "",
					},
				});

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: defaultEventCategory,
					eventAction: headerClickEventAction,
					eventLabel: eventLabel,
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout,
				},
			]);
		});

		it("should navigate in callback on click with no onNavigating prop", () => {
			const wrapper = shallow(<SubNav text="BNF" links={links} />);

			const href = "https://sub-nav-test.nice.org.uk/" + links[0].href;

			wrapper
				.find("a")
				.at(0)
				.simulate("click", {
					preventDefault: () => {},
					currentTarget: {
						innerText: "",
						getAttribute: () => href,
					},
				});

			// window.dataLayer[0].eventCallback();
			expect(window.location.href).toEqual(href);
		});

		it("should navigate in event callback on click with onNavigating prop that doesn't exist", () => {
			const wrapper = shallow(
				<SubNav text="BNF" links={links} onNavigating="blah" />
			);

			const href = "https://sub-nav-test.nice.org.uk/" + links[0].href;

			wrapper
				.find("a")
				.at(0)
				.simulate("click", {
					preventDefault: () => {},
					currentTarget: {
						innerText: "",
						getAttribute: () => href,
					},
				});

			// window.dataLayer[0].eventCallback();
			expect(window.location.href).toEqual(href);
		});

		it("should call onNavigating function prop in event callback on click", () => {
			const onNavigating = jest.fn();

			const wrapper = shallow(
				<SubNav text="BNF" links={links} onNavigating={onNavigating} />
			);

			const href = "/test-href";

			const currentTarget = {
				innerText: "",
				getAttribute: () => href,
			};

			wrapper
				.find("a")
				.at(0)
				.simulate("click", {
					preventDefault: () => {},
					currentTarget: currentTarget,
				});

			// window.dataLayer[0].eventCallback();
			expect(onNavigating).toHaveBeenCalledWith({
				element: currentTarget,
				href: href,
			});
		});

		it("should call onNavigating string function name prop in event callback on click", () => {
			const onNavigating = jest.fn();

			window.onNavigatingHandler = onNavigating;

			const wrapper = shallow(
				<SubNav text="BNF" links={links} onNavigating="onNavigatingHandler" />
			);

			const href = "/test-href";

			const currentTarget = {
				innerText: "",
				getAttribute: () => href,
			};

			wrapper
				.find("a")
				.at(0)
				.simulate("click", {
					preventDefault: () => {},
					currentTarget: currentTarget,
				});

			// window.dataLayer[0].eventCallback();
			expect(onNavigating).toHaveBeenCalledWith({
				element: currentTarget,
				href: href,
			});
		});
	});
});
