import React, { Component } from "react";
import Cookies from "js-cookie";

import styles from "./CookieBanner.module.scss";

export const CookieName = "seen_cookie_message";

// Increment this and release a new version to force users to re-accept the message
export const CookieMessageVersion = 2;

export default class CookieBanner extends Component {
	constructor(props) {
		super(props);

		const cookieValue = Cookies.getJSON(CookieName);

		// "yes" was used for the previous version of TopHat
		if (!cookieValue || cookieValue === "yes") {
			//  Delete old cookie by setting expiry date in the past
			Cookies.remove(CookieName);
			this.state = {
				hasSeenPreviousVersion: false,
				isClosed: false
			};
		} else {
			const seenVersion = cookieValue;

			this.state = {
				hasSeenPreviousVersion: seenVersion < CookieMessageVersion,
				isClosed: seenVersion === CookieMessageVersion
			};
		}

		this.handleClick = this.handleClick.bind(this);
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
			<div
				className={styles.banner}
				role="dialog"
				aria-labelledby="cookie-banner-title"
				aria-describedby="cookie-banner-description"
			>
				<div className={styles.container}>
					<h2 className={styles.heading} id="cookie-banner-title">
						Your privacy
					</h2>
					<p className={styles.message} id="cookie-banner-description">
						{this.state.hasSeenPreviousVersion
							? "Our cookie policy has changed since you last accepted it. "
							: "We have placed cookies on your device to help make this website better. "}
						By continuing to use our website, you agree to this. You can find
						out more information and how to change some cookie settings in our{" "}
						<a href="https://www.nice.org.uk/terms-and-conditions#cookies">
							cookie&nbsp;policy
						</a>
						.
					</p>
					<button
						className={styles.button}
						type="button"
						onClick={this.handleClick}
					>
						Accept and close
					</button>
				</div>
			</div>
		);
	}
}
