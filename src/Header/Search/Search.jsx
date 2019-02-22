import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@nice-digital/icons/lib/Search";

import Autocomplete from "./Autocomplete";

import styles from "./Search.module.scss";

export default class Search extends Component {
	render() {
		return (
			<form role="search" action={this.props.url} className={styles.search}>
				{/* eslint jsx-a11y/label-has-for: 0 */}
				<label className={styles.label} htmlFor="autocomplete">
					Search term
				</label>
				<Autocomplete source={this.props.autocomplete} />
				<button
					className={styles.button}
					type="submit"
					aria-label="Perform search"
				>
					{!window || typeof SVGRect !== "undefined" ? (
						<SearchIcon className={styles.icon} />
					) : (
						<span className={styles.icon} aria-hidden="true">
							&#x2315;
						</span>
					)}
				</button>
			</form>
		);
	}
}

Search.propTypes = {
	url: PropTypes.string,
	autocomplete: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(
			PropTypes.shape({ Title: PropTypes.string, Link: PropTypes.string })
		)
	])
};

Search.defaultProps = {
	url: "/search"
};
