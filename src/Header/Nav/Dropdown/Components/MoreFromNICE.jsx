/* eslint-disable react/prop-types */
import { Grid, GridItem } from "./Grid";
import styles from "./Components.module.scss";
import classnames from "classnames";

export function MoreFromNICE({ rootUrl }) {
	return (
		<section aria-label="About - navigation">
			<h2 className="mt--0">Explore more from NICE</h2>
			<Grid gutter="loose">
				<GridItem
					data-tracking="Quick links"
					className={classnames(styles.aboutCol)}
				>
					<ul className={classnames(styles.listColumnar, "mt--d")}>
						<li>
							<a href={`${rootUrl}/about-us/what-we-do`}>What NICE does</a>
						</li>
						<li>
							<a href={`${rootUrl}/about-us`}>About us</a>
						</li>
						<li>
							<a href={`${rootUrl}/re-using-our-content`}>
								Reusing our content
							</a>
						</li>
						<li>
							<a href={`${rootUrl}/get-involved/implementing-nice-guidance`}>
								Implementing NICE guidance
							</a>
						</li>
						<li>
							<a href={`${rootUrl}/news`}>News, blogs and podcasts</a>
						</li>
						<li>
							<a href={`${rootUrl}/get-involved/contact-us`}>Contact us</a>
						</li>
						<li>
							<a href={`${rootUrl}/get-involved`}>Get involved</a>
						</li>
						<li>
							<a href={`${rootUrl}/careers`}>Careers</a>
						</li>
					</ul>
				</GridItem>
			</Grid>
			<hr />
			<ul
				className={classnames(styles.inlineList, "mt--d")}
				data-tracking="Contact us"
			>
				<li>
					<a href={`${rootUrl}/`}>Join a committee</a>
				</li>
				<li>
					<a href={`${rootUrl}/`}>Comment on a consultation</a>
				</li>
			</ul>
		</section>
	);
}
