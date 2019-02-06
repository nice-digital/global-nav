import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Nav.module.scss";
import links from "./links.json";

export default class Nav extends Component {
	render() {
		const { accountsData } = this.props;

		const accountsLinks =
			accountsData && accountsData.links && Object.keys(accountsData.links);

		return (
			<nav
				id="header-menu"
				className={classnames(styles.nav, {
					[styles.navExpanded]: this.props.isExpanded
				})}
			>
				<ul className={styles.menu}>
					{accountsLinks &&
						accountsLinks.map((text, i) => (
							<li
								key={i}
								className={classnames(styles.accountsMenuItem, {
									[styles.lastAccountsMenuItem]: i === accountsLinks.length - 1
								})}
							>
								<a href={accountsData.links[text]}>{text}</a>
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
	isLoggedIn: PropTypes.bool.isRequired,
	accountsData: PropTypes.shape({
		display_name: PropTypes.string,
		thumbnail: PropTypes.string,
		links: PropTypes.object
	})
};
