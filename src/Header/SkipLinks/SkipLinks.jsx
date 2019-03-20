import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./SkipLinks.module.scss";

export default class SkipLinks extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		const href = e.currentTarget.getAttribute("href");

		if (href && href.indexOf("#") === 0) {
			const id = href.split("#")[1],
				element = document.getElementById(id);

			if (element) {
				e.preventDefault();

				element.setAttribute("tabIndex", "-1");
				element.focus();

				window.scrollTo(0, element.offsetTop);
			} else {
				console.warn(`Skip link target with id ${id} doesn't exist`);
			}
		}
	}

	render() {
		return (
			<ul className={styles.list} aria-label="Accessibility links">
				<li>
					<a
						href={`#${this.props.skipLinkId}`}
						className={styles.link}
						onClick={this.handleClick}
					>
						Skip to content
					</a>
				</li>
				<li>
					<a
						href="https://www.nice.org.uk/accessibility"
						className={styles.link}
					>
						Accessibility help
					</a>
				</li>
			</ul>
		);
	}
}

SkipLinks.propTypes = {
	skipLinkId: PropTypes.string.isRequired
};
