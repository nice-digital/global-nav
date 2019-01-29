import React, { Component } from "react";

import styles from "./Nav.module.scss";
import links from "./links.json";

export default class Nav extends Component {
	render() {
		return (
			<nav className={styles.nav}>
				<ul>
					{links.map(link => (
						<li key={link.href}>
							<a href={link.href}>
								{link.abbreviation ? (
									<abbr title={link.title}>{link.text}</abbr>
								) : (
									link.text
								)}
							</a>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
