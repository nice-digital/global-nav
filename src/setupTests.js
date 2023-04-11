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

// Need to redefine window location to be able to set the href property
((oldURL) => {
	delete global.window.location;
	global.window.location = new URL(oldURL);
})(window.location.href);
