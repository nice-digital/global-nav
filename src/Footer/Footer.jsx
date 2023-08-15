import React from "react";

import NiceLogo from "@nice-digital/icons/lib/Logo";

import Social from "./Social";
import Legal from "./Legal";
import Services from "./Services";
import Pages from "./Pages";
import styles from "./Footer.module.scss";
import TrackedLink from "../TrackedLink";
import { footerClickEventAction } from "../tracker";

//TODO add string type for service prop
const Footer = ({ service }) => {
	return (
		<footer className={styles.footer} data-tracking="Global footer">
			<div className={styles.container}>
				<TrackedLink
					eventAction={footerClickEventAction}
					eventLabel="Logo"
					href="https://www.nice.org.uk/"
					className={styles.logo}
					aria-label="Go to NICE home page"
				>
					<NiceLogo />
				</TrackedLink>
				<Services service={service} />
				<Pages service={service} />
				<Social />
			</div>
			<Legal />
		</footer>
	);
};

export default Footer;
