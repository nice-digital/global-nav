// Checks if you are logged in via NICE Accounts
// Returns a promise that resolves with the data from NICE Accounts.
// Returns a promise that rejects if the data could not be loaded.

import { whenAwsWafTokenReady } from "../../aws-waf";

export const checkIsLoggedIn = function (environment) {
	// NICE Accounts sits behind an AWS WAF web ACL. A script tag can't send the token as a header,
	// so wait for the SDK to set the token cookie, which the browser then sends along by itself
	return whenAwsWafTokenReady().then(function () {
		return loadAccountsData(environment);
	});
};

const loadAccountsData = function (environment) {
	return new Promise(function (resolve, reject) {
		const url = getDomainBaseUrl(environment) + "tophat";

		var body = document.body;
		var script = document.createElement("script");
		script.src =
			url +
			(~url.indexOf("?") ? "&" : "?") +
			Math.floor(Math.random() * 10000000000);

		let done = false;

		script.onload = script.onreadystatechange = function () {
			if (
				!done &&
				(!script.readyState ||
					script.readyState === "loaded" ||
					script.readyState === "complete")
			) {
				done = true;
				// Handle memory leak in IE
				script.onload = script.onreadystatechange = null;
				if (body && script.parentNode) {
					body.removeChild(script);
				}

				resolve(window._na);
			}
		};
		script.onerror = reject;

		body.insertBefore(script, body.firstChild);
	});
};

export const getDomainBaseUrl = function (environment) {
	return `https://${
		environment !== "live" ? environment + "-" : ""
	}accounts.nice.org.uk/`;
};
