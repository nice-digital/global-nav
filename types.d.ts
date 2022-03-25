declare module "@nice-digital/global-nav" {
	import React = require("react");

	export type AutoCompleteSuggestion = {
		Title: string;
		TypeAheadType?: string;
		TitleHtml?: string;
		Link: string;
	};

	export type OnSearchingCallback = (args: { query: string }) => void;

	export type OnResizeCallback = () => void;

	export type AutoCompleteSuggestions =
		| false
		| string
		| AutoCompleteSuggestion[];

	export type AutoCompleteOptions = {
		suggestions: AutoCompleteSuggestions;
		suggestionTemplate: (suggestion: AutoCompleteSuggestion) => string;
	};

	export type SearchProps = {
		url?: string;
		autocomplete?: AutoCompleteSuggestions | AutoCompleteOptions;
		placeholder?: string;
		query?: string;
		onSearching?: string | OnSearchingCallback;
		onResize?: string | OnResizeCallback;
	};

	export type Service =
		| "pathways"
		| "guidance"
		| "standards"
		| "evidence"
		| "bnf"
		| "bnfc"
		| "cks"
		| "journals";

	export type Link = {
		text: string;
		url: string;
	};

	export type OnNavigatingCallback = (e: {
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

	export type HeaderProps = {
		service?: Service;
		skipLinkId?: string;
		search?: false | SearchProps;
		auth?: NiceAccountsProviderProps | IdamProviderProps | false;
		onDropdownOpen?: string | (() => void);
		onDropdownClose?: string | (() => void);
		onNavigating?: string | OnNavigatingCallback;
		additionalSubMenuItems?: Array<AdditionalSubMenuItem>;
	};

	export type FooterProps = {
		service?: Service;
	};

	export interface MainProps {
		/** Allow any additional props to be passed and applied to the main element */
		[prop: string]: unknown;
		/** Contents for the main element */
		children: React.ReactNode;
		/** Additional classnames for the main element. */
		className?: string;
		withPadding?: boolean;
	}

	const Header: React.FC<HeaderProps>;
	const Footer: React.FC<FooterProps>;
	const Main: React.FC<MainProps>;

	export { Header, Footer, Main };
}
