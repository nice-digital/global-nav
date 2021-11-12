import React, { useState, useEffect, useContext } from "react";
import classnames from "classnames";
import FocusTrap from "focus-trap-react";
import PropTypes from "prop-types";
import useEventListener from "@use-it/event-listener";
import ChevronDown from "@nice-digital/icons/lib/ChevronDown";
import ChevronUp from "@nice-digital/icons/lib/ChevronUp";
import SubNav from "../SubNav";
import Dropdown from "../Dropdown";

import styles from "./NavLinks.module.scss";
import {
	trackEvent,
	defaultEventCategory,
	headerClickEventAction,
} from "../../../tracker";
import {
	GlobalNavContext,
	GlobalNavContextProvider,
} from "../../../GlobalNav.context";

export function NavLinks({
	servicesToDisplay,
	currentService,
	subLinks,
	onNavigating,
	skipLinkId,
	handleScrim,
}) {
	// const [idOfOpenDropdown, setidOfOpenDropdown] = useState(null);
	const [canUseDOM, setCanUseDOM] = useState(false);

	const { handleChangeView, idOfOpenDropdown, setidOfOpenDropdown } =
		useContext(GlobalNavContext);

	useEffect(() => {
		setCanUseDOM(true);
	}, []);

	const ESCAPE_KEYS = ["27", "Escape"];

	useEffect(() => {
		handleScrim(Boolean(idOfOpenDropdown !== null));
		handleChangeView(idOfOpenDropdown);
	}, [idOfOpenDropdown]);

	function handleNavButtonClick(id) {
		setidOfOpenDropdown(id === idOfOpenDropdown ? null : id);
		// TODO: Track dropdown opening
	}

	function handleNavLinkClick(e) {
		e.preventDefault();
		setidOfOpenDropdown(null);

		const href = e.currentTarget.getAttribute("href");
		trackEvent(
			defaultEventCategory,
			headerClickEventAction,
			e.currentTarget.textContent,
			null,
			(function () {
				window.location.href = href;
			})()
		);
	}

	function escapeDropdown({ key }) {
		if (ESCAPE_KEYS.includes(String(key))) setidOfOpenDropdown(null);
	}

	// NOTE: could the following be solved with context?
	function clickOutsideNav(e) {
		var thingYouClickedOn = e.target;
		var areaToAvoid = document.getElementById("header-menu");
		if (!areaToAvoid.contains(thingYouClickedOn)) {
			console.log("non reacty setting id to null");
			setidOfOpenDropdown(null);
		}
	}

	useEventListener(
		"click",
		clickOutsideNav,
		// document.querySelector("#global-nav-header")
		document.querySelector("body")
	);
	// ---------------

	useEventListener("keydown", escapeDropdown);

	const options = {
		clickOutsideDeactivates: true,
		initialFocus: false,
	};

	return (
		<GlobalNavContextProvider>
			<p>State from global nav context ### : {idOfOpenDropdown}</p>
			<FocusTrap active={idOfOpenDropdown !== null} focusTrapOptions={options}>
				<ul className={styles.menuList} aria-labelledby="header-menu-button">
					{servicesToDisplay.map(
						(
							{
								href,
								id,
								text,
								abbreviation,
								title,
								dropdown,
								dropdownComponent,
							},
							index
						) => {
							let ariaCurrent = null;

							if (currentService && id === currentService) {
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
								<li key={id} id={id}>
									{dropdown && canUseDOM ? (
										<button
											onClick={() => handleNavButtonClick(id)}
											aria-current={ariaCurrent}
											className={styles.link}
											aria-controls={`dropdown-${id}`}
											aria-expanded={id === idOfOpenDropdown ? true : false}
										>
											<span aria-label={abbreviation && title}>{text}</span>
											{id === idOfOpenDropdown ? (
												<ChevronUp
													className={styles.icon}
													pointerEvents="none"
												/>
											) : (
												<>
													<ChevronDown
														className={styles.icon}
														pointerEvents="none"
													/>
												</>
											)}
										</button>
									) : (
										<a
											href={href}
											aria-current={ariaCurrent}
											className={styles.link}
											onClick={handleNavLinkClick}
										>
											<span aria-label={abbreviation && title}>{text}</span>
										</a>
									)}
									{dropdown && canUseDOM ? (
										<Dropdown
											component={dropdownComponent}
											className={classnames([
												styles.dropdown,
												id === idOfOpenDropdown && styles.active,
											])}
											text={text}
											nextNavSlug={
												servicesToDisplay[index + 1]
													? servicesToDisplay[index + 1]["id"]
													: skipLinkId
											}
											closeDropdown={() => setidOfOpenDropdown(null)}
											id={`dropdown-${id}`}
										/>
									) : null}
									{ariaCurrent && subLinks && (
										<SubNav
											links={subLinks}
											text={text}
											onNavigating={onNavigating}
										/>
									)}
								</li>
							);
						}
					)}
				</ul>
			</FocusTrap>
		</GlobalNavContextProvider>
	);
}

NavLinks.propTypes = {
	skipLinkId: PropTypes.string,
	servicesToDisplay: PropTypes.array,
	currentService: PropTypes.string,
	subLinks: PropTypes.array,
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	handleScrim: PropTypes.func,
};

export default NavLinks;
