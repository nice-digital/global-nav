/* eslint-env jest */
import "@testing-library/jest-dom";
import "jest-location-mock";

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

// Object.defineProperty(window, "location", {
// 	value: { ...window.location, assign: jest.fn() },
// });

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
