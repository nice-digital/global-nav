import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";

export function More() {
	return (
		<section aria-label="More NICE services">
			<Grid gutter="loose">
				<GridItem cols={12} md={6}>
					<h3>Evidence search</h3>
					<p>
						Evidence search helps you make better, faster evidence-based
						decisions. It includes high quality resources from over 800
						organisations - like searching your trusted work favourites in one
						go.
					</p>
					<p>
						<Button variant="primary" to="https://alpha.evidence.nhs.uk/">
							Evidence search
						</Button>
					</p>
				</GridItem>
				<GridItem cols={12} md={6}>
					<h3>Journals and databases</h3>
					<p>
						Quick access to a range of journals and other evidence-based
						resources for health and social care staff in England.
					</p>
					<p>
						These resources are provided in partnership with Health Education
						England and NICE.
					</p>

					<p>
						You'll need an NHS OpenAthens account to access most of these
						resources.
					</p>
					<p>
						<Button
							variant="primary"
							to="https://alpha.nice.org.uk/about/what-we-do/evidence-services/journals-and-databases"
						>
							Journals and databases
						</Button>
					</p>
				</GridItem>
			</Grid>
		</section>
	);
}
