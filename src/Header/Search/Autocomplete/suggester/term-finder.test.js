import { findTerms, highlightTerm } from "./term-finder";
import { tokenize } from "./tokenizer";

describe("termFinder", () => {
	describe("findTerms", () => {
		it("should not find unmatched terms", () => {
			expect(
				findTerms(tokenize("blah"), tokenize("lorem ipsum dolor"))
			).toEqual([]);
		});

		it("should find single term at start of query", () => {
			expect(
				findTerms(tokenize("lorem"), tokenize("lorem ipsum dolor"))
			).toEqual([
				{
					queryToken: {
						str: "lorem",
						originalStr: "lorem",
						originalIndex: 0
					},
					suggestionToken: {
						str: "lorem",
						originalStr: "lorem",
						originalIndex: 0
					}
				}
			]);
		});

		it("should find multiple terms in order", () => {
			expect(
				findTerms(tokenize("lorem dolor"), tokenize("lorem ipsum dolor sit"))
			).toEqual([
				{
					queryToken: {
						str: "lorem",
						originalStr: "lorem",
						originalIndex: 0
					},
					suggestionToken: {
						str: "lorem",
						originalStr: "lorem",
						originalIndex: 0
					}
				},
				{
					queryToken: {
						str: "dolor",
						originalStr: "dolor",
						originalIndex: 6
					},
					suggestionToken: {
						str: "dolor",
						originalStr: "dolor",
						originalIndex: 12
					}
				}
			]);
		});

		it("should find multiple terms in wrong order", () => {
			expect(
				findTerms(tokenize("dolor lorem"), tokenize("lorem ipsum dolor sit"))
			).toEqual([
				{
					queryToken: {
						str: "dolor",
						originalStr: "dolor",
						originalIndex: 0
					},
					suggestionToken: {
						str: "dolor",
						originalStr: "dolor",
						originalIndex: 12
					}
				},
				{
					queryToken: {
						str: "lorem",
						originalStr: "lorem",
						originalIndex: 6
					},
					suggestionToken: {
						str: "lorem",
						originalStr: "lorem",
						originalIndex: 0
					}
				}
			]);
		});

		it("should find second term for partially repeated query term", () => {
			expect(
				findTerms(tokenize("angio an"), tokenize("Angio-oedema anaphylaxis"))
			).toEqual([
				{
					queryToken: {
						str: "angio",
						originalStr: "angio",
						originalIndex: 0
					},
					suggestionToken: {
						str: "angio",
						originalStr: "Angio",
						originalIndex: 0
					}
				},
				{
					queryToken: {
						str: "an",
						originalStr: "an",
						originalIndex: 6
					},
					suggestionToken: {
						str: "anaphylaxis",
						originalStr: "anaphylaxis",
						originalIndex: 13
					}
				}
			]);
		});

		it("should find no matches for partially repeated query token", () => {
			expect(
				findTerms(tokenize("lorem lor"), tokenize("test lorem ipsum dolor sit"))
			).toEqual([]);
		});
	});

	describe("highlightTerm", () => {
		it("should highlight single term", () => {
			const suggestionStr = "the quick brown fox",
				termMatches = findTerms(tokenize("quick"), tokenize(suggestionStr));

			const highlighted = highlightTerm(suggestionStr, termMatches[0]);
			expect(highlighted).toEqual("the <mark>quick</mark> brown fox");
		});

		it("should highlight single term within parenthesis", () => {
			const suggestionStr = "the! (Quick) Brown Fox",
				termMatches = findTerms(tokenize("quick"), tokenize(suggestionStr));

			const highlighted = highlightTerm(suggestionStr, termMatches[0]);
			expect(highlighted).toEqual("the! (<mark>Quick</mark>) Brown Fox");
		});

		it("should highlight single term from query with non-alphanumerics", () => {
			const suggestionStr = "the! (Quick) Brown Fox",
				termMatches = findTerms(tokenize("[quick]"), tokenize(suggestionStr));

			const highlighted = highlightTerm(suggestionStr, termMatches[0]);
			expect(highlighted).toEqual("the! (<mark>Quick</mark>) Brown Fox");
		});
	});
});
