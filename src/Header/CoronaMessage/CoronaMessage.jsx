import React, { Component } from "react";
import classNames from "classnames";

import styles from "./CoronaMessage.module.scss";

class CoronaMessage extends Component {
	render() {
		const classes = classNames(styles.wrapper);

		return (
			<aside className={classes} aria-label="COVID-19 Notice">
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
