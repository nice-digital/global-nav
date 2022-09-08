import React, { useCallback } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@nice-digital/icons/lib/Search";

import Autocomplete from "./Autocomplete";
import SkipLink from "../SkipLink";
import { getCallbackFunction } from "../../utils";

import styles from "./Search.module.scss";

const searchInputSelector = "header form[role='search'] [name='q']";

const Search = function (props) {
	const keyDownHandler = function (e) {
		// Submit the form when we press enter to allow the enter key functionality:
		// The accessible-autocomplete doesn't let you use enter by default
		if (e.key === "Enter" && e.target.id === "autocomplete") {
			const wasSearchActionOverridden = searchSubmitHandler(e);

			if (!wasSearchActionOverridden) {
				const searchForm = document.getElementById("global-nav-search-form");
				if (searchForm) searchForm.submit();
			}
		}
	};

	/**
	 * Event handler for the form submit action
	 *
	 * @param {*} e The event argument
	 * @returns true if the search action was overridden; otherwise false
	 * @memberof Search
	 */
	const searchSubmitHandler = function (e) {
		// If we've got an onSearching prop then cancel the default search behaviour
		// and call the onSearcing callback with the query value.
		const { onSearching } = props;
		if (onSearching) {
			const onSearchingCallback = getCallbackFunction(onSearching);

			if (onSearchingCallback) {
				e.preventDefault();
				const query = document.getElementById("autocomplete").value;
				onSearchingCallback({ query: query });
				return true;
			}
		}

		return false;
	};

	// TODO: Remove this hack to fix https://github.com/alphagov/accessible-autocomplete/issues/434
	// We do this to make our axe tests pass
	// Wait for the search box to appear before removing the aria-activedescendant attribute
	const searchFormRef = useCallback((node) => {
		let searchInput;
		if (node && "MutationObserver" in window) {
			new MutationObserver(() => {
				searchInput =
					searchInput || document.querySelector(searchInputSelector);
				if (
					searchInput &&
					searchInput.getAttribute("aria-activedescendant") === "false"
				) {
					searchInput.setAttribute("aria-activedescendant", "");
				}
			}).observe(node, {
				attributeFilter: ["aria-activedescendant"],
				attributes: true, // See https://stackoverflow.com/a/50593541/486434
				childList: true,
				subtree: true,
			});
		}
	}, []);

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
		<form
			id="global-nav-search-form"
			role="search"
			action={props.url}
			className={styles.search}
			onSubmit={searchSubmitHandler}
			onKeyDown={keyDownHandler}
			ref={searchFormRef}
		>
			{/* eslint jsx-a11y/label-has-for: 0 */}
			<label className={styles.label} htmlFor="autocomplete">
				{props.placeholder}
			</label>
			<Autocomplete
				source={props.autocomplete?.suggestions || props.autocomplete}
				suggestionTemplate={props.autocomplete?.suggestionTemplate}
				placeholder={props.placeholder}
				query={props.query}
				onNavigating={props.onNavigating}
			/>
			<button
				className={styles.button}
				type="submit"
				aria-label="Perform search"
				onClick={searchSubmitHandler}
			>
				<SearchIcon className={styles.icon} />
			</button>
			<SkipLink to={`#${props.skipLinkId}`}>Skip to content</SkipLink>
		</form>
	);
};

export default Search;

Search.propTypes = {
	url: PropTypes.string,
	autocomplete: PropTypes.oneOfType([
		PropTypes.shape({
			suggestions: PropTypes.oneOfType([
				PropTypes.arrayOf(
					PropTypes.shape({
						Title: PropTypes.string.isRequired,
						TitleHtml: PropTypes.string,
						TypeAheadType: PropTypes.string,
						Link: PropTypes.string.isRequired,
					})
				).isRequired,
				PropTypes.string,
			]),
			suggestionTemplate: PropTypes.func,
		}),
		PropTypes.bool,
		PropTypes.string,
		PropTypes.arrayOf(
			PropTypes.shape({
				Title: PropTypes.string.isRequired,
				TitleHtml: PropTypes.string,
				TypeAheadType: PropTypes.string,
				Link: PropTypes.string.isRequired,
			})
		),
	]),
	skipLinkId: PropTypes.string,
	placeholder: PropTypes.string,
	query: PropTypes.string,
	onSearching: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	onNavigating: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Search.defaultProps = {
	url: "/search",
	placeholder: "Search NICE…",
	query: "",
};
