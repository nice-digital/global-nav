export function findTerms(queryTokens, suggestionTokens) {
	let termMatches = [];

	for (let index = 0; index < queryTokens.length; index++) {
		const queryToken = queryTokens[index];

		const unusedSuggestionTokens = suggestionTokens.filter(function (
			suggestionToken
		) {
			return termMatches.every(function (prevMatch) {
				return prevMatch.suggestionToken !== suggestionToken;
			});
		});

		// We use a for loop here because Array.prototype.find isn't supported in IE9
		// And we didn't want to pollute the global scope with a polyfill
		let firstMatchedSuggestionToken = null;
		for (let i = 0; i < unusedSuggestionTokens.length; i++) {
			const suggestionToken = unusedSuggestionTokens[i];
			if (suggestionToken.str.indexOf(queryToken.str) === 0) {
				firstMatchedSuggestionToken = suggestionToken;
				break;
			}
		}

		termMatches.push({
			suggestionToken: firstMatchedSuggestionToken,
			queryToken: queryToken,
		});
	}

	const deDupedTermMatches = termMatches;

	// Only consider term matches if we match *every* token in the query
	return deDupedTermMatches.every(function (match) {
		return !!match.suggestionToken;
	})
		? deDupedTermMatches
		: [];
}

// Highlights (with a mark tag) a match within a term
export function highlightTerm(suggestionTitle, termMatch) {
	const { queryToken, suggestionToken } = termMatch,
		nonAlphanumericPrefixMatch =
			suggestionToken.originalStr.match("^[^a-zA-Z0-9]+"),
		alphanumericPrefixLength = nonAlphanumericPrefixMatch
			? nonAlphanumericPrefixMatch[0].length
			: 0,
		index = suggestionToken.originalIndex + alphanumericPrefixLength,
		length = queryToken.str.length;

	return `${suggestionTitle.substr(0, index)}<mark>${suggestionTitle.substr(
		index,
		length
	)}</mark>${suggestionTitle.substr(index + length)}`;
}

export default findTerms;
