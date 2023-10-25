import PropTypes from "prop-types";
import styles from "./Grid.module.scss";
import classNames from "classnames";

export function Grid(props) {
	return <div className={styles.grid} {...props} />;
}

export function GridItem({ className, ...props }) {
	return <div className={classNames(styles.gridItem, className)} {...props} />;
}

Grid.propTypes = {
	children: PropTypes.node.isRequired,
};

GridItem.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
