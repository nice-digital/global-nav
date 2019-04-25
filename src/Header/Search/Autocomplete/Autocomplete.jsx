import React, { Component } from "react";
import AccessibleAutocomplete from "accessible-autocomplete/react";
import PropTypes from "prop-types";
import styles from "./Autocomplete.module.scss";

import { suggester } from "./suggester";

// The maximum number of autocomplete results to return
const maxResults = 5;

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
	if (suggestion) window.location.href = suggestion.Link;
};

export default class Autocomplete extends Component {
	suggest(query, populateResults) {
		if (this.props.source === false) return;

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
			if (!navigator) return false; // For server rendering
			const ua = navigator.userAgent;
			var msie = ua.indexOf("MSIE ");
			if (msie > 0) {
				return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10) <= 8;
			}

			return false;
		};

		return (
			<div className={styles.ac}>
				{!this.props.source || isIE8() ? (
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
						source={function(q, s) {
							this.suggest(q, s);
						}.bind(this)}
						templates={templates}
						onConfirm={onConfirm}
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
