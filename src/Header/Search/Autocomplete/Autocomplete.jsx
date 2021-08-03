import React, { Component } from "react";
import AccessibleAutocomplete from "accessible-autocomplete/react";
import PropTypes from "prop-types";
import styles from "./Autocomplete.module.scss";

import { suggester } from "./suggester";
import { isIosDevice } from "./../../../utils";
import { trackEvent } from "./../../../tracker";

/**
 * Debounce
 * See http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 *
 * @param      {Function}  func       The function to debounce
 * @param      {Integer}  execAsap   Whether to execute the function now
 * @param      {Integer}  threshold  The detection period, in milliseconds
 * @param      {Object}  scope  The context for the debounced function
 * @return     {Function}  { The debounced function }
 */
const debounce = function (
	func,
	execAsap = false,
	threshold = 100,
	scope = null
) {
	let timeout;

	return function debounced() {
		let context = scope || this,
			args = arguments;

		function delayed() {
			if (!execAsap) func.apply(context, args);
			timeout = null;
		}

		if (timeout) clearTimeout(timeout);
		else if (execAsap) func.apply(context, args);

		timeout = setTimeout(delayed, threshold);
	};
};

/** The maximum number of autocomplete results to return */
const maxResults = 5;

/** Delay in millieconds before loading results */
export const rateLimitWait = 300;

const inputValueTemplate = function (suggestion) {
		if (!suggestion || !suggestion.Title) return "";
		return suggestion && suggestion.Title;
	},
	suggestionTemplateDefault = function (suggestion) {
		if (!suggestion || !suggestion.Link) return "";
		return `<a href="${suggestion.Link}">${
			suggestion.TitleHtml || suggestion.Title
		}</a>`;
	};

export default class Autocomplete extends Component {
	constructor(props) {
		super(props);

		this.state = {
			canUseDOM: false,
		};
	}

	componentDidMount() {
		this.setState({
			canUseDOM: true,
		});
	}

	onConfirm(suggestion) {
		if (suggestion) {
			var selectedEl = document.querySelectorAll(
				".autocomplete__option a[href='" + suggestion.Link + "']"
			);

			//This var is declared outside the eventcallback function to avoid
			//loosing the component scope due to hoisting
			// eslint-disable-next-line react/prop-types
			const { onNavigating } = this.props;
			const eventCallback = function () {
				const onNavigatingCallback =
					onNavigating &&
					(typeof onNavigating === "function"
						? onNavigating
						: window[onNavigating]);

				if (typeof onNavigatingCallback === "function") {
					onNavigatingCallback({
						element: selectedEl,
						href: suggestion.Link,
					});
				} else window.location.href = suggestion.Link;
			};

			if (suggestion.TypeAheadType) {
				trackEvent(
					"Search - Typeahead select",
					"Selected: " + suggestion.TypeAheadType,
					(
						suggestion.Title +
						" | " +
						document.getElementById("autocomplete").value
					).toLowerCase(),
					null,
					suggestion.Link,
					eventCallback
				);
			} else {
				trackEvent(
					"Search",
					"Typeahead select",
					suggestion.Title +
						" | " +
						document.getElementById("autocomplete").value,
					null,
					suggestion.Link,
					eventCallback
				);
			}
		}
	}

	suggest(query, populateResults) {
		if (
			this.props.source === false ||
			query === "" ||
			query === this.props.placeholder
		)
			return;

		let source;

		if (Array.isArray(this.props.source)) {
			source = this.props.source;
		}

		if (
			typeof this.props.source === "string" &&
			this.props.source.indexOf("/") === -1
		) {
			source = window[this.props.source];
			if (!source) return;
		}

		if (source) {
			populateResults(suggester(source, query, maxResults));
			return;
		}

		// Default to a URL for asynchronously loading suggestions from the server
		fetch(
			`${this.props.source}${
				this.props.source.indexOf("?") === -1 ? "?" : "&"
			}q=${query}`
		)
			.then((response) => response.json())
			.then((data) => {
				populateResults(data.slice(0, maxResults));
			});
	}

	render() {
		const templates = {
			inputValue: inputValueTemplate,
			suggestion: this.props.suggestionTemplate || suggestionTemplateDefault,
		};

		return (
			<div className={styles.ac}>
				{!this.props.source || !this.state.canUseDOM ? (
					<div className="autocomplete__wrapper">
						<input
							type="search"
							id="autocomplete"
							name="q"
							className="autocomplete__input autocomplete__input--default"
							placeholder={this.props.placeholder}
							defaultValue={this.props.query}
							data-hj-allow=""
							maxLength={512}
						/>
					</div>
				) : (
					<AccessibleAutocomplete
						id="autocomplete"
						name="q"
						placeholder={this.props.placeholder}
						displayMenu={isIosDevice() ? "inline" : "overlay"}
						minLength={3}
						source={debounce(this.suggest, false, rateLimitWait, this)}
						templates={templates}
						onConfirm={function (s) {
							this.onConfirm(s);
						}.bind(this)}
						confirmOnBlur={false}
						showNoOptionsFound={false}
						defaultValue={this.props.query}
						ref={function (acElement) {
							// TODO: This relies on an inner implementation detail of the autocomplete component, can we do this in a better way?
							var inputEl =
								acElement &&
								acElement.elementReferences &&
								acElement.elementReferences[-1];
							if (inputEl) {
								inputEl.setAttribute("data-hj-allow", "");
								inputEl.setAttribute("maxlength", 512);
							}
						}}
					/>
				)}
			</div>
		);
	}
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
