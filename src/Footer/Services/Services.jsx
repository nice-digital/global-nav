import React, { Component } from "react";
import PropTypes from "prop-types";
import { createMarkup } from "../../utils";

import styles from "./Services.module.scss";
import TrackedLink from "../../TrackedLink";
import { footerClickEventAction } from "../../tracker";
import links from "../../services.json";

export default class Services extends Component {
	render() {
		return (
			<nav className={styles.wrapper} aria-label="Our services">
				<ul className={styles.list}>
					{links.external.map(
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
					<>
						<span dangerouslySetInnerHTML={createMarkup(text)}></span>
					</>
				)}
			</TrackedLink>
		</li>
	);
}

Services.propTypes = {
	service: PropTypes.string,
};
