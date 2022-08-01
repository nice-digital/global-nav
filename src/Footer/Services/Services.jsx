import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Services.module.scss";
import TrackedLink from "../../TrackedLink";
import { footerClickEventAction } from "../../tracker";
import links from "../../services.json";

export default class Services extends Component {
	render() {
		return (
			<nav className={styles.wrapper} aria-label="Our services">
				<ul className={styles.list}>
					{links.external
						.filter(function (item) {
							return item.footer;
						})
						.map(
							function (link) {
								if (link.nestedLinks) {
									return link.nestedLinks.map((nestedLink) => {
										return <FooterLink key={nestedLink.id} {...nestedLink} />;
									});
								} else {
									return <FooterLink key={link.id} {...link} />;
								}
							}.bind(this)
						)}
				</ul>
			</nav>
		);
	}
}

FooterLink.propTypes = {
	landingUrl: PropTypes.string,
	id: PropTypes.string,
	text: PropTypes.string,
	abbreviation: PropTypes.bool,
	title: PropTypes.string,
};

function FooterLink({ landingUrl, text, abbreviation, title }) {
	return (
		<li>
			<TrackedLink
				href={landingUrl}
				eventAction={footerClickEventAction}
				eventLabel={text}
				className={styles.link}
			>
				{abbreviation ? (
					<>
						<abbr title={title}>
							{text} <span className={styles.visuallyHidden}>{title}</span>
						</abbr>
						<span aria-hidden="true" className={styles.tooltip}>
							{title}
						</span>
					</>
				) : (
					text
				)}
			</TrackedLink>
		</li>
	);
}

Services.propTypes = {
	service: PropTypes.string,
};
