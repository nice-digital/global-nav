import styles from "./Legal.module.scss";
import TrackedLink from "../../TrackedLink";
import { footerClickEventAction } from "../../tracker";

const cyberEssentialsCertificate = {
	id: "99cdb154-4ee0-41a4-bdef-6d2fa58bf757",
	expiryDate: "2026-06-02",
};

const Legal = () => {
	const today = new Date();
	const cyberEssentialsExpiryDate = new Date(
		cyberEssentialsCertificate.expiryDate
	);
	const isCyberEssentialsValid = today < cyberEssentialsExpiryDate;
	console.log({ isCyberEssentialsValid });
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.layout}>
					<div className={styles.menuWrapper}>
						<nav className={styles.menu} aria-label="Legal menu">
							<ul>
								<li>
									<TrackedLink
										href="https://www.nice.org.uk/accessibility"
										eventAction={footerClickEventAction}
										eventLabel="Accessibility"
									>
										Accessibility
									</TrackedLink>
								</li>
								<li>
									<TrackedLink
										href="https://www.nice.org.uk/freedom-of-information"
										eventAction={footerClickEventAction}
										eventLabel="Freedom of information"
									>
										Freedom of information
									</TrackedLink>
								</li>
								<li>
									<TrackedLink
										href="https://www.nice.org.uk/glossary"
										eventAction={footerClickEventAction}
										eventLabel="Glossary"
									>
										Glossary
									</TrackedLink>
								</li>
								<li>
									<TrackedLink
										href="https://www.nice.org.uk/terms-and-conditions"
										eventAction={footerClickEventAction}
										eventLabel="Terms and conditions"
									>
										Terms and conditions
									</TrackedLink>
								</li>
								<li>
									<TrackedLink
										href="https://www.nice.org.uk/privacy-notice"
										eventAction={footerClickEventAction}
										eventLabel="Privacy notice"
									>
										Privacy notice
									</TrackedLink>
								</li>
								<li>
									<TrackedLink
										href="https://www.nice.org.uk/cookies"
										eventAction={footerClickEventAction}
										eventLabel="Cookies"
									>
										Cookies
									</TrackedLink>
								</li>
							</ul>
						</nav>
						<p className={styles.copyright}>
							&copy;{" "}
							<abbr title="National Institute for Health and Care Excellence">
								NICE
							</abbr>{" "}
							{new Date().getFullYear()}. All rights reserved. Subject to{" "}
							<TrackedLink
								href="https://www.nice.org.uk/terms-and-conditions#notice-of-rights"
								eventAction={footerClickEventAction}
								eventLabel="Notice of rights"
							>
								Notice of rights
							</TrackedLink>
							.
						</p>
					</div>

					{isCyberEssentialsValid && (
						<div className={styles.cyberLogoWrapper}>
							<iframe
								src="https://registry.blockmarktech.com/certificates/99cdb154-4ee0-41a4-bdef-6d2fa58bf757/widget/?tooltip_position=bottom_left&theme=transparent&hover=t"
								title="Cyber Essentials Certification"
								className={styles.cyberLogo}
							></iframe>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Legal;
