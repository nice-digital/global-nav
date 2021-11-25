import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "./Grid";
import reset from "./../Reset.module.scss";
import services from "../../../../services.json";

export function More() {
	const rootUrl = services.rootUrl;
	return (
		<section aria-label="More NICE services">
			<Grid gutter="loose">
				<GridItem>
					<h2>Evidence search</h2>
					<p>
						Evidence search helps you make better, faster evidence-based
						decisions. It includes high quality resources from over 800
						organisations - like searching your trusted work favourites in one
						go.
					</p>
					<p>
						<Button
							className={reset.gnButtonPrimary}
							variant="primary"
							to="https://www.evidence.nhs.uk/"
						>
							Evidence search
						</Button>
					</p>
				</GridItem>
				<GridItem>
					<h2>Journals and databases</h2>
					<p>
						Quick access to a range of journals and other evidence-based
						resources for health and social care staff in England.
					</p>
					<p>
						These resources are provided in partnership with Health Education
						England and NICE.
					</p>

					<p>
						You&apos;ll need an NHS OpenAthens account to access most of these
						resources.
					</p>
					<p>
						<Button
							variant="primary"
							className={reset.gnButtonPrimary}
							to={`${rootUrl}/about/what-we-do/evidence-services/journals-and-databases`}
						>
							Journals and databases
						</Button>
					</p>
				</GridItem>
			</Grid>
		</section>
	);
}
