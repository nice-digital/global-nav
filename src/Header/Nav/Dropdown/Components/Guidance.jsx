import React from "react";
import ReactShadowRoot from "react-shadow-root";

export function Guidance() {
	return (
		<section aria-label="NICE Guidance - dropdown navigation">
			<ReactShadowRoot>
				<link href="https://nds-css.netlify.app/bundle.css" rel="stylesheet" />
				<h2 className="mt--0">Guidance</h2>
				<p>
					Evidence-based recommendations developed by independent committees,
					including professionals and lay members, and consulted on by
					stakeholders.
				</p>

				<a
					className="btn"
					href="https://www.nice.org.uk/guidance/published?type=apg,csg,cg,cov,mpg,ph,sg,sc,dg,hst,ipg,mtg,qs,ta"
				>
					Explore all guidance
				</a>

				<div className="grid grid--loose">
					<div data-g="12 md:9">
						<h3>Most visited guidance topics by other people</h3>
						<ul className="list list--unstyled" style={{ columnCount: 3 }}>
							<li>
								<a href="https://www.nice.org.uk/guidance/conditions-and-diseases/respiratory-conditions/covid19">
									COVID-19
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/lifestyle-and-wellbeing/mental-health-and-wellbeing">
									Mental health and wellbeing
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/conditions-and-diseases/mental-health-and-behavioural-conditions/depression">
									Depression
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/conditions-and-diseases/respiratory-conditions/chronic-obstructive-pulmonary-disease">
									Chronic obstructive pulmonary disease
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/conditions-and-diseases/cardiovascular-conditions/stroke-and-transient-ischaemic-attack">
									Stroke and transient ischaemic attack
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/population-groups/children-and-young-people">
									Children and young people
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/conditions-and-diseases/mental-health-and-behavioural-conditions/anxiety">
									Anxiety
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/health-and-social-care-delivery/medicines-management">
									Medicines management
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/conditions-and-diseases/cardiovascular-conditions/stroke-and-transient-ischaemic-attack">
									Stroke and transient ischaemic attack
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/population-groups/children-and-young-people">
									Children and young people
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/conditions-and-diseases/mental-health-and-behavioural-conditions/anxiety">
									Anxiety
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/health-and-social-care-delivery/medicines-management">
									Medicines management
								</a>
							</li>
						</ul>
						<a
							className="btn btn--inverse"
							href="https://www.nice.org.uk/guidance/conditions-and-diseases"
						>
							View all guidance topics
						</a>
					</div>
					<div data-g="12 md:3">
						<h3>Browse Guidance</h3>
						<ul className="list list--unstyled">
							<li>
								<a href="https://www.nice.org.uk/guidance/inconsultation">
									In Consultation
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/indevelopment">
									In Development
								</a>
							</li>
							<li>
								<a href="https://www.nice.org.uk/guidance/proposed">Proposed</a>
							</li>
							<li>
								<a href="/">New and updated</a>
							</li>
							<li>
								<a href="/">By programme</a>
							</li>
						</ul>
					</div>
				</div>
			</ReactShadowRoot>
		</section>
	);
}
