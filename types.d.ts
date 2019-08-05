declare module "@nice-digital/global-nav" {
	import React = require("react");

	type AutoCompleteSuggestion = {
		Title: string;
		Link: string;
	};

	type OnSearchingCallback = (args: { query: string }) => void;

	type SearchProps = {
		url?: string;
		autocomplete?: false | string | AutoCompleteSuggestion[];
		placeholder?: string;
		query?: string;
		onSearching?: string | OnSearchingCallback;
	};

	type Service =
		| "pathways"
		| "guidance"
		| "standards"
		| "evidence"
		| "bnf"
		| "bnfc"
		| "cks"
		| "journals";

	type OnNavigatingCallback = (
		e: { element: HTMLAnchorElement; href: string }
	) => void;

	type HeaderProps = {
		test: true;
		service?: Service;
		skipLinkId?: string;
		search?: false | SearchProps;
		cookie?: boolean;
		auth?: {
			provider?: "niceAccounts";
			environment?: "live" | "beta" | "test" | "local";
		};
		onNavigating?: string | OnNavigatingCallback;
	};

	type FooterProps = {
		service?: Service;
	};

	const Header: (props: HeaderProps) => React.FC<HeaderProps>;
	const Footer: (props: FooterProps) => React.FC<FooterProps>;

	export { Header, Footer };
}
