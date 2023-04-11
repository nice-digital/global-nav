import React from "react";
import TrackedLink from "./TrackedLink";
import { render } from "@testing-library/react";

import { eventName, defaultEventCategory } from "../tracker";

describe("TrackedLink", () => {
	beforeEach(() => {
		window.dataLayer = [];
	});

	afterAll(() => {
		// Cleanup
		delete window.dataLayer;
	});

	it("Matches snapshot", () => {
		const { container } = render(
			<TrackedLink href="/a-url" eventAction="Action" className="className">
				Some text
			</TrackedLink>
		);
		expect(container).toMatchSnapshot();
	});

	it("should send event to the dataLayer with navigating event callback on link click", () => {
		const href = "https://www.nice.org.uk/a-url",
			eventName = "GlobalNav",
			eventAction = "Test action",
			eventLabel = "Test label";

		const { container } = render(
			<TrackedLink
				eventAction={eventAction}
				eventLabel={eventLabel}
				href={href}
			>
				Some text
			</TrackedLink>
		);

		const preventDefault = jest.fn();

		const link = wrapper.find("a");

		link.props().onClick({
			preventDefault: preventDefault,
			currentTarget: {
				getAttribute: () => href,
			},
		});

		expect(window.dataLayer).toStrictEqual([
			{
				event: eventName,
				eventCategory: defaultEventCategory,
				eventAction: eventAction,
				eventLabel: eventLabel,
				destinationUrl: href,
			},
		]);

		expect(preventDefault).toHaveBeenCalled();
		expect(window.location.href).toEqual(href);
	});

	it("should use default event category when none provided", () => {
		const href = "https://www.nice.org.uk/a-url",
			eventAction = "Test action",
			eventLabel = "Some text";

		const { container } = render(
			<TrackedLink
				href="/anything"
				eventAction={eventAction}
				eventLabel={eventLabel}
			>
				Some text
			</TrackedLink>
		);

		const preventDefault = jest.fn();

		wrapper.props().onClick({
			preventDefault: preventDefault,
			currentTarget: {
				getAttribute: () => href,
			},
		});

		expect(window.dataLayer).toStrictEqual([
			{
				event: eventName,
				eventCategory: defaultEventCategory,
				eventAction: eventAction,
				eventLabel: eventLabel,
				destinationUrl: href,
			},
		]);
	});

	it("should use link textContent property for event label when none provided", () => {
		const eventAction = "Test action",
			href = "https://www.nice.org.uk/a-url";

		const { container } = render(
			<TrackedLink href="/anything" eventAction={eventAction}>
				Some other text
			</TrackedLink>
		);

		const preventDefault = jest.fn();

		wrapper.props().onClick({
			preventDefault: preventDefault,
			currentTarget: {
				getAttribute: () => href,
				textContent: "Some text content",
			},
		});

		expect(window.dataLayer).toStrictEqual([
			{
				event: eventName,
				eventCategory: defaultEventCategory,
				eventAction: eventAction,
				eventLabel: "Some text content",
				destinationUrl: href,
			},
		]);
	});
});
