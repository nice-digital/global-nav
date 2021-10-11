import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";
import services from "../../../../services.json";
import classnames from "classnames";

export function AboutUs() {
	const baseUrl = services.external.find(
		(service) => service.text == "About us"
	).href;

	const alphaNICEorg = "http://alpha.nice.org.uk/";
	return (
		<section aria-label="About us - dropdown navigation">
			<h2 className="mt--0">About us</h2>
			<p>
				We provide national guidance and advice to improve health and social
				care.
			</p>
			<Button variant="cta" to={baseUrl}>
				Explore about us
			</Button>
			<Grid gutter="loose">
				<GridItem cols={12} md={3}>
					<h3 className="mt--d">Who we are</h3>
					<ol className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a href={`${baseUrl}/who-we-are/board`}>The board</a>
						</li>
						<li>
							<a href={`${baseUrl}/who-we-are/senior-management-team`}>
								Executive team
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/who-we-are/guidance-executive`}>
								Guidance executive
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/who-we-are/structure-of-nice`}>
								Our structure
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/who-we-are/policies-and-procedures`}>
								Policies and procedures
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}/who-we-are/corporate-publications/the-nice-strategy-2021-to-2026`}
							>
								The NICE strategy 2021 to 2026
							</a>
						</li>
					</ol>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3 className="mt--d">What we do</h3>
					<ol className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a
								href={`${baseUrl}/what-we-do/our-programmes/evidence-standards-framework-for-digital-health-technologies`}
							>
								Digital health
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/what-we-do/nice-international`}>
								NICE international
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/nice-communities/social-care`}>
								Social care
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/what-we-do/life-sciences`}>Life sciences</a>
						</li>
						<li>
							<a href={`${baseUrl}/what-we-do/into-practice`}>Into practice</a>
						</li>
						<li>
							<a
								href={`${baseUrl}/what-we-do/our-programmes/nice-guidance/nice-guidelines/shared-decision-making`}
							>
								Shared decision making
							</a>
						</li>
					</ol>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3 className="mt--d">Our programmes</h3>
					<ol className={classnames(styles.listUnstyled, "mt--d")}>
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
							<a href="https://www.nice.org.uk/standards-and-indicators">
								Standards and indicators
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/what-we-do/our-programmes/topic-selection`}>
								Topic selection
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}/what-we-do/our-programmes/cost-savings-resource-planning`}
							>
								Financial planning
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/what-we-do/our-programmes/patient-safety`}>
								Patient safety
							</a>
						</li>
					</ol>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3 className="mt--d">Get involved</h3>
					<ol className={classnames(styles.listUnstyled, "mt--d")}>
						<li>
							<a href={`${alphaNICEorg}Get-Involved/stakeholder-registration`}>
								Register as a stakeholder
							</a>
						</li>
						<li>
							<a href={`${alphaNICEorg}Get-Involved/Consultations`}>
								Comment on a consultation
							</a>
						</li>
						<li>
							<a href={`${alphaNICEorg}Get-Involved/our-committees`}>
								Join a committee
							</a>
						</li>
						<li>
							<a href={`${alphaNICEorg}Get-Involved/Meetings-in-public`}>
								Come to a meeting
							</a>
						</li>
						<li>
							<a href={`${alphaNICEorg}Get-Involved/jobs`}>Work with us</a>
							<a href={`${baseUrl}nice-communities/public-involvement`}>
								Public involvement
							</a>
						</li>
					</ol>
				</GridItem>
			</Grid>
		</section>
	);
}
