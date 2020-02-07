import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import {
	checkIsLoggedIn as niceAccountsLoggedIn,
	getDomainBaseUrl
} from "./nice-accounts";
import styles from "./Account.module.scss";
import {
	trackEvent,
	defaultEventCategory,
	headerClickEventAction
} from "../../tracker";

const escapeKeyCode = 27;

export default class Account extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false,
			useIdAM: this.props.provider == Account.providers.idam
		};

		this.handleMyAccountButtonClick = this.handleMyAccountButtonClick.bind(
			this
		);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
	}

	handleMyAccountButtonClick(e) {
		const isKeyboardEvent = !e.pageX;
		this.setState(
			function(prevState) {
				return { isExpanded: !prevState.isExpanded };
			},
			function() {
				if (this.state.isExpanded && isKeyboardEvent) {
					const accountMenu = document.getElementById("my-account");
					accountMenu.setAttribute("tabIndex", -1);
					accountMenu.focus();
				}
			}.bind(this)
		);
	}

	handleKeyDown(event) {
		if (event.keyCode === escapeKeyCode) {
			event.preventDefault();
			this.setState({
				isExpanded: false
			});
			document.getElementById("my-account-button").focus();
		}
	}

	handleMenuItemClick(e) {
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
				function() {
					window.location.href = href;
				}
			);
		}
	}

	componentDidMount() {
		if (this.state.useIdAM) {
			if (!this.props.useIdamPopupLogin && !this.props.useIdamInlineLogin) {
				//nice accounts supplies links like: {"John Holland":"https://accounts.nice.org.uk/users/143980/editprofile","Sign out":"https://accounts.nice.org.uk/signout"}
				//idam supplies links like:[{ key: "My profile", value: "/Account/todo" },{ key: "Sign out", value: "/Account/Logout" }]
				//the following just converts the idam format to the nice accounts format.
				const links = this.props.links.reduce(function(links, link) {
					links[link.text] = link.url;
					return links;
				}, {});
				const convertedData = {
					display_name: this.props.displayName,
					links: links
				};

				if (this.props.onLoginStatusChecked) {
					this.props.onLoginStatusChecked(convertedData);
				}
			}
		} else {
			//NICE accounts
			niceAccountsLoggedIn(this.props.environment)
				.then(
					function(data) {
						if (this.props.onLoginStatusChecked) {
							this.props.onLoginStatusChecked(data);
						}
					}.bind(this)
				)
				.catch(
					function(e) {
						console.warn("Couldn't load account data from NICE accounts", e);
					}.bind(this)
				);
		}
	}

	render() {
		const { accountsData, environment } = this.props;

		let signInLink = {};
		if (this.state.useIdAM) {
			if (!this.props.useIdamPopupLogin && !this.props.useIdamInlineLogin) {
				signInLink = this.props.links[0];
			}
		} else {
			signInLink["text"] = "Sign in";
			signInLink["url"] = getDomainBaseUrl(environment) + "signin";
		}

		return this.props.isLoggedIn ? (
			<div className={styles.account}>
				<button
					className={classnames(styles.button, styles.myAccount)}
					id="my-account-button"
					aria-controls="my-account"
					aria-haspopup="menu"
					aria-expanded={this.state.isExpanded}
					onClick={this.handleMyAccountButtonClick}
					onKeyDown={this.handleKeyDown}
				>
					My account
				</button>
				<ul
					className={styles.menu}
					id="my-account"
					role="menu"
					aria-hidden={!this.state.isExpanded}
					aria-labelledby="my-account-button"
					onKeyDown={this.handleKeyDown}
				>
					{this.props.useIdamPopupLogin || this.props.useIdamInlineLogin ? (
						<li key={"idamSignout"} role="presentation">
							<button
								onClick={this.props.onIdAMLogoutClick}
								className={styles.button}
							>
								Sign out
							</button>
						</li>
					) : (
						accountsData.links &&
						Object.keys(accountsData.links).map(
							function(text, i) {
								return (
									<li key={i} role="presentation">
										<a
											href={accountsData.links[text]}
											role="menuitem"
											onClick={this.handleMenuItemClick}
											onKeyDown={this.handleKeyDown}
											data-hj-suppress={
												accountsData.links[text].indexOf("profile") > -1
													? ""
													: null
											}
										>
											{text}
										</a>
									</li>
								);
							}.bind(this)
						)
					)}
				</ul>
			</div>
		) : this.state.useIdAM &&
		  (this.props.useIdamPopupLogin || this.props.useIdamInlineLogin) ? (
			<Fragment>
				{this.props.useIdamInlineLogin && (
					<Fragment>
						<span>Email: </span>
						<input
							type="text"
							onChange={e =>
								this.props.onSignInDetailsChange(true, e.target.value)
							}
						/>
						<span>Password: </span>
						<input
							type="password"
							onChange={e =>
								this.props.onSignInDetailsChange(false, e.target.value)
							}
						/>
					</Fragment>
				)}
				<button onClick={this.props.onIdAMLoginClick} className={styles.button}>
					Sign in
				</button>
			</Fragment>
		) : (
			<a
				href={signInLink.url}
				className={styles.button}
				onClick={this.handleMenuItemClick}
			>
				{signInLink.text}
			</a>
		);
	}
}

Account.providers = {
	idam: "idam",
	niceAccounts: "niceAccounts"
};

Account.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	onLoginStatusChecked: PropTypes.func,
	accountsData: PropTypes.shape({
		display_name: PropTypes.string,
		thumbnail: PropTypes.string,
		links: PropTypes.object
	}),
	environment: PropTypes.oneOf(["live", "test", "beta", "local"]),
	provider: PropTypes.oneOf([
		Account.providers.niceAccounts,
		Account.providers.idam
	]),
	links: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		})
	),
	displayName: PropTypes.string,
	mode: PropTypes.oneOf(["links", "popup", "inline"]),
	useIdamPopupLogin: PropTypes.bool,
	useIdamInlineLogin: PropTypes.bool,
	onIdAMLoginClick: PropTypes.func,
	onIdAMLogoutClick: PropTypes.func,
	onSignInDetailsChange: PropTypes.func
};

Account.defaultProps = {
	environment: "live",
	provider: "niceAccounts"
};
