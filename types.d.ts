declare module "@nice-digital/global-nav" {
	import React = require("react");

	type AutoCompleteSuggestion = {
		Title: string;
		Link: string;
	};

	type OnSearchingCallback = (args: { query: string }) => void;

	type OnResizeCallback = () => void;

	type SearchProps = {
		url?: string;
		autocomplete?: false | string | AutoCompleteSuggestion[];
		placeholder?: string;
		query?: string;
		onSearching?: string | OnSearchingCallback;
		onResize?: string | OnResizeCallback;
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

	type OnNavigatingCallback = (e: {
		element: HTMLAnchorElement;
		href: string;
	}) => void;

	export type IdamProviderProps = {
		provider: "idam";
		links: Array<Link>;
		displayName?: string;
	};

	export type NiceAccountsProviderProps = {
		provider: "niceAccounts";
		environment?: "live" | "beta" | "test" | "local";
	};

	export type AdditionalSubMenuItem = {
		service: string;
		links: Array<Link>;
	};

	type HeaderProps = {
		service?: Service;
		skipLinkId?: string;
		search?: false | SearchProps;
		auth?: NiceAccountsProviderProps | IdamProviderProps | false;
		onNavigating?: string | OnNavigatingCallback;
		additionalSubMenuItems?: Array<AdditionalSubMenuItem>;
	};

	type FooterProps = {
		service?: Service;
	};

	const Header: React.FC<HeaderProps>;
	const Footer: React.FC<FooterProps>;

	export { Header, Footer };
}
