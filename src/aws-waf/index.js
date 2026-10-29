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

// How long a caller of `whenAwsWafTokenReady` is held up before it goes ahead without a token
const tokenTimeout = 5000;

// The SDK's script tag, whether we added it or the host page loads it for itself
const findSdkScript = function () {
	return (
		document.getElementById(scriptId) ||
		document.querySelector("script[src*='.awswaf.com/']")
	);
};

// Either the SDK has already run, we've already added it, or the host page loads it for itself
const isAlreadyOnPage = function () {
	return !!(window.AwsWafIntegration || findSdkScript());
};

const getToken = function () {
	const sdk = window.AwsWafIntegration;

	return sdk && typeof sdk.getToken === "function" ? sdk.getToken() : undefined;
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

/**
 * Waits for the SDK to hold a token, so that a request made straight afterwards carries the
 * `aws-waf-token` cookie. For requests to another service behind a web ACL that can't go through
 * the SDK's own `fetch`, e.g. the NICE Accounts script tag.
 *
 * The promise always resolves and never rejects: straight away when there's no SDK on the page, and
 * after the timeout if the SDK can't get a token. The caller's request goes ahead either way, and
 * it's for the web ACL to decide what to do with one that has no token.
 *
 * @param {number} [timeout] The longest to wait, in milliseconds
 * @returns {Promise<void>}
 */
export const whenAwsWafTokenReady = function (timeout = tokenTimeout) {
	return new Promise(function (resolve) {
		const timer = setTimeout(resolve, timeout),
			done = function () {
				clearTimeout(timer);
				resolve();
			};

		// Look for the SDK on the next tick, not now. A child's effects run before its parent's, so
		// when the account menu asks, the header hasn't added the script yet
		Promise.resolve()
			.then(function () {
				if (window.AwsWafIntegration) return getToken();

				const script = findSdkScript();

				if (!script) return;

				return new Promise(function (loaded) {
					script.addEventListener("load", loaded);
					script.addEventListener("error", loaded);
				}).then(getToken);
			})
			.then(done, done);
	});
};
