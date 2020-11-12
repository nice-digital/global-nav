import { suggester } from "./";

describe("suggester", () => {
	it("should find and highlight 5 phrases and/or terms in the correct but ignore non-matches", () => {
		const suggestions = [
			{ Title: "brown", Link: "/brown" },
			{ Title: "ignore this", Link: "/ignore-this" },
			{
				Title: "the fox was big and brown",
				Link: "/the-fox-was-big-and-brown",
			},
			{ Title: "the fox was brown", Link: "/the-fox-was-brown" },
			{ Title: "brown fox", Link: "/brown-fox" },
			{ Title: "the quick 'brown fox'", Link: "/the-quick-brown-fox" },
			{ Title: "quick brown fox", Link: "/quick-brown-fox" },
		];

		const results = suggester(suggestions, "brown fox");

		expect(results).toMatchSnapshot();
	});
});
