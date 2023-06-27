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
});

afterEach(() => {
	//window.location.assign.mockClear();
	delete window.dataLayer;
});
