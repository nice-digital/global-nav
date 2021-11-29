import React from "react";
import Nav from "./Nav";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import services from "./__mocks__/services.json";

describe("NavLinks", () => {
	const defaultProps = {
		isExpanded: false,
		accountsData: null,
		service: null,
		handleScrim: () => {},
	};
	const externalServices = services.external;

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
});
