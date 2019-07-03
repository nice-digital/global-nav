import React, { Component } from "react";

import styles from "./Services.module.scss";
import TrackedLink from "../../TrackedLink";
import { footerClickEventAction } from "../../tracker";
import links from "../../services.json";

export default class Services extends Component {
	render() {
		return (
			<nav className={styles.wrapper} aria-label="Our services">
				<ul className={styles.list}>
					{links.map(function({ href, id, text, abbreviation, title }) {
						return (
							<li key={id}>
								<TrackedLink
									href={href}
									eventAction={footerClickEventAction}
									eventLabel={text}
								>
									{abbreviation ? <abbr title={title}>{text}</abbr> : text}
								</TrackedLink>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}
