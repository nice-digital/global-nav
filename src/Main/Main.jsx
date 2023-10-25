import { BackToTop } from "./BackToTop/BackToTop";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Main.module.scss";

export function Main(props) {
	const { children, className, withPadding = true, ...rest } = props;

	return (
		<main
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
	withPadding: PropTypes.bool,
};

export default Main;
