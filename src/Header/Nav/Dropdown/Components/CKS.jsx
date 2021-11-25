import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "./Grid";
import styles from "./Components.module.scss";
import reset from "./../Reset.module.scss";
import services from "../../../../services.json";

export function CKS() {
	const baseUrl = services.external.find((service) => service.id == "cks").href;

	const topicsAtoZurl = baseUrl + "/topics/#";

	const topicsAtoZ = [
		{ letter: "a", link: true },
		{ letter: "b", link: true },
		{ letter: "c", link: true },
		{ letter: "d", link: true },
		{ letter: "e", link: true },
		{ letter: "f", link: true },
		{ letter: "g", link: true },
		{ letter: "h", link: true },
		{ letter: "i", link: true },
		{ letter: "j", link: true },
		{ letter: "k", link: true },
		{ letter: "l", link: true },
		{ letter: "m", link: true },
		{ letter: "n", link: true },
		{ letter: "o", link: true },
		{ letter: "p", link: true },
		{ letter: "q", link: false },
		{ letter: "r", link: true },
		{ letter: "s", link: true },
		{ letter: "t", link: true },
		{ letter: "u", link: true },
		{ letter: "v", link: true },
		{ letter: "w", link: true },
		{ letter: "x", link: false },
		{ letter: "y", link: false },
		{ letter: "z", link: true },
	];

	return (
		<section aria-label="CKS - dropdown navigation">
			<h2 className="mt--0">CKS</h2>
			<p>
				Providing primary care practitioners with a readily accessible summary
				of the current evidence base and practical guidance on best practice
			</p>
			<Button className={reset.gnButtonCta} variant="cta" to={baseUrl}>
				View CKS
			</Button>

			<div data-tracking="Health topics A to Z">
				<h3 className="mt--d">Health topics A to Z</h3>
				<ol className={styles.alphabet}>
					{topicsAtoZ.map(({ letter, link }) => {
						return (
							<li
								key={letter}
								className={`${styles.letter} ${
									link ? "" : styles.chunkyLetter
								}`}
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
			</div>
			<Grid gutter="loose">
				<GridItem
					data-tracking="Topics most frequently visited"
					style={{ flex: 2 }}
				>
					<h3>Topics most frequently visited</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
						<li>
							<a href={`${baseUrl}/topics/hypertension/`}>Hypertension</a>
						</li>
						<li>
							<a href={`${baseUrl}/topics/diabetes-type-2/`}>
								Diabetes - type 2
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/topics/gout/`}>Gout</a>
						</li>
						<li>
							<a href={`${baseUrl}/topics/migraine/`}>Migraine</a>
						</li>
						<li>
							<a href={`${baseUrl}/topics/allergic-rhinitis/`}>
								Allergic rhinitis
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/topics/asthma/`}>Asthma</a>
						</li>
					</ul>
				</GridItem>
				<GridItem data-tracking="Browse by">
					<h3>Browse by</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}/specialities/`}>Specialities</a>
						</li>
					</ul>
				</GridItem>
				<GridItem data-tracking="What's new">
					<h3>What’s new</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}/whats-new/`}>Latest CKS</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<a href={`${baseUrl}/about/`}>About CKS</a>
		</section>
	);
}
