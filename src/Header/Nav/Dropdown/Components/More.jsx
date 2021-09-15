import React from "react";
import ReactShadowRoot from "react-shadow-root";

const styles = `
	h3{  clear: both;
		font-weight: 700;
		font-size: 1.75rem;
		line-height: 2.5rem;
		margin-bottom: 1rem;
		margin-top: 2rem;
		max-width: 66ch;
		font-family: Lato,Helvetica Neue,Helvetica,Arial,sans-serif;}
	button{
		background: #451551;
		border: .0625em solid #fff;
		color: #fff;
		display: inline-block;
		font-size: 1rem;
		line-height: 1.5rem;
		margin: 0 .5em .5em -.25em;
		padding: .5em 1em;
		position: relative;
		text-align: left;
		text-decoration: none;
		vertical-align: top;
		white-space: nowrap;}
	ul{
		list-style: none;
		margin-left: 0;
		padding: 0;
	}
	.grid{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		column-gap: 2rem;
		flex-wrap: wrap;
	}
	.item{
		flex: 1;
	}`;

export function More() {
	return (
		<section aria-label="More NICE services">
			<ReactShadowRoot>
				<style>{styles}</style>
				<div className="grid">
					<div className="item">
						<h3>Evidence search</h3>
						<p>
							Evidence search helps you make better, faster evidence-based
							decisions. It includes high quality resources from over 800
							organisations - like searching your trusted work favourites in one
							go.
						</p>
						<p>
							<button to="https://evidence.nhs.uk">Evidence search</button>
						</p>
					</div>
					<div className="item">
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
							<button to="https://www.nice.org.uk/standards-and-indicators">
								Standards and indicators
							</button>
						</p>
					</div>
					<div className="item">
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
							<button to="https://www.nice.org.uk/about/what-we-do/evidence-services/journals-and-databases">
								Journals and databases
							</button>
						</p>
					</div>
				</div>
			</ReactShadowRoot>
		</section>
	);
}
