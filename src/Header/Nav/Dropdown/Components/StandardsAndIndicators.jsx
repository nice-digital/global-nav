/* eslint-disable react/prop-types */
import { Button } from "./Button";
import { Grid, GridItem } from "./Grid";
import styles from "./Components.module.scss";
import classnames from "classnames";

export function StandardsAndIndicators({ rootUrl }) {
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
							to={`${rootUrl}/guidance/published?ndt=Quality+standard`}
						>
							View our quality standards
						</Button>
					</p>
					<ul className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a
								href={`${rootUrl}/standards-and-indicators/how-to-use-quality-standards`}
							>
								How to use our quality standards
							</a>
						</li>
						<li>
							<a
								href={`${rootUrl}/standards-and-indicators/timeline-developing-quality-standards`}
							>
								The timeline for developing quality standards
							</a>
						</li>
						<li>
							<a href={`${rootUrl}/standards-and-indicators/get-involved`}>
								Help us develop quality standards
							</a>
						</li>
						<li>
							<a
								href={`${rootUrl}/standards-and-indicators/selecting-and-prioritising-quality-standard-topics`}
							>
								Selecting and prioritising quality standards topics
							</a>
						</li>
						<li>
							<a href={`${rootUrl}/standards-and-indicators/quality-standards`}>
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
						<Button
							variant="primary"
							to={`${rootUrl}/standards-and-indicators/index`}
						>
							View list of indicators
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
