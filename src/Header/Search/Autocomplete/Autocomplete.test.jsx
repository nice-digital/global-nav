import React from "react";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Autocomplete, { rateLimitWait } from "./Autocomplete";

import { eventName, eventTimeout } from "./../../../tracker";

import { suggester } from "./suggester";

jest.mock("./suggester", () => ({
	suggester: jest.fn(jest.requireActual("./suggester").suggester),
}));

//let windowAssignMock = jest.fn();

//delete window.location;
//window.location = { assign: windowAssignMock };

describe("Autocomplete", () => {
	const defaultProps = {};

	window.location = { ...window.location, assign: jest.fn() };

	beforeEach(() => {
		window.dataLayer = [];

		suggester.mockClear();
	});

	afterEach(() => {
		window.location.assign.mockClear();
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
				TypeAheadType: undefined,
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

		it("should push autocomplete select event to the dataLayer using TypeAheadType property", async () => {
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

		it("should navigate to selected option in event callback", async () => {
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

			window.dataLayer[0].eventCallback();
			expect(window.location.assign).toHaveBeenCalledWith(
				"https://www.nice.org.uk/diabetes1.html"
			);
		});

		it("should call onNavigating prop function with selected option in event callback", async () => {
			const option = {
					Title: "diabetes type 1",
					Link: "/diabetes1.html",
				},
				onNavigating = jest.fn();

			const { getByRole } = render(
					<Autocomplete
						{...defaultProps}
						source={[option]}
						query="dia"
						onNavigating={onNavigating}
					/>
				),
				input = getByRole("combobox"),
				user = userEvent.setup();

			await user.type(input, "diab");

			await waitFor(async () => {
				const optionLink = getByRole("link", { name: "diab etes type 1" });
				await user.click(optionLink);
			});

			window.dataLayer[0].eventCallback();
			expect(onNavigating).toHaveBeenCalledWith({
				href: "/diabetes1.html",
				element: expect.anything(),
			});
		});

		it("should debounce suggestions", async () => {
			const option = {
				Title: "diabetes type 1",
				Link: "/diabetes1.html",
			};

			const { getByRole, queryAllByRole } = render(
					<Autocomplete {...defaultProps} source={[option]} />
				),
				input = getByRole("combobox"),
				user = userEvent.setup();

			await user.type(input, "dia");
			await user.type(input, "b");
			await user.type(input, "e");

			await waitFor(() => {
				const optionLinks = queryAllByRole("link");
				expect(optionLinks).toHaveLength(1);
			});

			expect(suggester).toBeCalledTimes(1);
			expect(suggester).toBeCalledWith([option], "diabe", 5);
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
