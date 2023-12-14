import { createEvent, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "./Dropdown";

jest.mock("../../../services.json", () =>
	require("./../__mocks__/services.json")
);

const DropdownComponent = () => <div data-testid="dropdown-component"></div>;

describe("Dropdown", () => {
	const defaultProps = {
		text: "Test section dropdown",
		id: "link2",
		component: DropdownComponent,
	};

	it("Should have a data-tracking attribute on the wrapper", () => {
		const { container } = render(<Dropdown {...defaultProps} />);
		expect(container.firstChild).toHaveAttribute(
			"data-tracking",
			"Test section dropdown dropdown"
		);
	});

	it("should render the given component", () => {
		const { getByTestId } = render(<Dropdown {...defaultProps} />);
		expect(getByTestId("dropdown-component")).toBeInTheDocument();
	});

	it("Should render a skip link when there is a next nav item to skip to", () => {
		const closingFunction = jest.fn(),
			{ getByRole } = render(
				<Dropdown
					{...defaultProps}
					nextNavSlug="next-thing"
					closeDropdown={closingFunction}
				/>
			),
			skipLink = getByRole("link", {
				name: "Skip Test section dropdown submenu",
			}),
			clickEvent = createEvent.click(skipLink);

		fireEvent(skipLink, clickEvent);

		expect(closingFunction).toHaveBeenCalled();
		expect(clickEvent.defaultPrevented).toBe(true);
	});

	it("Should not render a skip link when there is no next nav item to skip to", () => {
		const { queryByRole } = render(<Dropdown {...defaultProps} />);
		expect(
			queryByRole("link", { name: "Skip Test section dropdown submenu" })
		).toBeNull();
	});

	it("should fire onClosing when the close dropdown button is clicked", async () => {
		const closingFunction = jest.fn();

		const { getByRole } = render(
				<Dropdown {...defaultProps} closeDropdown={closingFunction} />
			),
			closeButton = getByRole("button", { name: "Close menu" }),
			user = userEvent.setup();

		expect(closeButton).toHaveAttribute("data-tracking", "Close menu");

		await user.click(closeButton);

		expect(closingFunction).toHaveBeenCalled();
	});
});
