import { whitespaceTokenizer, normalizeTokens } from "./tokenizer";

describe("suggester", () => {
	describe("whitespaceTokenizer", () => {
		it("should keep a single word as token", () => {
			const tokens = whitespaceTokenizer("sausage");
			expect(tokens).toEqual([
				{
					originalIndex: 0,
					str: "sausage",
				},
			]);
		});
		it("should ignore whitespace from tokens", () => {
			const tokens = whitespaceTokenizer(" sausage ");
			expect(tokens).toEqual([
				{
					originalIndex: 1,
					str: "sausage",
				},
			]);
		});
		it("should split multiple words into tokens", () => {
			const tokens = whitespaceTokenizer("sausage bacon");
			expect(tokens).toEqual([
				{
					originalIndex: 0,
					str: "sausage",
				},
				{
					originalIndex: 8,
					str: "bacon",
				},
			]);
		});
		it("should split multiple words with parentheses into tokens", () => {
			const tokens = whitespaceTokenizer("sausage (pork) bacon");
			expect(tokens).toEqual([
				{
					originalIndex: 0,
					str: "sausage",
				},
				{
					originalIndex: 9,
					str: "pork",
				},
				{
					originalIndex: 15,
					str: "bacon",
				},
			]);
		});
		it("should split hyphen separated words into tokens", () => {
			const tokens = whitespaceTokenizer("sausage - bacon");
			expect(tokens).toEqual([
				{
					originalIndex: 0,
					str: "sausage",
				},
				{
					originalIndex: 10,
					str: "bacon",
				},
			]);
		});
		it("should split hyphenated words into tokens", () => {
			const tokens = whitespaceTokenizer("sausage-bacon");
			expect(tokens).toEqual([
				{
					originalIndex: 0,
					str: "sausage",
				},
				{
					originalIndex: 8,
					str: "bacon",
				},
			]);
		});
	});

	describe("normalizeTokens", () => {
		it("should remove empty string tokens", () => {
			const tokens = normalizeTokens([
				{
					originalIndex: 0,
					str: "",
				},
				{
					originalIndex: 1,
					str: "sausage",
				},
				{
					originalIndex: 8,
					str: "",
				},
			]);
			expect(tokens).toEqual([
				{
					originalIndex: 1,
					originalStr: "sausage",
					str: "sausage",
				},
			]);
		});
		it("should trim non-alphanumeric tokens", () => {
			const tokens = normalizeTokens([
				{
					originalIndex: 1,
					str: "(&sausage!)",
				},
			]);
			expect(tokens).toEqual([
				{
					originalStr: "(&sausage!)",
					originalIndex: 1,
					str: "sausage",
				},
			]);
		});
		it("should lowercase tokens", () => {
			const tokens = normalizeTokens([
				{
					originalIndex: 1,
					str: "sAuSaGe",
				},
			]);
			expect(tokens).toEqual([
				{
					originalStr: "sAuSaGe",
					originalIndex: 1,
					str: "sausage",
				},
			]);
		});
	});
});
