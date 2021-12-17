import React, { useEffect } from "react";
import classnames from "classnames";
import FocusTrap from "focus-trap-react";
import PropTypes from "prop-types";
import useEventListener from "@use-it/event-listener";
import ChevronDown from "@nice-digital/icons/lib/ChevronDown";
import ChevronUp from "@nice-digital/icons/lib/ChevronUp";
import SubNav from "../SubNav";
import Dropdown from "../Dropdown";
import { HeaderContext } from "../../context/HeaderContext";

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
	const [canUseDOM, setCanUseDOM] = React.useState(false);
	const { idOfOpenDropdown, setidOfOpenDropdown } =
		React.useContext(HeaderContext);

	useEffect(() => {
		setCanUseDOM(true);
	}, []);

	const ESCAPE_KEYS = ["27", "Escape", "Esc"];

	function handleNavButtonClick(id) {
		setidOfOpenDropdown(id === idOfOpenDropdown ? null : id);
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

	useEventListener("keydown", escapeDropdown);

	const options = {
		clickOutsideDeactivates: true,
		initialFocus: false,
	};

	return (
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
							nestedLinks,
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
							<li key={id} data-tracking={text}>
								{dropdown && canUseDOM ? (
									<button
										onClick={() => handleNavButtonClick(id)}
										aria-current={ariaCurrent}
										className={styles.link}
										aria-controls={`dropdown-${id}`}
										aria-expanded={id === idOfOpenDropdown ? true : false}
										id={`navlink-${id}`}
										aria-label={abbreviation && title}
									>
										<span>{text}</span>
										{id === idOfOpenDropdown ? (
											<ChevronUp className={styles.icon} pointerEvents="none" />
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
									<>
										<a
											href={href}
											aria-current={ariaCurrent}
											className={styles.link}
											onClick={handleNavLinkClick}
											id={`navlink-${id}`}
										>
											<span aria-label={abbreviation && title}>{text}</span>
											{nestedLinks && (
												<ChevronDown
													className={styles.icon}
													pointerEvents="none"
												/>
											)}
										</a>

										{nestedLinks && (
											<>
												<ul
													id={id}
													className={styles.nonJsDropdown}
													aria-label="More NICE services"
												>
													{nestedLinks.map(({ href, text, id }) => {
														return (
															<li key={id}>
																<a href={href}>{text}</a>
															</li>
														);
													})}
												</ul>
											</>
										)}
									</>
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
