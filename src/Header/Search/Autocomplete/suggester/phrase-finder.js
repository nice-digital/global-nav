// Finds a phrase within a suggested term
export function findPhrase(queryTokens, suggestionTokens) {
	// Look for matching query tokens within the suggestion
	// E.g. if query is "test query" and suggestion is "this is a test query"
	// Then we'd match a phrase at index 10, with two matching tokens
	for (let index = 0; index < suggestionTokens.length; index++) {
		const nextSuggestionTokens = suggestionTokens.slice(
			index,
			index + queryTokens.length
		);

		const isPhraseMatch =
			nextSuggestionTokens.length === queryTokens.length &&
			nextSuggestionTokens.every(function(token, i) {
				// Only use partial matching for the last query token
				return i === queryTokens.length - 1
					? token.str.indexOf(queryTokens[i].str) === 0
					: token.str === queryTokens[i].str;
			});

		if (isPhraseMatch)
			return {
				queryTokens: queryTokens,
				suggestionTokens: nextSuggestionTokens
			};
	}

	// No phrase match
	return null;
}

export function highlightPhrase(suggestionTitle, phraseMatch) {
	const { suggestionTokens, queryTokens } = phraseMatch,
		lastPhraseToken = suggestionTokens[suggestionTokens.length - 1],
		lastqueryToken = queryTokens[queryTokens.length - 1],
		startIndex = suggestionTokens[0].originalIndex,
		phraseLength =
			lastPhraseToken.originalIndex +
			lastqueryToken.originalStr.length -
			suggestionTokens[0].originalIndex;

	return `${suggestionTitle.substr(
		0,
		startIndex
	)}<mark>${suggestionTitle.substr(
		startIndex,
		phraseLength
	)}</mark>${suggestionTitle.substr(startIndex + phraseLength)}`;
}

export default findPhrase;
