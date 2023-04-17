import React from "react";
import Search from "./Search";

import {
	render,
	createEvent,
	fireEvent,
	waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Search", () => {
	const defaultProps = {};
	let appContainer;

	beforeEach(() => {
		appContainer = document.createElement("div");
		document.body.appendChild(appContainer);
	});

	afterEach(() => {
		document.body.removeChild(appContainer);
	});

	describe("Rendering", () => {
		it("Matches snapshot", () => {
			const { container } = render(
				<Search {...defaultProps} query="test" skipLinkId="content-start" />
			);
			expect(container).toMatchSnapshot();
		});
	});

	describe("Autocomplete", () => {
		it("Passes props to autocomplete component", () => {
			const { getByRole } = render(
					<Search
						{...defaultProps}
						autocomplete="variableName"
						placeholder="Test placeholder"
						query="diabetes"
					/>
				),
				input = getByRole("combobox");

			expect(input).toHaveAttribute("placeholder", "Test placeholder");
			expect(input).toHaveValue("diabetes");
		});

		it("Passes variable name with suggestions and template to autocomplete component", async () => {
			window.variableName = [
				{ Title: "diabetes", Link: "/diabetes" },
				{ Title: "diabetes type 1", Link: "/diabetets-type-1" },
			];
			const suggestionTemplate = jest.fn().mockReturnValue("Test");
			const { getByRole } = render(
					<Search
						{...defaultProps}
						autocomplete={{ suggestions: "variableName", suggestionTemplate }}
						placeholder="Test placeholder"
					/>
				),
				input = getByRole("combobox"),
				user = userEvent.setup();

			await user.type(input, "dia");

			await waitFor(() => {
				expect(suggestionTemplate).toHaveBeenCalledTimes(2);
			});

			expect(suggestionTemplate.mock.calls[0][0]).toStrictEqual({
				Title: "diabetes",
				Link: "/diabetes",
				TitleHtml: "<mark>dia</mark>betes",
				TypeAheadType: undefined,
			});

			expect(suggestionTemplate.mock.calls[1][0]).toStrictEqual({
				Title: "diabetes type 1",
				Link: "/diabetets-type-1",
				TitleHtml: "<mark>dia</mark>betes type 1",
				TypeAheadType: undefined,
			});
		});
	});

	describe("onSearching", () => {
		describe("Form submit and button click", () => {
			it("should call the onSearching prop when the form is submitted", () => {
				const onSearching = jest.fn(),
					{ getByRole } = render(
						<Search {...defaultProps} onSearching={onSearching} />
					),
					search = getByRole("search");

				fireEvent.submit(search);

				expect(onSearching).toHaveBeenCalled();
				expect(onSearching).toHaveBeenCalledTimes(1);
			});

			it("should call onSearching prop when the button is clicked", async () => {
				const onSearching = jest.fn(),
					{ getByRole } = render(
						<Search {...defaultProps} onSearching={onSearching} />
					),
					searchButton = getByRole("button", { name: "Perform search" }),
					user = userEvent.setup();

				await user.click(searchButton);

				expect(onSearching).toHaveBeenCalled();
				expect(onSearching).toHaveBeenCalledTimes(1);
			});
		});

		it("should prevent default and call callback with the search query for a onSearching function", () => {
			const onSearching = jest.fn(),
				{ getByRole } = render(
					<Search {...defaultProps} query="test" onSearching={onSearching} />
				),
				search = getByRole("search"),
				submitEvent = createEvent.submit(search);

			fireEvent(search, submitEvent);

			expect(submitEvent.defaultPrevented).toBe(true);
			expect(onSearching).toHaveBeenCalledWith({ query: "test" });
		});

		it("should prevent default and call callback for a named onSearching global function", () => {
			const onSearching = jest.fn();
			window.onSearchingHandler = onSearching;

			const { getByRole } = render(
					<Search
						{...defaultProps}
						query="test"
						onSearching="onSearchingHandler"
					/>
				),
				search = getByRole("search"),
				submitEvent = createEvent.submit(search);

			fireEvent(search, submitEvent);

			expect(submitEvent.defaultPrevented).toBe(true);
			expect(onSearching).toHaveBeenCalledWith({ query: "test" });
		});

		it("should not prevent default with no onSearching prop", () => {
			const { getByRole } = render(<Search {...defaultProps} />),
				search = getByRole("search"),
				submitEvent = createEvent.submit(search);

			fireEvent(search, submitEvent);

			expect(submitEvent.defaultPrevented).toBe(false);
		});

		it("should not prevent default with missing onSearching global function prop", () => {
			const { getByRole } = render(
					<Search {...defaultProps} onSearching="blahblah" />
				),
				search = getByRole("search"),
				submitEvent = createEvent.submit(search);

			fireEvent(search, submitEvent);

			expect(submitEvent.defaultPrevented).toBe(false);
		});
	});

	describe("enter key", () => {
		it("should call onSearching callback prop if the enter key is pressed", async () => {
			const onSearching = jest.fn(),
				{ getByRole } = render(
					<Search {...defaultProps} onSearching={onSearching} />
				),
				input = getByRole("searchbox"),
				user = userEvent.setup();

			await user.type(input, "{enter}");

			expect(onSearching).toHaveBeenCalledTimes(1);
		});
	});
});
