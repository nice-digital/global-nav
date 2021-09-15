import React from "react";
import ReactShadowRoot from "react-shadow-root";

export function More() {
	return (
		<section aria-label="More NICE services">
			<ReactShadowRoot>
				<link href="https://nds-css.netlify.app/bundle.css" rel="stylesheet" />
				<div className="grid">
					<div data-g="12 md:4">
						<h3>Evidence search</h3>
						<p>
							Evidence search helps you make better, faster evidence-based
							decisions. It includes high quality resources from over 800
							organisations - like searching your trusted work favourites in one
							go.
						</p>
						<p>
							<button className="btn btn--cta" to="https://evidence.nhs.uk">
								Evidence search
							</button>
						</p>
					</div>
					<div data-g="12 md:4">
						<h3>Standards and indicators</h3>
						<p>
							Quality standards set out the priority areas for quality
							improvement in health and social care. They cover areas where
							there is variation in care. Each standard gives you:
						</p>
						<ul>
							<li>a set of statements to help you</li>
							<li>improve quality information on how to measure progress.</li>
						</ul>
						<p>
							<button
								className="btn btn--cta"
								to="https://www.nice.org.uk/standards-and-indicators"
							>
								Standards and indicators
							</button>
						</p>
					</div>
					<div data-g="12 md:4">
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
							<button
								className="btn btn--cta"
								to="https://www.nice.org.uk/about/what-we-do/evidence-services/journals-and-databases"
							>
								Journals and databases
							</button>
						</p>
					</div>
				</div>
			</ReactShadowRoot>
		</section>
	);
}
