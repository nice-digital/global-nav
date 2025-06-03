import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import LogoIcon from "@nice-digital/icons/lib/LogoFull";

import {
	defaultEventCategory,
	headerClickEventAction,
	trackEvent,
} from "./../tracker";
import OldIEMessage from "./OldIEMessage";
import Nav from "./Nav";
import Search from "./Search";
import Account from "./Account";
import SkipLink from "./SkipLink";
import { getCallbackFunction } from "../utils";

import styles from "./Header.module.scss";
import { HeaderContextProvider, HeaderContext } from "./context/HeaderContext";

const Header = ({
	skipLinkId = "content-start",
	renderSearchOnly = false,
	onNavigating,
	search = {},
	enabled,
	onRendered,
	auth,
	service,
	additionalSubMenuItems = [],
	onDropdownOpen,
	onDropdownClose,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [accountsData, setAccountsData] = useState(null);

	useEffect(() => {
		if (!document.getElementById(skipLinkId)) {
			const firstH1OnPage = document.getElementsByTagName("h1")[0];

			if (firstH1OnPage) {
				firstH1OnPage.setAttribute("id", skipLinkId);
			}
		}
	}, [skipLinkId]);

	const handleMobileMenuBtnClick = () => {
		trackEvent(defaultEventCategory, headerClickEventAction, "Menu");

		setIsExpanded((prevState) => !prevState);
	};

	const handleLogoClick = (e) => {
		e.preventDefault();

		const href = e.currentTarget.getAttribute("href");

		trackEvent(
			defaultEventCategory,
			headerClickEventAction,
			"Logo",
			null,
			href,
			function () {
				window.location.assign(href);
			}
		);
	};

	const handleLoginStatusChecked = (accountsData) => {
		if (accountsData.display_name) {
			setIsLoggedIn(true);
			setAccountsData(accountsData);
		} else {
			setIsLoggedIn(false);
			setAccountsData(accountsData);
		}
	};

	const dropdownToggleHandler = (idOfOpenDropdown) => {
		// If we've got an onDropdownOpen or onDropdownClose prop call the onDropdownOpen or onDropdownClose callback based on idOfOpenDropdown.

		if (onDropdownOpen && idOfOpenDropdown !== null) {
			const onDropdownOpenCallback = getCallbackFunction(onDropdownOpen);
			if (onDropdownOpenCallback) {
				onDropdownOpenCallback();
			}
		}

		if (onDropdownClose && idOfOpenDropdown == null) {
			const onDropdownCloseCallback = getCallbackFunction(onDropdownClose);
			if (onDropdownCloseCallback) {
				onDropdownCloseCallback();
			}
		}
	};

	if (renderSearchOnly) {
		return (
			<Search skipLinkId={skipLinkId} onNavigating={onNavigating} {...search} />
		);
	}

	return (
		enabled !== false && (
			<HeaderContextProvider>
				<HeaderContext.Consumer>
					{({ idOfOpenDropdown }) => {
						dropdownToggleHandler(idOfOpenDropdown);
						return (
							<span
								id="scrim"
								className={idOfOpenDropdown !== null ? styles.scrim : undefined}
								aria-hidden="true"
							/>
						);
					}}
				</HeaderContext.Consumer>

				<div
					className={styles.header}
					data-tracking="Global nav"
					id="top"
					ref={onRendered}
				>
					<header aria-label="Site header">
						<ul className={styles.a11yLinks} aria-label="Accessibility links">
							<li>
								<SkipLink to={`#${skipLinkId}`}>Skip to content</SkipLink>
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
								aria-label="NICE: National Institute for Health and Care Excellence homepage"
								className={styles.home}
								onClick={handleLogoClick}
								data-tracking="Logo"
							>
								<LogoIcon className={styles.icon} width={null} height={null} />
							</a>
							<div className={styles.wrapper}>
								<div className={styles.search}>
									{search && (
										<Search
											skipLinkId={skipLinkId}
											onNavigating={onNavigating}
											{...search}
										/>
									)}
								</div>
								<button
									className={styles.mobileMenuBtn}
									id="header-menu-button"
									type="button"
									aria-controls="header-menu"
									aria-expanded={isExpanded}
									aria-haspopup="menu"
									aria-label={
										isExpanded ? "Close site menu" : "Expand site menu"
									}
									onClick={handleMobileMenuBtnClick}
								>
									{isExpanded ? "Close" : "Menu"}
								</button>
								{auth !== false && (
									<div className={styles.account}>
										<Account
											onLoginStatusChecked={handleLoginStatusChecked}
											isLoggedIn={isLoggedIn}
											accountsData={accountsData}
											{...auth}
										/>
									</div>
								)}
							</div>
						</div>
						<Nav
							skipLinkId={skipLinkId}
							service={service}
							isExpanded={isExpanded}
							accountsLinks={accountsData && accountsData.links}
							onNavigating={onNavigating}
							additionalSubMenuItems={additionalSubMenuItems}
						/>
					</header>
					<OldIEMessage />
				</div>
			</HeaderContextProvider>
		)
	);
};

export class OldHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false,
			isLoggedIn: false,
			accountsData: null,
			scrimIsActive: false,
		};

		this.handleMobileMenuBtnClick = this.handleMobileMenuBtnClick.bind(this);
		this.handleLoginStatusChecked = this.handleLoginStatusChecked.bind(this);
		this.handleLogoClick = this.handleLogoClick.bind(this);

		this.headerRef = React.createRef(null);
	}

	componentDidMount() {
		if (!document.getElementById(this.props.skipLinkId)) {
			const firstH1OnPage = document.getElementsByTagName("h1")[0];

			if (firstH1OnPage)
				firstH1OnPage.setAttribute("id", this.props.skipLinkId);
		}
	}

	handleMobileMenuBtnClick() {
		trackEvent(defaultEventCategory, headerClickEventAction, "Menu");

		this.setState((prevState) => ({
			isExpanded: !prevState.isExpanded,
		}));
	}

	handleLogoClick(e) {
		e.preventDefault();

		const href = e.currentTarget.getAttribute("href");

		trackEvent(
			defaultEventCategory,
			headerClickEventAction,
			"Logo",
			null,
			href,
			function () {
				window.location.assign(href);
			}
		);
	}

	handleLoginStatusChecked(accountsData) {
		if (accountsData.display_name) {
			this.setState({ isLoggedIn: true, accountsData: accountsData });
		} else {
			this.setState({ isLoggedIn: false, accountsData: accountsData });
		}
	}

	dropdownToggleHandler(idOfOpenDropdown) {
		// If we've got an onDropdownOpen or onDropdownClose prop call the onDropdownOpen or onDropdownClose callback based on idOfOpenDropdown.
		const { onDropdownOpen, onDropdownClose } = this.props;

		if (onDropdownOpen && idOfOpenDropdown !== null) {
			const onDropdownOpenCallback = getCallbackFunction(onDropdownOpen);
			if (onDropdownOpenCallback) {
				onDropdownOpenCallback();
			}
		}

		if (onDropdownClose && idOfOpenDropdown == null) {
			const onDropdownCloseCallback = getCallbackFunction(onDropdownClose);
			if (onDropdownCloseCallback) {
				onDropdownCloseCallback();
			}
		}
	}

	render() {
		if (this.props.renderSearchOnly) {
			return (
				<Search
					skipLinkId={this.props.skipLinkId}
					onNavigating={this.props.onNavigating}
					{...this.props.search}
				/>
			);
		}

		return (
			this.props.enabled !== false && (
				<HeaderContextProvider>
					<HeaderContext.Consumer>
						{({ idOfOpenDropdown }) => {
							this.dropdownToggleHandler(idOfOpenDropdown);
							return (
								<span
									id="scrim"
									className={
										idOfOpenDropdown !== null ? styles.scrim : undefined
									}
									aria-hidden="true"
								/>
							);
						}}
					</HeaderContext.Consumer>

					<div
						className={styles.header}
						data-tracking="Global nav"
						id="top"
						ref={this.props.onRendered}
					>
						<header aria-label="Site header">
							<ul className={styles.a11yLinks} aria-label="Accessibility links">
								<li>
									<SkipLink to={`#${this.props.skipLinkId}`}>
										Skip to content
									</SkipLink>
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
									aria-label="NICE: National Institute for Health and Care Excellence homepage"
									className={styles.home}
									onClick={this.handleLogoClick}
									data-tracking="Logo"
								>
									<LogoIcon
										className={styles.icon}
										width={null}
										height={null}
									/>
								</a>
								<div className={styles.wrapper}>
									<div className={styles.search}>
										{this.props.search && (
											<Search
												skipLinkId={this.props.skipLinkId}
												onNavigating={this.props.onNavigating}
												{...this.props.search}
											/>
										)}
									</div>
									<button
										className={styles.mobileMenuBtn}
										id="header-menu-button"
										type="button"
										aria-controls="header-menu"
										aria-expanded={this.state.isExpanded}
										aria-haspopup="menu"
										aria-label={
											this.state.isExpanded
												? "Close site menu"
												: "Expand site menu"
										}
										onClick={this.handleMobileMenuBtnClick}
									>
										{this.state.isExpanded ? "Close" : "Menu"}
									</button>
									{this.props.auth !== false && (
										<div className={styles.account}>
											<Account
												onLoginStatusChecked={this.handleLoginStatusChecked}
												isLoggedIn={this.state.isLoggedIn}
												accountsData={this.state.accountsData}
												{...this.props.auth}
											/>
										</div>
									)}
								</div>
							</div>
							<Nav
								skipLinkId={this.props.skipLinkId}
								service={this.props.service}
								isExpanded={this.state.isExpanded}
								accountsLinks={
									this.state.accountsData && this.state.accountsData.links
								}
								onNavigating={this.props.onNavigating}
								additionalSubMenuItems={this.props.additionalSubMenuItems}
							/>
						</header>
						<OldIEMessage />
					</div>
				</HeaderContextProvider>
			)
		);
	}
}

//TODO convert proptypes to typescript types
Header.propTypes = {
	service: PropTypes.string,
	skipLinkId: PropTypes.string,
	enabled: PropTypes.bool,
	search: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	onResize: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	onDropdownOpen: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	onDropdownClose: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	onRendered: PropTypes.func,
	additionalSubMenuItems: PropTypes.arrayOf(PropTypes.object),
	renderSearchOnly: PropTypes.bool,
};

OldHeader.propTypes = {
	service: PropTypes.string,
	skipLinkId: PropTypes.string,
	enabled: PropTypes.bool,
	search: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	onResize: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	onDropdownOpen: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	onDropdownClose: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	onRendered: PropTypes.func,
	additionalSubMenuItems: PropTypes.arrayOf(PropTypes.object),
	renderSearchOnly: PropTypes.bool,
};

export default Header;
