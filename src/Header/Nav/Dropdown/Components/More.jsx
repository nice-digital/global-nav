import React from "react";

export function More() {
	return (
		<section aria-label="More NICE services">
			<div className="grid grid--loose">
				<div data-g="12 md:4">
					<h3>Evidence search</h3>
					<p>
						Evidence search helps you make better, faster evidence-based
						decisions. It includes high quality resources from over 800
						organisations - like searching your trusted work favourites in one
						go.
					</p>
					<p>
						<a className="btn btn--cta" href="https://evidence.nhs.uk">
							Evidence search
						</a>
					</p>
				</div>
				<div data-g="12 md:4">
					<h3>Standards and indicators</h3>
					<p>
						Quality standards set out the priority areas for quality improvement
						in health and social care. They cover areas where there is variation
						in care. Each standard gives you:
					</p>
					<ul>
						<li>a set of statements to help you</li>
						<li>improve quality information on how to measure progress.</li>
					</ul>
					<p>
						<a
							className="btn btn--cta"
							href="https://www.nice.org.uk/standards-and-indicators"
						>
							Standards and indicators
						</a>
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
						<a
							className="btn btn--cta"
							href="https://www.nice.org.uk/about/what-we-do/evidence-services/journals-and-databases"
						>
							Journals and databases
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
