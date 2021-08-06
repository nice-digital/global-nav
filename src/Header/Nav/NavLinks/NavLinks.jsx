import React, { useState } from "react";
import PropTypes from "prop-types";
import useEventListener from "@use-it/event-listener";
import SubNav from "../SubNav";
import Dropdown from "../Dropdown";
import styles from "./NavLinks.module.scss";
import {
	trackEvent,
	defaultEventCategory,
	headerClickEventAction,
} from "../../../tracker";

export function NavLinks({
	servicesToDisplay,
	currentService,
	subLinks,
	onNavigating,
	skipLinkId,
}) {
	const [idOfOpenDropdown, setidOfOpenDropdown] = useState(null);

	const ESCAPE_KEYS = ["27", "Escape"];

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
			function () {
				window.location.href = href;
			}
		);
	}

	function escapeDropdown({ key }) {
		if (ESCAPE_KEYS.includes(String(key))) setidOfOpenDropdown(null);
	}

	function clickOutsideNav() {
		setidOfOpenDropdown(null);
	}

	useEventListener("keydown", escapeDropdown);
	useEventListener("click", clickOutsideNav, document.querySelector("main"));

	return (
		<ul className={styles.menuList} aria-labelledby="header-menu-button">
			{servicesToDisplay.map(
				({ href, id, text, abbreviation, title, dropdown }, index) => {
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
							{dropdown ? (
								<button
									onClick={() => handleNavButtonClick(id)}
									aria-current={ariaCurrent}
									className={
										id === idOfOpenDropdown
											? styles.navButtonSelected
											: styles.navButton
									}
								>
									<span aria-label={abbreviation && title}>{text}</span>
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
							{dropdown && (
								<Dropdown
									className={
										id === idOfOpenDropdown
											? styles.dropdownShowing
											: styles.dropdownHidden
									}
									text={text}
									nextNavSlug={
										servicesToDisplay[index + 1]
											? servicesToDisplay[index + 1]["id"]
											: skipLinkId
									}
									toggleDropdown={() => setidOfOpenDropdown(null)}
								/>
							)}
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
	);
}

NavLinks.propTypes = {
	skipLinkId: PropTypes.string,
	servicesToDisplay: PropTypes.array,
	currentService: PropTypes.string,
	subLinks: PropTypes.array,
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default NavLinks;
