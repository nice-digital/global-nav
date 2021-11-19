import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import reset from "./../Reset.module.scss";
import styles from "./Components.module.scss";
import services from "../../../../services.json";
import classnames from "classnames";

export function StandardsAndIndicators() {
	const baseUrl = services.external.find(
		(service) => service.id == "standards-and-indicators"
	).href;

	const rootUrl = services.rootUrl;

	return (
		<section aria-label="Standards and indicators - dropdown navigation">
			<Grid gutter="loose">
				<GridItem cols={12} md={6}>
					<h2>Quality standards</h2>
					<p>
						Quality standards set out the priority areas for quality improvement
						in health and social care.
					</p>
					<p>
						<Button
							className={reset.gnButtonPrimary}
							to="https://alpha.nice.org.uk/guidance/published?type=qs"
						>
							View quality standards
						</Button>
					</p>
					<ul className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a href={`${baseUrl}/how-to-use-quality-standards`}>
								How we use quality standards
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/timeline-developing-quality-standards`}>
								Timeline-quality standards development
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/get-involved`}>
								Help develop quality standards
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
							<a
								href={`${baseUrl}/developing-nice-quality-standards-/quality-standards-topic-library`}
							>
								Quality standard topic library
							</a>
						</li>
						<li>
							<a
								href={`${rootUrl}/Media/Default/Standards-and-indicators/qs-forward-planner.xlsx`}
							>
								Upcoming quality standards - forward planner
							</a>
						</li>
						<li>
							<a
								href={`${rootUrl}/about/what-we-do/into-practice/measuring-the-uptake-of-nice-guidance`}
							>
								Measuring uptake of quality standards
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={6}>
					<h2>Indicators</h2>
					<p>
						NICE indicators measure outcomes that reflect the quality of care,
						or processes linked, by evidence, to improved outcomes.
					</p>
					<p>
						<Button className={reset.gnButtonPrimary} to={`${baseUrl}/index`}>
							View indicators
						</Button>
					</p>
					<ul className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a
								href={`${rootUrl}/media/default/Get-involved/Meetings-In-Public/indicator-advisory-committee/ioc-process-guide.pdf`}
							>
								How we develop indicators for the NICE menu (PDF)
							</a>
						</li>
						<li>
							<a
								href={`${rootUrl}/get-involved/meetings-in-public/indicator-advisory-committee`}
							>
								Learn about the committee that develops indicators
							</a>
						</li>
						<li>
							<a
								href={`${rootUrl}/Media/Default/Standards-and-indicators/new-updated-retired-indicators.docx`}
							>
								New, updated and retired indicators: September 2020 (Word)
							</a>
						</li>
						<li>
							<a
								href={`${rootUrl}/Media/Default/Standards-and-indicators/full-indicator-menu.docx`}
							>
								NICE indicator menu (Word)
							</a>
						</li>
						<li>
							<a
								href={`${rootUrl}/Media/Default/Standards-and-indicators/hypertension-indicator-pack.pptx`}
							>
								Hypertension indicator pack (PowerPoint)
							</a>
						</li>
						<li>
							<a
								href={`${rootUrl}/Media/Default/Standards-and-indicators/qof-indicator-assessment-report.pdf`}
							>
								QOF indicator assessment report (PDF)
							</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
		</section>
	);
}
