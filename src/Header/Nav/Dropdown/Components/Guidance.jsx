import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";

export function Guidance() {
	return (
		<section aria-label="NICE Guidance - dropdown navigation">
			<h2 className="mt--0">Guidance</h2>
			<p>
				Evidence-based recommendations developed by independent committees,
				including professionals and lay members, and consulted on by
				stakeholder.
			</p>
			<Button variant="cta" to="/">
				Find NICE Guidance
			</Button>

			<Grid gutter="loose">
				<GridItem cols={12} md={6}>
					<h3>Most visited guidance topics</h3>
					<p>Guidance grouped by subject, most visited by other people:</p>
					<ul className="list list--unstyled" style={{ columnCount: 2 }}>
						<li>
							<a href="/">Diabetes</a>
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
					</ul>
				</GridItem>
				<GridItem cols={12} md={6}>
					<h3>COVID-19</h3>
					<p>Latest COVID-19 guidance:</p>
					<ul className="list list--unstyled">
						<li>
							<a href="/">
								COVID-19 rapid guideline: vaccine-induced immune
								thrombocytopenia and thrombosis (VITT)
							</a>
						</li>
						<li>
							<a href="/">COVID-19 rapid guideline: managing COVID-19</a>
						</li>
						<li>
							<a href="/">View all COVID-19 guidance</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
		</section>
	);
}
