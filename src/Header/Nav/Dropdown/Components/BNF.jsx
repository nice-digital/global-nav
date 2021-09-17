import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";

const drugsAtoZ = [
	{ letter: "A", link: "https://bnf.nice.org.uk/drug/#A" },
	{ letter: "B", link: "https://bnf.nice.org.uk/drug/#B" },
	{ letter: "C", link: "https://bnf.nice.org.uk/drug/#C" },
	{ letter: "D", link: "https://bnf.nice.org.uk/drug/#D" },
	{ letter: "E", link: "https://bnf.nice.org.uk/drug/#E" },
	{ letter: "F", link: "https://bnf.nice.org.uk/drug/#F" },
	{ letter: "G", link: "https://bnf.nice.org.uk/drug/#G" },
	{ letter: "H", link: "https://bnf.nice.org.uk/drug/#H" },
	{ letter: "I", link: "https://bnf.nice.org.uk/drug/#I" },
	{ letter: "J", link: "https://bnf.nice.org.uk/drug/#J" },
	{ letter: "K", link: "https://bnf.nice.org.uk/drug/#K" },
	{ letter: "L", link: "https://bnf.nice.org.uk/drug/#L" },
	{ letter: "M", link: "https://bnf.nice.org.uk/drug/#M" },
	{ letter: "N", link: "https://bnf.nice.org.uk/drug/#N" },
	{ letter: "O", link: "https://bnf.nice.org.uk/drug/#O" },
	{ letter: "P", link: "https://bnf.nice.org.uk/drug/#P" },
	{ letter: "Q", link: null },
	{ letter: "R", link: "https://bnf.nice.org.uk/drug/#R" },
	{ letter: "S", link: "https://bnf.nice.org.uk/drug/#S" },
	{ letter: "T", link: "https://bnf.nice.org.uk/drug/#T" },
	{ letter: "U", link: "https://bnf.nice.org.uk/drug/#U" },
	{ letter: "V", link: "https://bnf.nice.org.uk/drug/#V" },
	{ letter: "W", link: "https://bnf.nice.org.uk/drug/#W" },
	{ letter: "X", link: null },
	{ letter: "Y", link: null },
	{ letter: "Z", link: null },
];

export function BNF() {
	return (
		<section aria-label="BNF - dropdown navigation">
			<link href="https://nds-css.netlify.app/bundle.css" rel="stylesheet" />
			<h2 className="mt--0">BNF</h2>
			<p>Everything NICE says on a topic in an interactive flowchart</p>
			<Button variant="primary" to="https://bnf.nice.org.uk/">
				Explore BNF
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
							<a href="https://bnf.nice.org.uk/interaction/">Interactions</a>
						</li>
						<li>
							<a href="https://bnf.nice.org.uk/treatment-summary/">
								Treatment summaries
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={6}>
					<h3>Browse by type</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
						<li>
							<a href="https://bnf.nice.org.uk/dental-practitioners-formulary/">
								Dental practitioners' formulary
							</a>
						</li>
						<li>
							<a href="https://bnf.nice.org.uk/nurse-prescribers-formulary/">
								Nurse prescribers' formulary
							</a>
						</li>
						<li>
							<a href="https://bnf.nice.org.uk/guidance/">Medicines guidance</a>
						</li>
						<li>
							<a href="https://bnf.nice.org.uk/wound-management/">
								Wound management
							</a>
						</li>
						<li>
							<a href="https://bnf.nice.org.uk/medical-devices/">
								Medical devices
							</a>
						</li>
						<li>
							<a href="https://bnf.nice.org.uk/borderline-substance-taxonomy/">
								Borderline substances
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3>Latest</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href="https://bnf.nice.org.uk/about/changes.html">
								What's changed
							</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<a href="https://bnf.nice.org.uk/about/">About BNF</a>
		</section>
	);
}
