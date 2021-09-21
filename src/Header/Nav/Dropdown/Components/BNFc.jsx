import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";

const drugsAtoZ = [
	{ letter: "A", link: "https://bnfc.nice.org.uk/drug/#A" },
	{ letter: "B", link: "https://bnfc.nice.org.uk/drug/#B" },
	{ letter: "C", link: "https://bnfc.nice.org.uk/drug/#C" },
	{ letter: "D", link: "https://bnfc.nice.org.uk/drug/#D" },
	{ letter: "E", link: "https://bnfc.nice.org.uk/drug/#E" },
	{ letter: "F", link: "https://bnfc.nice.org.uk/drug/#F" },
	{ letter: "G", link: "https://bnfc.nice.org.uk/drug/#G" },
	{ letter: "H", link: "https://bnfc.nice.org.uk/drug/#H" },
	{ letter: "I", link: "https://bnfc.nice.org.uk/drug/#I" },
	{ letter: "J", link: "https://bnfc.nice.org.uk/drug/#J" },
	{ letter: "K", link: "https://bnfc.nice.org.uk/drug/#K" },
	{ letter: "L", link: "https://bnfc.nice.org.uk/drug/#L" },
	{ letter: "M", link: "https://bnfc.nice.org.uk/drug/#M" },
	{ letter: "N", link: "https://bnfc.nice.org.uk/drug/#N" },
	{ letter: "O", link: "https://bnfc.nice.org.uk/drug/#O" },
	{ letter: "P", link: "https://bnfc.nice.org.uk/drug/#P" },
	{ letter: "Q", link: null },
	{ letter: "R", link: "https://bnfc.nice.org.uk/drug/#R" },
	{ letter: "S", link: "https://bnfc.nice.org.uk/drug/#S" },
	{ letter: "T", link: "https://bnfc.nice.org.uk/drug/#T" },
	{ letter: "U", link: "https://bnfc.nice.org.uk/drug/#U" },
	{ letter: "V", link: "https://bnfc.nice.org.uk/drug/#V" },
	{ letter: "W", link: "https://bnfc.nice.org.uk/drug/#W" },
	{ letter: "X", link: null },
	{ letter: "Y", link: null },
	{ letter: "Z", link: null },
];

export function BNFc() {
	return (
		<section aria-label="BNFC - dropdown navigation">
			<h2 className="mt--0">BNFC</h2>
			<p>
				BNF for Children aims to provide prescribers, pharmacists, and other
				healthcare professionals with sound up-to-date information on the use of
				medicines for treating children.
			</p>
			<Button variant="primary" to="https://bnfc.nice.org.uk/">
				View BNFC
			</Button>

			<h3>Drugs A to Z</h3>
			<ol className={styles.alphabet}>
				{drugsAtoZ.map((letter) => {
					return (
						<li
							key={letter.letter}
							className={`${styles.letter} ${
								letter.link == null ? styles.chunkyLetter : ""
							}`}
						>
							{letter.link == null ? (
								<span>{letter.letter}</span>
							) : (
								<a href={letter.link}>{letter.letter}</a>
							)}
						</li>
					);
				})}
			</ol>

			<Grid gutter="loose">
				<GridItem cols={12} md={3}>
					<h3>Browse A to Z by</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href="https://bnfc.nice.org.uk/interaction/">Interactions</a>
						</li>
						<li>
							<a href="https://bnfc.nice.org.uk/treatment-summary/">
								Treatment summaries
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={6}>
					<h3>Browse by type</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
						<li>
							<a href="https://bnfc.nice.org.uk/medical-devices/">
								Medical devices
							</a>
						</li>
						<li>
							<a href="https://bnfc.nice.org.uk/borderline-substance-taxonomy/">
								Borderline substances
							</a>
						</li>
						<li>
							<a href="https://bnfc.nice.org.uk/dental-practitioners-formulary/">
								Dental practitioners' formulary
							</a>
						</li>
						<li>
							<a href="https://bnfc.nice.org.uk/nurse-prescribers-formulary/">
								Nurse prescribers' formulary
							</a>
						</li>
						<li>
							<a href="https://bnfc.nice.org.uk/guidance/">
								Medicines guidance
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3>What’s new</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href="https://bnfc.nice.org.uk/about/changes.html">
								Latest BNFC
							</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<a href="https://bnfc.nice.org.uk/about/">About BNFC</a>
		</section>
	);
}
