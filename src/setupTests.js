import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// Allow setting user agent in tests
// https://github.com/facebook/jest/issues/717#issuecomment-246471809
Object.defineProperty(
	window.navigator,
	"userAgent",
	(function(_value) {
		return {
			get: function _get() {
				return _value;
			},
			set: function _set(v) {
				_value = v;
			}
		};
	})(window.navigator.userAgent)
);
