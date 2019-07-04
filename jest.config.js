module.exports = {
	moduleNameMapper: {
		"\\.(css|scss)$": "identity-obj-proxy"
	},
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
	testResultsProcessor: "jest-teamcity-reporter",
	collectCoverageFrom: [
		"<rootDir>/src/**/*.{js,jsx}",
		"!<rootDir>/src/polyfill/**/*.{js,jsx}",
		"!<rootDir>/src/setupTests.js",
		"!**/node_modules/**"
	],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	collectCoverage: process.env.TEAMCITY_VERSION ? true : false,
	testURL: "https://global-nav-tests.nice.org.uk/"
};
