import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { checkIsLoggedIn } from "./nice-accounts";
import styles from "./Account.module.scss";

export default class Account extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
	}

	componentDidMount() {
		checkIsLoggedIn()
			.then(data => {
				if (this.props.onLoginStatusChecked) {
					this.props.onLoginStatusChecked(data);
				}
			})
			.catch(e => {
				console.warn("Couldn't load account data", e);
			});
	}

	render() {
		const { accountsData } = this.props;

		return this.props.isLoggedIn ? (
			<div className={styles.account}>
				<button
					className={classnames(styles.button, styles.myAccount)}
					aria-controls="my-account"
					aria-expanded={this.state.isExpanded}
					onClick={this.handleClick}
				>
					My account
				</button>
				<ul
					className={styles.menu}
					aria-hidden={!this.state.isExpanded}
					id="my-account"
				>
					{accountsData.links &&
						Object.keys(accountsData.links).map((text, i) => (
							<li key={i}>
								<a href={accountsData.links[text]}>{text}</a>
							</li>
						))}
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
	onLoginStatusChecked: PropTypes.func.isRequired,
	accountsData: PropTypes.shape({
		display_name: PropTypes.string,
		thumbnail: PropTypes.string,
		links: PropTypes.object
	})
};
