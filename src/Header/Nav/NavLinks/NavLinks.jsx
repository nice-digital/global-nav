import React from "react";
import PropTypes from "prop-types";
import SubNav from "../SubNav";
import styles from "./NavLinks.module.scss";

export function NavLinks({
	servicesToDisplay,
	currentService,
	subLinks,
	onNavigating,
}) {
	return (
		<ul className={styles.menuList} aria-labelledby="header-menu-button">
			{servicesToDisplay.map(({ href, id, text, abbreviation, title }) => {
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
					<li key={id}>
						{/* TODO if it's got a dropdown, do a button */}
						<a
							href={href}
							aria-current={ariaCurrent}
							className={styles.link}
							onClick={this.handleNavItemClick}
						>
							{abbreviation ? (
								<>
									<abbr title={title}>
										{text}{" "}
										<span className={styles.visuallyHidden}>{title}</span>
									</abbr>
									<span aria-hidden="true" className={styles.tooltip}>
										{title}
									</span>
								</>
							) : (
								text
							)}
						</a>
						{ariaCurrent && subLinks && (
							<SubNav
								links={subLinks}
								text={text}
								onNavigating={onNavigating}
							/>
						)}
					</li>
				);
			})}
		</ul>
	);
}

NavLinks.propTypes = {
	servicesToDisplay: PropTypes.Array,
	currentService: PropTypes.string,
	subLinks: PropTypes.Array,
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default NavLinks;
