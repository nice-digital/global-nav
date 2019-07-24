import React, { Component } from "react";
import FacebookIcon from "@nice-digital/icons/lib/Facebook";
import TwitterIcon from "@nice-digital/icons/lib/Twitter";
import YouTubeIcon from "@nice-digital/icons/lib/YoutubePlay";
import LinkedInIcon from "@nice-digital/icons/lib/Linkedin";
import InstagramIcon from "@nice-digital/icons/lib/Instagram";

import styles from "./Social.module.scss";
import TrackedLink from "../../TrackedLink";
import { footerClickEventAction } from "../../tracker";

export default class Social extends Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<ul className={styles.list} aria-label="NICE on social media">
					<li>
						<TrackedLink
							href="https://en-gb.facebook.com/NationalInstituteforHealthandCareExcellence/"
							eventAction={footerClickEventAction}
							eventLabel="Facebook"
						>
							{typeof SVGRect !== "undefined" && <FacebookIcon />}
							Facebook
						</TrackedLink>
					</li>
					<li>
						<TrackedLink
							href="https://twitter.com/NICEcomms"
							eventAction={footerClickEventAction}
							eventLabel="Twitter"
						>
							{typeof SVGRect !== "undefined" && <TwitterIcon />}
							Twitter
						</TrackedLink>
					</li>
					<li>
						<TrackedLink
							href="https://www.youtube.com/user/NICEmedia"
							eventAction={footerClickEventAction}
							eventLabel="YouTube"
						>
							{typeof SVGRect !== "undefined" && <YouTubeIcon />}
							YouTube
						</TrackedLink>
					</li>
					<li>
						<TrackedLink
							href="https://www.instagram.com/nicecomms/"
							eventAction={footerClickEventAction}
							eventLabel="Instagram"
						>
							{typeof SVGRect !== "undefined" && <InstagramIcon />}
							Instagram
						</TrackedLink>
					</li>
					<li>
						<TrackedLink
							href="https://www.linkedin.com/company/national-institute-for-health-and-clinical-excellence"
							eventAction={footerClickEventAction}
							eventLabel="LinkedIn"
						>
							{typeof SVGRect !== "undefined" && <LinkedInIcon />}
							LinkedIn
						</TrackedLink>
					</li>
				</ul>
			</div>
		);
	}
}
