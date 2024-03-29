/**
 * Test userAgent to see if we're on iOS
 * @returns {boolean}
 */
export function isIosDevice() {
	return (
		navigator &&
		typeof navigator !== "undefined" &&
		!!(
			navigator.userAgent.match(/(iPod|iPhone|iPad)/g) &&
			navigator.userAgent.match(/AppleWebKit/g)
		)
	);
}

/**
 * return callback function if it is available
 * @returns {function || undefined}
 */
export function getCallbackFunction(funcOrFuncName) {
	if (typeof funcOrFuncName === "function") {
		return funcOrFuncName;
	}

	const fn = window[funcOrFuncName];

	if (typeof fn === "function") {
		return fn;
	}

	return undefined;
}
