import { tokenize } from "./tokenizer";
import { findPhrase, highlightPhrase } from "./phrase-finder";
import { findTerms, highlightTerm } from "./term-finder";

const isValidSuggestion = function (suggestion) {
	return suggestion.phraseMatch != null || suggestion.termMatches.length > 0;
};

const tokenizeSuggestion = function (suggestion) {
	// TODO: Cache tokenized suggestions for performance
	return Object.assign({}, suggestion, {
		tokens: tokenize(suggestion.Title),
	});
};

const highlightSuggestion = function (suggestion) {
	let titleHtml;

	// Only highlight phrases, or individual terms, not both
	if (suggestion.phraseMatch)
		titleHtml = highlightPhrase(suggestion.Title, suggestion.phraseMatch);
	else
		titleHtml = suggestion.termMatches
			.sort(function (a, b) {
				return (
					// Order by later matches first so we can replace highlight matched terms
					b.suggestionToken.originalIndex - a.suggestionToken.originalIndex
				);
			})
			.reduce(function (titleHtml, termMatch) {
				return highlightTerm(titleHtml, termMatch);
			}, suggestion.Title);

	return Object.assign({}, suggestion, {
		titleHtml: titleHtml,
	});
};

const sortSuggestions = function (a, b) {
	// Show phrases first, and phrases closer to the start of the string first
	if (a.phraseMatch && b.phraseMatch) {
		return (
			a.phraseMatch.suggestionTokens[0].originalIndex -
			b.phraseMatch.suggestionTokens[0].originalIndex
		);
	}

	// Prefer phrases over term matches
	if (a.phraseMatch && !b.phraseMatch) return -1;
	if (!a.phraseMatch && b.phraseMatch) return 1;

	// Show term matches towards the start of the string first
	return (
		a.termMatches[0].suggestionToken.originalIndex -
		b.termMatches[0].suggestionToken.originalIndex
	);
};

/**
 *
 * @param {Array<{Title, Link}>} suggestions The complete list of sugggestions to filter
 * @param {String} query The search query
 * @param {Number} maxResults The maximum number of results to show
 */
export const suggester = function (suggestions, query, maxResults = 5) {
	const queryTokens = tokenize(query ? query.trim() : "");

	const findPhrasesAndTerms = function (suggestion) {
		const phraseMatch = findPhrase(queryTokens, suggestion.tokens),
			// Only look for individual tokens if there are no phrases
			termMatches = phraseMatch
				? []
				: findTerms(queryTokens, suggestion.tokens);

		return Object.assign({}, suggestion, {
			phraseMatch: phraseMatch,
			termMatches: termMatches,
		});
	};

	return suggestions
		.map(tokenizeSuggestion)
		.map(findPhrasesAndTerms)
		.filter(isValidSuggestion)
		.map(highlightSuggestion)
		.sort(sortSuggestions)
		.slice(0, maxResults)
		.map(function ({ Title, Link, TypeAheadType, titleHtml }) {
			// keep only the properties we care about
			return {
				Title,
				Link,
				TitleHtml: titleHtml,
				TypeAheadType,
			};
		});
};
