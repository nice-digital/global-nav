import React from "react";
import Header from "./Header";
import { render, within, createEvent, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
	eventName,
	defaultEventCategory,
	headerClickEventAction,
	eventTimeout,
} from "./../tracker";

describe("Header", () => {
	const defaultProps = {
		service: null,
		enabled: null,
	};

	beforeEach(() => {
		window.dataLayer = [];
	});

	afterAll(() => {
		// Cleanup
		delete window.dataLayer;
	});

	it("Matches snapshot", () => {
		const { container } = render(
			<Header {...defaultProps} onNavigating="onNavigatingHandler" />
		);
		expect(container).toMatchSnapshot();
	});

	describe("Mobile menu button", () => {
		it("Mobile menu button is collapsed by default", () => {
			const { getByRole } = render(<Header {...defaultProps} />);

			const mobileMenuButton = getByRole("button", {
				name: "Expand site menu",
			});

			expect(mobileMenuButton).toHaveAttribute("aria-expanded", "false");
			expect(mobileMenuButton).toHaveTextContent("Menu");
		});

		it("Mobile menu button toggles text and aria-expanded on click", async () => {
			const { getByRole } = render(<Header {...defaultProps} />),
				mobileMenuButton = getByRole("button", {
					name: "Expand site menu",
				}),
				user = userEvent.setup();

			await user.click(mobileMenuButton);

			expect(mobileMenuButton).toHaveAttribute("aria-expanded", "true");
			expect(mobileMenuButton).toHaveTextContent("Close");
			expect(mobileMenuButton).toHaveAccessibleName("Close site menu");
		});

		it("Mobile menu button toggles nav on click", async () => {
			const { getByRole } = render(<Header {...defaultProps} />),
				mobileMenuButton = getByRole("button", {
					name: "Expand site menu",
				}),
				primaryNav = getByRole("navigation", {
					name: "primary navigation",
					hidden: true,
				}),
				navWrapper = primaryNav.parentElement,
				user = userEvent.setup();

			expect(navWrapper).not.toHaveClass("wrapperExpanded");

			await user.click(mobileMenuButton);
			expect(navWrapper).toHaveClass("wrapperExpanded");

			await user.click(mobileMenuButton);
			expect(navWrapper).not.toHaveClass("wrapperExpanded");
		});

		it("should track mobile menu button click", async () => {
			const { getByRole } = render(<Header {...defaultProps} />),
				mobileMenuButton = getByRole("button", {
					name: "Expand site menu",
				}),
				user = userEvent.setup();

			await user.click(mobileMenuButton);

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: defaultEventCategory,
					eventAction: headerClickEventAction,
					eventLabel: "Menu",
				},
			]);
		});
	});

	describe("Search", () => {
		it("Renders search by default", () => {
			const { getByRole } = render(<Header {...defaultProps} />);
			expect(getByRole("search")).toBeInTheDocument();
		});

		it("Doesn't render search if search is disabled", () => {
			const { queryByRole } = render(
				<Header {...defaultProps} search={false} />
			);
			expect(queryByRole("search")).toBeNull();
		});

		it("should set search form action URL", () => {
			const { getByRole } = render(
				<Header {...defaultProps} search={{ url: "/test" }} />
			);
			expect(getByRole("search")).toHaveAttribute("action", "/test");
		});

		it("should set search input placeholder", () => {
			const { getByRole } = render(
				<Header {...defaultProps} search={{ placeholder: "Toast" }} />
			);
			expect(getByRole("searchbox")).toHaveAttribute("placeholder", "Toast");
		});

		it("should set search input default text", () => {
			const { getByRole } = render(
				<Header {...defaultProps} search={{ query: "bananas" }} />
			);
			expect(getByRole("searchbox")).toHaveValue("bananas");
		});

		it("should create skip link to given target ID", () => {
			const { getByRole } = render(
					<Header {...defaultProps} search={{ skipLinkId: "chickens" }} />
				),
				search = getByRole("search");

			expect(
				within(search).getByRole("link", { name: "Skip to content" })
			).toHaveAttribute("href", "#chickens");
		});
	});

	describe("Nav", () => {
		it("Nav is collapsed by default", async () => {
			const { getByRole } = render(<Header {...defaultProps} />),
				primaryNav = getByRole("navigation", {
					name: "primary navigation",
					hidden: true,
				}),
				navWrapper = primaryNav.parentElement;

			expect(navWrapper).not.toHaveClass("wrapperExpanded");
		});
	});

	describe("Back to top link target", () => {
		it("should contain a back to top scroll target id", () => {
			const { getByRole } = render(<Header {...defaultProps} />),
				siteHeader = getByRole("banner", { name: "Site header" });

			expect(siteHeader.parentElement).toHaveAttribute("id", "top");
		});
	});

	describe("Skip link target", () => {
		it(`If skip link doesn't exist, create a link to the first <h1> in the document`, () => {
			const heading1 = document.createElement("h1");
			document.body.append(heading1);

			render(<Header {...defaultProps} />);

			expect(heading1).toHaveAttribute("id", "content-start");
			heading1.parentNode.removeChild(heading1);
		});

		it("Renders a skip link which targets the custom skipLinkId property", () => {
			const heading1 = document.createElement("h1");
			document.body.append(heading1);

			render(<Header {...defaultProps} skipLinkId="super-skip-link" />);
			expect(heading1).toHaveAttribute("id", "super-skip-link");
			heading1.parentNode.removeChild(heading1);
		});
	});

	describe("Dropdown open and close callbacks", () => {
		it("should call onDropdownOpen function name callback prop if dropdown is opened", async () => {
			window.testFunc = jest.fn();

			const { getByRole } = render(
					<Header {...defaultProps} onDropdownOpen={"testFunc"} />
				),
				user = userEvent.setup(),
				guidanceMenuButton = getByRole("button", { name: "Guidance" });

			await user.click(guidanceMenuButton);

			expect(window.testFunc).toHaveBeenCalledTimes(1);
		});

		it("should call onDropdownClose function name callback prop if dropdown is opened", async () => {
			window.onDropdownCloseFunc = jest.fn();

			const { getByRole } = render(
					<Header {...defaultProps} onDropdownClose={"onDropdownCloseFunc"} />
				),
				user = userEvent.setup(),
				guidanceMenuButton = getByRole("button", { name: "Guidance" });

			await user.click(guidanceMenuButton);
			await user.click(guidanceMenuButton);

			expect(window.onDropdownCloseFunc).toHaveBeenCalledTimes(2);
		});

		it("should call onDropdownOpen callback prop if dropdown is opened", async () => {
			const onDropdownOpen = jest.fn(),
				{ getByRole } = render(
					<Header {...defaultProps} onDropdownOpen={onDropdownOpen} />
				),
				user = userEvent.setup(),
				guidanceMenuButton = getByRole("button", { name: "Guidance" });

			await user.click(guidanceMenuButton);

			expect(onDropdownOpen).toHaveBeenCalledTimes(1);
		});

		it("should call onDropdownClose callback prop if dropdown is closed", async () => {
			const onDropdownClose = jest.fn(),
				{ getByRole } = render(
					<Header {...defaultProps} onDropdownClose={onDropdownClose} />
				),
				user = userEvent.setup(),
				guidanceMenuButton = getByRole("button", { name: "Guidance" });

			await user.click(guidanceMenuButton);
			await user.click(guidanceMenuButton);

			expect(onDropdownClose).toHaveBeenCalledTimes(2);
		});
	});

	describe("Logo tracking", () => {
		it("should track logo click", async () => {
			const { getByRole } = render(<Header {...defaultProps} />),
				user = userEvent.setup(),
				homeLink = getByRole("link", { name: "Home" });

			await user.click(homeLink);

			expect(window.dataLayer).toEqual([
				{
					destinationUrl: "https://www.nice.org.uk/",
					event: eventName,
					eventCategory: defaultEventCategory,
					eventAction: headerClickEventAction,
					eventLabel: "Logo",
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout,
				},
			]);
		});

		it("should prevent default and navigate in event callback on logo click", () => {
			const { getByRole } = render(<Header {...defaultProps} />),
				homeLink = getByRole("link", { name: "Home" }),
				clickEvent = createEvent.click(homeLink);

			fireEvent(homeLink, clickEvent);

			expect(clickEvent.defaultPrevented).toBe(true);

			window.dataLayer[0].eventCallback();
			expect(window.location.href).toEqual("https://www.nice.org.uk/");
		});
	});

	describe("Sign in button", () => {
		it("Should not render sign in button if false is supplied to auth prop", () => {
			const { getByRole, rerender } = render(<Header {...defaultProps} auth />),
				signInButton = getByRole("link", { name: "Sign in" });

			expect(signInButton).toBeInTheDocument();

			rerender(<Header {...defaultProps} auth={false} />);

			expect(signInButton).not.toBeInTheDocument();
		});
	});
});
