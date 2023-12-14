import Account from "./Account";
import {
	render,
	waitFor,
	within,
	createEvent,
	fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { HeaderContextProvider } from "./../context/HeaderContext";

import {
	eventName,
	defaultEventCategory,
	headerClickEventAction,
	eventTimeout,
} from "../../tracker";

jest.mock("./nice-accounts", () => ({
	checkIsLoggedIn: jest.fn(() =>
		Promise.resolve({
			links: {
				test: true,
			},
			test: true,
		})
	),
	getDomainBaseUrl: jest.requireActual("./nice-accounts.js").getDomainBaseUrl,
}));

const idamProps = {
	provider: "idam",
	links: [{ text: "sign in", url: "/signin" }],
};

describe("Account", () => {
	const accountsData = {
		display_name: "Joe Bloggs",
		links: {
			"Joe Bloggs": "https://accounts.nice.org.uk/users/12345/editprofile",
			"Sign out": "https://accounts.nice.org.uk/signout",
		},
	};

	const idamData = {
		display_name: "Joe Bloggs",
		links: {
			"Sign out": "https:/identity.nice.org.uk/signout",
		},
	};

	afterEach(() => {
		document.body.innerHTML = "";
	});

	it("Matches snapshot when logged out", () => {
		const { container } = render(<Account isLoggedIn={false} />);
		expect(container).toMatchSnapshot();
	});

	it("Matches snapshot when logged in", () => {
		const { container } = render(
			<Account isLoggedIn={true} accountsData={accountsData} />
		);

		expect(container).toMatchSnapshot();
	});

	it("Matches snapshot when logged out using IDAM", () => {
		const { container } = render(<Account isLoggedIn={false} {...idamProps} />);
		expect(container).toMatchSnapshot();
	});

	it("Matches snapshot when logged in using IDAM", () => {
		const { container } = render(
			<Account isLoggedIn={true} accountsData={idamData} {...idamProps} />
		);
		expect(container).toMatchSnapshot();
	});

	it("Is the correct authentication environment when supplied", () => {
		const { getByRole } = render(
			<Account isLoggedIn={false} environment="beta" />
		);

		expect(getByRole("link", { name: "Sign in" })).toHaveAttribute(
			"href",
			"https://beta-accounts.nice.org.uk/signin"
		);
	});

	it("Calls onLoginStatusChecked callback prop when mounted", async () => {
		const onLoginStatusChecked = jest.fn();

		render(
			<HeaderContextProvider>
				<Account
					isLoggedIn={false}
					onLoginStatusChecked={onLoginStatusChecked}
				/>
			</HeaderContextProvider>
		);

		await waitFor(() => {
			expect(onLoginStatusChecked).toHaveBeenCalledWith({
				links: {
					"Consultation responses": "https://www.nice.org.uk/consultations/",
					test: true,
				},
				test: true,
			});
		});
	});

	it("Expands account menu when button is clicked", async () => {
		const user = userEvent.setup();

		const { getByRole } = render(
			<HeaderContextProvider>
				<Account isLoggedIn={true} accountsData={accountsData} />
			</HeaderContextProvider>
		);

		const myAccountButton = getByRole("button", { name: "My account" });

		expect(myAccountButton).toHaveAttribute("aria-expanded", "false");

		await user.click(myAccountButton);

		expect(myAccountButton).toHaveAttribute("aria-expanded", "true");

		const menu = getByRole("menu", { name: "My account" });
		expect(menu).toHaveAttribute("aria-hidden", "false");
		expect(menu).toHaveAttribute("tabIndex", "-1");
		expect(menu).toHaveFocus();
	});

	it("Collapses menu when escape key is pressed on button", async () => {
		const user = userEvent.setup();

		const { getByRole } = render(
			<HeaderContextProvider>
				<Account isLoggedIn={true} accountsData={accountsData} />
			</HeaderContextProvider>
		);

		const myAccountButton = getByRole("button", { name: "My account" });

		expect(myAccountButton).toHaveAttribute("aria-expanded", "false");

		await user.click(myAccountButton);

		expect(myAccountButton).toHaveAttribute("aria-expanded", "true");

		await userEvent.type(myAccountButton, "{esc}");

		expect(myAccountButton).toHaveAttribute("aria-expanded", "false");

		const menu = getByRole("menu", { hidden: true });
		expect(menu).toHaveAttribute("aria-hidden", "true");
	});

	it("Collapses menu when escape key is pressed on link", async () => {
		const user = userEvent.setup();

		const { getByRole } = render(
			<HeaderContextProvider>
				<Account isLoggedIn={true} accountsData={accountsData} />
			</HeaderContextProvider>
		);

		const myAccountButton = getByRole("button", { name: "My account" });

		await user.click(myAccountButton);

		expect(myAccountButton).toHaveAttribute("aria-expanded", "true");

		const menu = getByRole("menu", { hidden: true }),
			firstMenuLink = within(menu).getAllByRole("menuitem")[0];

		firstMenuLink.focus();
		await userEvent.keyboard("{Escape}");

		expect(myAccountButton).toHaveAttribute("aria-expanded", "false");
		expect(myAccountButton).toHaveFocus();
	});

	describe("tracking", () => {
		it("should not send dataLayer event or prevent default for admin link click", async () => {
			const { getByRole } = render(
				<HeaderContextProvider>
					<Account
						isLoggedIn={true}
						accountsData={{
							display_name: "Joe Bloggs",
							links: {
								Admin: "https://accounts.nice.org.uk/admin",
							},
						}}
					/>
				</HeaderContextProvider>
			);

			const user = userEvent.setup(),
				myAccountButton = getByRole("button", { name: "My account" });

			await user.click(myAccountButton);

			const adminLink = getByRole("menuitem", { name: "Admin" }),
				clickEvent = createEvent.click(adminLink);

			fireEvent(adminLink, clickEvent);

			expect(clickEvent.defaultPrevented).toBe(false);
			expect(window.dataLayer).toHaveLength(0);
		});

		it.each([
			[
				accountsData,
				"Joe Bloggs",
				"Edit profile",
				"https://accounts.nice.org.uk/users/12345/editprofile",
			],
			[
				accountsData,
				"Sign out",
				"Sign out",
				"https://accounts.nice.org.uk/signout",
			],
		])(
			"should prevent default, track and navigate",
			async (accountsData, linkText, eventLabel, href) => {
				const { getByRole } = render(
					<HeaderContextProvider>
						<Account isLoggedIn accountsData={accountsData} />
					</HeaderContextProvider>
				);

				const user = userEvent.setup(),
					myAccountButton = getByRole("button", { name: "My account" });

				await user.click(myAccountButton);

				const menuLink = getByRole("menuitem", { name: linkText }),
					clickEvent = createEvent.click(menuLink);

				fireEvent(menuLink, clickEvent);

				expect(window.dataLayer).toEqual([
					{
						event: eventName,
						eventCategory: defaultEventCategory,
						eventAction: headerClickEventAction,
						eventLabel: eventLabel,
						destinationUrl: href,
						eventCallback: expect.any(Function),
						eventTimeout: eventTimeout,
					},
				]);

				expect(clickEvent.defaultPrevented).toBe(true);

				window.dataLayer[0].eventCallback();
				expect(window.location).toBeAt(href);
			}
		);
	});
});
