import React, { Component } from "react";

import styles from "./TLSMessage.module.scss";

export default class TLSMessage extends Component {
	// See https://gist.github.com/padolsey/527683#gistcomment-768383
	getIEVersion() {
		let tmp = (document["documentMode"] || document.attachEvent) && "ev",
			msie =
				tmp &&
				(tmp = window[tmp + "al"]) &&
				tmp("/*@cc_on 1;@*/") &&
				+((/msie (\d+)/i.exec(navigator.userAgent) || [])[1] || 0);
		return msie || void 0;
	}

	render() {
		const ieVersion = this.getIEVersion();

		if (!ieVersion || ieVersion > 10) {
			return null;
		}

		return (
			<div className={styles.alert}>
				Your version of Internet Explorer (version {ieVersion}) doesnt support
				TLS 1.2.
			</div>
		);
	}
}
