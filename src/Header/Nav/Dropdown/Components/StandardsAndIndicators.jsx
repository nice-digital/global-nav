import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";
import services from "../../../../services.json";
import classnames from "classnames";

export function StandardsAndIndicators() {
	const baseUrl = services.external.find(
		(service) => service.text == "Standards and indicators"
	).href;

	return (
		<section aria-label="Standards and indicators - dropdown navigation">
			<Grid gutter="loose">
				<GridItem cols={12} md={6}>
					<h3>Quality standards</h3>
					<p>
						Quality standards set out the priority areas for quality improvement
						in health and social care.
					</p>
					<Button
						variant="primary"
						to="https://alpha.nice.org.uk/guidance/published?type=qs"
					>
						View quality standards
					</Button>

					<ol className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a href={`${baseUrl}how-to-use-quality-standards`}>
								How we use quality standards
							</a>
						</li>
						<li>
							<a href={`${baseUrl}timeline-developing-quality-standards`}>
								Timeline-quality standards development
							</a>
						</li>
						<li>
							<a href={`${baseUrl}get-involved`}>
								Help develop quality standards
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}selecting-and-prioritising-quality-standard-topics`}
							>
								Selecting and prioritising quality standards topics
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}developing-nice-quality-standards-/quality-standards-topic-library`}
							>
								Quality standard topic library
							</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/Media/Default/Standards-and-indicators/qs-forward-planner.xlsx">
								Upcoming quality standards - forward planner
							</a>
						</li>
						<li>
							<a href="https://alpha.nice.org.uk/about/what-we-do/into-practice/measuring-the-uptake-of-nice-guidance">
								Measuring uptake of quality standards
							</a>
						</li>
					</ol>
				</GridItem>
				<GridItem cols={12} md={6}>
					<h3>Indicators</h3>
					<p>
						NICE indicators measure outcomes that reflect the quality of care,
						or processes linked, by evidence, to improved outcomes.
					</p>
					<Button variant="primary" to={`${baseUrl}index`}>
						View indicators
					</Button>

					<ol className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a href="https://www.nice.org.uk/media/default/Get-involved/Meetings-In-Public/indicator-advisory-committee/ioc-process-guide.pdf">
								How we develop indicators for the NICE menu (PDF)
							</a>
						</li>
						<li>
							<a href="https://alpha.nice.org.uk/get-involved/meetings-in-public/indicator-advisory-committee">
								Learn about the committee that develops indicators
							</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/Media/Default/Standards-and-indicators/new-updated-retired-indicators.docx">
								New, updated and retired indicators: September 2020 (Word)
							</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/Media/Default/Standards-and-indicators/full-indicator-menu.docx">
								NICE indicator menu (Word)
							</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/Media/Default/Standards-and-indicators/hypertension-indicator-pack.pptx">
								Hypertension indicator pack (PowerPoint)
							</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/Media/Default/Standards-and-indicators/qof-indicator-assessment-report.pdf">
								QOF indicator assessment report (PDF)
							</a>
						</li>
					</ol>
				</GridItem>
			</Grid>
		</section>
	);
}
