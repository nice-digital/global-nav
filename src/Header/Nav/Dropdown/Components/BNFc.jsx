import React from "react";
import { Button } from "./Button";
import { Grid, GridItem } from "./Grid";
import styles from "./Components.module.scss";
import reset from "./../Reset.module.scss";
import services from "../../../../services.json";

export function BNFc() {
	const baseUrl = services.external.filter((service) => service.id == "bnfc")[0]
		.href;

	const drugsAtoZurl = baseUrl + "/drug/#";

	const drugsAtoZ = [
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
		{ letter: "Q", link: true },
		{ letter: "R", link: true },
		{ letter: "S", link: true },
		{ letter: "T", link: true },
		{ letter: "U", link: true },
		{ letter: "V", link: true },
		{ letter: "W", link: true },
		{ letter: "X", link: true },
		{ letter: "Y", link: true },
		{ letter: "Z", link: true },
	];

	return (
		<section aria-label="BNFC - dropdown navigation">
			<h2 className="mt--0">BNFC</h2>
			<p>
				BNF for Children aims to provide prescribers, pharmacists, and other
				healthcare professionals with sound up-to-date information on the use of
				medicines for treating children.
			</p>
			<Button variant="cta" to={baseUrl}>
				View BNFC
			</Button>

			<div data-tracking="Drugs A to Z">
				<h3 className="mt--d">Drugs A to Z</h3>
				<ol className={styles.alphabet}>
					{drugsAtoZ.map(({ letter, link }) => {
						return (
							<li
								key={letter}
								className={`${styles.letter} ${
									link ? "" : styles.chunkyLetter
								}`}
							>
								{link ? (
									<a href={`${drugsAtoZurl}${letter}`}>{letter}</a>
								) : (
									<span>{letter}</span>
								)}
							</li>
						);
					})}
				</ol>
			</div>
			<Grid gutter="loose">
				<GridItem data-tracking="Browse A to Z by">
					<h3>Browse A to Z by</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}/interactions/`}>Interactions</a>
						</li>
						<li>
							<a href={`${baseUrl}/treatment-summaries/`}>
								Treatment summaries
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem data-tracking="Browse by type" style={{ flex: 2 }}>
					<h3>Browse by type</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
						<li>
							<a href={`${baseUrl}/medical-devices/`}>Medical devices</a>
						</li>
						<li>
							<a href={`${baseUrl}/borderline-substance-taxonomy/`}>
								Borderline substances
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/dental-practitioners-formulary/`}>
								Dental practitioners&apos; formulary
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/nurse-prescribers-formulary/`}>
								Nurse prescribers&apos; formulary
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/guidance/`}>Medicines guidance</a>
						</li>
					</ul>
				</GridItem>
				<GridItem data-tracking="What's new">
					<h3>What’s new</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}/about/changes/`}>Latest BNFC</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<a href={`${baseUrl}/about/`}>About BNFC</a>
		</section>
	);
}
