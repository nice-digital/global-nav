import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { niceAccountsLoggedIn, getDomainBaseUrl } from "./nice-accounts";
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
			useIdAM: this.props.provider == Account.idamProvider
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
			let links = {};
			this.props.links.forEach(function(link) {
				links[link["key"]] = link["value"];
			});
			var convertedData = {
				display_name: this.props.displayName,
				links: links
			};

			if (this.props.onLoginStatusChecked) {
				this.props.onLoginStatusChecked(convertedData);
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
		const { accountsData, environment, provider } = this.props;
		const idamLink = this.props.links[0];

		let signinUrl = this.state.useIdAM
			? idamLink.value
			: getDomainBaseUrl(environment) + "signin";

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
					{accountsData.links &&
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
						)}
				</ul>
			</div>
		) : (
			<a
				href={signinUrl}
				className={styles.button}
				onClick={this.handleMenuItemClick}
			>
				{this.state.useIdAM ? idamLink.key : "Sign in"}
			</a>
		);
	}
}

Account.idamProvider = "idam";

Account.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	onLoginStatusChecked: PropTypes.func,
	accountsData: PropTypes.shape({
		display_name: PropTypes.string,
		thumbnail: PropTypes.string,
		links: PropTypes.object
	}),
	environment: PropTypes.oneOf(["live", "test", "beta", "local"]),
	provider: PropTypes.oneOf(["niceAccounts", Account.idamProvider]),
	links: PropTypes.arrayOf(
		PropTypes.shape({ name: PropTypes.string, value: PropTypes.string })
	),
	displayName: PropTypes.string
};

Account.defaultProps = {
	environment: "live",
	provider: "niceAccounts"
};
