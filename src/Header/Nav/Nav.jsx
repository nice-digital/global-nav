import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import SubNav from "./SubNav";
import styles from "./Nav.module.scss";
import rootLinks from "./../../services.json";
import {
	trackEvent,
	defaultEventCategory,
	headerClickEventAction,
} from "../../tracker";

export default class Nav extends Component {
	constructor(props) {
		super(props);

		this.handleNavItemClick = this.handleNavItemClick.bind(this);
		this.handleAccountNavItemClick = this.handleAccountNavItemClick.bind(this);
	}

	handleNavItemClick(e) {
		e.preventDefault();

		const href = e.currentTarget.getAttribute("href");

		// To support IE8
		const eventLabel = e.currentTarget.textContent || e.currentTarget.innerText;

		trackEvent(
			defaultEventCategory,
			headerClickEventAction,
			eventLabel,
			null,
			function () {
				window.location.href = href;
			}
		);
	}

	handleAccountNavItemClick(e) {
		const href = e.currentTarget.getAttribute("href");

		let eventLabel;
		if (href.indexOf("editprofile") > -1) {
			eventLabel = "Edit profile";
		} else if (href.indexOf("signout") > -1) {
			eventLabel = "Sign out";
		} else if (href.indexOf("signin") > -1) {
			eventLabel = "Sign in";
		}

		if (eventLabel) {
			e.preventDefault();
			trackEvent(
				defaultEventCategory,
				headerClickEventAction,
				eventLabel,
				null,
				function () {
					window.location.href = href;
				}
			);
		}
	}

	render() {
		const { accountsLinks } = this.props;

		// Links from NICE Accounts is an object so flatten to a loop for easier traversal
		const accountsLinksArray =
			accountsLinks &&
			Object.keys(accountsLinks).map((text) => ({
				text: text,
				href: accountsLinks[text],
			}));

		// Would need to polyfill Array.prototype.find to rewrite this loop, whilst we support IE
		// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find for support
		let activeService = null;
		for (let i = 0; i < rootLinks.length; i++) {
			const rootLink = rootLinks[i];
			if (this.props.service && rootLink.id === this.props.service) {
				activeService = rootLink;
				break;
			}
		}
		const subLinks = activeService && activeService.links;

		return (
			<div
				id="header-menu"
				className={classnames(
					styles.wrapper,
					{
						[styles.wrapperExpanded]: this.props.isExpanded,
					},
					{
						[styles.wrapperWithSubLinks]: subLinks,
					}
				)}
			>
				<nav className={styles.nav} aria-label="primary navigation">
					<div className={styles.menuWrapper}>
						<ul
							className={styles.menuList}
							aria-labelledby="header-menu-button"
						>
							{rootLinks.map(({ href, id, text, abbreviation, title }) => {
								let ariaCurrent = null;

								if (this.props.service && id === this.props.service) {
									ariaCurrent = true;

									if (
										typeof location !== "undefined" &&
										location &&
										href ===
											`${location.protocol}//${location.host}${location.pathname}`
									) {
										ariaCurrent = "page";
									}
								}

								return (
									<li key={id}>
										<a
											href={href}
											aria-current={ariaCurrent}
											className={styles.link}
											onClick={this.handleNavItemClick}
										>
											{abbreviation ? (
												<>
													<abbr title={title}>
														{text}{" "}
														<span className={styles.visuallyHidden}>
															{title}
														</span>
													</abbr>
													<span aria-hidden="true" className={styles.tooltip}>
														{title}
													</span>
												</>
											) : (
												text
											)}
										</a>
										{ariaCurrent && subLinks && (
											<SubNav
												links={subLinks}
												text={text}
												onNavigating={this.props.onNavigating}
											/>
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
							<ul className={styles.menuList}>
								{accountsLinksArray.map(({ href, text }) => (
									<li key={href}>
										<a
											href={href}
											className={styles.link}
											onClick={this.handleAccountNavItemClick}
										>
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
	accountsLinks: PropTypes.object,
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
