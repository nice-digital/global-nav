import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@nice-digital/icons/lib/Search";

import Autocomplete from "./Autocomplete";

import styles from "./Search.module.scss";

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			canUseDOM: false,
		};

		this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
		this.keyDownHandler = this.keyDownHandler.bind(this);
	}

	componentDidMount() {
		this.setState({
			canUseDOM: true,
		});
	}

	keyDownHandler(e) {
		// Submit the form when we press enter to allow the enter key functionality:
		// The accessible-autocomplete doesn't let you use enter by default
		if (e.key === "Enter" && e.target.id === "autocomplete") {
			const wasSearchActionOverridden = this.searchSubmitHandler(e);

			if (!wasSearchActionOverridden) {
				const searchForm = document.getElementById("global-nav-search-form");
				if (searchForm) searchForm.submit();
			}
		}
	}

	/**
	 * Event handler for the form submit action
	 *
	 * @param {*} e The event argument
	 * @returns true if the search action was overridden; otherwise false
	 * @memberof Search
	 */
	searchSubmitHandler(e) {
		// If we've got an onSearching prop then cancel the default search behaviour
		// and call the onSearcing callback with the query value.
		const { onSearching } = this.props;
		if (onSearching) {
			const onSearchingCallback =
				typeof onSearching === "function" ? onSearching : window[onSearching];

			if (typeof onSearchingCallback === "function") {
				e.preventDefault();
				const query = document.getElementById("autocomplete").value;
				onSearchingCallback({ query: query });
				return true;
			}
		}

		return false;
	}

	render() {
		return (
			// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
			<form
				id="global-nav-search-form"
				role="search"
				action={this.props.url}
				className={styles.search}
				onSubmit={this.searchSubmitHandler}
				onKeyDown={this.keyDownHandler}
			>
				{/* eslint jsx-a11y/label-has-for: 0 */}
				<label className={styles.label} htmlFor="autocomplete">
					{this.props.placeholder}
				</label>
				<Autocomplete
					source={this.props.autocomplete}
					placeholder={this.props.placeholder}
					query={this.props.query}
					onNavigating={this.props.onNavigating}
				/>
				<button
					className={styles.button}
					type="submit"
					aria-label="Perform search"
					onClick={this.searchSubmitHandler}
				>
					{!this.state.canUseDOM || typeof window.SVGRect !== "undefined" ? (
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
			PropTypes.shape({
				Title: PropTypes.string.isRequired,
				TitleHtml: PropTypes.string,
				Link: PropTypes.string.isRequired,
			})
		),
	]),
	placeholder: PropTypes.string,
	query: PropTypes.string,
	onSearching: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	onNavigating: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Search.defaultProps = {
	url: "/search",
	placeholder: "Search NICE…",
	query: "",
};
