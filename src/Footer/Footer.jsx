import React, { Component } from "react";
import PropTypes from "prop-types";

import Social from "./Social";
import Copyright from "./Copyright";
import styles from "./Footer.module.scss";

export default class Footer extends Component {
	render() {
		return (
			this.props.enabled && (
				<footer className={styles.footer}>
					<Social />
					<Copyright />
				</footer>
			)
		);
	}
}

Footer.propTypes = {
	enabled: PropTypes.bool
};
