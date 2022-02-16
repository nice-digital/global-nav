import React from "react";
import ChevronUp from "@nice-digital/icons/lib/ChevronUp";
import { Container } from "@nice-digital/nds-container";
import PropTypes from "prop-types";

import styles from "./BackToTop.module.scss";

const checkElementExists = function (elementId) {
	if (document.getElementById(elementId)) {
		return true;
	}
};

export const BackToTop = function ({ scrollTargetId = "content-start" }) {
	return (
		<div className={styles.wrapper}>
			<nav aria-labelledby="back-to-top-link" className={styles.nav}>
				<a
					className={styles.anchor}
					id="back-to-top-link"
					href={
						checkElementExists(scrollTargetId) ? `#${scrollTargetId}` : `#top`
					}
				>
					<Container>
						<ChevronUp /> Back to top
					</Container>
				</a>
			</nav>
		</div>
	);
};

BackToTop.propTypes = {
	scrollTargetId: PropTypes.string,
};
