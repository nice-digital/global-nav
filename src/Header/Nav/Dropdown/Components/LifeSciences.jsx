import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import services from "../../../../services.json";

export function LifeSciences() {
	const baseUrl = services.external.find(
		(service) => service.text == "Life sciences"
	).href;

	return (
		<section aria-label="Life Sciences - dropdown navigation">
			<h2 className="mt--0">Life Sciences</h2>
			<p>
				We provide opportunities for industry to engage with us at all stages of
				health technology development. Helping them deliver better and
				measurable outcomes.
			</p>
			<Button variant="cta" to={baseUrl} className="mb--d">
				View life sciences
			</Button>
			<h3 className="mt--d">Engage with us</h3>
			<Grid gutter="loose">
				<GridItem cols={12} md={6}>
					<h4 className="h5 mb--c mt--0">
						<a href="http://www.healthtechconnect.org.uk">HealthTech Connect</a>
					</h4>
					<p className="mt--0">
						Register with HealthTech Connect for initial information and support
						getting your non-pharmaceutical technology developed and adopted in
						the UK.
					</p>

					<h4 className="h5 mb--c">
						<a href="https://www.ukpharmascan.org.uk">UK PharmaScan</a>
					</h4>
					<p className="mt--0">
						UK PharmaScan can help ensure earlier and more effective decision
						making. Enabling faster uptake of innovative new medicines.
					</p>
				</GridItem>
				<GridItem cols={12} md={6}>
					<h4 className="h5 mb--c mt--0">
						<a href="https://www.nice.org.uk/about/what-we-do/life-sciences/office-for-market-access">
							Office for Market Access
						</a>
					</h4>
					<p className="mt--0">
						The Office for Market Access can help you engage with us and speed
						up the development process.
					</p>

					<h4 className="h5 mb--c">
						<a href="https://www.nice.org.uk/about/what-we-do/life-sciences/scientific-advice">
							Scientific advice
						</a>
					</h4>
					<p className="mt--0">
						By answering your questions, scientific advice can help you design
						evidence generation plans and provide key insights through our
						advisory services.
					</p>
				</GridItem>
			</Grid>
		</section>
	);
}
