import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import PropTypes from "prop-types";

import NiceLogo from "@nice-digital/icons/lib/Logo";

import Social from "./Social";
import Legal from "./Legal";
import Services from "./Services";
import Pages from "./Pages";
import styles from "./Footer.module.scss";
import TrackedLink from "../TrackedLink";
import { footerClickEventAction } from "../tracker";

export class Footer extends Component {
	render() {
		return (
			<footer className={styles.footer}>
				<div className={styles.container}>
					<TrackedLink
						eventAction={footerClickEventAction}
						eventLabel="Logo"
						href="https://www.nice.org.uk/"
						className={styles.logo}
						aria-label="Go to NICE home page"
					>
						{typeof SVGRect !== "undefined" && <NiceLogo />}
					</TrackedLink>
					<Services service={this.props.service} />
					<Pages service={this.props.service} />
					<Social />
				</div>
				<Legal />
			</footer>
		);
	}
}

Footer.propTypes = {
	service: PropTypes.string
};

export default hot(Footer);
