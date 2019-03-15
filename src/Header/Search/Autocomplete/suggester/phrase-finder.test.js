import { findPhrase, highlightPhrase } from "./phrase-finder";
import { tokenize } from "./tokenizer";

describe("phraseFinder", () => {
	describe("findPhrase", () => {
		const queryTokens = tokenize("brown fox");

		it("should not find unmatched phrases", () => {
			expect(findPhrase(queryTokens, tokenize("lorem ipsum dolor"))).toEqual(
				null
			);
		});

		it("should not find partial matched phrases", () => {
			expect(findPhrase(queryTokens, tokenize("the quick brown"))).toEqual(
				null
			);
		});

		it("should find matched phrases at start of string", () => {
			const phrase = findPhrase(queryTokens, tokenize("brown fox jumps"));
			expect(phrase).toEqual({
				queryTokens: queryTokens,
				suggestionTokens: [
					{
						originalIndex: 0,
						originalStr: "brown",
						str: "brown"
					},
					{
						originalIndex: 6,
						originalStr: "fox",
						str: "fox"
					}
				]
			});
		});

		it("should find matched phrase in middle of string", () => {
			const phrase = findPhrase(queryTokens, tokenize("the brown fox jumps"));
			expect(phrase).toEqual({
				queryTokens: queryTokens,
				suggestionTokens: [
					{
						originalIndex: 4,
						originalStr: "brown",
						str: "brown"
					},
					{
						originalIndex: 10,
						originalStr: "fox",
						str: "fox"
					}
				]
			});
		});

		it("should find matched phrase hyphenated string", () => {
			const phrase = findPhrase(queryTokens, tokenize("the brown-fox jumps"));
			expect(phrase).toEqual({
				queryTokens: queryTokens,
				suggestionTokens: [
					{
						originalIndex: 4,
						originalStr: "brown",
						str: "brown"
					},
					{
						originalIndex: 10,
						originalStr: "fox",
						str: "fox"
					}
				]
			});
		});

		it("should find matched phrase in string with non-alphanumerics", () => {
			const phrase = findPhrase(queryTokens, tokenize("the (brown fox) jumps"));
			expect(phrase).toEqual({
				queryTokens: queryTokens,
				suggestionTokens: [
					{
						originalIndex: 5,
						originalStr: "brown",
						str: "brown"
					},
					{
						originalIndex: 11,
						originalStr: "fox",
						str: "fox"
					}
				]
			});
		});
	});

	describe("highlightPhrase", () => {
		it("should highlight full phrase match", () => {
			const suggestionStr = "brown fox",
				phraseMatch = findPhrase(
					tokenize(suggestionStr),
					tokenize(suggestionStr)
				);

			const highlighted = highlightPhrase(suggestionStr, phraseMatch);
			expect(highlighted).toEqual("<mark>brown fox</mark>");
		});

		it("should highlight phrase match at start of string", () => {
			const queryStr = "brown fox",
				suggestionStr = "brown fox jumps over",
				phraseMatch = findPhrase(tokenize(queryStr), tokenize(suggestionStr));

			const highlighted = highlightPhrase(suggestionStr, phraseMatch);
			expect(highlighted).toEqual("<mark>brown fox</mark> jumps over");
		});

		it("should highlight phrase match at end of string", () => {
			const queryStr = "brown fox",
				suggestionStr = "the quick brown fox",
				phraseMatch = findPhrase(tokenize(queryStr), tokenize(suggestionStr));

			const highlighted = highlightPhrase(suggestionStr, phraseMatch);
			expect(highlighted).toEqual("the quick <mark>brown fox</mark>");
		});

		it("should highlight phrase match with non-alphanumerics", () => {
			const queryStr = "brown fox",
				suggestionStr = "the quick (brown fox) jumps",
				phraseMatch = findPhrase(tokenize(queryStr), tokenize(suggestionStr));

			const highlighted = highlightPhrase(suggestionStr, phraseMatch);
			expect(highlighted).toEqual("the quick (<mark>brown fox</mark>) jumps");
		});

		it("should highlight hyphneated phrase match", () => {
			const queryStr = "brown fox",
				suggestionStr = "the quick brown-fox jumps",
				phraseMatch = findPhrase(tokenize(queryStr), tokenize(suggestionStr));

			const highlighted = highlightPhrase(suggestionStr, phraseMatch);
			expect(highlighted).toEqual("the quick <mark>brown-fox</mark> jumps");
		});

		it("should highlight partial matched phrase", () => {
			const queryStr = "brown fo",
				suggestionStr = "the quick brown fox jumps",
				phraseMatch = findPhrase(tokenize(queryStr), tokenize(suggestionStr));

			const highlighted = highlightPhrase(suggestionStr, phraseMatch);
			expect(highlighted).toEqual("the quick <mark>brown fo</mark>x jumps");
		});
	});
});
