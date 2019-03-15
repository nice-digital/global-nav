import React, { Component } from "react";
import PropTypes from "prop-types";

import Social from "./Social";
import Copyright from "./Copyright";
import styles from "./Footer.module.scss";

export default class Footer extends Component {
	render() {
		if (!this.props.enabled) return null;

		return (
			<footer className={styles.footer}>
				<Social />
				<Copyright />
			</footer>
		);
	}
}

Footer.propTypes = {
	enabled: PropTypes.bool
};
