// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isarray#Polyfill
if (!Array.isArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === "[object Array]";
	};
}
