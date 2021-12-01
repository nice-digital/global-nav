import React from "react";
import { NavLinks } from "./NavLinks";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import services from "./../__mocks__/services.json";

describe("NavLinks", () => {
	const defaultProps = {
		servicesToDisplay: services.external,
	};

	React.useState = jest.fn().mockReturnValue([true, {}]);
	// React.useContext = jest
	// 	.fn()
	// 	.mockReturnValue(["link1", mockSetIdOfOpenDropdown]);

	// React.useContext = jest.mock("./../../context/HeaderContext.js");

	// jest.mock("react", () => ({
	// 	...jest.requireActual("react"),
	// 	useContext: jest.fn().mockReturnValue(["link1", jest.fn()]),
	// }));

	// let realUseContext;
	// let useContextMock;
	// Setup mock
	// beforeEach(() => {
	// 	realUseContext = React.useContext;
	// 	useContextMock = React.useContext = jest.fn();
	// });
	// Cleanup mock
	// afterEach(() => {
	// 	React.useContext = realUseContext;
	// });

	// test("mock hook", () => {
	// 	useContextMock.mockReturnValue("Test Value");
	// 	const element = new ShallowRenderer().render(<MyComponent />);
	// 	expect(element.props.children).toBe("Test Value");
	// });

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should render without crashing", () => {
		const wrapper = shallow(<NavLinks {...defaultProps} />);
		expect(wrapper.length).toEqual(1);
	});
	it("should list over the top level items in services", () => {
		const wrapper = shallow(<NavLinks {...defaultProps} />);
		expect(wrapper.find("li[data-tracking]").length).toEqual(
			services.external.length
		);
	});

	it("should render a top level button if there's a dropdown", () => {
		const wrapper = shallow(<NavLinks {...defaultProps} />);
		expect(wrapper.find("button").length).toEqual(
			services.external.filter((service) => service.dropdown === true).length
		);
	});

	it("should render a top level anchor if there's no dropdown", () => {
		const wrapper = shallow(<NavLinks {...defaultProps} />);
		expect(wrapper.find("a").length).toEqual(
			services.external.filter((service) => service.dropdown === false).length
		);
	});

	it.skip("should add aria-expanded=true to the button of the currently expanded dropdown", () => {
		// TODO: pick up here

		// useContextMock.mockReturnValue(["link1", {}]);

		const wrapper = shallow(<NavLinks {...defaultProps} />, {
			idOfOpenDropdown: "link2",
			setIdOfOpenDropdown: jest.fn(),
		});
		// wrapper.setContext({ setIdOfOpenDropdown: mockSetIdOfOpenDropdown });
		const button = wrapper.find("button[id='navlink-link1']");
		button.simulate("click");
		expect(button.props()["aria-expanded"]).toEqual(true);
	});

	it("should add aria-current=true if the global config currentService matches current service", () => {
		const wrapper = shallow(
			<NavLinks {...defaultProps} currentService="link2" />
		);
		const link = wrapper.find("a[id='navlink-link2']");
		expect(link.props()["aria-current"]).toBe(true);
	});

	it.skip("should prevent default and navigate in event callback on nav item click", () => {
		const wrapper = shallow(
			<NavLinks {...defaultProps} currentService="link2" />
		);

		const preventDefault = jest.fn();

		console.log("#####", wrapper.debug());
		const link = wrapper.find("a[href='https://url2/']");

		console.log(".......", link.debug());

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

	it.skip("should push dataLayer event for nav item click", () => {
		const wrapper = shallow(<Nav {...defaultProps} isExpanded={false} />);

		console.log(wrapper.debug());

		wrapper.find("a[href='https://url1/']").simulate("click", {
			preventDefault: () => {},
			currentTarget: {
				// Mock e.currentTarget.getAttribute("href")
				getAttribute: () => "",
				textContent: "First link",
			},
		});

		expect(window.dataLayer).toEqual([
			{
				event: eventName,
				eventCategory: defaultEventCategory,
				eventAction: headerClickEventAction,
				eventLabel: "First link",
				eventCallback: expect.any(Function),
				eventTimeout: eventTimeout,
			},
		]);
	});

	it("Matches snapshot with sub links for selected external service", () => {
		const externalServices = services.external;

		const wrapper = shallow(
			<NavLinks {...defaultProps} service={externalServices[1].id} />
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
