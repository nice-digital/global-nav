import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import PropTypes from "prop-types";
import LogoIcon from "@nice-digital/icons/lib/LogoFull";

import TLSMessage from "./TLSMessage";
import Nav from "./Nav";
import Search from "./Search";
import Account from "./Account";

import styles from "./Header.module.scss";

export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false,
			isLoggedIn: false,
			accountsData: null
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleLoginStatusChecked = this.handleLoginStatusChecked.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isExpanded: !prevState.isExpanded
		}));
	}

	handleLoginStatusChecked(accountsData) {
		if (accountsData.display_name) {
			this.setState({ isLoggedIn: true, accountsData: accountsData });
		} else {
			this.setState({ isLoggedIn: false, accountsData: accountsData });
		}
	}

	render() {
		return (
			this.props.enabled !== false && (
				<header className={styles.header}>
					<div className={styles.container}>
						<a
							href="https://www.nice.org.uk/"
							aria-label="Home"
							className={styles.home}
						>
							{typeof SVGRect !== "undefined" && (
								<LogoIcon width={null} height="50px" />
							)}
							{/* TODO: Add fallback PNG logo */}
						</a>
						<div className={styles.wrapper}>
							<div className={styles.search}>
								{this.props.search && <Search {...this.props.search} />}
							</div>
							<button
								className={styles.mobileMenuBtn}
								type="button"
								aria-controls="header-menu"
								aria-expanded={this.state.isExpanded}
								onClick={this.handleClick}
							>
								{this.state.isExpanded ? "Close" : "Menu"}
							</button>
							<div className={styles.account}>
								<Account
									onLoginStatusChecked={this.handleLoginStatusChecked}
									isLoggedIn={this.state.isLoggedIn}
									accountsData={this.state.accountsData}
								/>
							</div>
						</div>
					</div>
					<Nav
						service={this.props.service}
						isExpanded={this.state.isExpanded}
						accountsLinks={
							this.state.accountsData && this.state.accountsData.links
						}
					/>
					<TLSMessage />
				</header>
			)
		);
	}
}

Header.propTypes = {
	service: PropTypes.string,
	enabled: PropTypes.bool,
	search: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({ url: PropTypes.string })
	])
};

Header.defaultProps = {
	search: {}
};

export default hot(Header);
