import React from "react";
import ChevronUp from "@nice-digital/icons/lib/ChevronUp";
import { Container } from "@nice-digital/nds-container";
import PropTypes from "prop-types";

import styles from "./BackToTop.module.scss";

export const BackToTop = function ({ show, scrollTargetId = "content-start" }) {
	return show ? (
		<div className={styles.wrapper}>
			<nav aria-labelledby="back-to-top-link" className={styles.nav}>
				<a
					className={styles.anchor}
					id="back-to-top-link"
					href={`#${scrollTargetId}`}
				>
					<Container>
						<ChevronUp /> Back to top
					</Container>
				</a>
			</nav>
		</div>
	) : null;
};

BackToTop.propTypes = {
	show: PropTypes.boolean,
	scrollTargetId: PropTypes.string,
};
