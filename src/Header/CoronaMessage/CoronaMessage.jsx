import React, { Component } from "react";
import Cookies from "js-cookie";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./CoronaMessage.module.scss";

class CoronaMessage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			canUseDOM: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			canUseDOM: true
		});
	}

	handleClick() {
		const { onResize } = this.props;
		if (onResize) {
			const onResizeCallback =
				typeof onResize === "function" ? onResize : window[onResize];

			if (typeof onResizeCallback === "function") {
				onResizeCallback();
			}
		}
	}

	render() {
		const classes = classNames(styles.wrapper);

		return (
			<aside className={classes}>
				<div className={styles.container}>
					<p>
						Read about{" "}
						<a href="https://www.nice.org.uk/covid-19">
							our approach to COVID-19
						</a>
					</p>
				</div>
			</aside>
		);
	}
}

export default CoronaMessage;

CoronaMessage.propTypes = {
	onResize: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
