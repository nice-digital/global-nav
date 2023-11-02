/* eslint-disable react/prop-types */
import { Button } from "./Button";
import { Grid, GridItem } from "./Grid";

export function LifeSciences({ rootUrl }) {
	return (
		<section aria-label="Life Sciences - dropdown navigation">
			<h2 className="mt--0">Life Sciences</h2>
			<p>
				We offer tailored support to industry during product development. Our
				expertise can help you build the evidence needed to achieve market
				access.
			</p>
			<Button variant="cta" to={`${rootUrl}/about/what-we-do/life-sciences`}>
				View life sciences
			</Button>
			<div data-tracking="Engage with us">
				<Grid>
					<GridItem>
						<h3 className="mt--d">Get support from NICE</h3>
						<h4 className="h5 mb--c mt--0">
							<a
								href={`${rootUrl}/about/what-we-do/life-sciences/nice-advice-service`}
							>
								NICE Advice service
							</a>
						</h4>
						<p className="mt--0">Trusted, unrivalled expertise.</p>
						<h4 className="h5 mb--c">
							<a
								href={`${rootUrl}/about/what-we-do/life-sciences/contact-us-form`}
							>
								Make an enquiry
							</a>
						</h4>
						<p className="mt--0">Contact us to discuss your requirements.</p>
						<h4 className="h5 mb--c">
							<a
								href={`${rootUrl}/about/what-we-do/life-sciences/our-role-in-the-innovative-licensing-and-access-pathway--ilap`}
							>
								Innovative Licensing and Access Pathway (ILAP)
							</a>
						</h4>
						<p className="mt--0">
							Streamlining patient access to safe, financially sustainable and
							innovative medicines.
						</p>
					</GridItem>

					<GridItem>
						<h3 className="mt--d">Learn how we evaluate technologies</h3>
						<h4 className="h5 mb--c mt--0">
							<a
								href={`${rootUrl}/about/what-we-do/our-programmes/nice-guidance/nice-technology-appraisal-guidance/changes-to-health-technology-evaluation`}
							>
								Health technology evaluation and topic selection manuals
							</a>
						</h4>
						<p className="mt--0">
							Updated manuals for methods, processes and topic selection.
						</p>
						<h4 className="h5 mb--c">
							<a
								href={`${rootUrl}/about/what-we-do/digital-health/office-for-digital-health`}
							>
								Digital health technologies
							</a>
						</h4>
						<p className="mt--0">
							Accelerating our efforts to deliver innovation to the health and
							care system.
						</p>
						<h4 className="h5 mb--c">
							<a
								href={`${rootUrl}/about/what-we-do/our-programmes/evidence-standards-framework-for-digital-health-technologies`}
							>
								Evidence standards framework
							</a>
						</h4>
						<p className="mt--0">
							Using the best available evidence to develop recommendations that
							guide decisions in health, public health and social care.
						</p>
						<h4 className="h5 mb--c">
							<a
								href={`${rootUrl}/about/what-we-do/our-programmes/nice-guidance`}
							>
								Our guidance programmes
							</a>
						</h4>
						<p className="mt--0">
							Ensuring new technologies are clinically effective and offer
							economic value.
						</p>
					</GridItem>

					<GridItem>
						<h3 className="mt--d">Register your product</h3>
						<h4 className="h5 mb--c mt--0">
							<a href="https://www.healthtechconnect.org.uk">
								Non-pharmaceutical
							</a>
						</h4>
						<p className="mt--0">
							HealthTech Connect is a clear and simple point of entry for health
							technologies to access support and national evaluation programmes.
						</p>
						<h4 className="h5 mb--c">
							<a href="https://www.ukpharmascan.org.uk">Pharmaceutical</a>
						</h4>
						<p className="mt--0">
							UK PharmaScan is a database of new medicines, indications and
							formulations in the pharmaceutical pipeline.
						</p>
					</GridItem>

					<GridItem>
						<h3 className="mt--d">Find published and proposed evaluations</h3>
						<h4 className="h5 mb--c mt--0">
							<a
								href={`${rootUrl}/guidance/published?ngt=Diagnostics%20guidance&ndt=Guidance`}
							>
								Diagnostics
							</a>
						</h4>
						<p className="mt--0">
							Guidance on measurements and tests used to evaluate a
							patient&apos;s condition.
						</p>
						<h4 className="h5 mb--c">
							<a
								href={`${rootUrl}/guidance/published?ngt=Medical%20technologies%20guidance&ndt=Guidance`}
							>
								Medical technologies
							</a>
						</h4>
						<p className="mt--0">
							Guidance on medical technologies put forward to NICE by
							manufacturers.
						</p>
						<h4 className="h5 mb--c">
							<a
								href={`${rootUrl}/guidance/published?ngt=Technology%20appraisal%20guidance&ndt=Guidance`}
							>
								Technology appraisals
							</a>
						</h4>
						<p className="mt--0">
							Guidance on new and existing medicines and treatments in the NHS.
						</p>
						<h4 className="h5 mb--c">
							<a
								href={`${rootUrl}/guidance/published?ngt=Highly%20specialised%20technologies%20guidance&ndt=Guidance`}
							>
								Highly specialised technologies
							</a>
						</h4>
						<p className="mt--0">
							Guidance on the use of highly specialised medicines and
							treatments.
						</p>
					</GridItem>
				</Grid>
			</div>
		</section>
	);
}
