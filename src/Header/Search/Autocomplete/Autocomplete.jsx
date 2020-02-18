import React, { Component } from "react";
import AccessibleAutocomplete from "accessible-autocomplete/react";
import PropTypes from "prop-types";
import styles from "./Autocomplete.module.scss";

import { suggester } from "./suggester";

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
const debounce = function(
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

const templates = {
	inputValue: function(suggestion) {
		return suggestion && suggestion.Title;
	},
	suggestion: function(suggestion) {
		return (
			suggestion &&
			`<a href="${suggestion.Link}">${suggestion.TitleHtml ||
				suggestion.Title}</a>`
		);
	}
};

const onConfirm = function(suggestion) {
	if (suggestion) {
		const eventCallback = function() {
			window.location.href = suggestion.Link;
		};
		if (suggestion.TypeAheadType != undefined) {
			trackEvent(
				"Search - Typeahead select",
				"Selected: " + suggestion.TypeAheadType,
				(
					suggestion.Title +
					" | " +
					document.getElementById("autocomplete").value
				).toLowerCase(),
				null,
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
				eventCallback
			);
		}
	}
};

export default class Autocomplete extends Component {
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
			.then(response => response.json())
			.then(data => {
				populateResults(data.slice(0, maxResults));
			});
	}

	render() {
		const isIE8 = function() {
			if (typeof navigator === "undefined") return false; // For server rendering
			const ua = navigator.userAgent;
			var msie = ua.indexOf("MSIE ");
			if (msie > 0) {
				return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10) <= 8;
			}

			return false;
		};

		return (
			<div className={styles.ac}>
				{!this.props.source || isIE8() || typeof window === "undefined" ? (
					<div className="autocomplete__wrapper">
						<input
							type="search"
							id="autocomplete"
							name="q"
							className="autocomplete__input autocomplete__input--default"
							placeholder={this.props.placeholder}
							defaultValue={this.props.query}
							data-hj-whitelist=""
						/>
					</div>
				) : (
					<AccessibleAutocomplete
						id="autocomplete"
						name="q"
						placeholder={this.props.placeholder}
						displayMenu="overlay"
						minLength={3}
						source={debounce(this.suggest, false, rateLimitWait, this)}
						templates={templates}
						onConfirm={onConfirm}
						confirmOnBlur={false}
						showNoOptionsFound={false}
						defaultValue={this.props.query}
						ref={function(acElement) {
							// TODO: This relies on an inner implementation detail of the autocomplete component, can we do this in a better way?
							acElement &&
								acElement.elementReferences &&
								acElement.elementReferences[-1] &&
								acElement.elementReferences[-1].setAttribute(
									"data-hj-whitelist",
									""
								);
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
			PropTypes.shape({ Title: PropTypes.string, Link: PropTypes.string })
		)
	]),
	placeholder: PropTypes.string,
	query: PropTypes.string
};

Autocomplete.defaultProps = {
	source: false
};
