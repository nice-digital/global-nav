import React from "react";
import { BackToTop } from "./BackToTop/BackToTop";
import PropTypes from "prop-types";

import styles from "./Main.module.scss";

export const Main = (props) => {
	const { children, elementType: ElementType = "main", ...rest } = props;

	return (
		<ElementType className={styles.main} {...rest}>
			{children}
			<BackToTop />
		</ElementType>
	);
};

Main.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	elementType: PropTypes.elementType,
};

export default Main;
