import React from "react";

import styles from "./CoronaMessage.module.scss";

const CoronaMessage = () => (
	<aside className={styles.wrapper}>
		<div className={styles.container}>
			<h2>Coronavirus (COVID-19)</h2>
			<p>
				For information on how NICE is supporting the NHS and social care, view
				our new{" "}
				<a href="https://www.nice.org.uk/coronavirus">
					rapid guidelines and evidence&nbsp;reviews
				</a>
				. Learn about the{" "}
				<a href="https://gov.uk/coronavirus">
					government response to coronavirus on&nbsp;GOV.UK
				</a>
				.
			</p>
		</div>
	</aside>
);

export default CoronaMessage;
