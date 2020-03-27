import React, { Component } from "react";
import Cookies from "js-cookie";

import styles from "./CoronaMessage.module.scss";

export const CookieName = "seen_corona_message";

// Increment this and release a new version to make the message reappear for users who had previously dismissed
export const CookieMessageVersion = 1;

class CoronaMessage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasSeenPreviousVersion: false,
			isClosed: true,
			canUseDOM: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			canUseDOM: true
		});

		const cookieValue = Cookies.getJSON(CookieName);

		if (!cookieValue) {
			Cookies.remove(CookieName);
			this.setState({
				hasSeenPreviousVersion: false,
				isClosed: false // Hide by default on the assumption that if JS doesn't work then we won't be setting cookies anyway
			});
		} else {
			const seenVersion = cookieValue;

			this.setState({
				hasSeenPreviousVersion: seenVersion < CookieMessageVersion,
				isClosed: seenVersion === CookieMessageVersion
			});
		}
	}

	getCookieDomain(host) {
		return ~host.indexOf("nice.org.uk") ? "nice.org.uk" : host;
	}

	handleClick() {
		const cookieOptions = {
			secure: false,
			expires: 365 // In days
		};

		if (window.location.hostname !== "localhost") {
			cookieOptions.domain = this.getCookieDomain(window.location.hostname);
		}

		Cookies.set(CookieName, CookieMessageVersion, cookieOptions);

		this.setState({
			isClosed: true
		});
	}

	render() {
		if (this.state.isClosed) return null;
		return (
			<aside className={styles.wrapper}>
				<div className={styles.container}>
					<h2>Coronavirus (COVID-19)</h2>
					<p>
						For information on how NICE is supporting the NHS and social care,
						view our new{" "}
						<a href="https://www.nice.org.uk/coronavirus">
							rapid guidelines and evidence&nbsp;reviews
						</a>
						. Learn about the{" "}
						<a href="https://gov.uk/coronavirus">
							government response to coronavirus on&nbsp;GOV.UK
						</a>
						.
					</p>
					<button
						className={styles.button}
						type="button"
						onClick={this.handleClick}
					>
						Close
					</button>
				</div>
			</aside>
		);
	}
}

export default CoronaMessage;
