import React from "react";
import PropTypes from "prop-types";
import styles from "./Grid.module.scss";

export function Grid(props) {
	return <div className={styles.grid} {...props} />;
}

export function GridItem(props) {
	return <div className={styles.gridItem} {...props} />;
}

Grid.propTypes = {
	children: PropTypes.node,
};

GridItem.propTypes = {
	children: PropTypes.node,
};
