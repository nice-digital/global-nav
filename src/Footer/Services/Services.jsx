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
					{links.map(
						function ({ href, id, text, abbreviation, title }) {
							return (
								<li key={id}>
									<TrackedLink
										href={href}
										eventAction={footerClickEventAction}
										eventLabel={text}
										aria-current={id == this.props.service ? "true" : null}
										className={styles.link}
									>
										{abbreviation ? (
											<>
												<abbr title={title}>
													{text}{" "}
													<span className={styles.visuallyHidden}>{title}</span>
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
						}.bind(this)
					)}
				</ul>
			</nav>
		);
	}
}

Services.propTypes = {
	service: PropTypes.string,
};
