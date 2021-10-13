import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";
import services from "../../../../services.json";

export function Pathways() {
	const baseUrl = services.external.find(
		(service) => service.text == "NICE Pathways"
	).href;

	const pathwaysAtoZurl = baseUrl + "?jumpAtoZ=";

	const pathwaysAtoZ = [
		{ letter: "A", link: true },
		{ letter: "B", link: true },
		{ letter: "C", link: true },
		{ letter: "D", link: true },
		{ letter: "E", link: true },
		{ letter: "F", link: true },
		{ letter: "G", link: true },
		{ letter: "H", link: true },
		{ letter: "I", link: true },
		{ letter: "J", link: true },
		{ letter: "K", link: true },
		{ letter: "L", link: true },
		{ letter: "M", link: true },
		{ letter: "N", link: true },
		{ letter: "O", link: true },
		{ letter: "P", link: true },
		{ letter: "Q", link: false },
		{ letter: "R", link: true },
		{ letter: "S", link: true },
		{ letter: "T", link: true },
		{ letter: "U", link: true },
		{ letter: "V", link: true },
		{ letter: "W", link: true },
		{ letter: "X", link: false },
		{ letter: "Y", link: true },
		{ letter: "Z", link: false },
	];

	return (
		<section aria-label="Pathways - dropdown navigation">
			<h2 className="mt--0">NICE Pathways</h2>
			<p>Everything NICE says on a topic in an interactive flowchart</p>
			<Button variant="cta" to={baseUrl}>
				View NICE Pathways
			</Button>

			<Grid gutter="loose">
				<GridItem cols={12} md={3}>
					<h3>Browse by A to Z</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={baseUrl}>Pathways A to Z</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={6}>
					<h3>Browse topics by</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
						<li>
							<a href={`${baseUrl}?browse=conditionsAndDiseases`}>
								Conditions and diseases
							</a>
						</li>
						<li>
							<a href={`${baseUrl}?browse=healthProtection`}>
								Health protection
							</a>
						</li>
						<li>
							<a href={`${baseUrl}?browse=lifestyleAndWellbeing`}>
								Lifestyle and wellbeing
							</a>
						</li>
						<li>
							<a href={`${baseUrl}?browse=populationGroups`}>
								Population groups
							</a>
						</li>
						<li>
							<a href={`${baseUrl}?browse=healthProtection`}>
								Service delivery, organisation and staffing
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3>What&apos;s new</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}?browse=latest`}>Latest NICE Pathways</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<a href={`${baseUrl}#help`}>How to use NICE Pathways</a>
		</section>
	);
}
