import { integrations } from "./integrations";

/** The id of the script tag we add, so we can tell whether we've already added it */
export const scriptId = "global-nav-aws-waf";

// Passing `false` switches the integration off for the rest of the page's life, whichever of the
// header, footer or main asks next
let isDisabled = false;

/**
 * Finds the web ACL integration for the given hostname, if we know of one
 *
 * @param {string} hostname
 * @returns {object | undefined}
 */
export const getIntegration = function (hostname) {
	return integrations.find(({ hosts }) => hosts.indexOf(hostname) > -1);
};

// Either the SDK has already run, we've already added it, or the host page loads it for itself
const isAlreadyOnPage = function () {
	return !!(
		window.AwsWafIntegration ||
		document.getElementById(scriptId) ||
		document.querySelector("script[src*='.awswaf.com/']")
	);
};

/**
 * Loads the AWS WAF JavaScript SDK, which silently acquires an `aws-waf-token` cookie in the
 * background. The web ACL in front of a service checks for that token, so real users with a token
 * never meet a challenge interstitial. It's the web ACL that keeps bots out, not this script.
 *
 * Safe to call as many times as you like: the script is only ever added once. It's called from the
 * CDN entry point and from the header, footer and main, because no single one of those is on every
 * page of every service.
 *
 * @param {string | false} [scriptURL] An integration URL to use instead of looking one up from the
 * 	hostname, or `false` to not load the SDK at all
 * @returns {boolean} Whether the script was added by this call
 */
export const loadAwsWafChallenge = function (scriptURL) {
	if (scriptURL === false) isDisabled = true;

	if (isDisabled || isAlreadyOnPage()) return false;

	const integration = scriptURL
		? { scriptURL }
		: getIntegration(window.location.hostname);

	// A listed hostname whose web ACL doesn't exist yet has an empty URL: nothing to load
	if (!integration || !integration.scriptURL) return false;

	// The SDK reads this as it loads, so it has to be in place first. Leave it be if the host
	// page has already set its own
	if (integration.cookieDomains && !window.awsWafCookieDomainList) {
		window.awsWafCookieDomainList = integration.cookieDomains;
	}

	const script = document.createElement("script");
	script.id = scriptId;
	script.src = integration.scriptURL;
	script.async = true;

	document.head.appendChild(script);

	return true;
};
