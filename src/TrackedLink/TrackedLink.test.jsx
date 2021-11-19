import React from "react";
import TrackedLink from "./TrackedLink";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { eventName, defaultEventCategory, eventTimeout } from "../tracker";

describe("TrackedLink", () => {
	beforeEach(() => {
		window.dataLayer = [];
	});

	afterAll(() => {
		// Cleanup
		delete window.dataLayer;
	});

	it("Renders without crashing", () => {
		const wrapper = shallow(
			<TrackedLink href="#" eventAction="Click">
				test
			</TrackedLink>
		);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot", () => {
		const wrapper = shallow(
			<TrackedLink href="/a-url" eventAction="Action" className="className">
				Some text
			</TrackedLink>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	// it("should send event to the dataLayer with navigating event callback on link click", () => {
	// 	const href = "https://www.nice.org.uk/a-url",
	// 		eventCategory = "Test action",
	// 		eventAction = "Test action",
	// 		eventLabel = "Test label";

	// 	const wrapper = shallow(
	// 		<TrackedLink
	// 			href={href}
	// 			eventCategory={eventCategory}
	// 			eventAction={eventAction}
	// 			eventLabel={eventLabel}
	// 		>
	// 			Some text
	// 		</TrackedLink>
	// 	);

	// 	const preventDefault = jest.fn();

	// 	wrapper.simulate("click", {
	// 		preventDefault: preventDefault,
	// 		currentTarget: {
	// 			getAttribute: () => href,
	// 		},
	// 	});

	// 	expect(window.dataLayer).toEqual([
	// 		{
	// 			event: eventName,
	// 			eventCategory: eventCategory,
	// 			eventAction: eventAction,
	// 			eventLabel: eventLabel,
	// 			destinationUrl: href,
	// 			eventCallback: expect.any(Function),
	// 			eventTimeout: eventTimeout,
	// 		},
	// 	]);

	// 	expect(preventDefault).toHaveBeenCalled();

	// 	window.dataLayer[0].eventCallback();
	// 	expect(window.location.href).toEqual(href);
	// });

	// it("should use default event category when none provided", () => {
	// 	const eventAction = "Test action",
	// 		eventLabel = "Some text";

	// 	const wrapper = shallow(
	// 		<TrackedLink
	// 			href="/anything"
	// 			eventAction={eventAction}
	// 			eventLabel={eventLabel}
	// 		>
	// 			Some text
	// 		</TrackedLink>
	// 	);

	// 	const preventDefault = jest.fn();

	// 	wrapper.simulate("click", {
	// 		preventDefault: preventDefault,
	// 		currentTarget: {
	// 			getAttribute: () => "",
	// 		},
	// 	});

	// 	expect(window.dataLayer).toEqual([
	// 		{
	// 			event: eventName,
	// 			eventCategory: defaultEventCategory,
	// 			eventAction: eventAction,
	// 			eventLabel: eventLabel,
	// 			eventCallback: expect.any(Function),
	// 			eventTimeout: eventTimeout,
	// 		},
	// 	]);
	// });

	// it("should use link textContent property for event label when none provided", () => {
	// 	const eventAction = "Test action",
	// 		eventLabel = "Some text";

	// 	const wrapper = shallow(
	// 		<TrackedLink href="/anything" eventAction={eventAction}>
	// 			Some other text
	// 		</TrackedLink>
	// 	);

	// 	const preventDefault = jest.fn();

	// 	wrapper.simulate("click", {
	// 		preventDefault: preventDefault,
	// 		currentTarget: {
	// 			getAttribute: () => "",
	// 			textContent: eventLabel,
	// 		},
	// 	});

	// 	expect(window.dataLayer).toEqual([
	// 		{
	// 			event: eventName,
	// 			eventCategory: defaultEventCategory,
	// 			eventAction: eventAction,
	// 			eventLabel: eventLabel,
	// 			eventCallback: expect.any(Function),
	// 			eventTimeout: eventTimeout,
	// 		},
	// 	]);
	// });
});
