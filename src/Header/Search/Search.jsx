import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@nice-digital/icons/lib/Search";

import Autocomplete from "./Autocomplete";

import styles from "./Search.module.scss";

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
	}

	searchSubmitHandler(e) {
		const { onSearching } = this.props;
		if (onSearching) {
			const onSearchingCallback =
				typeof onSearching === "function" ? onSearching : window[onSearching];

			if (typeof onSearchingCallback === "function") {
				e.preventDefault();
				const query = document.getElementById("autocomplete").value;
				onSearchingCallback({ query: query });
			}
		}
	}

	render() {
		return (
			<form
				role="search"
				action={this.props.url}
				className={styles.search}
				onSubmit={this.searchSubmitHandler}
			>
				{/* eslint jsx-a11y/label-has-for: 0 */}
				<label className={styles.label} htmlFor="autocomplete">
					{this.props.placeholder}
				</label>
				<Autocomplete
					source={this.props.autocomplete}
					placeholder={this.props.placeholder}
					query={this.props.query}
				/>
				<button
					className={styles.button}
					type="submit"
					aria-label="Perform search"
				>
					{!window || typeof window.SVGRect !== "undefined" ? (
						<SearchIcon className={styles.icon} />
					) : (
						// We can remove this fallback when we drop support for IE8
						<span className={styles.icon} aria-hidden="true">
							search
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
		PropTypes.bool,
		PropTypes.string,
		PropTypes.arrayOf(
			PropTypes.shape({ Title: PropTypes.string, Link: PropTypes.string })
		)
	]),
	placeholder: PropTypes.string,
	query: PropTypes.string,
	onSearching: PropTypes.string
};

Search.defaultProps = {
	url: "/search",
	placeholder: "Search NICE…",
	query: ""
};
