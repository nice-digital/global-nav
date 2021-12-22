const isDebugMode = process.env.DEBUG === "true";

const chrome = {
	browserName: "chrome",
	chromeOptions: {
		args: ["--window-size=1366,768"],
	},
};

var capabilities = [chrome];

if (process.env.RUNNING_IN_DOCKER) {
	capabilities = [
		{
			browserName: "chrome",
			chromeOptions: {
				args: ["--headless", "--window-size=1366,768"],
			},
		},
		// TO DO: Add headless Firefox see docker-compose.yml
	];
} else if (process.env.ALL_BROWSERS) {
	capabilities = [
		chrome,
		{
			// set protected mode to the same value across all four zones in tools-> internet options -> security
			// also make sure zoom level is 100%
			browserName: "internet explorer",
		},
	];
}

exports.config = {
	debug: isDebugMode,
	execArgv: isDebugMode ? ["--inspect=9299"] : [],
	sync: true,
	maxInstances: 1,
	//maxInstances: isDebugMode ? 1 : 10,
	// Use selenium standalone server locally so we don't have a seperate selenium server in a seperate command prompt
	// Use the selenium grid via docker on TC
	// Use selenium standalone server so we don't have spawn a separate server
	services: process.env.RUNNING_IN_DOCKER ? [] : ["selenium-standalone"],
	seleniumLogs: "./logs",

	specs: ["./features/**/*.feature"],
	exclude: [],

	// Assume user has Chrome and Firefox installed.
	capabilities: capabilities,

	logLevel: "verbose",
	coloredLogs: true,
	screenshotPath: "./errorShots/",
	baseUrl: "https://test.nice.org.uk/",
	reporters: process.env.RUNNING_IN_DOCKER ? ["spec", "teamcity"] : ["spec"],

	// Use BDD with Cucumber
	framework: "cucumber",
	cucumberOpts: {
		compiler: ["js:babel-register"], // Babel so we can use ES6 in tests
		require: ["./steps/given.js", "./steps/when.js", "./steps/then.js"],
		tagExpression: "not @pending", // See https://docs.cucumber.io/tag-expressions/
		timeout: 30000,
	},

	// Set up global asssertion libraries
	before: function before() {
		const chai = require("chai");
		global.expect = chai.expect;
		global.assert = chai.assert;
		global.should = chai.should();
	},
};
