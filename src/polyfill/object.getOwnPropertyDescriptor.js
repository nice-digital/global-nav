/* eslint-disable */

import { owns, isEnumerable, isPrimitive, supportsAccessors } from "./helpers";

// ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(
	object
) {
	try {
		object.sentinel = 0;
		return Object.getOwnPropertyDescriptor(object, "sentinel").value === 0;
	} catch (exception) {
		return false;
	}
};

// check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
if (Object.defineProperty) {
	var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork(
		{}
	);
	var getOwnPropertyDescriptorWorksOnDom =
		typeof document === "undefined" ||
		doesGetOwnPropertyDescriptorWork(document.createElement("div"));
	if (
		!getOwnPropertyDescriptorWorksOnDom ||
		!getOwnPropertyDescriptorWorksOnObject
	) {
		var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
	}
}

if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
	var ERR_NON_OBJECT =
		"Object.getOwnPropertyDescriptor called on a non-object: ";

	/* eslint-disable no-proto */
	Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(
		object,
		property
	) {
		if (isPrimitive(object)) {
			throw new TypeError(ERR_NON_OBJECT + object);
		}

		// make a valiant attempt to use the real getOwnPropertyDescriptor
		// for I8's DOM elements.
		if (getOwnPropertyDescriptorFallback) {
			try {
				return getOwnPropertyDescriptorFallback.call(Object, object, property);
			} catch (exception) {
				// try the shim if the real one doesn't work
			}
		}

		var descriptor;

		// If object does not owns property return undefined immediately.
		if (!owns(object, property)) {
			return descriptor;
		}

		// If object has a property then it's for sure `configurable`, and
		// probably `enumerable`. Detect enumerability though.
		descriptor = {
			enumerable: isEnumerable(object, property),
			configurable: true,
		};

		// If JS engine supports accessor properties then property may be a
		// getter or setter.
		if (supportsAccessors) {
			// Unfortunately `__lookupGetter__` will return a getter even
			// if object has own non getter property along with a same named
			// inherited getter. To avoid misbehavior we temporary remove
			// `__proto__` so that `__lookupGetter__` will return getter only
			// if it's owned by an object.
			var prototype = object.__proto__;
			var notPrototypeOfObject = object !== prototypeOfObject;
			// avoid recursion problem, breaking in Opera Mini when
			// Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
			// or any other Object.prototype accessor
			if (notPrototypeOfObject) {
				object.__proto__ = prototypeOfObject;
			}

			var getter = lookupGetter(object, property);
			var setter = lookupSetter(object, property);

			if (notPrototypeOfObject) {
				// Once we have getter and setter we can put values back.
				object.__proto__ = prototype;
			}

			if (getter || setter) {
				if (getter) {
					descriptor.get = getter;
				}
				if (setter) {
					descriptor.set = setter;
				}
				// If it was accessor property we're done and return here
				// in order to avoid adding `value` to the descriptor.
				return descriptor;
			}
		}

		// If we got this far we know that object has an own property that is
		// not an accessor so we set it as a value and return descriptor.
		descriptor.value = object[property];
		descriptor.writable = true;
		return descriptor;
	};
	/* eslint-enable no-proto */
}
