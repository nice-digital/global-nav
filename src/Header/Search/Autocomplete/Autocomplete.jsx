import React, { Component } from "react";
import AccessibleAutocomplete from "accessible-autocomplete/react";
import PropTypes from "prop-types";
import styles from "./Autocomplete.module.scss";

const templates = {
	inputValue: suggestion => suggestion && suggestion.Title,
	suggestion: suggestion =>
		suggestion && `<a href="${suggestion.Link}">${suggestion.Title}</a>`
};

const onConfirm = suggestion => {
	if (suggestion) window.location.href = suggestion.Link;
};

export default class Autocomplete extends Component {
	suggest(query, syncResults) {
		if (this.props.source === false) {
			return;
		}

		if (typeof this.props.source === "object") {
			// TODO: Filter based on query param
			syncResults(this.props.source);
			return;
		}

		fetch(`https://www.nice.org.uk/autocomplete?q=${query}&ajax=ajax`)
			.then(response => response.json())
			.then(data => {
				syncResults(data);
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
						source={(q, s) => {
							this.suggest(q, s);
						}}
						templates={templates}
						onConfirm={onConfirm}
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
