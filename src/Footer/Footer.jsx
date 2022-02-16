import React, { Component } from "react";
import PropTypes from "prop-types";

import NiceLogo from "@nice-digital/icons/lib/Logo";

import Social from "./Social";
import Legal from "./Legal";
import Services from "./Services";
import Pages from "./Pages";
import styles from "./Footer.module.scss";
import TrackedLink from "../TrackedLink";
import { footerClickEventAction } from "../tracker";
import { BackToTop } from "./BackToTop/BackToTop";

export class Footer extends Component {
	constructor(props) {
		super(props);

		console.log(this.props.backToTop.show);
	}

	render() {
		return (
			<>
				{this.props.backToTop.show ? (
					<BackToTop scrollTargetId={this.props.backToTop.scrollTargetId} />
				) : null}

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
						<Services service={this.props.service} />
						<Pages service={this.props.service} />
						<Social />
					</div>
					<Legal />
				</footer>
			</>
		);
	}
}

Footer.defaultProps = {
	backToTop: { show: false, scrollTargetId: "content-start" },
};

Footer.propTypes = {
	service: PropTypes.string,
	backToTop: { show: PropTypes.boolean },
};

export default Footer;
