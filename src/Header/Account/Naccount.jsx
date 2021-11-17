import React, {
	useContext,
	useEffect,
	useState,
	useCallback,
	useRef,
} from "react";
import { GlobalNavContext } from "./../../GlobalNavContext";
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

function Naccount(props) {
	const [state, setState] = useState({
		useIdAM: props.provider == Naccount.providers.idam,
	});

	const { isExpanded, setIsExpanded } = useContext(GlobalNavContext);

	const keypress = useRef(),
		myAccountButton = useRef(),
		myAccountMenu = useRef();

	const handleMyAccountButtonClick = useCallback((e) => {
		keypress.current = e.pageX;
		setIsExpanded((prevState) => !prevState);
	}, []);

	function focusAccount() {
		myAccountMenu && myAccountMenu.current.setAttribute("tabIndex", -1);
		myAccountMenu && myAccountMenu.current.focus();
	}

	useEffect(() => {
		if (!keypress.current && isExpanded) {
			focusAccount();
		}
	}, [isExpanded]);

	function handleKeyDown(e) {
		if (e.key === "Escape") {
			e.preventDefault();
			setIsExpanded(false);
			myAccountButton && myAccountButton.current.focus();
		}
	}

	// NOTE: We would benefit from managing the state higher up
	// function handleMegaMenuClick(e) {
	// let megaMenu = document.querySelector("#header-menu");
	// if (megaMenu.contains(e.target)) {
	// 	setIsExpanded(false);
	// 	megaMenu.focus();
	// }
	// }

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

		// document.addEventListener("click", handleMegaMenuClick);
	}, []);

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
				aria-expanded={isExpanded}
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
				aria-hidden={!isExpanded}
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
			href={signInLink.url}
			className={styles.button}
			onClick={handleMenuItemClick}
		>
			{signInLink.text}
		</a>
	);
}

export default Naccount;

Naccount.providers = {
	idam: "idam",
	niceAccounts: "niceAccounts",
};

Naccount.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	onLoginStatusChecked: PropTypes.func,
	accountsData: PropTypes.shape({
		display_name: PropTypes.string,
		thumbnail: PropTypes.string,
		links: PropTypes.object,
	}),
	environment: PropTypes.oneOf(["live", "test", "beta", "local"]),
	provider: PropTypes.oneOf([
		Naccount.providers.niceAccounts,
		Naccount.providers.idam,
	]),
	links: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		})
	),
	displayName: PropTypes.string,
};

Naccount.defaultProps = {
	environment: "live",
	provider: "niceAccounts",
};
