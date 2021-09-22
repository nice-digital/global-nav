import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";

export function Guidance() {
	return (
		<section aria-label="NICE Guidance - dropdown navigation">
			<h2 className="mt--0">Guidance</h2>
			<p>
				Evidence-based recommendations developed by independent committees,
				including professionals and lay members, and consulted on by
				stakeholders.
			</p>

			<Button variant="primary" to="/">
				Explore all guidance
			</Button>

			<Grid gutter="loose">
				<GridItem cols={12} md={9}>
					<h3>Most visited guidance topics by other people</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 3 }}>
						<li>
							<a href="/">COVID-19</a>
						</li>
						<li>
							<a href="/">Mental health and wellbeing</a>
						</li>
						<li>
							<a href="/">Depression</a>
						</li>
						<li>
							<a href="/">Chronic obstructive pulmonary disease</a>
						</li>
						<li>
							<a href="/">Stroke and transient ischaemic attack</a>
						</li>
						<li>
							<a href="/">Children and young people</a>
						</li>
						<li>
							<a href="/">Anxiety</a>
						</li>
						<li>
							<a href="/">Medicines management</a>
						</li>
						<li>
							<a href="/">Stroke and transient ischaemic attack</a>
						</li>
						<li>
							<a href="/">Children and young people</a>
						</li>
						<li>
							<a href="/">Anxiety</a>
						</li>
						<li>
							<a href="/">Medicines management</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3>Browse guidance</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href="/">In consultation</a>
						</li>
						<li>
							<a href="/">In development</a>
						</li>
						<li>
							<a href="/">Proposed</a>
						</li>
						<li>
							<a href="/">New and updated</a>
						</li>
						<li>
							<a href="/">By programme</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<Button variant="inverse" to="/">
				View all guidance topics
			</Button>
		</section>
	);
}
