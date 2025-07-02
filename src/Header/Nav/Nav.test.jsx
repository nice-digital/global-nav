import Nav from "./Nav";
import { render, createEvent, fireEvent } from "@testing-library/react";

import services from "./__fixtures__/services.json";
import {
	eventName,
	defaultEventCategory,
	headerClickEventAction,
	eventTimeout,
} from "../../tracker";

jest.mock("./../../services.json", () =>
	require("./__fixtures__/services.json")
);

describe("Nav", () => {
	const defaultProps = {
		isExpanded: false,
		accountsData: null,
		service: null,
		handleScrim: () => {},
	};

	it("Matches snapshot with no accounts links", () => {
		const { container } = render(<Nav {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it("Matches snapshot with single accounts link", () => {
		const accountsLinks = {
			"Sign in": "https://accounts.nice.org.uk/",
		};
		const { container } = render(
			<Nav {...defaultProps} accountsLinks={accountsLinks} />
		);
		expect(container).toMatchSnapshot();
	});

	it("Matches snapshot with multiple accounts links", () => {
		const accountsLinks = {
			"Joe Bloggs": "https://accounts.nice.org.uk/profile",
			"Sign out": "https://accounts.nice.org.uk/signout",
		};
		const { container } = render(
			<Nav {...defaultProps} accountsLinks={accountsLinks} />
		);
		expect(container).toMatchSnapshot();
	});

	it("Add expanded class to root element when passed isExpanded prop", () => {
		const { getByRole, rerender } = render(
			<Nav {...defaultProps} isExpanded={false} />
		);

		const wrapper = getByRole("navigation", {
			name: "primary navigation",
		}).parentElement;

		expect(wrapper).not.toHaveClass("wrapperExpanded");

		rerender(<Nav {...defaultProps} isExpanded={true} />);
		expect(wrapper).toHaveClass("wrapperExpanded");
	});

	describe("tracking", () => {
		describe("Accounts links", () => {
			const accountsLinks = {
				"Joe Bloggs": "https://accounts.nice.org.uk/users/12345/editprofile",
				"Sign out": "https://accounts.nice.org.uk/signout",
				Admin: "https://accounts.nice.org.uk/admin",
			};

			it("should track edit profile link", async () => {
				const { getByRole } = render(
					<Nav
						{...defaultProps}
						isExpanded={true}
						accountsLinks={accountsLinks}
					/>
				);

				const editProfileLink = getByRole("link", { name: "Joe Bloggs" }),
					clickEvent = createEvent.click(editProfileLink);

				fireEvent(editProfileLink, clickEvent);

				expect(clickEvent.defaultPrevented).toBe(true);
				expect(window.dataLayer).toEqual([
					{
						event: eventName,
						eventCategory: defaultEventCategory,
						eventAction: headerClickEventAction,
						eventLabel: "Edit profile",
						destinationUrl:
							"https://accounts.nice.org.uk/users/12345/editprofile",
						eventCallback: expect.any(Function),
						eventTimeout: eventTimeout,
					},
				]);
			});

			it("should track sign out link", () => {
				const { getByRole } = render(
					<Nav
						{...defaultProps}
						isExpanded={true}
						accountsLinks={accountsLinks}
					/>
				);

				const editProfileLink = getByRole("link", { name: "Sign out" }),
					clickEvent = createEvent.click(editProfileLink);

				fireEvent(editProfileLink, clickEvent);

				expect(clickEvent.defaultPrevented).toBe(true);
				expect(window.dataLayer).toEqual([
					{
						event: eventName,
						eventCategory: defaultEventCategory,
						eventAction: headerClickEventAction,
						eventLabel: "Sign out",
						destinationUrl: "https://accounts.nice.org.uk/signout",
						eventCallback: expect.any(Function),
						eventTimeout: eventTimeout,
					},
				]);
			});

			it("should not track admin link", () => {
				const { getByRole } = render(
					<Nav
						{...defaultProps}
						isExpanded={true}
						accountsLinks={accountsLinks}
					/>
				);

				const editProfileLink = getByRole("link", { name: "Admin" }),
					clickEvent = createEvent.click(editProfileLink);

				fireEvent(editProfileLink, clickEvent);

				expect(clickEvent.defaultPrevented).toBe(false);
				expect(window.dataLayer).toEqual([]);
			});
		});
	});

	describe("internalServices", () => {
		const internalServices = services.internal;

		it("Matches snapshot with sub links for selected internal service", () => {
			const { container } = render(
				<Nav {...defaultProps} service={internalServices[0].id} />
			);
			expect(container).toMatchSnapshot();
		});

		it("Internal service 1 only renders itself and no other services", () => {
			const { getByRole, queryByRole } = render(
				<Nav {...defaultProps} service={internalServices[0].id} />
			);

			expect(
				getByRole("link", { name: "First internal service" })
			).toBeInTheDocument();

			expect(
				queryByRole("link", { name: "Second internal service" })
			).toBeNull();
		});

		it("Internal service 2 only renders itself and no other services", () => {
			const { getByRole, queryByRole } = render(
				<Nav {...defaultProps} service={internalServices[1].id} />
			);

			expect(
				getByRole("link", { name: "Second internal service" })
			).toBeInTheDocument();

			expect(
				queryByRole("link", { name: "First internal service" })
			).toBeNull();
		});

		const propsWithAdditionalSubMenuItem = {
			...defaultProps,
			additionalSubMenuItems: [
				{
					service: internalServices[0].id,
					links: [{ text: "Admin", url: "/admin" }],
				},
			],
		};

		it("Internal service 1 adds additional sub menu item", () => {
			const { getByRole } = render(
				<Nav
					{...propsWithAdditionalSubMenuItem}
					service={internalServices[0].id}
				/>
			);

			expect(getByRole("link", { name: "Admin" })).toHaveAttribute(
				"href",
				"/admin"
			);
		});

		it("Internal service 2 doesn't show the additional sub menu item for service 1", () => {
			const { queryByRole } = render(
				<Nav
					{...propsWithAdditionalSubMenuItem}
					service={internalServices[1].id}
				/>
			);

			expect(queryByRole("link", { name: "Admin" })).toBeNull();
		});

		const propsWithAdditionalSubMenuItemForEachService = {
			...defaultProps,
			additionalSubMenuItems: [
				{
					service: internalServices[0].id,
					links: [{ text: "Admin 1", url: "/admin1" }],
				},
				{
					service: internalServices[1].id,
					links: [{ text: "Admin 2", url: "/admin2" }],
				},
			],
		};

		it("Internal service 1 gets additional sub menu items when multiple are passed", () => {
			const { getByRole } = render(
				<Nav
					{...propsWithAdditionalSubMenuItemForEachService}
					service={internalServices[0].id}
				/>
			);

			expect(getByRole("link", { name: "Admin 1" })).toHaveAttribute(
				"href",
				"/admin1"
			);
		});

		it("Internal service 2 gets additional sub menu items when multiple are passed", () => {
			const { getByRole } = render(
				<Nav
					{...propsWithAdditionalSubMenuItemForEachService}
					service={internalServices[1].id}
				/>
			);

			expect(getByRole("link", { name: "Admin 2" })).toHaveAttribute(
				"href",
				"/admin2"
			);
		});
	});
});
