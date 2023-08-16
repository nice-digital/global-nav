import React from "react";
import PropTypes from "prop-types";
import styles from "./Pages.module.scss";

import pages from "./links.json";
import TrackedLink from "../../TrackedLink";
import { footerClickEventAction } from "../../tracker";

//TODO add string type for service prop
const Pages = ({ service }) => {
	return (
		<nav className={styles.wrapper}>
			<ul className={styles.list}>
				{pages.map((link) => {
					let href = link.href;
					if (link.hrefOverrides && service) {
						href = link.hrefOverrides[service] || href;
					}
					return (
						<li key={link.text}>
							<TrackedLink
								href={href}
								eventAction={footerClickEventAction}
								eventLabel={link.text}
							>
								{link.text}
							</TrackedLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

Pages.propTypes = {
	service: PropTypes.string,
};

export default Pages;
