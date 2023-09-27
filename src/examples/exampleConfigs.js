// The global_nav_config property can be either a string or an object.
// Use a backtick string for multiline and for defining functions

const blankConfig = {
	filename: "blank",
	title: "Blank",
};

const guidanceConfig = {
	filename: "guidance",
	title: "Guidance",
	global_nav_config: {
		service: "guidance",
		header: {
			auth: {
				environment: "beta",
			},
			search: {
				autocomplete: "/niceorg/autocomplete/?ajax=ajax",
			},
		},
	},
};

const standardsConfig = {
	filename: "standards",
	title: "Standards and indicators",
	global_nav_config: {
		service: "standards",
		header: {
			auth: {
				environment: "test",
			},
			search: {
				autocomplete: "/niceorg/autocomplete/?ajax=ajax",
			},
		},
	},
};

const bnfConfig = {
	filename: "bnf",
	title: "BNF",
	global_nav_config: `{
		service: "bnf",
		header: {
			search: {
				placeholder: "Search BNF…",
				autocomplete: "/bnf/typeahead/?ajax=ajax",
				onSearching: function(searchArgs) {
					window.location.hash = "Search?q=" + encodeURIComponent(searchArgs.query);
				}
			}
		},
	}`,
};

const bnfcConfig = {
	filename: "bnfc",
	title: "BNFC",
	global_nav_config: {
		service: "bnfc",
		header: {
			search: {
				placeholder: "Search BNFC…",
				autocomplete: "/bnfc/typeahead/?ajax=ajax",
				onSearching: "onSearching",
			},
		},
	},
};

const cksConfig = {
	filename: "cks",
	title: "CKS",
	global_nav_config: {
		service: "cks",
		header: {
			search: {
				placeholder: "Search CKS…",
				autocomplete: "topics",
				onSearching: "onSearching",
			},
		},
	},
};

const journalsConfig = {
	filename: "journals-and-databases",
	title: "Journals and databases",
	global_nav_config: {
		service: "journals",
		header: {
			search: {
				autocomplete: "/niceorg/autocomplete/?ajax=ajax",
			},
		},
	},
};

const identityAdminLoggedOutConfig = {
	filename: "identityadmin-loggedout",
	title: "Identity Admin Logged out",
	global_nav_config: {
		header: {
			auth: {
				provider: "idam",
				links: [{ text: "Sign in", url: "/Account/Login" }],
			},
			search: {
				autocomplete: "/niceorg/autocomplete/?ajax=ajax",
			},
		},
	},
};

const identityAdminLoggedInConfig = {
	filename: "identityadmin-loggedin",
	title: "Identity Admin Logged in",
	global_nav_config: {
		header: {
			auth: {
				provider: "idam",
				links: [
					{ text: "Joe Bloggs", url: "#" },
					{ text: "My profile", url: "/Account/todo" },
					{ text: "Sign out", url: "/Account/Logout" },
				],
				displayName: "Joe Bloggs",
			},
			search: {
				autocomplete: "/niceorg/autocomplete/?ajax=ajax",
			},
		},
	},
};

const noAuthNoSearchConfig = {
	filename: "noauth-nosearch",
	title: "No auth and No search",
	global_nav_config: {
		header: {
			auth: false,
			search: false,
		},
	},
};

const indevConfig = {
	filename: "indev",
	title: "NICE Indevelopment",
	global_nav_config: {
		service: "indev",
		header: {
			auth: {
				environment: "test",
			},
			additionalSubMenuItems: [
				{
					service: "indev",
					links: [{ text: "Admin", url: "/admin" }],
				},
			],
		},
	},
};

export const configs = {
	blank: blankConfig,
	guidance: guidanceConfig,
	standards: standardsConfig,
	bnf: bnfConfig,
	bnfc: bnfcConfig,
	cks: cksConfig,
	journals: journalsConfig,
	identityAdminLoggedOut: identityAdminLoggedOutConfig,
	identityAdminLoggedIn: identityAdminLoggedInConfig,
	noAuthNoSearch: noAuthNoSearchConfig,
	indev: indevConfig,
};
