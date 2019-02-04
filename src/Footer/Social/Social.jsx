import React, { Component } from "react";
import FacebookIcon from "@nice-digital/icons/lib/Facebook";
import TwitterIcon from "@nice-digital/icons/lib/Twitter";
import YouTubeIcon from "@nice-digital/icons/lib/YoutubePlay";
//import Instagram from "@nice-digital/icons/lib/Instagram";

import styles from "./Social.module.scss";

export default class Social extends Component {
	render() {
		return (
			<div className={styles.social}>
				<ul>
					<li>
						<a href="https://en-gb.facebook.com/NationalInstituteforHealthandCareExcellence/">
							{typeof SVGRect !== "undefined" && <FacebookIcon />}
							Facebook
						</a>
					</li>
					<li>
						<a href="https://twitter.com/NICEcomms">
							{typeof SVGRect !== "undefined" && <TwitterIcon />}
							Twitter
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/user/NICEmedia">
							{typeof SVGRect !== "undefined" && <YouTubeIcon />}
							YouTube
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/nicecomms/">
							{typeof SVGRect !== "undefined" && <YouTubeIcon />}
							Instagram
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
