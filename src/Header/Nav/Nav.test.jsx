import React from "react";
import Nav from "./Nav";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import services from "./__mocks__/services.json";
import {
	eventName,
	defaultEventCategory,
	headerClickEventAction,
	eventTimeout,
} from "../../tracker";

jest.mock("./../../services.json", () => require("./__mocks__/services.json"));

describe("Nav", () => {
	const defaultProps = {
		isExpanded: false,
		accountsData: null,
		service: null,
	};
	const externalServices = services.external;
	
	it("Renders without crashing", () => {
		const wrapper = shallow(<Nav {...defaultProps} />);
		expect(wrapper).toHaveLength(1);
	});

	it("Matches snapshot with no accounts links", () => {
		const wrapper = shallow(<Nav {...defaultProps} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("Matches snapshot with single accounts link", () => {
		const accountsLinks = {
			"Sign in": "https://accounts.nice.org.uk/",
		};
		const wrapper = shallow(
			<Nav {...defaultProps} accountsLinks={accountsLinks} />
		);
		expect(toJson(wrapper.find("nav").at(1))).toMatchSnapshot();
	});

	it("Matches snapshot with multiple accounts links", () => {
		const accountsLinks = {
			"Joe Bloggs": "https://accounts.nice.org.uk/profile",
			"Sign out": "https://accounts.nice.org.uk/signout",
		};
		const wrapper = shallow(
			<Nav {...defaultProps} accountsLinks={accountsLinks} />
		);
		expect(toJson(wrapper.find("nav").at(1))).toMatchSnapshot();
	});

	it("Matches snapshot with sub links for selected external service", () => {
		const wrapper = mount(<Nav {...defaultProps} service={externalServices[1].id} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	
	it("Adds aria-current=true attribute for selected service", () => {
		const wrapper = shallow(<Nav {...defaultProps} service={externalServices[1].id} />);
		expect(wrapper.find("a").at(1).props()["aria-current"]).toEqual(true);
	});

	it("Adds aria-current=page attribute for selected service when matches current URL", () => {
		const oldLocation = global.window.location;
		delete global.window.location;
		global.window.location = new URL(externalServices[1].href);

		const wrapper = shallow(<Nav {...defaultProps} service={externalServices[1].id} />);
		expect(wrapper.find("a").at(1).props()["aria-current"]).toEqual("page");

		// Tidy up
		global.window.location = oldLocation;
	});

	it("Add expanded class to root element when passed isExpanded prop", () => {
		const wrapper = shallow(<Nav {...defaultProps} isExpanded={false} />);
		expect(wrapper.props().className).not.toContain("wrapperExpanded");
		wrapper.setProps({ isExpanded: true });
		expect(wrapper.props().className).toContain("wrapperExpanded");
	});

	
	describe("tracking", () => {
		beforeEach(() => {
			window.dataLayer = [];
		});

		afterAll(() => {
			// Cleanup
			delete window.dataLayer;
		});

		it("should push dataLayer event for nav item click", () => {
			const wrapper = shallow(<Nav {...defaultProps} isExpanded={false} />);

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

		it("should prevent default and navigate in event callback on nav item click", () => {
			const wrapper = shallow(<Nav {...defaultProps} isExpanded={false} />);

			const preventDefault = jest.fn();

			wrapper.find("a[href='https://url1/']").simulate("click", {
				preventDefault: preventDefault,
				currentTarget: {
					// Mock e.currentTarget.getAttribute("href")
					getAttribute: () => "https://url1/",
				},
			});

			expect(preventDefault).toHaveBeenCalled();

			window.dataLayer[0].eventCallback();
			expect(window.location.href).toEqual("https://url1/");
		});

		describe("Accounts links", () => {
			const accountsLinks = {
				"Joe Bloggs": "https://accounts.nice.org.uk/users/12345/editprofile",
				"Sign out": "https://accounts.nice.org.uk/signout",
				Admin: "https://accounts.nice.org.uk/admin",
			};

			it("should track edit profile link", () => {
				const preventDefault = jest.fn();
				const wrapper = shallow(
					<Nav
						{...defaultProps}
						isExpanded={true}
						accountsLinks={accountsLinks}
					/>
				);

				wrapper
					.find(
						"a[href='https://accounts.nice.org.uk/users/12345/editprofile']"
					)
					.simulate("click", {
						preventDefault: preventDefault,
						currentTarget: {
							// Mock e.currentTarget.getAttribute("href")
							getAttribute: () =>
								"https://accounts.nice.org.uk/users/12345/editprofile",
							textContent: "Joe Bloggs",
						},
					});

				expect(preventDefault).toHaveBeenCalled();
				expect(window.dataLayer).toEqual([
					{
						event: eventName,
						eventCategory: defaultEventCategory,
						eventAction: headerClickEventAction,
						eventLabel: "Edit profile",
						eventCallback: expect.any(Function),
						eventTimeout: eventTimeout,
					},
				]);
			});

			it("should track sign out link", () => {
				const preventDefault = jest.fn();
				const wrapper = shallow(
					<Nav
						{...defaultProps}
						isExpanded={true}
						accountsLinks={accountsLinks}
					/>
				);

				wrapper
					.find("a[href='https://accounts.nice.org.uk/signout']")
					.simulate("click", {
						preventDefault: preventDefault,
						currentTarget: {
							// Mock e.currentTarget.getAttribute("href")
							getAttribute: () => "https://accounts.nice.org.uk/signout",
							textContent: "Some log out text",
						},
					});

				expect(preventDefault).toHaveBeenCalled();
				expect(window.dataLayer).toEqual([
					{
						event: eventName,
						eventCategory: defaultEventCategory,
						eventAction: headerClickEventAction,
						eventLabel: "Sign out",
						eventCallback: expect.any(Function),
						eventTimeout: eventTimeout,
					},
				]);
			});

			it("should not track admin link", () => {
				const preventDefault = jest.fn();
				const wrapper = shallow(
					<Nav
						{...defaultProps}
						isExpanded={true}
						accountsLinks={accountsLinks}
					/>
				);

				wrapper
					.find("a[href='https://accounts.nice.org.uk/admin']")
					.simulate("click", {
						preventDefault: preventDefault,
						currentTarget: {
							// Mock e.currentTarget.getAttribute("href")
							getAttribute: () => "https://accounts.nice.org.uk/admin",
							textContent: "Admin",
						},
					});

				expect(preventDefault).not.toHaveBeenCalled();
				expect(window.dataLayer).toEqual([]);
			});
		});
	});

	describe("internalServices", () => {
		const internalServices = services.internal;

		it("Matches snapshot with sub links for selected internal service", () => {
			const wrapper = mount(<Nav {...defaultProps} service={internalServices[0].id} />);
			expect(toJson(wrapper)).toMatchSnapshot();
		});	
	
		it("Internal service 1 only renders itself and no other services", () => {
			const wrapper = mount(<Nav {...defaultProps} service={internalServices[0].id} />);
			const topLinks = wrapper.find("a[href='/']");			
			expect(topLinks.length).toEqual(1);
			expect(topLinks.text()).toEqual("First internal service");
		});	

		it("Internal service 2 only renders itself and no other services", () => {
			const wrapper = mount(<Nav {...defaultProps} service={internalServices[1].id} />);
			const topLinks = wrapper.find("a[href='/']");			
			expect(topLinks.length).toEqual(1);
			expect(topLinks.text()).toEqual("Second internal service");
		});	

	});
});
