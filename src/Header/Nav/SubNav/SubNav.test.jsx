import React from "react";
import SubNav from "./SubNav";
import { createEvent, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
	eventName,
	defaultEventCategory,
	headerClickEventAction,
	eventTimeout,
} from "../../../tracker";

const baseURL = "https://sub-nav-test.nice.org.uk/";

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

	it("Matches snapshot", () => {
		const { container } = render(<SubNav text="BNF" links={links} />);
		expect(container).toMatchSnapshot();
	});

	it("Adds aria-current=page attribute to link when matches current URL", () => {
		window.location.pathname = links[1].href;
		const { getByRole } = render(<SubNav text="BNF" links={links} />);

		expect(getByRole("link", { name: links[1].text })).toHaveAttribute(
			"aria-current",
			"page"
		);
	});

	it("Adds aria-current=true attribute to link when partially matches current URL", () => {
		window.location.pathname = links[1].href + "abacavir.html";
		const { getByRole } = render(<SubNav text="BNF" links={links} />);

		expect(getByRole("link", { name: links[1].text })).toHaveAttribute(
			"aria-current",
			"true"
		);
	});

	describe("Tracking", () => {
		it("should prevent default on link click", () => {
			const { getByRole } = render(<SubNav text="BNF" links={links} />),
				link = getByRole("link", { name: links[1].text }),
				clickEvent = createEvent.click(link);

			fireEvent(link, clickEvent);

			expect(clickEvent.defaultPrevented).toBe(true);
		});

		it("should send event to dataLayer on click ", async () => {
			const { getByRole } = render(<SubNav text="BNF" links={links} />),
				user = userEvent.setup(),
				link = getByRole("link", { name: links[1].text });

			await user.click(link);

			const eventLabel = links[1].text;

			expect(window.dataLayer).toEqual([
				{
					destinationUrl: links[1].href,
					event: eventName,
					eventCategory: defaultEventCategory,
					eventAction: headerClickEventAction,
					eventLabel: eventLabel,
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout,
				},
			]);
		});

		it("should navigate in callback on click with no onNavigating prop", async () => {
			const [link1, ...otherLinks] = links,
				href = baseURL + link1.href;

			const { getByRole } = render(
					<SubNav
						text="BNF"
						links={[
							{
								...link1,
								href,
							},
							...otherLinks,
						]}
					/>
				),
				user = userEvent.setup(),
				link = getByRole("link", { name: link1.text });

			await user.click(link);

			window.dataLayer[0].eventCallback();
			expect(window.location).toBeAt(href);
		});

		it("should navigate in event callback on click with onNavigating prop that doesn't exist", async () => {
			const [link1, ...otherLinks] = links,
				href = baseURL + link1.href;

			const { getByRole } = render(
					<SubNav
						text="BNF"
						onNavigating="blah"
						links={[
							{
								...link1,
								href,
							},
							...otherLinks,
						]}
					/>
				),
				user = userEvent.setup(),
				link = getByRole("link", { name: link1.text });

			await user.click(link);

			window.dataLayer[0].eventCallback();
			expect(window.location).toBeAt(href);
		});

		it("should call onNavigating function prop in event callback on click", async () => {
			const onNavigating = jest.fn();

			const { getByRole } = render(
					<SubNav text="BNF" links={links} onNavigating={onNavigating} />
				),
				user = userEvent.setup(),
				link = getByRole("link", { name: links[1].text });

			await user.click(link);

			window.dataLayer[0].eventCallback();
			expect(onNavigating).toHaveBeenCalledWith({
				element: link,
				href: links[1].href,
			});
		});

		it("should call onNavigating string function name prop in event callback on click", async () => {
			const onNavigating = jest.fn();

			window.onNavigatingHandler = onNavigating;

			const { getByRole } = render(
					<SubNav text="BNF" links={links} onNavigating="onNavigatingHandler" />
				),
				user = userEvent.setup(),
				link = getByRole("link", { name: links[1].text });

			await user.click(link);

			window.dataLayer[0].eventCallback();
			expect(onNavigating).toHaveBeenCalledWith({
				element: link,
				href: links[1].href,
			});
		});
	});
});
