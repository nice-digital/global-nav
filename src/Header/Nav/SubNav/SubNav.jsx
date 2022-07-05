import React, { Component } from "react";
import PropTypes from "prop-types";
import cksIcon from "./images/cks.svg";
import bnfIcon from "./images/bnf.svg";
import bnfcIcon from "./images/bnfc.svg";
import { getCallbackFunction } from "../../../utils";

const images = {
	cks: cksIcon,
	bnf: bnfIcon,
	bnfc: bnfcIcon,
};

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

		const { onNavigating } = this.props;
		const onNavigatingCallback = getCallbackFunction(onNavigating);
		if (onNavigatingCallback) {
			onNavigatingCallback({
				element: currentTarget,
				href: href,
			});
		} else {
			window.location.href = href;
		}
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<ul className={styles.list} aria-label={`${this.props.text} links`}>
					{this.props.links.map(
						function (subLink, i) {
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
										aria-current={ariaCurrent}
										className={styles.link}
										onClick={this.handleClick}
										aria-label={subLink.text}
									>
										{subLink.image ? (
											<img
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
			text: PropTypes.string.isRequired,
		})
	),
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
