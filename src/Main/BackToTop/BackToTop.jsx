import React from "react";
import ChevronUp from "@nice-digital/icons/lib/ChevronUp";
import { Container } from "@nice-digital/nds-container";

import styles from "./BackToTop.module.scss";

export const BackToTop = function () {
	return (
		<div className={styles.wrapper}>
			<nav aria-labelledby="back-to-top-link" className={styles.nav}>
				<a className={styles.anchor} id="back-to-top-link" href="#top">
					<Container>
						<ChevronUp /> Back to top
					</Container>
				</a>
			</nav>
		</div>
	);
};
