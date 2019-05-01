// The global_nav_config property can be either a string or an object.
// Use a backtick string for multiline and for defining functions

const pathwaysConfig = {
	filename: "pathways",
	title: "Pathways",
	global_nav_config: `{
		service: "pathways",
		header: {
			search: {
				autocomplete: $.map(
					$('#atozlist a'),
					function (element) {
						return { Title: $(element).text(), Link: $(element).attr('href') };
					}
				),
				placeholder: "Search NICE's interactive flowcharts…"
			},
			onRendering: function(element) {
				if (console && console.log) {
					console.log("Header is rendering into", element);
				}
			},
			onRendered: function(element) {
				if (console && console.log) {
					console.log("Header has rendered", element);
				}
			}
		},
		footer: false
	}`
};

const guidanceConfig = {
	filename: "guidance",
	title: "Guidance",
	global_nav_config: {
		service: "guidance",
		header: {
			auth: {
				environment: "beta"
			},
			search: {
				autocomplete: "/niceorg/autocomplete/?ajax=ajax"
			}
		},
		footer: false
	}
};

const standardsConfig = {
	filename: "standards",
	title: "Standards and indicators",
	global_nav_config: {
		service: "standards",
		header: {
			auth: {
				environment: "test"
			},
			search: {
				autocomplete: "/niceorg/autocomplete/?ajax=ajax"
			}
		},
		footer: false
	}
};

const evidenceHomeConfig = {
	filename: "evidence-home",
	title: "Evidence homepage",
	bodyClasses: "layout-fill",
	global_nav_config: {
		service: "evidence",
		header: {
			search: false
		},
		footer: false
	}
};

const evidenceSerpConfig = {
	filename: "evidence-serp",
	title: "Evidence SERP",
	bodyClasses: "layout-fill layout-offcanvas-fixed",
	global_nav_config: {
		service: "evidence",
		header: {
			search: {
				placeholder: "Search evidence…",
				query: "diabetes",
				autocomplete: "/evidence/autocomplete/?ajax=ajax"
			}
		},
		footer: false
	}
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
		footer: false
	}`
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
				onSearching: "onSearching"
			}
		},
		footer: false
	}
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
				onSearching: "onSearching"
			}
		},
		footer: false
	}
};

const journalsConfig = {
	filename: "journals-and-databases",
	title: "Journals and databases",
	global_nav_config: {
		service: "journals",
		header: {
			search: {
				autocomplete: "/niceorg/autocomplete/?ajax=ajax"
			}
		},
		footer: false
	}
};

module.exports = [
	pathwaysConfig,
	guidanceConfig,
	standardsConfig,
	evidenceHomeConfig,
	evidenceSerpConfig,
	bnfConfig,
	bnfcConfig,
	cksConfig,
	journalsConfig
];
