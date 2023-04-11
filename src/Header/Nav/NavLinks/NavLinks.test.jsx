import React from "react";
import { NavLinks } from "./NavLinks";
import { render } from "@testing-library/react";

import services from "./../__mocks__/services.json";

describe("NavLinks", () => {
	const defaultProps = {
		servicesToDisplay: services.external,
	};

	React.useState = jest.fn().mockReturnValue([true, {}]);

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should list over the top level items in services", () => {
		const { container } = render(<NavLinks {...defaultProps} />);
		expect(wrapper.find("li[data-tracking]").length).toEqual(
			services.external.length
		);
	});

	it("should render a top level button if there's a dropdown", () => {
		const { container } = render(<NavLinks {...defaultProps} />);
		expect(wrapper.find("button").length).toEqual(
			services.external.filter((service) => service.dropdown === true).length
		);
	});

	it("should render a top level anchor if there's no dropdown", () => {
		const { container } = render(<NavLinks {...defaultProps} />);

		// length check against the number of top level services set to display in the header
		expect(wrapper.find("a.link").length).toEqual(
			services.external.filter((service) => service.id && service.header).length
		);
	});

	it.skip("should add aria-expanded=true to the button of the currently expanded dropdown", () => {
		const { container } = render(<NavLinks {...defaultProps} />, {
			idOfOpenDropdown: "link2",
			setIdOfOpenDropdown: jest.fn(),
		});
		const button = wrapper.find("button[id='navlink-link1']");
		button.simulate("click");
		expect(button.props()["aria-expanded"]).toEqual(true);
	});

	it("should add aria-current=true if the global config currentService matches current service", () => {
		const { container } = render(
			<NavLinks {...defaultProps} currentService="link2" />
		);
		const link = wrapper.find("a[id='navlink-link2']");
		expect(link.props()["aria-current"]).toBe(true);
	});

	it("should add an abbreviation title label", () => {
		const { container } = render(
			<NavLinks {...defaultProps} currentService="link2" />
		);
		const abbreviationElement = wrapper.find("[id='navlink-link2']");
		expect(abbreviationElement.props()["aria-label"]).toBe(
			"Abbreviation title"
		);
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
