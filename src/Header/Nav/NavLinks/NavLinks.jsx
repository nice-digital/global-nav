import { useEffect, useContext, useCallback, useState } from "react";
import useEscapeKeydown from "../../../hooks/useEscapeKeydown";

import classnames from "classnames";
import PropTypes from "prop-types";
import ChevronDown from "@nice-digital/icons/lib/ChevronDown";
import ChevronUp from "@nice-digital/icons/lib/ChevronUp";
import SubNav from "../SubNav";
import Dropdown from "../Dropdown";
import { HeaderContext } from "../../context/HeaderContext";

import { MoreFromNICE, LifeSciences } from "./../Dropdown/Components";

import styles from "./NavLinks.module.scss";
import {
	trackEvent,
	defaultEventCategory,
	headerClickEventAction,
} from "../../../tracker";

const componentsWithDropdowns = {
	"more-from-nice": MoreFromNICE,
	"life-sciences": LifeSciences,
};

export function NavLinks({
	servicesToDisplay,
	currentService,
	subLinks,
	onNavigating,
	skipLinkId,
}) {
	const [canUseDOM, setCanUseDOM] = useState(false);
	const { idOfOpenDropdown, setidOfOpenDropdown } = useContext(HeaderContext);

	useEffect(() => {
		setCanUseDOM(true);
	}, []);

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
			href,
			() => {
				window.location.assign(href);
			}
		);
	}

	const escapeKeydown = useCallback(
		function (result) {
			if (result) setidOfOpenDropdown(null);
		},
		[setidOfOpenDropdown]
	);

	const { keydownRef } = useEscapeKeydown(escapeKeydown);

	return (
		<ul
			className={styles.menuList}
			aria-labelledby="header-menu-button"
			ref={keydownRef}
		>
			{servicesToDisplay
				.filter(function (item) {
					return item.header;
				})
				.map(
					(
						{ host, landingPath, id, text, abbreviation, title, nestedLinks },
						index
					) => {
						const href = `https://${host}${landingPath}`,
							dropdownComponent = componentsWithDropdowns[id];
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
								{dropdownComponent && canUseDOM ? (
									<button
										onClick={() => handleNavButtonClick(id)}
										aria-current={ariaCurrent}
										className={styles.link}
										aria-controls={`dropdown-${id}`}
										aria-expanded={id === idOfOpenDropdown ? true : false}
										id={`navlink-${id}`}
										aria-label={
											title && abbreviation
												? `${title} (${abbreviation})`
												: text.replace(/\u00A0/g, " ")
										}
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
											aria-label={
												title && abbreviation
													? `${title} (${abbreviation})`
													: text.replace(/\u00A0/g, " ")
											}
										>
											<span>{text}</span>
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
								{dropdownComponent && canUseDOM ? (
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
										id={id}
										currentService={currentService}
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
