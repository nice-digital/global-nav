/* eslint-disable react/prop-types */
import { Grid, GridItem } from "./Grid";
import styles from "./Components.module.scss";
import classnames from "classnames";
import { Button } from "./Button";

export function MoreFromNICE({ rootUrl }) {
	return (
		<section aria-label="About - navigation">
			<h2 className="mt--0">Explore more from NICE</h2>
			<Grid gutter="loose">
				<GridItem
					data-tracking="Get involved"
					className={classnames(styles.aboutCol)}
				>
					<Button variant="cta" to={`${rootUrl}/about`}>
						Explore about
					</Button>
					<ul className={classnames(styles.listColumnar, "mt--d")}>
						<li>
							<a href={`${rootUrl}/`}>What NICE does</a>
						</li>
						<li>
							<a href={`${rootUrl}/`}>About us</a>
						</li>
						<li>
							<a href={`${rootUrl}/`}>Reusing our content</a>
						</li>
						<li>
							<a href={`${rootUrl}/`}>Implementing NICE guidance</a>
						</li>
						<li>
							<a href={`${rootUrl}/`}>News, blogs and podcasts</a>
						</li>
						<li>
							<a href={`${rootUrl}/`}>Contact us</a>
						</li>
						<li>
							<a href={`${rootUrl}/`}>Get involved</a>
						</li>
						<li>
							<a href={`${rootUrl}/`}>Careers</a>
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
