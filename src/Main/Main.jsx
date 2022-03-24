import React from "react";
import { BackToTop } from "./BackToTop/BackToTop";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Main.module.scss";

export function Main(props) {
	const { children, className, withPadding, ...rest } = props;

	return (
		<main
			withPadding={withPadding}
			className={classnames(
				[styles.main, className],
				withPadding && styles.withPadding
			)}
			{...rest}
		>
			{children}
			<BackToTop />
		</main>
	);
}

Main.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	className: PropTypes.string,
	withPadding: PropTypes.boolean,
};

export default Main;
