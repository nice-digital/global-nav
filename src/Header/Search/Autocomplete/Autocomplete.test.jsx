import React from "react";
import { getByRole, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Autocomplete, { rateLimitWait } from "./Autocomplete";

import { eventName, eventTimeout } from "./../../../tracker";

describe("Autocomplete", () => {
	const defaultProps = {};

	beforeEach(() => {
		window.dataLayer = [];
	});

	describe("Autocomplete", () => {
		it("should render autocomplete component", () => {
			const { container } = render(
				<Autocomplete {...defaultProps} source="/url" query="test" />
			);
			expect(container).toMatchSnapshot();
		});

		it("should render query into defaultValue attribute on autocomplete component", () => {
			const { getByRole } = render(
				<Autocomplete {...defaultProps} source="/url" query="diabetes" />
			);
			expect(getByRole("combobox")).toHaveValue("diabetes");
		});

		it("should add HotJar allowlist attribute to input box", () => {
			const { getByRole } = render(
				<Autocomplete {...defaultProps} source="/url" query="diabetes" />
			);

			expect(getByRole("combobox")).toHaveAttribute("data-hj-allow", "");
		});

		it("should add 512 character max length", () => {
			const { getByRole } = render(
				<Autocomplete {...defaultProps} source="/url" query="diabetes" />
			);

			expect(getByRole("combobox")).toHaveAttribute("maxlength", "512");
		});

		it("should use provided suggestion template", async () => {
			const option = {
				Title: "diabetes type 1",
				Link: "https://www.nice.org.uk/diabetes1.html",
			};

			const suggestionTemplate = jest.fn();

			const { getByRole } = render(
					<Autocomplete
						{...defaultProps}
						source={[option]}
						suggestionTemplate={suggestionTemplate}
					/>
				),
				input = getByRole("combobox"),
				user = userEvent.setup();

			await user.type(input, "dia");

			await waitFor(() => {
				expect(suggestionTemplate).toHaveBeenCalledTimes(1);
			});

			expect(suggestionTemplate.mock.calls[0][0]).toStrictEqual({
				...option,
				TitleHtml: "<mark>dia</mark>betes type 1",
			});
		});

		it("should push autocomplete select event to the dataLayer", async () => {
			const option = {
				Title: "diabetes type 1",
				Link: "https://www.nice.org.uk/diabetes1.html",
			};

			const { getByRole } = render(
					<Autocomplete {...defaultProps} source={[option]} query="dia" />
				),
				input = getByRole("combobox"),
				user = userEvent.setup();

			await user.type(input, "diab");

			await waitFor(async () => {
				const optionLink = getByRole("link", { name: "diab etes type 1" });
				await user.click(optionLink);
			});

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: "Search",
					eventAction: "Typeahead select",
					eventLabel: option.Title + " | diab",
					destinationUrl: option.Link,
					eventCallback: expect.any(Function),
					eventTimeout: eventTimeout,
				},
			]);
		});

		it.only("should push autocomplete select event to the dataLayer using TypeAheadType property", async () => {
			const option = {
				Title: "diabetes type 1",
				TypeAheadType: "keyword",
				Link: "https://www.nice.org.uk/diabetes1.html",
			};

			const { getByRole } = render(
					<Autocomplete {...defaultProps} source={[option]} query="dia" />
				),
				input = getByRole("combobox"),
				user = userEvent.setup();

			await user.type(input, "diab");

			await waitFor(async () => {
				const optionLink = getByRole("link", { name: "diab etes type 1" });
				await user.click(optionLink);
			});

			expect(window.dataLayer).toEqual([
				{
					event: eventName,
					eventCategory: "Search - Typeahead select",
					eventAction: "Selected: keyword",
					eventLabel: option.Title + " | diab",
					destinationUrl: option.Link,
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
			const { container } = render(
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
			const { container } = render(
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
			const { container } = render(
				<Autocomplete {...defaultProps} source={false} query="diabetes" />
			);
			expect(container).toMatchSnapshot();
		});
	});
});
