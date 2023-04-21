import React from "react";
import { NavLinks } from "./NavLinks";
import { render } from "@testing-library/react";
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

	it.skip("should prevent default and navigate in event callback on nav item click", () => {
		const { container } = render(
			<NavLinks {...defaultProps} currentService="link2" />
		);

		const preventDefault = jest.fn();

		const link = wrapper.find("a[href='https://url2/']");

		link.props().onClick({
			preventDefault: preventDefault,
			currentTarget: {
				getAttribute: () => "https://url2/",
			},
		});

		expect(preventDefault).toHaveBeenCalled();

		window.dataLayer[0].eventCallback();
		expect(window.location.href).toEqual("https://url2/");
	});

	// it.skip("should push dataLayer event for nav item click", () => {
	// 	const { container } = render(<Nav {...defaultProps} isExpanded={false} />);

	// 	console.log(wrapper.debug());

	// 	wrapper.find("a[href='https://url1/']").simulate("click", {
	// 		preventDefault: () => {},
	// 		currentTarget: {
	// 			getAttribute: () => "",
	// 			textContent: "First link",
	// 		},
	// 	});

	// 	expect(window.dataLayer).toEqual([
	// 		{
	// 			event: eventName,
	// 			eventCategory: defaultEventCategory,
	// 			eventAction: headerClickEventAction,
	// 			eventLabel: "First link",
	// 			eventCallback: expect.any(Function),
	// 			eventTimeout: eventTimeout,
	// 		},
	// 	]);
	// });

	it("Matches snapshot with sub links for selected external service", () => {
		const externalServices = services.external;

		const { container } = render(
			<NavLinks {...defaultProps} service={externalServices[1].id} />
		);
		expect(container).toMatchSnapshot();
	});
});
