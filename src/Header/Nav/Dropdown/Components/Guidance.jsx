import React from "react";
import ReactShadowRoot from "react-shadow-root";

const styles = `
	h2{  clear: both;
		font-weight: 700;
		font-size: 2.25rem;
		line-height: 2.5rem;
		margin-bottom: 1rem;
		margin-top: 0rem;
		max-width: 66ch;
		font-family: Lato,Helvetica Neue,Helvetica,Arial,sans-serif;}
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
	a{
		color: #005ea5;
		line-height: 1.25;
		text-decoration: none}
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

export function Guidance() {
	return (
		<section aria-label="NICE Guidance - dropdown navigation">
			<ReactShadowRoot>
				<style>{styles}</style>
				<h2>Guidance</h2>
				<p>
					Evidence-based recommendations developed by independent committees,
					including professionals and lay members, and consulted on by
					stakeholder.
				</p>
				<button to="/">Find NICE Guidance</button>

				<div className="grid">
					<div className="item">
						<h3>Most visited guidance topics</h3>
						<p>Guidance grouped by subject, most visited by other people:</p>
						<ul style={{ columnCount: 2 }}>
							<li>
								<a href="/">Diabetes</a>
							</li>
							<li>
								<a href="/">Mental health and wellbeing</a>
							</li>
							<li>
								<a href="/">Depression</a>
							</li>
							<li>
								<a href="/">Chronic obstructive pulmonary disease</a>
							</li>
							<li>
								<a href="/">Stroke and transient ischaemic attack</a>
							</li>
							<li>
								<a href="/">Children and young people</a>
							</li>
							<li>
								<a href="/">Anxiety</a>
							</li>
							<li>
								<a href="/">Medicines management</a>
							</li>
						</ul>
					</div>
					<div className="item">
						<h3>COVID-19</h3>
						<p>Latest COVID-19 guidance:</p>
						<ul>
							<li>
								<a href="/">
									COVID-19 rapid guideline: vaccine-induced immune
									thrombocytopenia and thrombosis (VITT)
								</a>
							</li>
							<li>
								<a href="/">COVID-19 rapid guideline: managing COVID-19</a>
							</li>
							<li>
								<a href="/">View all COVID-19 guidance</a>
							</li>
						</ul>
					</div>
				</div>
			</ReactShadowRoot>
		</section>
	);
}
