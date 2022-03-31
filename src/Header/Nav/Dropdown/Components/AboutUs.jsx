import React from "react";
import { Button } from "./Button";
import { Grid, GridItem } from "./Grid";
import styles from "./Components.module.scss";
import services from "../../../../services.json";
import classnames from "classnames";

export function AboutUs() {
	const baseUrl = services.external.filter(
		(service) => service.id == "about"
	)[0].href;

	const rootUrl = services.rootUrl;

	return (
		<section aria-label="About - navigation">
			<h2 className="mt--0">About</h2>
			<p>
				We provide national guidance and advice to improve health and social
				care.
			</p>
			<Button variant="cta" to={baseUrl}>
				Explore about
			</Button>

			<Grid gutter="loose">
				<GridItem
					data-tracking="Our programmes"
					className={classnames(styles.aboutCol, styles.aboutCol1)}
				>
					<h3 className="mt--d">Our programmes</h3>
					<p>Learn about the information we produce.</p>
					<ul className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a href={`${baseUrl}/what-we-do/our-programmes/nice-guidance`}>
								Guidance
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/what-we-do/our-programmes/nice-advice`}>
								Advice
							</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/standards-and-indicators/quality-standards">
								Quality standards
							</a>
						</li>
						<li>
							<a href="https://www.nice.org.uk/standards-and-indicators/indicators">
								Indicators
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/what-we-do/digital-health`}>
								Digital health
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/what-we-do/our-programmes/topic-selection`}>
								Topic selection
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem
					data-tracking="Get involved"
					className={classnames(styles.aboutCol)}
				>
					<h3 className="mt--d">Get involved</h3>
					<ul className={classnames(styles.listColumnar, "mt--d")}>
						<li>
							<p>Understand how decisions are made:</p>
							<a href={`${rootUrl}/get-involved/meetings-in-public`}>
								Attend a committee meeting
							</a>
						</li>
						<li>
							<p>Comment on draft guidance:</p>
							<a href={`${rootUrl}/get-involved/consultations`}>
								Guidance in consultation
							</a>
						</li>
						<li>
							<p>Be part of a guidance committee:</p>
							<a href={`${rootUrl}/get-involved/our-committees`}>
								Join a committee
							</a>
						</li>
						<li>
							<p>Help develop our products:</p>
							<a href={`${rootUrl}/get-involved/stakeholder-registration`}>
								Register as a stakeholder
							</a>
						</li>
						<li>
							<p>Putting you at the heart of our work:</p>
							<a
								href={`${rootUrl}/nice-communities/nice-and-the-public/public-involvement`}
							>
								Public involvement
							</a>
						</li>
						<li>
							<p>Test our guideline prototype:</p>
							<a
								href={`${rootUrl}/get-involved/help-shape-the-future-of-nice-guidelines`}
							>
								Help shape the future of NICE guidelines
							</a>
						</li>
					</ul>

					<Grid>
						<GridItem data-tracking="What we do">
							<h3 className="mt--d">What we do</h3>
							<ul className={classnames(styles.listUnstyled, "mt--d")}>
								<li>
									<a href={`${baseUrl}/nice-communities/social-care`}>
										Social care
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/what-we-do/life-sciences`}>
										Life sciences
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/what-we-do/nice-international`}>
										NICE international
									</a>
								</li>
								<li>
									<a
										href={`${baseUrl}/what-we-do/our-programmes/patient-safety`}
									>
										Patient safety
									</a>
								</li>
								<li>
									<a
										href={`${baseUrl}/what-we-do/our-programmes/nice-guidance/nice-guidelines/shared-decision-making`}
									>
										Shared decision making
									</a>
								</li>
							</ul>
						</GridItem>
						<GridItem data-tracking="Into practice">
							<h3 className="mt--d">Into practice</h3>
							<ul className={classnames(styles.listUnstyled, "mt--d")}>
								<li>
									<a
										href={`${baseUrl}/nice-communities/social-care/quick-guides`}
									>
										Social care quick guides
									</a>
								</li>
								<li>
									<a
										href={`${baseUrl}/what-we-do/into-practice/measuring-the-uptake-of-nice-guidance`}
									>
										Measuring the use of NICE guidance
									</a>
								</li>
								<li>
									<a
										href={`${baseUrl}/what-we-do/into-practice/resource-planner`}
									>
										Resource planner
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/what-we-do/into-practice`}>
										View all Into practice
									</a>
								</li>
							</ul>
						</GridItem>
						<GridItem data-tracking="Who we are">
							<h3 className="mt--d">Who we are</h3>
							<ul className={classnames(styles.listUnstyled, "mt--d")}>
								<li>
									<a href={`${baseUrl}/who-we-are/board`}>The board</a>
								</li>
								<li>
									<a
										href={`${baseUrl}/who-we-are/corporate-publications/the-nice-strategy-2021-to-2026`}
									>
										The NICE strategy 2021 to 2026
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/who-we-are/corporate-publications`}>
										Corporate publications
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/who-we-are`}>View all Who we are</a>
								</li>
							</ul>
						</GridItem>
					</Grid>
				</GridItem>
			</Grid>
			<hr />
			<ul
				className={classnames(styles.inlineList, "mt--d")}
				data-tracking="Contact us"
			>
				<li>
					<a href={`${baseUrl}/get-involved/contact-us`}>Contact us</a>
				</li>
				<li>
					<a href={`${baseUrl}/get-involved/jobs`}>Jobs</a>
				</li>
			</ul>
		</section>
	);
}
