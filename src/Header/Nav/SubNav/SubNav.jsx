import React from "react";
import PropTypes from "prop-types";

import styles from "./SubNav.module.scss";

export const SubNav = function(props) {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list} aria-label={`${props.text} links`}>
				{props.links.map(function(subLink, i) {
					let ariaCurrent = null;

					if (window) {
						if (window.location.pathname === subLink.href) {
							ariaCurrent = "page";
						} else if (window.location.pathname.indexOf(subLink.href) === 0)
							ariaCurrent = true;
					}

					return (
						<li key={i}>
							<a
								href={subLink.href}
								role="menuitem"
								aria-current={ariaCurrent}
								className={styles.link}
							>
								{subLink.text}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SubNav;

SubNav.propTypes = {
	text: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			href: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	)
};
