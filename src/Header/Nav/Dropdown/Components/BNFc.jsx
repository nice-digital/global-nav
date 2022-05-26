import React from "react";
import { Button } from "./Button";
import { Grid, GridItem } from "./Grid";
import styles from "./Components.module.scss";
import services from "../../../../services.json";
import { HeaderContext } from "../../../context/HeaderContext";

export function BNFc() {
	const { setidOfOpenDropdown } = React.useContext(HeaderContext);

	const handleClick = function () {
		setidOfOpenDropdown(null);
	};
	const baseUrl = services.external.filter((service) => service.id == "bnfc")[0]
		.href;

	const drugsAtoZurl = baseUrl + "/drugs/#";

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
			<Button variant="cta" to={baseUrl} onClick={handleClick}>
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
									<a
										href={`${drugsAtoZurl}${letter.toLowerCase()}`}
										onClick={handleClick}
									>
										{letter}
									</a>
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
							<a href={`${baseUrl}/interactions/`} onClick={handleClick}>
								Interactions
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/treatment-summaries/`} onClick={handleClick}>
								Treatment summaries
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem data-tracking="Browse by type" style={{ flex: 2 }}>
					<h3>Browse by type</h3>
					<ul className={styles.listUnstyled} style={{ columnCount: 2 }}>
						<li>
							<a href={`${baseUrl}/medical-devices/`} onClick={handleClick}>
								Medical devices
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}/borderline-substances/`}
								onClick={handleClick}
							>
								Borderline substances
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}/dental-practitioners-formulary/`}
								onClick={handleClick}
							>
								Dental practitioners&apos; formulary
							</a>
						</li>
						<li>
							<a
								href={`${baseUrl}/nurse-prescribers-formulary/`}
								onClick={handleClick}
							>
								Nurse prescribers&apos; formulary
							</a>
						</li>
						<li>
							<a href={`${baseUrl}/guidance/`} onClick={handleClick}>
								Medicines guidance
							</a>
						</li>
					</ul>
				</GridItem>
				<GridItem data-tracking="What's new">
					<h3>What’s new</h3>
					<ul className={styles.listUnstyled}>
						<li>
							<a href={`${baseUrl}/about/changes/`} onClick={handleClick}>
								Latest BNFC
							</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<a href={`${baseUrl}/about/`} onClick={handleClick}>
				About BNFC
			</a>
		</section>
	);
}
