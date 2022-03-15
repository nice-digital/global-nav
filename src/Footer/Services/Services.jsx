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
						// Filtering out the about link, as it appears in Pages component but is required in services for the header dropdown
						.filter(function (item) {
							return item.id !== "about";
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
	href: PropTypes.string,
	id: PropTypes.string,
	text: PropTypes.string,
	abbreviation: PropTypes.bool,
	title: PropTypes.string,
};

function FooterLink({ href, text, abbreviation, title }) {
	return (
		<li>
			<TrackedLink
				href={href}
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
