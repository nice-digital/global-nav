import React from "react";
import { BackToTop } from "./BackToTop/BackToTop";
import PropTypes from "prop-types";

import styles from "./BackToTop.module.scss";

const Main = function ({ children }) {
	return (
		<main className={styles.main}>
			{children}
			<BackToTop />
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
