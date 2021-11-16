/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import {
	checkIsLoggedIn as niceAccountsLoggedIn,
	getDomainBaseUrl,
} from "./nice-accounts";
import styles from "./Account.module.scss";
import {
	trackEvent,
	defaultEventCategory,
	headerClickEventAction,
} from "../../tracker";

const escapeKeyCode = 27;

function Naccount(props) {
	// constructor(props) {
	// 	super(props);

	// state = {
	// 	isExpanded: false,
	// 	useIdAM: props.provider == Account.providers.idam,
	// };

	// 	this.handleMyAccountButtonClick =
	// 		this.handleMyAccountButtonClick.bind(this);
	// 	this.handleKeyDown = this.handleKeyDown.bind(this);
	// 	this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
	// 	this.handleMegaMenuClick = this.handleMegaMenuClick.bind(this);
	// }

	const [providers] = useState({
		idam: "idam",
		niceAccounts: "niceAccounts",
	});

	const [state, setState] = useState({
		isExpanded: false,
		useIdAM: props.provider == providers.idam,
	});

	console.log("PROPS ################ ", props);
	console.log("PROPS.PROVIDER ################ ", props.provider);
	console.log("Naccount providers ", providers);

	function handleMyAccountButtonClick(e) {
		const isKeyboardEvent = !e.pageX;
		setState(
			function (prevState) {
				return { isExpanded: !prevState.isExpanded };
			},
			function () {
				if (state.isExpanded && isKeyboardEvent) {
					const accountMenu = document.getElementById("my-account");
					accountMenu.setAttribute("tabIndex", -1);
					accountMenu.focus();
				}
			}.bind(this)
		);
	}

	function handleKeyDown(event) {
		if (event.keyCode === escapeKeyCode) {
			event.preventDefault();
			setState({
				isExpanded: false,
			});
			document.getElementById("my-account-button").focus();
		}
	}

	// NOTE: We would benefit from managing the state higher up
	function handleMegaMenuClick(event) {
		let megaMenu = document.querySelector("#header-menu");

		if (megaMenu.contains(event.target)) {
			setState({
				isExpanded: false,
			});
			megaMenu.focus();
		}
	}

	function handleMenuItemClick(e) {
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
				href,
				function () {
					window.location.href = href;
				}
			);
		}
	}

	useEffect(() => {
		const consultationsResponsesLink = {
			"Consultation responses": "https://www.nice.org.uk/consultations/",
		};

		if (state.useIdAM) {
			//nice accounts supplies links like: {"John Holland":"https://accounts.nice.org.uk/users/143980/editprofile","Sign out":"https://accounts.nice.org.uk/signout"}
			//idam supplies links like:[{ key: "My profile", value: "/Account/todo" },{ key: "Sign out", value: "/Account/Logout" }]
			//the following just converts the idam format to the nice accounts format.

			const { displayName } = props;
			const isLoggedIn = !!displayName;

			let links = props.links.reduce(function (links, link) {
				links[link.text] = link.url;
				return links;
			}, {});

			if (isLoggedIn) {
				links = { ...consultationsResponsesLink, ...links };
			}

			const convertedData = {
				display_name: displayName,
				links: links,
			};

			if (props.onLoginStatusChecked) {
				props.onLoginStatusChecked(convertedData);
			}
		} else {
			//NICE accounts
			niceAccountsLoggedIn(props.environment)
				.then(
					function (data) {
						if (props.onLoginStatusChecked) {
							data.links = { ...consultationsResponsesLink, ...data.links };
							props.onLoginStatusChecked(data);
						}
					}.bind(this)
				)
				.catch(
					function (e) {
						console.warn("Couldn't load account data from NICE accounts", e);
					}.bind(this)
				);
		}

		document.addEventListener("click", handleMegaMenuClick);
	}, []);

	// render() {
	const { accountsData, environment } = props;

	let signInLink = {};
	if (state.useIdAM) {
		signInLink = props.links[0];
	} else {
		signInLink["text"] = "Sign in";
		signInLink["url"] = getDomainBaseUrl(environment) + "signin";
	}

	return props.isLoggedIn ? (
		<div className={styles.account}>
			<button
				className={classnames(styles.button, styles.myAccount)}
				id="my-account-button"
				aria-controls="my-account"
				aria-haspopup="menu"
				aria-expanded={state.isExpanded}
				onClick={handleMyAccountButtonClick}
				onKeyDown={handleKeyDown}
			>
				My account
			</button>
			<ul
				className={styles.menu}
				id="my-account"
				role="menu"
				aria-hidden={!state.isExpanded}
				aria-labelledby="my-account-button"
				onKeyDown={handleKeyDown}
			>
				{accountsData.links &&
					Object.keys(accountsData.links).map(
						function (text, i) {
							return (
								<li key={i} role="presentation">
									<a
										href={accountsData.links[text]}
										role="menuitem"
										onClick={handleMenuItemClick}
										onKeyDown={handleKeyDown}
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
			href={signInLink.url}
			className={styles.button}
			onClick={handleMenuItemClick}
		>
			{signInLink.text}
		</a>
	);
	// }
}

export default Naccount;
