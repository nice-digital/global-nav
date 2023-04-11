import React from "react";
import { render } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

jest.mock("../../../services.json", () =>
	require("./../__mocks__/services.json")
);

const DropdownComponent = () => null;

describe("Dropdown", () => {
	const defaultProps = {
		text: "Our Dropdown",
		id: "link2",
		component: DropdownComponent,
	};

	it("Should have a data-tracking attribute on the wrapper", () => {
		const { container } = render(<Dropdown {...defaultProps} />);
		const trackingDiv = wrapper.find("div[data-tracking]");
		expect(trackingDiv.length).toEqual(1);
		expect(trackingDiv.props()["data-tracking"]).toEqual(
			"Our Dropdown dropdown"
		);
	});

	it("should render the given component", () => {
		const { container } = render(<Dropdown {...defaultProps} />);
		expect(
			wrapper.find("[rootUrl='https://www.test-link2.nice.org']").length
		).toEqual(1);
	});

	it("Should render a skip link when there is a next nav item to skip to", () => {
		const closingFunction = jest.fn();
		const preventer = jest.fn();
		const { container } = render(
			<Dropdown
				{...defaultProps}
				nextNavSlug="next-thing"
				closeDropdown={closingFunction}
			/>
		);
		const skipButton = wrapper.find("a[href='#navlink-next-thing']");
		expect(skipButton.length).toEqual(1);
		expect(skipButton.text()).toBe("Skip Our Dropdown submenu");
		skipButton
			.props()
			.onClick({ preventDefault: preventer, target: { hash: "#myButton" } });
		expect(closingFunction).toHaveBeenCalled();
		expect(preventer).toHaveBeenCalled();
	});

	it("Should not render a skip link when there is no next nav item to skip to", () => {
		const { container } = render(<Dropdown {...defaultProps} />);
		expect(wrapper.find("a[href='#navlink-next-thing']").length).toEqual(0);
	});

	it("should fire onClosing when the close dropdown button is clicked", () => {
		const closingFunction = jest.fn();

		const { container } = render(
			<Dropdown {...defaultProps} closeDropdown={closingFunction} />
		);

		const closeButton = wrapper.find("button");
		expect(closeButton.props()["data-tracking"]).toEqual("Close menu");

		closeButton.props().onClick();
		expect(closingFunction).toHaveBeenCalled();
	});
});
