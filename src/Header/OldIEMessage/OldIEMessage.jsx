import React from "react";
import { getIEVersion } from "./ie";

import styles from "./OldIEMessage.module.scss";

export default function OldIEMessage() {
	const ieVersion = getIEVersion();

	if (!ieVersion || ieVersion > 10) {
		return null;
	}

	return (
		<aside className={styles.container}>
			<div className={styles.alert}>
				<h2>Browser support</h2>
				{ieVersion === 10 ? (
					<div>
						<p>
							Your browser, Internet Explorer (
							<abbr title="Internet Explorer">IE</abbr>) 10, will reach end of
							support on{" "}
							<strong>
								<time dateTime="2020-01-31">January 31, 2020</time>
							</strong>
							. Microsoft will no longer issue security patches from this date
							and your browser may become insecure. You can learn more about
							this in Microsoft’s{" "}
							<a href="https://support.microsoft.com/en-gb/help/17454/lifecycle-faq-internet-explorer">
								Internet Explorer Lifecycle Policy FAQ
							</a>
							.
						</p>
						<p>
							NICE will also stop supporting{" "}
							<abbr title="Internet Explorer">IE</abbr> 10 from{" "}
							<time dateTime="2020-01-31">January 31, 2020</time>. This means
							NICE websites and services may stop functioning correctly in{" "}
							<abbr title="Internet Explorer">IE</abbr> 10 after this date.
						</p>
					</div>
				) : (
					<div>
						<p>
							Your web browser, Internet Explorer (
							<abbr title="Internet Explorer">IE</abbr>) {ieVersion}, is out of
							date. For the best experience, please update your browser to the
							latest version.
						</p>
					</div>
				)}
				<p>
					We recommend you upgrade to a newer browser such as{" "}
					<a href="https://technet.microsoft.com/en-us/microsoft-edge">
						Microsoft Edge
					</a>
					, <a href="https://www.google.com/chrome/">Google Chrome</a> or&nbsp;
					<a href="https://www.mozilla.org/en-GB/firefox/new/">Firefox</a>.
				</p>
			</div>
		</aside>
	);
}
