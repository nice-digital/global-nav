import React from "react";
import AccessibleAutocomplete from "accessible-autocomplete/react";

import Autocomplete, { rateLimitWait } from "./Autocomplete";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { eventName, eventTimeout } from "./../../../tracker";

const IE8UserAgent =
	"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)";

describe("Autocomplete", () => {
	const defaultProps = {};

	beforeEach(() => {
		window.dataLayer = [];
	});

	describe("Rendering", () => {
		it("Renders without crashing", () => {
			const wrapper = shallow(<Autocomplete {...defaultProps} />);
			expect(wrapper).toHaveLength(1);
		});
	});

	describe("Autocomplete", () => {
		it("should render autocomplete component", () => {
			const wrapper = shallow(
				<Autocomplete {...defaultProps} source="/url" query="test" />
			);
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it("should render query into defaultValue attribute on autocomplete component", () => {
			const wrapper = shallow(
				<Autocomplete {...defaultProps} source="/url" query="diabetes" />
			);
			expect(wrapper.find(AccessibleAutocomplete).props().defaultValue).toEqual(
				"diabetes"
			);
		});

		it("should add HotJar whitelist attribute to input box", () => {
			const wrapper = mount(
				<Autocomplete {...defaultProps} source="/url" query="diabetes" />
			);

			expect(
				wrapper
					.getDOMNode()
					.querySelector("input#autocomplete")
					.getAttribute("data-hj-allow")
			).toEqual("");
		});

		it("should push autocomplete select event to the dataLayer", () => {
			document.body.innerHTML = "";
			var appContainer = document.createElement("div");
			document.body.appendChild(appContainer);

			const option = {
				Title: "diabetes type 1",
				Link: "https://www.nice.org.uk/diabetes1.html",
			};

			const wrapper = mount(
				<Autocomplete {...defaultProps} source={[option]} query="diab" />,
				{ attachTo: appContainer }
			);

			wrapper.find("#autocomplete").first().props().onConfirm(option);

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: "Search",
					eventAction: "Typeahead select",
					eventLabel: option.Title + " | diab",
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout,
				},
			]);
		});

		it("should push autocomplete select event to the dataLayer using TypeAheadType property", () => {
			document.body.innerHTML = "";
			var appContainer = document.createElement("div");
			document.body.appendChild(appContainer);

			const option = {
				Title: "diabetes type 1",
				TypeAheadType: "keyword",
				Link: "https://www.nice.org.uk/diabetes1.html",
			};

			const wrapper = mount(
				<Autocomplete {...defaultProps} source={[option]} query="diab" />,
				{ attachTo: appContainer }
			);

			wrapper.find("#autocomplete").first().props().onConfirm(option);

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: "Search - Typeahead select",
					eventAction: "Selected: keyword",
					eventLabel: option.Title + " | diab",
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout,
				},
			]);
		});

		it("should navigate to selected option in event callback", () => {
			document.body.innerHTML = "";
			var appContainer = document.createElement("div");
			document.body.appendChild(appContainer);

			const option = {
				Title: "diabetes type 1",
				Link: "https://www.nice.org.uk/diabetes1.html",
			};

			const wrapper = mount(
				<Autocomplete {...defaultProps} source={[option]} query="diab" />,
				{ attachTo: appContainer }
			);

			wrapper.find("#autocomplete").first().props().onConfirm(option);

			window.dataLayer[0].eventCallback();
			expect(window.location.href).toEqual(
				"https://www.nice.org.uk/diabetes1.html"
			);
		});

		it("should call onNavigating prop function with selected option in event callback", () => {
			document.body.innerHTML = "";
			var appContainer = document.createElement("div");
			document.body.appendChild(appContainer);

			const option = {
				Title: "diabetes type 1",
				Link: "/diabetes1.html",
			};

			const onNavigating = jest.fn();

			const wrapper = mount(
				<Autocomplete
					{...defaultProps}
					source={[option]}
					query="diab"
					onNavigating={onNavigating}
				/>,
				{ attachTo: appContainer }
			);

			wrapper.find("#autocomplete").first().props().onConfirm(option);

			window.dataLayer[0].eventCallback();
			expect(onNavigating).toHaveBeenCalledWith({
				href: "/diabetes1.html",
				element: expect.anything(),
			});
		});

		it("should not load suggestions within the reate limit threshold", () => {
			jest.useFakeTimers();
			const wrapper = shallow(
				<Autocomplete {...defaultProps} source="/url" query="test" />
			);
			const suggestSpy = jest
				.spyOn(wrapper.instance(), "suggest")
				.mockImplementation(() => {});
			wrapper.instance().forceUpdate();
			const source = wrapper.find("#autocomplete").props().source;

			source("que", () => {});
			jest.advanceTimersByTime(rateLimitWait - 1);
			source("quer", () => {});

			expect(suggestSpy).not.toBeCalled();
		});

		it("should load the suggestions only once after the rate limit threshold", () => {
			jest.useFakeTimers();
			const callback = () => {};
			const wrapper = shallow(
				<Autocomplete {...defaultProps} source="/url" query="test" />
			);
			const suggestSpy = jest
				.spyOn(wrapper.instance(), "suggest")
				.mockImplementation(() => {});
			wrapper.instance().forceUpdate();
			const source = wrapper.find("#autocomplete").props().source;

			source("que", callback);
			jest.advanceTimersByTime(rateLimitWait - 10);
			source("quer", callback);
			jest.advanceTimersByTime(rateLimitWait - 5);
			source("query", callback);

			jest.advanceTimersByTime(rateLimitWait);
			expect(suggestSpy).toBeCalledTimes(1);
			expect(suggestSpy).toBeCalledWith("query", callback);
		});
	});

	describe("Non-autocomplete", () => {
		it("should render fallback search box when no source", () => {
			const wrapper = shallow(
				<Autocomplete {...defaultProps} source={false} query="diabetes" />
			);
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it("should render fallback search box in IE8", () => {
			const oldNavigator = global.navigator;
			navigator.userAgent = IE8UserAgent;

			const wrapper = shallow(
				<Autocomplete
					{...defaultProps}
					source="/a-valid-source"
					query="diabetes"
				/>
			);
			expect(toJson(wrapper)).toMatchSnapshot();

			navigator.userAgent = oldNavigator;
		});
	});
});
