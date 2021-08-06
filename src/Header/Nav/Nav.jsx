import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import NavLinks from "./NavLinks";
import styles from "./Nav.module.scss";
import services from "./../../services.json";
import {
	trackEvent,
	defaultEventCategory,
	headerClickEventAction,
} from "../../tracker";

export default class Nav extends Component {
	constructor(props) {
		super(props);

		this.handleAccountNavItemClick = this.handleAccountNavItemClick.bind(this);
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

		// Would need to polyfill Array.prototype.find to rewrite these loops, whilst we support IE
		// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find for support
		let activeService = null;
		let internalService = false;
		let servicesToDisplay = services.external; //default to displaying external services.
		for (let i = 0; i < services.internal.length; i++) {
			const internalRootLink = services.internal[i];
			if (this.props.service && internalRootLink.id === this.props.service) {
				internalService = true;
				activeService = internalRootLink;
				servicesToDisplay = [internalRootLink]; //unlike external, internal services dosn't display other internal services.
				break;
			}
		}
		if (!internalService) {
			for (let i = 0; i < services.external.length; i++) {
				const externalService = services.external[i];
				if (this.props.service && externalService.id === this.props.service) {
					activeService = externalService;
					break;
				}
			}
		}
		let additionalSubMenuLinks = [];
		for (let i = 0; i < this.props.additionalSubMenuItems.length; i++) {
			const additionalSubMenuItem = this.props.additionalSubMenuItems[i];
			if (
				typeof additionalSubMenuItem !== "undefined" &&
				additionalSubMenuItem.service === this.props.service &&
				Array.isArray(additionalSubMenuItem.links)
			) {
				additionalSubMenuLinks = additionalSubMenuItem.links.map((link) => ({
					text: link.text,
					href: link.url,
				}));
			}
		}
		const subLinks =
			activeService &&
			activeService.links &&
			activeService.links.concat(additionalSubMenuLinks);

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
						<NavLinks
							skipLinkId={this.props.skipLinkId}
							servicesToDisplay={servicesToDisplay}
							currentService={this.props.service}
							subLinks={subLinks}
							onNavigating={this.props.onNavigating}
						/>
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
	skipLinkId: PropTypes.string,
	service: PropTypes.string,
	isExpanded: PropTypes.bool,
	accountsLinks: PropTypes.object,
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	additionalSubMenuItems: PropTypes.arrayOf(PropTypes.object),
};

Nav.defaultProps = {
	additionalSubMenuItems: [],
};
