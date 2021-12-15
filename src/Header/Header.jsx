import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import LogoIcon from "@nice-digital/icons/lib/LogoFull";

import {
	defaultEventCategory,
	headerClickEventAction,
	trackEvent,
} from "./../tracker";
import OldIEMessage from "./OldIEMessage";
import CoronaMessage from "./CoronaMessage";
import Nav from "./Nav";
import Search from "./Search";
import Account from "./Account";
import SkipLink from "./SkipLink";

import styles from "./Header.module.scss";
import { HeaderContextProvider, HeaderContext } from "./context/HeaderContext";

export function Header(props) {
	const [state, setState] = useState({
		isExpanded: false,
		isLoggedIn: false,
		accountsData: null,
		scrimIsActive: false,
	});

	const searchInputSelector = "header form[role='search'] [name='q']";

	// TODO: Remove this hack to fix https://github.com/alphagov/accessible-autocomplete/issues/434
	// We do this to make our axe tests pass
	// Wait for the search box to appear before removing the aria-activedescendant attribute
	const globalNavWrapperRef = useCallback((node) => {
		let searchInput;
		if (node && "MutationObserver" in window) {
			new MutationObserver(() => {
				searchInput =
					searchInput || document.querySelector(searchInputSelector);
				if (
					searchInput &&
					searchInput.getAttribute("aria-activedescendant") === "false"
				) {
					searchInput.setAttribute("aria-activedescendant", "");
				}
			}).observe(node, {
				attributeFilter: ["aria-activedescendant"],
				attributes: true, // See https://stackoverflow.com/a/50593541/486434
				childList: true,
				subtree: true,
			});
		}
	}, []);

	useEffect(() => {
		if (!document.getElementById(props.skipLinkId)) {
			const firstH1OnPage = document.getElementsByTagName("h1")[0];
			firstH1OnPage
				? firstH1OnPage.setAttribute("id", props.skipLinkId)
				: console.warn(
						`Global nav "skip to link" can't find a H1 tag or an element with the ID of "${props.skipLinkId}"`
				  );
		}
	}, []);

	function handleMobileMenuBtnClick() {
		trackEvent(defaultEventCategory, headerClickEventAction, "Menu");

		setState((prevState) => ({
			isExpanded: !prevState.isExpanded,
		}));
	}

	function handleLogoClick(e) {
		e.preventDefault();

		const href = e.currentTarget.getAttribute("href");

		trackEvent(
			defaultEventCategory,
			headerClickEventAction,
			"Logo",
			null,
			href,
			function () {
				window.location.href = href;
			}
		);
	}

	function handleLoginStatusChecked(accountsData) {
		if (accountsData.display_name) {
			setState({ isLoggedIn: true, accountsData: accountsData });
		} else {
			setState({ isLoggedIn: false, accountsData: accountsData });
		}
	}

	return (
		props.enabled !== false && (
			<HeaderContextProvider>
				<HeaderContext.Consumer>
					{({ idOfOpenDropdown }) => {
						return (
							<span
								id="scrim"
								className={idOfOpenDropdown !== null && styles.scrim}
								aria-hidden="true"
							/>
						);
					}}
				</HeaderContext.Consumer>

				<div
					className={styles.header}
					data-tracking="Global nav"
					ref={globalNavWrapperRef}
				>
					<header aria-label="Site header">
						<ul className={styles.a11yLinks} aria-label="Accessibility links">
							<li>
								<SkipLink to={`#${props.skipLinkId}`}>Skip to content</SkipLink>
							</li>
							<li>
								<SkipLink to="https://www.nice.org.uk/accessibility">
									Accessibility help
								</SkipLink>
							</li>
						</ul>
						<div className={styles.container}>
							<a
								href="https://www.nice.org.uk/"
								aria-label="Home"
								className={styles.home}
								onClick={handleLogoClick}
								data-tracking="Logo"
							>
								<LogoIcon className={styles.icon} width={null} height={null} />
							</a>
							<div className={styles.wrapper}>
								<div className={styles.search}>
									{props.search && (
										<Search
											skipLinkId={props.skipLinkId}
											onNavigating={props.onNavigating}
											{...props.search}
										/>
									)}
								</div>
								<button
									className={styles.mobileMenuBtn}
									id="header-menu-button"
									type="button"
									aria-controls="header-menu"
									aria-expanded={state.isExpanded}
									aria-haspopup="menu"
									aria-label={
										state.isExpanded ? "Close site menu" : "Expand site menu"
									}
									onClick={handleMobileMenuBtnClick}
								>
									{state.isExpanded ? "Close" : "Menu"}
								</button>
								{props.auth !== false && (
									<div className={styles.account}>
										<Account
											onLoginStatusChecked={handleLoginStatusChecked}
											isLoggedIn={state.isLoggedIn}
											accountsData={state.accountsData}
											{...props.auth}
										/>
									</div>
								)}
							</div>
						</div>
						<Nav
							skipLinkId={props.skipLinkId}
							service={props.service}
							isExpanded={state.isExpanded}
							accountsLinks={state.accountsData && state.accountsData.links}
							onNavigating={props.onNavigating}
							additionalSubMenuItems={props.additionalSubMenuItems}
						/>
					</header>
					<CoronaMessage onResize={props.onResize} />
					<OldIEMessage />
				</div>
			</HeaderContextProvider>
		)
	);
}

Header.propTypes = {
	service: PropTypes.string,
	skipLinkId: PropTypes.string,
	enabled: PropTypes.bool,
	search: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	onResize: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	additionalSubMenuItems: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
	search: {},
	skipLinkId: "content-start",
	additionalSubMenuItems: [],
};

export default Header;
