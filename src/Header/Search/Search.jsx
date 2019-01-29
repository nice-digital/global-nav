import React, { Component } from "react";
import SearchIcon from "@nice-digital/icons/lib/Search";

import Autocomplete from "./Autocomplete";

import styles from "./Search.module.scss";

export default class Search extends Component {
	render() {
		return (
			<form role="search" action="/search" className={styles.search}>
				{/* eslint jsx-a11y/label-has-for: 0 */}
				<label htmlFor="autocomplete">Search term</label>
				<Autocomplete />
				<button type="submit" aria-label="Perform search">
					{!window || typeof SVGRect !== "undefined" ? (
						<SearchIcon />
					) : (
						<span role="img" aria-label="Magnifying glass">
							&#x1F50E;
						</span>
					)}
				</button>
			</form>
		);
	}
}
