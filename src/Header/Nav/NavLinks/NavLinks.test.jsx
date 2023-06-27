import React from "react";
import { NavLinks } from "./NavLinks";
import { createEvent, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import services from "./../__mocks__/services.json";
import { HeaderContextProvider } from "../../context/HeaderContext";

describe("NavLinks", () => {
	const defaultProps = {
		servicesToDisplay: services.external,
	};

	it.each(
		services.external
			.filter(({ header }) => header)
			.map(({ text }) => ({ text }))
	)("should render menu item for $text", ({ text }) => {
		const { getByText } = render(<NavLinks {...defaultProps} />);
		expect(getByText(text)).toBeInTheDocument();
	});

	it("should render a top level button if there's a dropdown component", () => {
		const { getByRole } = render(<NavLinks {...defaultProps} />);
		expect(getByRole("button", { name: "First link" })).toBeInTheDocument();
	});

	it("should render a top level anchor if there's no dropdown", () => {
		const { getByRole } = render(<NavLinks {...defaultProps} />);
		expect(
			getByRole("link", { name: "Second link abbreviation title" })
		).toBeInTheDocument();
	});

	it("should add aria-expanded=true to the button of the currently expanded dropdown", async () => {
		const { getByRole } = render(
				<HeaderContextProvider>
					<NavLinks {...defaultProps} />
				</HeaderContextProvider>
			),
			button = getByRole("button", { name: "First link" }),
			user = userEvent.setup();

		await user.click(button);

		expect(button).toHaveAttribute("aria-expanded", "true");
	});

	it("should add aria-current=true if the global config currentService matches current service", async () => {
		const { getByRole } = render(
				<HeaderContextProvider>
					<NavLinks
						{...defaultProps}
						currentService={services.external[0].id}
					/>
				</HeaderContextProvider>
			),
			button = getByRole("button", { name: "First link" }),
			user = userEvent.setup();

		await user.click(button);

		expect(button).toHaveAttribute("aria-current", "true");
	});

	it("should add an abbreviation title label", () => {
		const { getByRole } = render(<NavLinks {...defaultProps} />),
			secondLink = getByRole("link", {
				name: "Second link abbreviation title",
			});

		expect(secondLink).toHaveTextContent("Second link");
	});

	it("should prevent default and navigate in event callback on nav item click", () => {
		const { getByRole } = render(
				<HeaderContextProvider>
					<NavLinks {...defaultProps} currentService="link2" />
				</HeaderContextProvider>
			),
			secondLink = getByRole("link", {
				name: "Second link abbreviation title",
			}),
			clickEvent = createEvent.click(secondLink);

		fireEvent(secondLink, clickEvent);

		expect(clickEvent.defaultPrevented).toBeTruthy();

		window.dataLayer[0].eventCallback();
		expect(window.location).toBeAt("https://www.test-link2.nice.org/url2/");
	});

	it("should push dataLayer event for nav item click", async () => {
		const { getByRole } = render(
				<HeaderContextProvider>
					<NavLinks {...defaultProps} currentService="link2" />
				</HeaderContextProvider>
			),
			secondLink = getByRole("link", {
				name: "Second link abbreviation title",
			}),
			user = userEvent.setup();

		await user.click(secondLink);

		expect(window.dataLayer).toStrictEqual([
			{
				destinationUrl: "https://www.test-link2.nice.org/url2/",
				event: "GlobalNav",
				eventCategory: "TopHat and footer",
				eventAction: "Tophat click",
				eventLabel: "Second link",
				eventCallback: expect.any(Function),
				eventTimeout: 2000,
			},
		]);
	});

	it("Matches snapshot with sub links for selected external service", () => {
		const externalServices = services.external;

		const { container } = render(
			<NavLinks {...defaultProps} service={externalServices[1].id} />
		);
		expect(container).toMatchSnapshot();
	});
});
