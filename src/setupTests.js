/* eslint-env jest */
import "@testing-library/jest-dom";

// Allow setting user agent in tests
// https://github.com/facebook/jest/issues/717#issuecomment-246471809
Object.defineProperty(
	window.navigator,
	"userAgent",
	(function (_value) {
		return {
			get: function _get() {
				return _value;
			},
			set: function _set(v) {
				_value = v;
			},
		};
	})(window.navigator.userAgent)
);

//NOTE Suppress specific JSDOM + React test environment noise that isn't actionable:
// - JSDOM "Not implemented: navigation" errors from <a> clicks
// - React act() warnings from async components - act is now deprecated

beforeEach(() => {
	window.dataLayer = [];

	// Mock console.error to suppress JSDOM navigation errors
	const originalConsoleError = console.error;
	jest.spyOn(console, "error").mockImplementation((...args) => {
		// Check if this is a JSDOM navigation error
		const message = args[0]?.toString() || "";
		if (message.includes("Not implemented: navigation")) {
			return; // Suppress this error
		}
		// Check if this is a React act() warning
		if (
			message.includes("Warning: An update to") &&
			message.includes("inside a test was not wrapped in act")
		) {
			return; // Suppress this warning
		}
		// Allow other errors through
		originalConsoleError(...args);
	});
});

afterEach(() => {
	//window.location.assign.mockClear();
	delete window.dataLayer;

	// Restore console.error
	console.error.mockRestore?.();
});
