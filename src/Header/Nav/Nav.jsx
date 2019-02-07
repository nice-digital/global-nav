import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Nav.module.scss";
import links from "./links.json";

export default class Nav extends Component {
	render() {
		const { accountsLinks } = this.props;

		// Links from NICE Accounts is an object so flatten to a loop for easier trvaersal
		const accountsLinksArray =
			accountsLinks &&
			Object.keys(accountsLinks).map(text => ({
				text: text,
				href: accountsLinks[text]
			}));

		return (
			<nav
				id="header-menu"
				className={classnames(styles.nav, {
					[styles.navExpanded]: this.props.isExpanded
				})}
			>
				<ul className={styles.menu}>
					{accountsLinksArray &&
						accountsLinksArray.map((link, i) => (
							<li
								key={link.href}
								className={classnames(styles.accountsMenuItem, {
									[styles.lastAccountsMenuItem]:
										i === accountsLinksArray.length - 1
								})}
							>
								<a href={link.href}>{link.text}</a>
							</li>
						))}
					{links.map(link => {
						let ariaCurrent = null;

						if (this.props.service && link.id === this.props.service) {
							ariaCurrent = true;

							if (
								location &&
								link.href ===
									`${location.protocol}//${location.host}${location.pathname}`
							) {
								ariaCurrent = "page";
							}
						}

						return (
							<li key={link.id}>
								<a href={link.href} aria-current={ariaCurrent}>
									<span>
										{link.abbreviation ? (
											<abbr title={link.title}>{link.text}</abbr>
										) : (
											link.text
										)}
									</span>
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

Nav.propTypes = {
	service: PropTypes.string,
	isExpanded: PropTypes.bool,
	accountsLinks: PropTypes.object
};
