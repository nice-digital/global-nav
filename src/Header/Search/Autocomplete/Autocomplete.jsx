import React, { Fragment, useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import PropTypes from "prop-types";
import { useDebouncedValue } from "@mantine/hooks/esm/use-debounced-value/use-debounced-value";

import styles from "./Autocomplete.module.scss";

import { suggester } from "./suggester";
import { useIsClient } from "../../../hooks/useIsClient";
import { trackEvent } from "./../../../tracker";
import { getCallbackFunction } from "./../../../utils";

/** The maximum number of autocomplete results to return */
const maxResults = 5;

/** The minimum number of characters that should be entered before the autocomplete will attempt to suggest options. */
const minAutocompleteLength = 3;

/** Delay in millieconds before loading results */
export const rateLimitWait = 100;

const suggestionTemplateDefault = function (suggestion) {
	if (!suggestion || !suggestion.Link) return "";
	return `<a href="${suggestion.Link}">${
		suggestion.TitleHtml || suggestion.Title
	}</a>`;
};

export default function Autocomplete(props) {
	const isClient = useIsClient(),
		[queryText, setQueryText] = useState(props.query || ""),
		[debouncedQueryText] = useDebouncedValue(queryText, rateLimitWait),
		[suggestions, setSuggestions] = useState([]),
		inputChangeHandler = (event) => {
			setQueryText(event.target.value);
		};

	const onValueChangeHandler = (suggestion) => {
		if (!suggestion) return;

		const element = document.querySelector(
				".autocomplete__option a[href='" + suggestion.Link + "']"
			),
			inputText = document.getElementById("autocomplete").value;

		const eventCallback = () => {
			const onNavigatingCallback = getCallbackFunction(props.onNavigating);

			if (onNavigatingCallback) {
				onNavigatingCallback({
					element,
					href: suggestion.Link,
				});
			} else window.location.assign(suggestion.Link);
		};

		if (suggestion.TypeAheadType) {
			trackEvent(
				"Search - Typeahead select",
				"Selected: " + suggestion.TypeAheadType,
				(suggestion.Title + " | " + inputText).toLowerCase(),
				null,
				suggestion.Link,
				eventCallback
			);
		} else {
			trackEvent(
				"Search",
				"Typeahead select",
				suggestion.Title + " | " + inputText,
				null,
				suggestion.Link,
				eventCallback
			);
		}
	};

	useEffect(() => {
		if (
			props.source === false ||
			debouncedQueryText === "" ||
			debouncedQueryText.length < minAutocompleteLength
		) {
			setSuggestions([]);
			return;
		}

		let source;

		if (Array.isArray(props.source)) {
			source = props.source;
		}

		if (typeof props.source === "string" && props.source.indexOf("/") === -1) {
			source = window[props.source];
			if (!source) return;
		}

		if (source) {
			setSuggestions(suggester(source, debouncedQueryText, maxResults));
			return;
		}

		// Default to a URL for asynchronously loading suggestions from the server
		fetch(
			`${props.source}${
				props.source.indexOf("?") === -1 ? "?" : "&"
			}q=${debouncedQueryText}`
		)
			.then((response) => response.json())
			.then((data) => {
				setSuggestions(data.slice(0, maxResults));
			});
	}, [debouncedQueryText]);

	return (
		<div className={styles.ac}>
			{!props.source || !isClient ? (
				<div className="autocomplete__wrapper">
					<input
						type="search"
						id="autocomplete"
						name="q"
						className="autocomplete__input autocomplete__input--default"
						placeholder={props.placeholder}
						defaultValue={props.query}
						data-hj-allow=""
						maxLength={512}
					/>
				</div>
			) : (
				<Combobox value={queryText} onChange={onValueChangeHandler} nullable>
					<Combobox.Label className="visually-hidden">
						{props.placeholder}
					</Combobox.Label>
					<Combobox.Input
						id="autocomplete"
						name="q"
						className="autocomplete__input autocomplete__input--default"
						autoComplete="off"
						maxLength={512}
						data-hj-allow=""
						placeholder={props.placeholder}
						onChange={inputChangeHandler}
					/>
					<Combobox.Options className="autocomplete__menu autocomplete__menu--overlay">
						<Combobox.Option
							as={Fragment}
							value={{ Link: `/search?q=${queryText}`, Title: queryText }}
						>
							{({ active }) => (
								<li
									className={`visually-hidden autocomplete__option ${
										active ? "autocomplete__option--focused" : ""
									}`}
								>
									<a href={`/search?q=${queryText}`}>
										{queryText.length === 0 ? (
											"Empty search"
										) : (
											<>
												Search for <em>{queryText}</em>
											</>
										)}
									</a>
								</li>
							)}
						</Combobox.Option>
						{suggestions.map((suggestion) => (
							<Combobox.Option
								key={suggestion.Title}
								value={suggestion}
								as={Fragment}
							>
								{({ active }) => (
									<li
										className={`autocomplete__option ${
											active ? "autocomplete__option--focused" : ""
										}`}
										dangerouslySetInnerHTML={{
											__html: (
												props.suggestionTemplate || suggestionTemplateDefault
											)(suggestion),
										}}
									/>
								)}
							</Combobox.Option>
						))}
					</Combobox.Options>
				</Combobox>
				// <AccessibleAutocomplete
				// 	id="autocomplete"
				// 	name="q"
				// 	placeholder={props.placeholder}
				// 	displayMenu={isIosDevice() ? "inline" : "overlay"}
				// 	minLength={3}
				// 	source={debounce(this.suggest, false, rateLimitWait, this)}
				// 	templates={templates}
				// 	onConfirm={function (s) {
				// 		this.onConfirm(s);
				// 	}.bind(this)}
				// 	confirmOnBlur={false}
				// 	showNoOptionsFound={false}
				// 	defaultValue={props.query}
				// 	ref={function (acElement) {
				// 		// This relies on an inner implementation detail of the autocomplete component, can we do this in a better way?
				// 		var inputEl =
				// 			acElement &&
				// 			acElement.elementReferences &&
				// 			acElement.elementReferences[-1];
				// 		if (inputEl) {
				// 			inputEl.setAttribute("data-hj-allow", "");
				// 			inputEl.setAttribute("maxlength", 512);
				// 		}
				// 	}}
				// />
			)}
		</div>
	);
}

Autocomplete.propTypes = {
	source: PropTypes.oneOfType([
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
	suggestionTemplate: PropTypes.func,
	placeholder: PropTypes.string,
	query: PropTypes.string,
	onNavigating: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Autocomplete.defaultProps = {
	source: false,
};
