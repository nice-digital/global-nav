import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.scss";

export function Button(props) {
	return (
		<a
			href={props.to}
			className={classNames([
				styles.button,
				props.variant ? styles[props.variant] : styles.primary,
			])}
		>
			{props.children}
		</a>
	);
}

Button.propTypes = {
	children: PropTypes.node,
	to: PropTypes.string,
	variant: PropTypes.string,
};
