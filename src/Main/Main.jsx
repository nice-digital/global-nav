import { BackToTop } from "./BackToTop/BackToTop";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Main.module.scss";
import { awsWafScriptURLPropType } from "../aws-waf/propTypes";
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
	awsWafScriptURL: awsWafScriptURLPropType,
};

export default Main;
