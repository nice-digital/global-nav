import { BackToTop } from "./BackToTop/BackToTop";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Main.module.scss";
import { useAwsWafChallenge } from "../hooks/useAwsWafChallenge";

export function Main(props) {
	const {
		children,
		className,
		withPadding = true,
		awsWafScriptURL,
		...rest
	} = props;

	useAwsWafChallenge(awsWafScriptURL);

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
	awsWafScriptURL: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Main;
