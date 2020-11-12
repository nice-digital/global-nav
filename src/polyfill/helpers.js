// From ES5 shim: https://github.com/es-shims/es5-shim/blob/master/es5-sham.js#L32-L55

var call = Function.call;
var prototypeOfObject = Object.prototype;
var owns = call.bind(prototypeOfObject.hasOwnProperty);
var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);
var toStr = call.bind(prototypeOfObject.toString);

var supportsAccessors = owns(prototypeOfObject, "__defineGetter__");

var defineGetter;
var defineSetter;
var lookupGetter;
var lookupSetter;
if (supportsAccessors) {
	/* eslint-disable no-underscore-dangle, no-restricted-properties */
	defineGetter = call.bind(prototypeOfObject.__defineGetter__);
	defineSetter = call.bind(prototypeOfObject.__defineSetter__);
	lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
	lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
	/* eslint-enable no-underscore-dangle, no-restricted-properties */
}

var isPrimitive = function isPrimitive(o) {
	return o == null || (typeof o !== "object" && typeof o !== "function");
};

export {
	prototypeOfObject,
	owns,
	isEnumerable,
	toStr,
	isPrimitive,
	supportsAccessors,
	defineGetter,
	defineSetter,
	lookupGetter,
	lookupSetter,
};
