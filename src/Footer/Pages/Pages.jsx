import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Pages.module.scss";

import pages from "./pages.json";
import TrackedLink from "../../TrackedLink";
import { footerClickEventAction } from "../../tracker";

export default class Pages extends Component {
	render() {
		return (
			<nav className={styles.wrapper}>
				<ul className={styles.list}>
					{pages.map(
						function(link) {
							let href = link.href;
							if (link.hrefOverrides && this.props.service) {
								href = link.hrefOverrides[this.props.service] || href;
							}
							return (
								<li key={link.text}>
									<TrackedLink
										href={href}
										eventAction={footerClickEventAction}
										eventLabel={link.text}
									>
										{link.text}
									</TrackedLink>
								</li>
							);
						}.bind(this)
					)}
				</ul>
			</nav>
		);
	}
}

Pages.propTypes = {
	service: PropTypes.string
};
