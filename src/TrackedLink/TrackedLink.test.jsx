import TrackedLink from "./TrackedLink";
import { render, createEvent, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { eventName, defaultEventCategory } from "../tracker";

describe("TrackedLink", () => {
	let navigateMock;

	beforeEach(() => {
		navigateMock = jest.fn();
		Object.defineProperty(window, "dataLayer", {
			value: [],
			writable: true,
			configurable: true,
		});
	});

	it("Matches snapshot", () => {
		const { container } = render(
			<TrackedLink
				href="/a-url"
				eventAction="Action"
				className="className"
				navigate={navigateMock}
			>
				Some text
			</TrackedLink>
		);
		expect(container).toMatchSnapshot();
	});

	it("should send event to the dataLayer with navigating event callback on link click", async () => {
		const href = "https://www.nice.org.uk/a-url",
			localEventName = "GlobalNav",
			eventAction = "Test action",
			eventLabel = "Test label";

		const { getByRole } = render(
				<TrackedLink
					eventAction={eventAction}
					eventLabel={eventLabel}
					href={href}
					navigate={navigateMock}
				>
					Some text
				</TrackedLink>
			),
			link = getByRole("link"),
			clickEvent = createEvent.click(link);

		fireEvent(link, clickEvent);

		expect(window.dataLayer).toStrictEqual([
			expect.objectContaining({
				event: localEventName,
				eventCategory: defaultEventCategory,
				eventAction: eventAction,
				eventLabel: eventLabel,
				destinationUrl: href,
			}),
		]);

		expect(clickEvent.defaultPrevented).toBe(true);
		// Manually invoke the eventCallback to simulate analytics completion
		window.dataLayer[0].eventCallback();

		expect(navigateMock).toHaveBeenCalledWith(href);
	});

	it("should use default event category when none provided", async () => {
		const href = "https://www.nice.org.uk/a-url",
			eventAction = "Test action",
			eventLabel = "Some text";

		const { getByRole } = render(
				<TrackedLink
					href={href}
					eventAction={eventAction}
					eventLabel={eventLabel}
					navigate={navigateMock}
				>
					Some text
				</TrackedLink>
			),
			link = getByRole("link"),
			user = userEvent.setup();

		await user.click(link);

		expect(window.dataLayer).toStrictEqual([
			expect.objectContaining({
				event: eventName,
				eventCategory: defaultEventCategory,
				eventAction: eventAction,
				eventLabel: eventLabel,
				destinationUrl: href,
			}),
		]);
	});

	it("should use link textContent property for event label when none provided", async () => {
		const eventAction = "Test action",
			href = "https://www.nice.org.uk/a-url",
			textContent = "Some text content";

		const { getByRole } = render(
				<TrackedLink
					href={href}
					eventAction={eventAction}
					navigate={navigateMock}
				>
					{textContent}
				</TrackedLink>
			),
			link = getByRole("link"),
			user = userEvent.setup();

		await user.click(link);

		expect(window.dataLayer).toStrictEqual([
			expect.objectContaining({
				event: eventName,
				eventCategory: defaultEventCategory,
				eventAction: eventAction,
				eventLabel: textContent,
				destinationUrl: href,
			}),
		]);
	});
});
