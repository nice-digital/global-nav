import React from "react";
import { NavLinks } from "./NavLinks";

import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";

import services from "./../__mocks__/services.json";

describe("NavLinks", () => {
	const defaultProps = {
		servicesToDisplay: services.external,
	};

	let wrapper;

	React.useState = jest.fn().mockReturnValue([true, {}]);

	beforeEach(() => {
		wrapper = shallow(<NavLinks {...defaultProps} />);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should render without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should list over the top level items in services", () => {
		expect(wrapper.find("li[data-tracking]").length).toEqual(
			services.external.length
		);
	});

	it("should render a top level button if there's a dropdown", () => {
		expect(wrapper.find("button").length).toEqual(
			services.external.filter((service) => service.dropdown === true).length
		);
	});

	it("should render a top level anchor if there's no dropdown", () => {
		expect(wrapper.find("a").length).toEqual(
			services.external.filter((service) => service.dropdown === false).length
		);
	});

	it("should add aria-current=true attribute for selected service", () => {});

	it(
		"should add aria-current=page if the global config currentService matches current service  "
	);
});

// NavLinks.propTypes = {
// 	skipLinkId: PropTypes.string,
// 	servicesToDisplay: PropTypes.array,
// 	currentService: PropTypes.string,
// 	subLinks: PropTypes.array,
// 	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
// 	handleScrim: PropTypes.func,
// };

// it("Adds aria-current=page attribute for selected service when matches current URL", () => {
// 	const oldLocation = global.window.location;
// 	delete global.window.location;
// 	global.window.location = new URL(externalServices[1].href);
// 	const wrapper = shallow(
// 		<Nav {...defaultProps} service={externalServices[1].id} />
// 	);
// 	// console.log(wrapper.state());
// 	console.log(wrapper.html());
// 	expect(wrapper.find("a").at(0).props()["aria-current"]).toEqual("page");
// 	// Tidy up
// 	global.window.location = oldLocation;
// });
// it("Adds aria-current=true attribute for selected service", () => {
// 	const wrapper = shallow(
// 		<Nav {...defaultProps} service={externalServices[1].id} />
// 	);
// 	expect(wrapper.find("a").at(1).props()["aria-current"]).toEqual(true);
// });
