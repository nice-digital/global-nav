import React, { Component } from "react";
import PropTypes from "prop-types";
import cksIcon from "./images/cks.svg";

const images = {
	cks: cksIcon
};

import {
	trackEvent,
	defaultEventCategory,
	headerClickEventAction
} from "../../../tracker";

import styles from "./SubNav.module.scss";

export class SubNav extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();

		const { currentTarget } = e;
		const href = currentTarget.getAttribute("href");

		// To support IE8
		const eventLabel =
			currentTarget.textContent ||
			currentTarget.innerText ||
			currentTarget.ariaLabel;

		trackEvent(
			defaultEventCategory,
			headerClickEventAction,
			eventLabel,
			null,
			function() {
				const { onNavigating } = this.props;

				const onNavigatingCallback =
					onNavigating &&
					(typeof onNavigating === "function"
						? onNavigating
						: window[onNavigating]);

				if (typeof onNavigatingCallback === "function") {
					onNavigatingCallback({
						element: currentTarget,
						href: href
					});
				} else window.location.href = href;
			}.bind(this)
		);
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<ul className={styles.list} aria-label={`${this.props.text} links`}>
					{this.props.links.map(
						function(subLink, i) {
							let ariaCurrent = null;

							if (typeof window !== "undefined") {
								if (window.location.pathname === subLink.href) {
									ariaCurrent = "page";
								} else if (window.location.pathname.indexOf(subLink.href) === 0)
									ariaCurrent = true;
							}

							return (
								<li key={i} className={subLink.image && styles.imageLink}>
									<a
										href={subLink.href}
										role="menuitem"
										aria-current={ariaCurrent}
										className={styles.link}
										onClick={this.handleClick}
									>
										{subLink.image ? (
											<img
												aria-label={subLink.text}
												src={images[subLink.image]}
												className={styles.image}
												alt=""
											/>
										) : (
											subLink.text
										)}
									</a>
								</li>
							);
						}.bind(this)
					)}
				</ul>
			</div>
		);
	}
}

export default SubNav;

SubNav.propTypes = {
	text: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			href: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	),
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
