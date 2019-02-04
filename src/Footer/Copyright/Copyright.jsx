import React, { Component } from "react";

import styles from "./Copyright.module.scss";

export default class Copyright extends Component {
	render() {
		return (
			<div className={styles.copyright}>
				<nav>
					<ul>
						<li>
							<a href="https://www.nice.org.uk/accessibility">Accessibility</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/freedom-of-information">
								Freedom of information
							</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/glossary">Glossary</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/freedom-of-information">
								Terms and conditions
							</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/privacy-notice">
								Privacy notice
							</a>
						</li>
					</ul>
				</nav>
				<p>
					&copy; NICE {new Date().getFullYear()}. All rights reserved. Subject
					to{" "}
					<a href="https://www.nice.org.uk/terms-and-conditions#notice-of-rights">
						Notice of rights
					</a>
					.
				</p>
			</div>
		);
	}
}
