import React, { Component } from "react";
import PropTypes from "prop-types";
import LogoNameIcon from "@nice-digital/icons/lib/LogoName";

import TLSMessage from "./TLSMessage";
import Nav from "./Nav";
import Search from "./Search";
import Account from "./Account";

import styles from "./Header.module.scss";

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isExpanded: !prevState.isExpanded
		}));
	}

	render() {
		return (
			this.props.enabled !== false && (
				<header className={styles.header}>
					<a href="https://www.nice.org.uk/" aria-label="Home">
						{typeof SVGRect !== "undefined" && (
							<LogoNameIcon width={null} height="50px" />
						)}
					</a>
					<button
						className={styles.mobileMenuBtn}
						type="button"
						onClick={this.handleClick}
					>
						{this.state.isExpanded ? "Collapse" : "Expand"} Menu
					</button>
					<Search />
					<Account />
					<Nav service={this.props.service} />
					<TLSMessage />
				</header>
			)
		);
	}
}

Header.propTypes = {
	service: PropTypes.string,
	enabled: PropTypes.bool
};
