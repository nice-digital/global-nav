import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Nav.module.scss";
import rootLinks from "./links.json";

const SubMenu = function(props) {
	return (
		<div className={styles.subMenuWrapper}>
			<ul className={styles.subMenuList} aria-label={`${props.text} links`}>
				{props.links.map(function(subLink, i) {
					const ariaCurrent =
						window && window.location.pathname === subLink.href ? "page" : null;

					return (
						<li key={i}>
							<a href={subLink.href} role="menuitem" aria-current={ariaCurrent}>
								{subLink.text}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

SubMenu.propTypes = {
	text: PropTypes.string,
	links: PropTypes.array
};

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

		const activeService = rootLinks.find(
			function(link) {
				return this.props.service && link.id === this.props.service;
			}.bind(this)
		);

		const subLinks = activeService && activeService.links;

		return (
			<div
				id="header-menu"
				className={classnames(
					styles.wrapper,
					{
						[styles.wrapperExpanded]: this.props.isExpanded
					},
					{
						[styles.wrapperWithSubLinks]: subLinks
					}
				)}
			>
				<nav className={styles.nav}>
					<div className={styles.menuWrapper}>
						<ul
							className={styles.menuList}
							role="menu"
							aria-labelledby="header-menu-button"
						>
							{rootLinks.map(({ href, id, text, abbreviation, title }) => {
								let ariaCurrent = null;

								if (this.props.service && id === this.props.service) {
									ariaCurrent = true;

									if (
										location &&
										href ===
											`${location.protocol}//${location.host}${
												location.pathname
											}`
									) {
										ariaCurrent = "page";
									}
								}

								return (
									<li key={id} role="presentation">
										<a href={href} aria-current={ariaCurrent} role="menuitem">
											<span>
												{abbreviation ? (
													<abbr title={title}>{text}</abbr>
												) : (
													text
												)}
											</span>
										</a>
										{ariaCurrent && subLinks && (
											<SubMenu links={subLinks} text={text} />
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</nav>
				{accountsLinksArray && (
					<nav
						aria-label="My account"
						className={classnames(styles.nav, styles.myAccount)}
					>
						{accountsLinksArray.length > 1 && (
							<h2 className={styles.myAccountHeading}>My account</h2>
						)}
						<div className={styles.menuWrapper}>
							<ul className={styles.menuList} role="menu">
								{accountsLinksArray.map(({ href, text }) => (
									<li key={href} role="presentation">
										<a href={href} role="menuitem">
											{text}
										</a>
									</li>
								))}
							</ul>
						</div>
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
