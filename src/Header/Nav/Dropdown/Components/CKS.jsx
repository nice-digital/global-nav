import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";

const drugsAtoZ = [
	{ letter: "A", link: "https://cks.nice.org.uk/topics/#a" },
	{ letter: "B", link: "https://cks.nice.org.uk/topics/#b" },
	{ letter: "C", link: "https://cks.nice.org.uk/topics/#c" },
	{ letter: "D", link: "https://cks.nice.org.uk/topics/#d" },
	{ letter: "E", link: "https://cks.nice.org.uk/topics/#e" },
	{ letter: "F", link: "https://cks.nice.org.uk/topics/#f" },
	{ letter: "G", link: "https://cks.nice.org.uk/topics/#g" },
	{ letter: "H", link: "https://cks.nice.org.uk/topics/#h" },
	{ letter: "I", link: "https://cks.nice.org.uk/topics/#i" },
	{ letter: "J", link: "https://cks.nice.org.uk/topics/#j" },
	{ letter: "K", link: "https://cks.nice.org.uk/topics/#k" },
	{ letter: "L", link: "https://cks.nice.org.uk/topics/#l" },
	{ letter: "M", link: "https://cks.nice.org.uk/topics/#m" },
	{ letter: "N", link: "https://cks.nice.org.uk/topics/#n" },
	{ letter: "O", link: "https://cks.nice.org.uk/topics/#o" },
	{ letter: "P", link: "https://cks.nice.org.uk/topics/#p" },
	{ letter: "Q", link: null },
	{ letter: "R", link: "https://cks.nice.org.uk/topics/#r" },
	{ letter: "S", link: "https://cks.nice.org.uk/topics/#s" },
	{ letter: "T", link: "https://cks.nice.org.uk/topics/#t" },
	{ letter: "U", link: "https://cks.nice.org.uk/topics/#u" },
	{ letter: "V", link: "https://cks.nice.org.uk/topics/#v" },
	{ letter: "W", link: "https://cks.nice.org.uk/topics/#w" },
	{ letter: "X", link: null },
	{ letter: "Y", link: null },
	{ letter: "Z", link: "https://cks.nice.org.uk/topics/#z" },
];

export function CKS() {
	return (
		<section aria-label="CKS - dropdown navigation">
			<h2 className="mt--0">CKS</h2>
			<p>
				Providing primary care practitioners with a readily accessible summary
				of the current evidence base and practical guidance on best practice
			</p>
			<Button variant="primary" to="https://cks.nice.org.uk/">
				View CKS
			</Button>

			<h3>Health topics A to Z</h3>
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
				<GridItem cols={12} md={6}>
					<h3>Topics most frequently visited</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
						<li>
							<a href="https://cks.nice.org.uk/topics/hypertension/">
								Hypertension
							</a>
						</li>
						<li>
							<a href="https://cks.nice.org.uk/topics/diabetes-type-2/">
								Diabetes - type 2
							</a>
						</li>
						<li>
							<a href="https://cks.nice.org.uk/topics/gout/">Gout</a>
						</li>
						<li>
							<a href="https://cks.nice.org.uk/topics/migraine/">Migraine</a>
						</li>
						<li>
							<a href="https://cks.nice.org.uk/topics/allergic-rhinitis/">
								Allergic rhinitis
							</a>
						</li>
						<li>
							<a href="https://cks.nice.org.uk/topics/asthma/">Asthma</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3>Browse by</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href="https://cks.nice.org.uk/specialities/">Specialities</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3>What’s new</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href="https://cks.nice.org.uk/whats-new/">Latest CKS</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<a href="https://cks.nice.org.uk/about/">About CKS</a>
		</section>
	);
}
