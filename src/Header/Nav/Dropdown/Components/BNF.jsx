import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Components.module.scss";
import services from "../../../../services.json";

export function BNF() {
	const baseUrl = services.external.find(
		(service) => service.text == "BNF"
	).href;

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
		<section aria-label="BNF - dropdown navigation">
			<h2 className="mt--0">BNF</h2>
			<p>
				The BNF aims to provide prescribers, pharmacists, and other healthcare
				professionals with sound up-to-date information about the use of
				medicines.
			</p>
			<Button variant="cta" to={baseUrl}>
				View BNF
			</Button>

			<h3 className="mt--d">Drugs A to Z</h3>
			<ol className={styles.alphabet}>
				{drugsAtoZ.map(({ letter, link }) => {
					return (
						<li
							key={letter}
							className={`${styles.letter} ${link ? "" : styles.chunkyLetter}`}
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

			<Grid gutter="loose">
				<GridItem cols={12} md={3}>
					<h3 className="mt--0">Browse A to Z by</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}/interaction/`}>Interactions</a>
						</li>
						<li>
							<a href={`${baseUrl}/treatment-summary/`}>Treatment summaries</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={6}>
					<h3 className="mt--0">Browse by type</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
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
						<li>
							<a href={`${baseUrl}/wound-management/`}>Wound management</a>
						</li>
						<li>
							<a href={`${baseUrl}/medical-devices/`}>Medical devices</a>
						</li>
						<li>
							<a href={`${baseUrl}/borderline-substance-taxonomy/`}>
								Borderline substances
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem cols={12} md={3}>
					<h3 className="mt--0">What’s new</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}/about/changes.html`}>Latest BNF</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<a href={`${baseUrl}/about/`}>About BNF</a>
		</section>
	);
}
