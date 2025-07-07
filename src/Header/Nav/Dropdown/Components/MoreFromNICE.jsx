/* eslint-disable react/prop-types */
import { Grid, GridItem } from "./Grid";
import styles from "./Components.module.scss";
import classnames from "classnames";

export function MoreFromNICE({ rootUrl }) {
	return (
		<section aria-label="More from NICE - navigation">
			<h2 className="mt--0">Explore more from NICE</h2>
			<Grid gutter="loose">
				<GridItem
					data-tracking="Explore more"
					className={classnames(styles.aboutCol)}
				>
					<ul className={classnames(styles.listColumnar, "mt--d")}>
						<li>
							<a href={`${rootUrl}/what-nice-does`}>What NICE does</a>
						</li>
						<li>
							<a href={`${rootUrl}/about-us`}>About us</a>
						</li>
						<li>
							<a href={`${rootUrl}/reusing-our-content`}>Reusing our content</a>
						</li>
						<li>
							<a href={`${rootUrl}/implementing-nice-guidance`}>
								Implementing NICE guidance
							</a>
						</li>
						<li>
							<a href={`${rootUrl}/news`}>News, blogs and podcasts</a>
						</li>
						<li>
							<a href={`${rootUrl}/contact-us`}>Contact us</a>
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
				data-tracking="Quick links"
			>
				<li>
					<a href={`${rootUrl}/get-involved/our-committees`}>
						Join a committee
					</a>
				</li>
				<li>
					<a href={`${rootUrl}/get-involved/consultations`}>
						Comment on a consultation
					</a>
				</li>
			</ul>
		</section>
	);
}
