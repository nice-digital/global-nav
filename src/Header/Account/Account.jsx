import React, { Component } from "react";
import PropTypes from "prop-types";

import { checkIsLoggedIn } from "./nice-accounts";
import styles from "./Account.module.scss";

export default class Account extends Component {
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

		return (
			<div className={styles.accounts}>
				{this.props.isLoggedIn ? (
					<div>
						<p>You are logged in as {accountsData.display_name}.</p>
						<ul>
							{accountsData.links &&
								Object.keys(accountsData.links).map((text, i) => (
									<li key={i}>
										<a href={accountsData.links[text]}>{text}</a>
									</li>
								))}
						</ul>
					</div>
				) : (
					<a
						href="https://accounts.nice.org.uk/signin"
						className={styles.signin}
					>
						Sign in
					</a>
				)}
			</div>
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
