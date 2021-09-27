import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";
import services from "../../../../services.json";

export function Guidance() {
	const baseUrl = services.external.find(
		(service) => service.text == "Guidance"
	).href;

	return (
		<section aria-label="NICE Guidance - dropdown navigation">
			<h2 className="mt--0">Guidance</h2>
			<p>
				Evidence-based recommendations developed by independent committees,
				including professionals and lay members, and consulted on by
				stakeholders.
			</p>

			<Button variant="cta" to={baseUrl}>
				View guidance
			</Button>

			<h3>New and updated</h3>
			<ul className={styles.listPiped}>
				<li>
					<a href={`${baseUrl}date`}>This month</a>
					<a href={`${baseUrl}lastmonth`}>Last month</a>
					<a href={`${baseUrl}last6months`}>Last 6 months</a>
				</li>
			</ul>

			<Grid gutter="loose">
				<GridItem cols={12} md={9}>
					<h3>Most visited guidance topics by other people</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 3 }}>
						<li>
							<a
								href={`${baseUrl}conditions-and-diseases/respiratory-conditions/covid19`}
							>
								COVID-19
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}lifestyle-and-wellbeing/mental-health-and-wellbeing`}
							>
								Mental health and wellbeing
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}conditions-and-diseases/mental-health-and-behavioural-conditions/depression`}
							>
								Depression
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}conditions-and-diseases/respiratory-conditions/chronic-obstructive-pulmonary-disease`}
							>
								Chronic obstructive pulmonary disease
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}conditions-and-diseases/cardiovascular-conditions/stroke-and-transient-ischaemic-attack`}
							>
								Stroke and transient ischaemic attack
							</a>
						</li>
						<li>
							<a href={`${baseUrl}population-groups/children-and-young-people`}>
								Children and young people
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}conditions-and-diseases/mental-health-and-behavioural-conditions/anxiety`}
							>
								Anxiety
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}health-and-social-care-delivery/medicines-management`}
							>
								Medicines management
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}conditions-and-diseases/cardiovascular-conditions/stroke-and-transient-ischaemic-attack`}
							>
								Stroke and transient ischaemic attack
							</a>
						</li>
						<li>
							<a href={`${baseUrl}population-groups/children-and-young-people`}>
								Children and young people
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}conditions-and-diseases/mental-health-and-behavioural-conditions/anxiety`}
							>
								Anxiety
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}health-and-social-care-delivery/medicines-management`}
							>
								Medicines management
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3>Browse guidance</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}inconsultation`}>In consultation</a>
						</li>
						<li>
							<a href={`${baseUrl}indevelopment`}>In development</a>
						</li>
						<li>
							<a href={`${baseUrl}proposed`}>Proposed</a>
						</li>
						<li>
							<a
								href={`${baseUrl}published?fromdate=September%202021&todate=September%202021`}
							>
								New and updated
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}published?fromdate=September%202021&todate=September%202021`}
							>
								By programme
							</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<Button variant="inverse" to={`${baseUrl}conditions-and-diseases`}>
				View all guidance topics
			</Button>
		</section>
	);
}
