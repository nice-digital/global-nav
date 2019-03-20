import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { checkIsLoggedIn } from "./nice-accounts";
import styles from "./Account.module.scss";

const escapeKeyCode = 27;

export default class Account extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);

		this.buttonRef = React.createRef();
		this.accountMenuRef = React.createRef();
	}

	handleClick(e) {
		const isKeyboardEvent = !e.pageX;
		this.setState(
			function(prevState) {
				return { isExpanded: !prevState.isExpanded };
			},
			function() {
				if (this.state.isExpanded && isKeyboardEvent) {
					this.accountMenuRef.current.setAttribute("tabIndex", -1);
					this.accountMenuRef.current.focus();
				}
			}.bind(this)
		);
	}

	handleKeyDown(event) {
		if (event.keyCode === escapeKeyCode) {
			event.preventDefault();
			this.setState({
				isExpanded: false
			});
			this.buttonRef.current.focus();
		}
	}

	componentDidMount() {
		checkIsLoggedIn()
			.then(
				function(data) {
					if (this.props.onLoginStatusChecked) {
						this.props.onLoginStatusChecked(data);
					}
				}.bind(this)
			)
			.catch(
				function(e) {
					console.warn("Couldn't load account data", e);
				}.bind(this)
			);
	}

	render() {
		const { accountsData } = this.props;

		return this.props.isLoggedIn ? (
			<div className={styles.account}>
				<button
					className={classnames(styles.button, styles.myAccount)}
					id="my-account-button"
					aria-controls="my-account"
					aria-haspopup="menu"
					aria-expanded={this.state.isExpanded}
					onClick={this.handleClick}
					onKeyDown={this.handleKeyDown}
					ref={this.buttonRef}
				>
					My account
				</button>
				<ul
					className={styles.menu}
					id="my-account"
					role="menu"
					aria-hidden={!this.state.isExpanded}
					aria-labelledby="my-account-button"
					ref={this.accountMenuRef}
				>
					{accountsData.links &&
						Object.keys(accountsData.links).map(
							function(text, i) {
								return (
									<li key={i} role="presentation">
										<a
											href={accountsData.links[text]}
											role="menuitem"
											onKeyDown={this.handleKeyDown}
											data-hj-suppress={
												accountsData.links[text].indexOf("profile") > -1
													? ""
													: null
											}
										>
											{text}
										</a>
									</li>
								);
							}.bind(this)
						)}
				</ul>
			</div>
		) : (
			<a href="https://accounts.nice.org.uk/signin" className={styles.button}>
				Sign in
			</a>
		);
	}
}

Account.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	onLoginStatusChecked: PropTypes.func,
	accountsData: PropTypes.shape({
		display_name: PropTypes.string,
		thumbnail: PropTypes.string,
		links: PropTypes.object
	})
};
