import React, { Component } from "react";
import AccessibleAutocomplete from "accessible-autocomplete/react";
import PropTypes from "prop-types";
import styles from "./Autocomplete.module.scss";

import { suggester } from "./suggester";

// The maximum number of autocomplete results to return
const maxResults = 5;

const templates = {
	inputValue: suggestion => suggestion && suggestion.Title,
	suggestion: function(suggestion) {
		return (
			suggestion &&
			`<a href="${suggestion.Link}">${suggestion.TitleHtml ||
				suggestion.Title}</a>`
		);
	}
};

const onConfirm = suggestion => {
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
		return (
			<div className={styles.ac}>
				{this.props.source === false ? (
					<div className="autocomplete__wrapper">
						<input
							type="search"
							className="autocomplete__input autocomplete__input--default"
							placeholder={this.props.placeholder}
						/>
					</div>
				) : (
					<AccessibleAutocomplete
						id="autocomplete"
						placeholder={this.props.placeholder}
						displayMenu="overlay"
						minLength={3}
						source={(q, s) => {
							this.suggest(q, s);
						}}
						templates={templates}
						onConfirm={onConfirm}
						showNoOptionsFound={false}
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
	placeholder: PropTypes.string
};

Autocomplete.defaultProps = {
	source: false
};
