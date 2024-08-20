import FacebookIcon from "@nice-digital/icons/lib/Facebook";
import XLogo from "@nice-digital/icons/lib/XLogo";
import YouTubeIcon from "@nice-digital/icons/lib/YoutubePlay";
import LinkedInIcon from "@nice-digital/icons/lib/Linkedin";

import styles from "./Social.module.scss";
import TrackedLink from "../../TrackedLink";
import { footerClickEventAction } from "../../tracker";

const Social = () => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list} aria-label="NICE on social media">
				<li>
					<TrackedLink
						href="https://en-gb.facebook.com/NationalInstituteforHealthandCareExcellence/"
						eventAction={footerClickEventAction}
						eventLabel="Facebook"
					>
						<FacebookIcon />
						Facebook
					</TrackedLink>
				</li>
				<li>
					<TrackedLink
						href="https://x.com/NICEcomms"
						eventAction={footerClickEventAction}
						eventLabel="X"
					>
						<XLogo />X
					</TrackedLink>
				</li>
				<li>
					<TrackedLink
						href="https://www.youtube.com/user/NICEmedia"
						eventAction={footerClickEventAction}
						eventLabel="YouTube"
					>
						<YouTubeIcon />
						YouTube
					</TrackedLink>
				</li>
				<li>
					<TrackedLink
						href="https://www.linkedin.com/company/national-institute-for-health-and-clinical-excellence"
						eventAction={footerClickEventAction}
						eventLabel="LinkedIn"
					>
						<LinkedInIcon />
						LinkedIn
					</TrackedLink>
				</li>
			</ul>
		</div>
	);
};

export default Social;
