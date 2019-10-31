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

	type Link = {
		text: string;
		url: string;
	};

	type OnNavigatingCallback = (
		e: { element: HTMLAnchorElement; href: string }
	) => void;

	export type IdamProviderProps = {
		provider: "idam";
		links: Array<Link>;
		displayName: string;
	};

	export type NiceAccountsProviderProps = {
		provider: "niceAccounts";
		environment?: "live" | "beta" | "test" | "local";
	};

	type HeaderProps = {
		service?: Service;
		skipLinkId?: string;
		search?: false | SearchProps;
		cookie?: boolean;
		auth?: NiceAccountsProviderProps | IdamProviderProps;
		onNavigating?: string | OnNavigatingCallback;
	};

	type FooterProps = {
		service?: Service;
	};

	const Header: React.FC<HeaderProps>;
	const Footer: React.FC<FooterProps>;

	export { Header, Footer };
}
