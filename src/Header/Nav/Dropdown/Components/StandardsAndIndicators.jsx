import React from "react";
import { Button } from "./Button";
import { Grid, GridItem } from "./Grid";
import styles from "./Components.module.scss";
import services from "../../../../services.json";
import classnames from "classnames";

export function StandardsAndIndicators() {
	const baseUrl = services.external.filter(
		(service) => service.id == "standards-and-indicators"
	)[0].href;

	const rootUrl = services.rootUrl;

	return (
		<section aria-label="Standards and indicators - dropdown navigation">
			<Grid gutter="loose">
				<GridItem cols={12} md={6} data-tracking="Standards">
					<h2>Quality standards</h2>
					<p>
						Our quality standards set out priority areas for quality
						improvement. They highlight areas with identified variation in
						current practice.
					</p>
					<p>
						<Button
							variant="primary"
							to="https://www.nice.org.uk/guidance/published?ndt=Quality+standard"
							data-autofocus
						>
							View our quality standards
						</Button>
					</p>
					<ul className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a href={`${baseUrl}/how-to-use-quality-standards`}>
								How to use our quality standards
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/timeline-developing-quality-standards`}>
								The timeline for developing quality standards
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/get-involved`}>
								Help us develop quality standards
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}/selecting-and-prioritising-quality-standard-topics`}
							>
								Selecting and prioritising quality standards topics
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/quality-standards`}>
								About quality standards
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={6} data-tracking="Indicators">
					<h2>Indicators</h2>
					<p>
						Our indicators measure outcomes that reflect the quality of care, or
						processes linked by evidence to improved outcomes.
					</p>
					<p>
						<Button variant="primary" to={`${baseUrl}/index`}>
							View the single indicator menu
						</Button>
					</p>
					<ul className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a
								href={`${rootUrl}/get-involved/meetings-in-public/indicator-advisory-committee`}
							>
								Learn about the committee that develops indicators
							</a>
						</li>
						<li>
							<a href={`${rootUrl}/standards-and-indicators/indicators`}>
								About indicators
							</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
		</section>
	);
}
