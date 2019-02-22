import React, { Component } from "react";
import AccessableAutocomplete from "accessible-autocomplete/react";
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
				<AccessableAutocomplete
					id="autocomplete"
					source={(q, s) => {
						this.suggest(q, s);
					}}
					templates={templates}
					onConfirm={onConfirm}
				/>
				{JSON.stringify(this.props.source)}
			</div>
		);
	}
}

Autocomplete.propTypes = {
	source: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(
			PropTypes.shape({ Title: PropTypes.string, Link: PropTypes.string })
		)
	])
};
