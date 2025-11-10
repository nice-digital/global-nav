import styles from "./Legal.module.scss";
import TrackedLink from "../../TrackedLink";
import { footerClickEventAction } from "../../tracker";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { useEffect, useState } from "react";

const Legal = () => {
	const expiryDate = "2026-06-02";
	const today = new Date();
	const expiry = new Date(expiryDate);
	const isValid = today < expiry;
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Grid>
					<GridItem
						cols={12}
						md={{ cols: isValid ? 9 : 12 }}
						className={isValid ? undefined : styles.invalidCyberlogo}
					>
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
					</GridItem>
					{isValid && (
						<GridItem cols={12} md={{ cols: 3 }}>
							<iframe
								src="https://registry.blockmarktech.com/certificates/99cdb154-4ee0-41a4-bdef-6d2fa58bf757/widget/?tooltip_position=bottom_right&theme=transparent&hover=t"
								className={styles.cyberlogo}
								title="Cyber Essentials Certification"
							></iframe>
						</GridItem>
					)}
				</Grid>
			</div>
		</div>
	);
};

export default Legal;
