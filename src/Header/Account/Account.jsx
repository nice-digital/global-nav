import React, {
	useContext,
	useEffect,
	useState,
	useCallback,
	useRef,
} from "react";
import { HeaderContext } from "../context/HeaderContext";
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

function Account(props) {
	// We've left this is state as per the pre-hook implementation
	const [doesUseIdAM] = useState(props.provider == Account.providers.idam);

	const { accountMenuIsExpanded, setAccountMenuIsExpanded } =
		useContext(HeaderContext);

	const keypress = useRef(),
		myAccountButton = useRef(),
		myAccountMenu = useRef();

	const handleMyAccountButtonClick = useCallback((e) => {
		keypress.current = e.pageX;
		setAccountMenuIsExpanded((prevState) => !prevState);
	}, []);

	function focusAccount() {
		myAccountMenu && myAccountMenu.current.setAttribute("tabIndex", -1);
		myAccountMenu && myAccountMenu.current.focus();
	}

	useEffect(() => {
		if (!keypress.current && accountMenuIsExpanded) {
			focusAccount();
		}
	}, [accountMenuIsExpanded]);

	function handleKeyDown(e) {
		if (e.key === "Escape") {
			e.preventDefault();
			setAccountMenuIsExpanded(false);
			myAccountButton && myAccountButton.current.focus();
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

		if (doesUseIdAM) {
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
				.then(function (data) {
					if (props.onLoginStatusChecked) {
						data.links = { ...consultationsResponsesLink, ...data.links };
						props.onLoginStatusChecked(data);
					}
				})
				.catch(function (e) {
					console.warn("Couldn't load account data from NICE accounts", e);
				});
		}
	}, []);

	const { accountsData, environment } = props;

	let signInLink = {};
	if (doesUseIdAM) {
		signInLink = props.links[0];
	} else {
		signInLink["text"] = "Sign in";
		signInLink["url"] = getDomainBaseUrl(environment) + "signin";
	}

	return props.isLoggedIn ? (
		<div className={styles.account} data-tracking="Account panel">
			<button
				className={classnames(styles.button, styles.myAccount)}
				id="my-account-button"
				aria-controls="my-account"
				aria-haspopup="menu"
				aria-expanded={accountMenuIsExpanded}
				onClick={handleMyAccountButtonClick}
				onKeyDown={handleKeyDown}
				ref={myAccountButton}
			>
				My account
			</button>
			<ul
				className={styles.menu}
				id="my-account"
				role="menu"
				aria-hidden={!accountMenuIsExpanded}
				aria-labelledby="my-account-button"
				onKeyDown={handleKeyDown}
				ref={myAccountMenu}
			>
				{accountsData.links &&
					Object.keys(accountsData.links).map(function (text, i) {
						return (
							<li key={i} role="presentation">
								<a
									href={accountsData.links[text]}
									role="menuitem"
									onClick={handleMenuItemClick}
									onKeyDown={handleKeyDown}
									data-hj-suppress={
										accountsData.links[text].indexOf("profile") > -1 ? "" : null
									}
								>
									{text}
								</a>
							</li>
						);
					})}
			</ul>
		</div>
	) : (
		<a
			data-tracking="Sign in"
			href={signInLink.url}
			className={styles.button}
			onClick={handleMenuItemClick}
		>
			{signInLink.text}
		</a>
	);
}

export default Account;

Account.providers = {
	idam: "idam",
	niceAccounts: "niceAccounts",
};

Account.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	onLoginStatusChecked: PropTypes.func,
	accountsData: PropTypes.shape({
		display_name: PropTypes.string,
		thumbnail: PropTypes.string,
		links: PropTypes.object,
	}),
	environment: PropTypes.oneOf(["live", "test", "beta", "local"]),
	provider: PropTypes.oneOf([
		Account.providers.niceAccounts,
		Account.providers.idam,
	]),
	links: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		})
	),
	displayName: PropTypes.string,
};

Account.defaultProps = {
	environment: "live",
	provider: "niceAccounts",
};
