import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";
import reset from "./../Reset.module.scss";
import services from "../../../../services.json";

export function Guidance() {
	const baseUrl = services.external.filter(
		(service) => service.id == "guidance"
	)[0].href;

	return (
		<section aria-label="NICE Guidance - dropdown navigation">
			<h2 className="mt--0">Guidance</h2>
			<p>
				Evidence-based recommendations developed by independent committees,
				including professionals and lay members, and consulted on by
				stakeholders.
			</p>

			<Button className={reset.gnButtonCta} variant="cta" to={baseUrl}>
				View guidance
			</Button>

			<div data-tracking="New and updated">
				<h3>New and updated</h3>
				<ul className={styles.inlineList}>
					<li>
						<a href={`${baseUrl}/date`}>This month</a>
					</li>
					<li>
						<a href={`${baseUrl}/lastmonth`}>Last month</a>
					</li>
					<li>
						<a href={`${baseUrl}/last6months`}>Last 6 months</a>
					</li>
				</ul>
			</div>

			<Grid gutter="loose">
				<GridItem cols={12} md={6} data-tracking="Topics">
					<h3>Topics</h3>
					<p>
						Topic pages bring together products on the same subject, for example
						diabetes, mental health and wellbeing or children and young people.
					</p>
					<p className="h5">Find topics by</p>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
						<li>
							<a href={`${baseUrl}/conditions-and-diseases`}>
								Conditions and diseases
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/health-and-social-care-delivery`}>
								Health and social care delivery
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/health-protection`}>Health protection</a>
						</li>
						<li>
							<a href={`${baseUrl}/lifestyle-and-wellbeing`}>
								Lifestyle and wellbeing
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/population-groups`}>Population groups</a>
						</li>
						<li>
							<a href={`${baseUrl}/settings`}>Settings</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={6} data-tracking="Being developed">
					<h3>Being developed</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<h4 className="h5 mb--c">
								<a href={`${baseUrl}/inconsultation`}>In consultation</a>
							</h4>
							<p className="mt--0">
								Guidance and quality standards open for consultation.
							</p>
						</li>
						<li>
							<h4 className="h5 mb--c">
								<a href={`${baseUrl}/indevelopment`}>In development</a>
							</h4>
							<p className="mt--0">
								Guidance, quality standards and advice being developed.
							</p>
						</li>
						<li>
							<h4 className="h5 mb--c">
								<a href={`${baseUrl}/proposed`}>Proposed</a>
							</h4>
							<p className="mt--0">
								Guidance and quality standards that have been proposed for
								development.
							</p>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<div data-tracking="Programmes">
				<h3>Programmes</h3>

				<Grid>
					<GridItem cols={12} md={6}>
						<ul className={styles.listUnstyled}>
							<li>
								<h4 className="h5 mt--0 mb--c">
									<a
										href={`${baseUrl}/published?type=apg,csg,cg,cov,mpg,ph,sg,sc`}
									>
										NICE guidelines
									</a>
								</h4>
								<p className="mt--0">
									Review the evidence across broad health and social care
									topics.
								</p>
							</li>
							<li>
								<h4 className="h5 mt--0 mb--c">
									<a href={`${baseUrl}/published?type=dg`}>
										Diagnostics guidance
									</a>
								</h4>
								<p className="mt--0">
									Review new diagnostic technologies for adoption in
									the&nbsp;NHS.
								</p>
							</li>
							<li>
								<h4 className="h5 mt--0 mb--c">
									<a href={`${baseUrl}/published?type=ipg`}>
										Interventional procedures guidance
									</a>
								</h4>
								<p className="mt--0">
									<span>Review the efficacy and safety of&nbsp;procedures</span>
								</p>
							</li>
						</ul>
					</GridItem>

					<GridItem cols={12} md={6}>
						<ul className={styles.listUnstyled}>
							<li>
								<h4 className="h5 mt--0 mb--c">
									<a href={`${baseUrl}/published?type=ta`}>
										Technology appraisal guidance
									</a>
								</h4>
								<p className="mt--0">
									Review clinical and cost effectiveness of new&nbsp;treatments.
								</p>
							</li>

							<li>
								<h4 className="h5 mt--0 mb--c">
									<a href={`${baseUrl}/published?type=hst`}>
										Highly specialised technologies guidance
									</a>
								</h4>
								<p className="mt--0">
									Review clinical and cost effectiveness of
									specialised&nbsp;treatments.
								</p>
							</li>

							<li>
								<h4 className="h5 mt--0 mb--c">
									<a href={`${baseUrl}/published?type=mtg`}>
										Medical technologies guidance
									</a>
								</h4>
								<p className="mt--0">
									Review new medical devices for adoption in the&nbsp;NHS.
								</p>
							</li>
						</ul>
					</GridItem>
				</Grid>
			</div>
		</section>
	);
}
