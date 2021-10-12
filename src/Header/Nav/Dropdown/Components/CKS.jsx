import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";
import services from "../../../../services.json";

export function CKS() {
	const baseUrl = services.external.find(
		(service) => service.text == "CKS"
	).href;

	const topicsAtoZurl = baseUrl + "topics/#";

	const topicsAtoZ = [
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
		{ letter: "Y", link: false },
		{ letter: "Z", link: true },
	];

	return (
		<section aria-label="CKS - dropdown navigation">
			<h2 className="mt--0">CKS</h2>
			<p>
				Providing primary care practitioners with a readily accessible summary
				of the current evidence base and practical guidance on best practice
			</p>
			<Button variant="cta" to={baseUrl}>
				View CKS
			</Button>

			<h3 className="mt--d">Health topics A to Z</h3>
			<ol className={styles.alphabet}>
				{topicsAtoZ.map(({ letter, link }) => {
					return (
						<li
							key={letter}
							className={`${styles.letter} ${link ? "" : styles.chunkyLetter}`}
						>
							{link ? (
								<a href={`${topicsAtoZurl}${letter}`}>{letter}</a>
							) : (
								<span>{letter}</span>
							)}
						</li>
					);
				})}
			</ol>

			<Grid gutter="loose">
				<GridItem cols={12} md={6}>
					<h3 className="mt--0">Topics most frequently visited</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
						<li>
							<a href={`${baseUrl}topics/hypertension/`}>Hypertension</a>
						</li>
						<li>
							<a href={`${baseUrl}topics/diabetes-type-2/`}>
								Diabetes - type 2
							</a>
						</li>
						<li>
							<a href={`${baseUrl}topics/gout/`}>Gout</a>
						</li>
						<li>
							<a href={`${baseUrl}topics/migraine/`}>Migraine</a>
						</li>
						<li>
							<a href={`${baseUrl}topics/allergic-rhinitis/`}>
								Allergic rhinitis
							</a>
						</li>
						<li>
							<a href={`${baseUrl}topics/asthma/`}>Asthma</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3 className="mt--0">Browse by</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}specialities/`}>Specialities</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3 className="mt--0">What’s new</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}whats-new/`}>Latest CKS</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<a href={`${baseUrl}about/`}>About CKS</a>
		</section>
	);
}
