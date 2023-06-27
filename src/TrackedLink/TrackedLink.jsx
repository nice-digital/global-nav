import React, { Component } from "react";
import PropTypes from "prop-types";

import { defaultEventCategory, trackEvent } from "./../tracker";

export default class TrackedLink extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();

		let { eventCategory, eventAction, eventLabel } = this.props;

		const href = e.currentTarget.getAttribute("href");

		trackEvent(
			eventCategory,
			eventAction,
			eventLabel || e.currentTarget.textContent || e.currentTarget.innerText,
			null,
			href,
			(function () {
				window.location.assign(href);
			})()
		);
	}

	render() {
		/* eslint-disable no-unused-vars */
		const {
			children,
			href,
			eventCategory,
			eventAction,
			eventLabel,
			eventValue,
			destinationUrl,
			...props
		} = this.props;
		/* eslint-enable no-unused-vars */

		return (
			<a href={href} onClick={this.handleClick} {...props}>
				{children}
			</a>
		);
	}
}

TrackedLink.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	eventCategory: PropTypes.string,
	eventAction: PropTypes.string.isRequired,
	eventLabel: PropTypes.string,
	eventValue: PropTypes.number,
	destinationUrl: PropTypes.string,
};

TrackedLink.defaultProps = {
	eventCategory: defaultEventCategory,
};
