import React from "react";
import AccessibleAutocomplete from "accessible-autocomplete/react";

import Autocomplete from "./Autocomplete";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { eventName, eventTimeout } from "./../../../tracker";

const IE8UserAgent =
	"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)";

describe("Autocomplete", () => {
	const defaultProps = {};

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
					.getAttribute("data-hj-whitelist")
			).toEqual("");
		});

		it("should push autocomplete select event to the dataLayer", () => {
			document.body.innerHTML = "";
			var appContainer = document.createElement("div");
			document.body.appendChild(appContainer);

			const option = {
				Title: "diabetes type 1",
				Link: "https://www.nice.org.uk/diabetes1.html"
			};

			const wrapper = mount(
				<Autocomplete {...defaultProps} source={[option]} query="diab" />,
				{ attachTo: appContainer }
			);

			wrapper
				.find("#autocomplete")
				.first()
				.props()
				.onConfirm(option);

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: "Search",
					eventAction: "Typeahead select",
					eventLabel: option.Title + " | diab",
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout
				}
			]);
		});

		it("should navigate to selected option in event callback", () => {
			document.body.innerHTML = "";
			var appContainer = document.createElement("div");
			document.body.appendChild(appContainer);

			const option = {
				Title: "diabetes type 1",
				Link: "https://www.nice.org.uk/diabetes1.html"
			};

			const wrapper = mount(
				<Autocomplete {...defaultProps} source={[option]} query="diab" />,
				{ attachTo: appContainer }
			);

			wrapper
				.find("#autocomplete")
				.first()
				.props()
				.onConfirm(option);

			window.dataLayer[0].eventCallback();
			expect(window.location.href).toEqual(
				"https://www.nice.org.uk/diabetes1.html"
			);
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
