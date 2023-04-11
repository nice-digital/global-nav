module.exports = {
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
		"\\.(css|scss)$": "identity-obj-proxy",
	},
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
	testResultsProcessor: "jest-teamcity-reporter",
	collectCoverageFrom: [
		"<rootDir>/src/**/*.{js,jsx}",
		"!<rootDir>/src/polyfill/**/*.{js,jsx}",
		"!<rootDir>/src/setupTests.js",
		"!**/node_modules/**",
	],
	collectCoverage: process.env.TEAMCITY_VERSION ? true : false,
	testEnvironment: "jsdom",
	testEnvironmentOptions: {
		url: "https://global-nav-tests.nice.org.uk/",
	},
	testPathIgnorePatterns: ["lib"],
};
