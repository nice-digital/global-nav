/**
 * @typedef Token
 * @type {object}
 * @property {number} originalIndex The 0-based index in the original string
 * @property {string} str The token string
 */

/**
 * Splits a string into tokens, based on whitespace
 *
 * @param {string} str The string to split
 * @returns {Token[]} The list of tokens
 */
export function whitespaceTokenizer(str) {
	const tokens = [];

	let currentToken = null;

	for (let index = 0; index < str.length; index++) {
		const char = str[index];

		if (/[a-zA-Z0-9]/.test(char)) {
			if (!currentToken) {
				currentToken = {
					originalIndex: index,
					str: ""
				};
			}
			currentToken.str += char;
		} else if (currentToken) {
			tokens.push(currentToken);
			currentToken = null;
		}
	}

	if (currentToken) tokens.push(currentToken);

	return tokens;
}

/**
 * @typedef NormalisedToken
 * @type {object}
 * @property {number} originalIndex The 0-based index in the original string
 * @property {string} originalStr The original, un-normalised token string
 * @property {string} str The token string
 */

/**
 * Removes empty (falsy) tokens, trims and lowercases
 * @param {Token[]} tokens The list of tokens to normalise
 * @returns {NormalisedToken[]} The list of normalised tokens
 */
export function normalizeTokens(tokens) {
	return tokens
		.map(function(token) {
			return {
				originalIndex: token.originalIndex,
				originalStr: token.str,
				str: token.str
					.toLowerCase()
					// Trim non-alphanumeric characters
					.replace(/^[^a-z\d]*|[^a-z\d]*$/gi, "")
			};
		})
		.filter(function(token) {
			return !!token.str;
		});
}

/**
 * Splits a string on whitespace into an array of normalised tokens
 *
 * @param {string} str The string to split
 * @returns {NormalisedToken[]} The list of normalised tokens
 */
export function tokenize(str) {
	return normalizeTokens(whitespaceTokenizer(str));
}

export default tokenize;
