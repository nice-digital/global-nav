export function findTerms(queryTokens, suggestionTokens) {
	let termMatches = [];

	for (let index = 0; index < queryTokens.length; index++) {
		const queryToken = queryTokens[index];

		const unusedSuggestionTokens = suggestionTokens.filter(function(
			suggestionToken
		) {
			return termMatches.every(function(prevMatch) {
				return prevMatch.suggestionToken !== suggestionToken;
			});
		});

		const firstMatchedSuggestionToken = unusedSuggestionTokens.find(function(
			suggestionToken
		) {
			return suggestionToken.str.indexOf(queryToken.str) === 0;
		});

		termMatches.push({
			suggestionToken: firstMatchedSuggestionToken,
			queryToken: queryToken
		});
	}

	// const termMatches = queryTokens.map(function(queryToken) {
	// 	const firstMatchedSuggestionToken = suggestionTokens.find(function(
	// 		suggestionToken
	// 	) {
	// 		return suggestionToken.str.indexOf(queryToken.str) === 0;
	// 	});
	// 	return {
	// 		suggestionToken: firstMatchedSuggestionToken,
	// 		queryToken: queryToken
	// 	};
	// });

	const deDupedTermMatches = termMatches;

	// const deDupedTermMatches = termMatches.filter(function(termMatch, index) {
	// 	const prevMatches = termMatches.slice(0, index);

	// 	const tokenHasAlreadyBeenUsed = prevMatches.some(function(prevMatch) {
	// 		return prevMatch.suggestionToken === termMatch.suggestionToken;
	// 	});

	// 	return !tokenHasAlreadyBeenUsed;
	// });

	// Only consider term matches if we match *every* token in the query
	return deDupedTermMatches.every(function(match) {
		return !!match.suggestionToken;
	})
		? deDupedTermMatches
		: [];
}

// Highlights (with a mark tag) a match within a term
export function highlightTerm(suggestionTitle, termMatch) {
	const { queryToken, suggestionToken } = termMatch,
		nonAlphanumericPrefixMatch = suggestionToken.originalStr.match(
			"^[^a-zA-Z0-9]+"
		),
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
