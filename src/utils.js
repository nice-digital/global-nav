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
