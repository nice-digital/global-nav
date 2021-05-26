import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./SkipLink.module.scss";

export default class SkipLink extends Component {
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
				window.scrollTo(0, this.getYOffset(element));
			} else {
				console.warn(`Skip link target with id ${id} doesn't exist`);
			}
		}
	}

	// See https://stackoverflow.com/a/442474/486434
	getYOffset(el) {
		let _y = 0;
		while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
			_y += el.offsetTop - el.scrollTop;
			el = el.offsetParent;
		}
		return _y;
	}

	render() {
		return (
			<a
				href={this.props.to}
				className={styles.link}
				onClick={this.handleClick}
			>
				{this.props.children}
			</a>
		);
	}
}

SkipLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
