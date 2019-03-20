import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Nav.module.scss";
import links from "./links.json";

export default class Nav extends Component {
	render() {
		const { accountsLinks } = this.props;

		// Links from NICE Accounts is an object so flatten to a loop for easier traversal
		const accountsLinksArray =
			accountsLinks &&
			Object.keys(accountsLinks).map(text => ({
				text: text,
				href: accountsLinks[text]
			}));

		return (
			<div
				id="header-menu"
				className={classnames(styles.wrapper, {
					[styles.wrapperExpanded]: this.props.isExpanded
				})}
			>
				<nav className={classnames(styles.nav)}>
					<ul
						className={styles.menu}
						role="menu"
						aria-labelledby="header-menu-button"
					>
						{links.map(({ href, id, text, abbreviation, title }) => {
							let ariaCurrent = null;

							if (this.props.service && id === this.props.service) {
								ariaCurrent = true;

								if (
									location &&
									href ===
										`${location.protocol}//${location.host}${location.pathname}`
								) {
									ariaCurrent = "page";
								}
							}

							return (
								<li key={id} role="presentation">
									<a href={href} aria-current={ariaCurrent} role="menuitem">
										<span>
											{abbreviation ? <abbr title={title}>{text}</abbr> : text}
										</span>
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
				{accountsLinksArray && (
					<nav
						aria-label="My account"
						className={classnames(styles.nav, styles.myAccount)}
					>
						{accountsLinksArray.length > 1 && (
							<h2 className={styles.myAccountHeading}>My account</h2>
						)}
						<ul className={styles.menu}>
							{accountsLinksArray.map(({ href, text }) => (
								<li key={href}>
									<a href={href}>{text}</a>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		);
	}
}

Nav.propTypes = {
	service: PropTypes.string,
	isExpanded: PropTypes.bool,
	accountsLinks: PropTypes.object
};
