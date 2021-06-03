import React from "react";
import AccessibleAutocomplete from "accessible-autocomplete/react";

import Autocomplete, { rateLimitWait } from "./Autocomplete";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { eventName, eventTimeout } from "./../../../tracker";

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

		it("should add 512 character max length", () => {
			const wrapper = mount(
				<Autocomplete {...defaultProps} source="/url" query="diabetes" />
			);

			expect(
				wrapper
					.getDOMNode()
					.querySelector("input#autocomplete")
					.getAttribute("maxlength")
			).toEqual("512");
		});

		it("should use provided suggestion template", async () => {
			document.body.innerHTML = "";
			var appContainer = document.createElement("div");
			document.body.appendChild(appContainer);

			const option = {
				Title: "diabetes type 1",
				Link: "https://www.nice.org.uk/diabetes1.html",
			};

			const suggestionTemplate = jest.fn();

			const wrapper = mount(
				<Autocomplete
					{...defaultProps}
					source={[option]}
					suggestionTemplate={suggestionTemplate}
				/>,
				{ attachTo: appContainer }
			);

			wrapper
				.find(AccessibleAutocomplete)
				.instance()
				.props.templates.suggestion();

			expect(suggestionTemplate).toHaveBeenCalled();
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

		it("should not load suggestions within the rate limit threshold", () => {
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
	});
});
