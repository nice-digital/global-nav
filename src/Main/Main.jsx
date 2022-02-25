import React from "react";
import ChevronUp from "@nice-digital/icons/lib/ChevronUp";
import { Container } from "@nice-digital/nds-container";
import PropTypes from "prop-types";

import styles from "./BackToTop.module.scss";

const Main = function ({ children }) {
	return (
		<main className={styles.main}>
			{children}
			<div className={styles.wrapper}>
				<nav aria-labelledby="back-to-top-link" className={styles.nav}>
					<a className={styles.anchor} id="back-to-top-link" href="#top">
						<Container>
							<ChevronUp /> Back to top
						</Container>
					</a>
				</nav>
			</div>
		</main>
	);
};

Main.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default Main;
