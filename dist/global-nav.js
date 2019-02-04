/*!
 * NICE TopHat 1.0.0 | 2019-02-01
 * © Copyright NICE 2015-2019
 * Licensed under MIT (https://github.com/nhsevidence/nice.tophat/blob/master/LICENSE)
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5)["default"]
module.exports["default"] = module.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(15);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform["default"](obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(8)();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = __webpack_require__(0);

var _Header = _interopRequireDefault(__webpack_require__(6));

var _Footer = _interopRequireDefault(__webpack_require__(35));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// Callback can either be a reference to a function
var ensureCallback = function ensureCallback(callback) {
  _newArrowCheck(this, _this);

  if (callback) {
    callback = typeof callback === "function" ? callback : window[callback];

    if (typeof callback === "function") {
      return callback;
    }
  }

  return null;
}.bind(void 0);

var config = window.global_nav_config || {};
config.header = config.header || {};
config.footer = config.footer || {};

if (config.header.enabled !== false) {
  var headerElement = document.getElementById("header");

  if (!headerElement) {
    headerElement = document.createElement("div");
    document.body.insertBefore(headerElement, document.body.firstChild);
  }

  var onRendering = ensureCallback(config.header.onRendering);

  if (onRendering) {
    onRendering.call(window, headerElement);
  }

  (0, _reactDom.render)(_react["default"].createElement(_Header["default"], _extends({
    service: config.service
  }, config.header)), headerElement, function () {
    _newArrowCheck(this, _this);

    var onRendered = ensureCallback(config.header.onRendered);

    if (onRendered) {
      onRendered.call(window, headerElement);
    }
  }.bind(void 0));
} // Render footer


var footerElement = document.getElementById("footer");

if (!footerElement) {
  footerElement = document.createElement("div");
  document.body.appendChild(footerElement);
}

(0, _reactDom.render)(_react["default"].createElement(_Footer["default"], config.footer), footerElement);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// tslint:disable-next-line
var global = function () {
    var local;
    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('global object is unavailable in this environment');
        }
    }
    return local;
}();
var isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-empty
function noop() {}
var fakeDoc = {
    createElement: noop,
    createElementNS: noop,
    createTextNode: noop
};
var doc = isBrowser ? document : fakeDoc;

function isNumber(arg) {
    return typeof arg === 'number';
}
var isSupportSVG = isFunction(doc.createAttributeNS);
function isString(arg) {
    return typeof arg === 'string';
}
function isFunction(arg) {
    return typeof arg === 'function';
}
function isBoolean(arg) {
    return arg === true || arg === false;
}
var isArray = Array.isArray;
function isUndefined(o) {
    return o === undefined;
}

var canUsePromise = 'Promise' in global;
var resolved;
if (canUsePromise) {
    resolved = Promise.resolve();
}
var nextTick = function (fn) {
    var args = [],
        len = arguments.length - 1;
    while (len-- > 0) args[len] = arguments[len + 1];

    fn = isFunction(fn) ? fn.bind.apply(fn, [null].concat(args)) : fn;
    if (canUsePromise) {
        return resolved.then(fn);
    }
    var timerFunc = 'requestAnimationFrame' in global ? requestAnimationFrame : setTimeout;
    timerFunc(fn);
};

/* istanbul ignore next */
// tslint:disable-next-line
Object.is = Object.is || function (x, y) {
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
};
function shallowEqual(obj1, obj2) {
    if (obj1 === null || obj2 === null) {
        return false;
    }
    if (Object.is(obj1, obj2)) {
        return true;
    }
    var obj1Keys = obj1 ? Object.keys(obj1) : [];
    var obj2Keys = obj2 ? Object.keys(obj2) : [];
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (var i = 0; i < obj1Keys.length; i++) {
        var obj1KeyItem = obj1Keys[i];
        if (!obj2.hasOwnProperty(obj1KeyItem) || !Object.is(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
            return false;
        }
    }
    return true;
}

var SimpleMap = function SimpleMap() {
    this.cache = [];
    this.size = 0;
};
SimpleMap.prototype.set = function set(k, v) {
    var this$1 = this;

    var len = this.cache.length;
    if (!len) {
        this.cache.push({ k: k, v: v });
        this.size += 1;
        return;
    }
    for (var i = 0; i < len; i++) {
        var item = this$1.cache[i];
        if (item.k === k) {
            item.v = v;
            return;
        }
    }
    this.cache.push({ k: k, v: v });
    this.size += 1;
};
SimpleMap.prototype.get = function get(k) {
    var this$1 = this;

    var len = this.cache.length;
    if (!len) {
        return;
    }
    for (var i = 0; i < len; i++) {
        var item = this$1.cache[i];
        if (item.k === k) {
            return item.v;
        }
    }
};
SimpleMap.prototype.has = function has(k) {
    var this$1 = this;

    var len = this.cache.length;
    if (!len) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        var item = this$1.cache[i];
        if (item.k === k) {
            return true;
        }
    }
    return false;
};
SimpleMap.prototype['delete'] = function delete$1(k) {
    var this$1 = this;

    var len = this.cache.length;
    for (var i = 0; i < len; i++) {
        var item = this$1.cache[i];
        if (item.k === k) {
            this$1.cache.splice(i, 1);
            this$1.size -= 1;
            return true;
        }
    }
    return false;
};
SimpleMap.prototype.clear = function clear() {
    var this$1 = this;

    var len = this.cache.length;
    this.size = 0;
    if (!len) {
        return;
    }
    while (len) {
        this$1.cache.pop();
        len--;
    }
};
var MapClass = 'Map' in global ? Map : SimpleMap;

function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n';
}
var extend = function () {
    if ('assign' in Object) {
        return function (source, from) {
            if (!from) {
                return source;
            }
            Object.assign(source, from);
            return source;
        };
    } else {
        return function (source, from) {
            if (!from) {
                return source;
            }
            for (var key in from) {
                if (from.hasOwnProperty(key)) {
                    source[key] = from[key];
                }
            }
            return source;
        };
    }
}();
function clone(obj) {
    return extend({}, obj);
}

var Current = {
    current: null
};

var EMPTY_CHILDREN = [];
var EMPTY_OBJ = {};
function isNullOrUndef(o) {
    return o === undefined || o === null;
}
function isInvalid(o) {
    return isNullOrUndef(o) || o === true || o === false;
}
function isVNode(node) {
    return !isNullOrUndef(node) && node.vtype === 2 /* Node */;
}
function isVText(node) {
    return !isNullOrUndef(node) && node.vtype === 1 /* Text */;
}
function isComponent(instance) {
    return !isInvalid(instance) && instance.isReactComponent === EMPTY_OBJ;
}
function isPortal(vtype, node) {
    return (vtype & 32 /* Portal */) > 0;
}
function isComposite(node) {
    return !isNullOrUndef(node) && node.vtype === 4 /* Composite */;
}
function isValidElement(node) {
    return !isNullOrUndef(node) && node.vtype;
}
// tslint:disable-next-line:no-empty
function noop$1() {}
// typescript will compile the enum's value for us.
// eg.
// Composite = 1 << 2  => Composite = 4
var VType;
(function (VType) {
    VType[VType["Text"] = 1] = "Text";
    VType[VType["Node"] = 2] = "Node";
    VType[VType["Composite"] = 4] = "Composite";
    VType[VType["Stateless"] = 8] = "Stateless";
    VType[VType["Void"] = 16] = "Void";
    VType[VType["Portal"] = 32] = "Portal";
})(VType || (VType = {}));

var Ref = {
    update: function update(lastVnode, nextVnode, domNode) {
        var prevRef = lastVnode != null && lastVnode.ref;
        var nextRef = nextVnode != null && nextVnode.ref;
        if (prevRef !== nextRef) {
            this.detach(lastVnode, prevRef, lastVnode.dom);
            this.attach(nextVnode, nextRef, domNode);
        }
    },
    attach: function attach(vnode, ref, domNode) {
        var node = isComposite(vnode) ? vnode.component : domNode;
        if (isFunction(ref)) {
            ref(node);
        } else if (isString(ref)) {
            var inst = vnode._owner;
            if (inst && isFunction(inst.render)) {
                inst.refs[ref] = node;
            }
        }
    },
    detach: function detach(vnode, ref, domNode) {
        var node = isComposite(vnode) ? vnode.component : domNode;
        if (isFunction(ref)) {
            ref(null);
        } else if (isString(ref)) {
            var inst = vnode._owner;
            if (inst.refs[ref] === node && isFunction(inst.render)) {
                delete inst.refs[ref];
            }
        }
    }
};

var ONINPUT = 'oninput';
var ONPROPERTYCHANGE = 'onpropertychange';
var isiOS = isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents = new MapClass();
var unbubbleEvents = {
    onmousemove: 1,
    ontouchmove: 1,
    onmouseleave: 1,
    onmouseenter: 1,
    onload: 1,
    onunload: 1,
    onscroll: 1,
    onfocus: 1,
    onblur: 1,
    onrowexit: 1,
    onbeforeunload: 1,
    onstop: 1,
    ondragdrop: 1,
    ondragenter: 1,
    ondragexit: 1,
    ondraggesture: 1,
    ondragover: 1,
    oncontextmenu: 1,
    onerror: 1,
    onabort: 1,
    oncanplay: 1,
    oncanplaythrough: 1,
    ondurationchange: 1,
    onemptied: 1,
    onended: 1,
    onloadeddata: 1,
    onloadedmetadata: 1,
    onloadstart: 1,
    onencrypted: 1,
    onpause: 1,
    onplay: 1,
    onplaying: 1,
    onprogress: 1,
    onratechange: 1,
    onseeking: 1,
    onseeked: 1,
    onstalled: 1,
    onsuspend: 1,
    ontimeupdate: 1,
    onvolumechange: 1,
    onwaiting: 1
};
unbubbleEvents[ONPROPERTYCHANGE] = 1;
var bindFocus = false;
/* istanbul ignore next */
if (isBrowser && navigator.userAgent.indexOf('MSIE 9') >= 0) {
    var elements = [];
    var values = [];
    doc.addEventListener('selectionchange', function () {
        var el = doc.activeElement;
        if (detectCanUseOnInputNode(el)) {
            var index = elements.indexOf(el);
            var element = elements[index] || elements.push(el);
            if (element.value !== values[index]) {
                var ev = doc.createEvent('CustomEvent');
                ev.initCustomEvent('input', true, true, undefined);
                values[index] = element.value;
                el.dispatchEvent(ev);
            }
        }
    });
}
if (typeof Event !== 'undefined' && !Event.prototype.persist) {
    // tslint:disable-next-line:no-empty
    Event.prototype.persist = noop$1;
}
function attachEvent(domNode, eventName, handler) {
    eventName = fixEvent(domNode, eventName);
    /* istanbul ignore next */
    if (eventName === ONPROPERTYCHANGE) {
        processOnPropertyChangeEvent(domNode, handler);
        return;
    }
    var delegatedRoots = delegatedEvents.get(eventName);
    if (unbubbleEvents[eventName] === 1) {
        if (!delegatedRoots) {
            delegatedRoots = new MapClass();
        }
        var event = attachEventToNode(domNode, eventName, delegatedRoots);
        delegatedEvents.set(eventName, delegatedRoots);
        if (isFunction(handler)) {
            delegatedRoots.set(domNode, {
                eventHandler: handler,
                event: event
            });
        }
    } else {
        if (!delegatedRoots) {
            delegatedRoots = {
                items: new MapClass()
            };
            delegatedRoots.event = attachEventToDocument(doc, eventName, delegatedRoots);
            delegatedEvents.set(eventName, delegatedRoots);
        }
        if (isFunction(handler)) {
            if (isiOS) {
                domNode.onclick = noop$1;
            }
            delegatedRoots.items.set(domNode, handler);
        }
    }
}
function detachEvent(domNode, eventName, handler) {
    eventName = fixEvent(domNode, eventName);
    if (eventName === ONPROPERTYCHANGE) {
        return;
    }
    var delegatedRoots = delegatedEvents.get(eventName);
    if (unbubbleEvents[eventName] === 1 && delegatedRoots) {
        var event = delegatedRoots.get(domNode);
        if (event) {
            domNode.removeEventListener(parseEventName(eventName), event.event, false);
            /* istanbul ignore next */
            var delegatedRootsSize = delegatedRoots.size;
            if (delegatedRoots['delete'](domNode) && delegatedRootsSize === 0) {
                delegatedEvents['delete'](eventName);
            }
        }
    } else if (delegatedRoots && delegatedRoots.items) {
        var items = delegatedRoots.items;
        if (items['delete'](domNode) && items.size === 0) {
            doc.removeEventListener(parseEventName(eventName), delegatedRoots.event, false);
            delegatedEvents['delete'](eventName);
        }
    }
}
var propertyChangeActiveElement;
var propertyChangeActiveElementValue;
var propertyChangeActiveElementValueProp;
var propertyChangeActiveHandlers = {};
/* istanbul ignore next */
function propertyChangeHandler(event) {
    if (event.propertyName !== 'value') {
        return;
    }
    var target = event.target || event.srcElement;
    var val = target.value;
    if (val === propertyChangeActiveElementValue) {
        return;
    }
    propertyChangeActiveElementValue = val;
    var handler = propertyChangeActiveHandlers[target.name];
    if (isFunction(handler)) {
        handler.call(target, event);
    }
}
/* istanbul ignore next */
function processOnPropertyChangeEvent(node, handler) {
    propertyChangeActiveHandlers[node.name] = handler;
    if (!bindFocus) {
        // bindFocus = true
        node.addEventListener('focusin', function () {
            unbindOnPropertyChange();
            bindOnPropertyChange(node);
        }, false);
        node.addEventListener('focusout', unbindOnPropertyChange, false);
    }
}
/* istanbul ignore next */
function bindOnPropertyChange(node) {
    propertyChangeActiveElement = node;
    propertyChangeActiveElementValue = node.value;
    propertyChangeActiveElementValueProp = Object.getOwnPropertyDescriptor(node.constructor.prototype, 'value');
    Object.defineProperty(propertyChangeActiveElement, 'value', {
        get: function get() {
            return propertyChangeActiveElementValueProp.get.call(this);
        },
        set: function set(val) {
            propertyChangeActiveElementValue = val;
            propertyChangeActiveElementValueProp.set.call(this, val);
        }
    });
    propertyChangeActiveElement.addEventListener('propertychange', propertyChangeHandler, false);
}
/* istanbul ignore next */
function unbindOnPropertyChange() {
    if (!propertyChangeActiveElement) {
        return;
    }
    delete propertyChangeActiveElement.value;
    propertyChangeActiveElement.removeEventListener('propertychange', propertyChangeHandler, false);
    propertyChangeActiveElement = null;
    propertyChangeActiveElementValue = null;
    propertyChangeActiveElementValueProp = null;
}
function detectCanUseOnInputNode(node) {
    var nodeName = node.nodeName && node.nodeName.toLowerCase();
    var type = node.type;
    return nodeName === 'input' && /text|password/.test(type) || nodeName === 'textarea';
}
function fixEvent(node, eventName) {
    if (eventName === 'onDoubleClick') {
        eventName = 'ondblclick';
    } else if (eventName === 'onTouchTap') {
        eventName = 'onclick';
        // tslint:disable-next-line:prefer-conditional-expression
    } else if (eventName === 'onChange' && detectCanUseOnInputNode(node)) {
        eventName = ONINPUT in window ? ONINPUT : ONPROPERTYCHANGE;
    } else {
        eventName = eventName.toLowerCase();
    }
    return eventName;
}
function parseEventName(name) {
    return name.substr(2);
}
/* istanbul ignore next */
function stopPropagation() {
    this.cancelBubble = true;
    this.stopImmediatePropagation();
}
function dispatchEvent(event, target, items, count, eventData) {
    var eventsToTrigger = items.get(target);
    if (eventsToTrigger) {
        count--;
        eventData.currentTarget = target;
        // for React synthetic event compatibility
        Object.defineProperties(event, {
            nativeEvent: {
                value: event
            }
        });
        eventsToTrigger(event);
        if (event.cancelBubble) {
            return;
        }
    }
    if (count > 0) {
        var parentDom = target.parentNode;
        if (parentDom === null || event.type === 'click' && parentDom.nodeType === 1 && parentDom.disabled) {
            return;
        }
        dispatchEvent(event, parentDom, items, count, eventData);
    }
}
function attachEventToDocument(d, eventName, delegatedRoots) {
    var eventHandler = function (event) {
        var items = delegatedRoots.items;
        var count = items.size;
        if (count > 0) {
            var eventData = {
                currentTarget: event.target
            };
            /* istanbul ignore next */
            try {
                Object.defineProperties(event, {
                    currentTarget: {
                        configurable: true,
                        get: function get() {
                            return eventData.currentTarget;
                        }
                    },
                    stopPropagation: {
                        value: stopPropagation
                    }
                });
            } catch (error) {
                // some browsers crashed
                // see: https://stackoverflow.com/questions/44052813/why-cannot-redefine-property
            }
            dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
        }
    };
    d.addEventListener(parseEventName(eventName), eventHandler, false);
    return eventHandler;
}
function attachEventToNode(node, eventName, delegatedRoots) {
    var eventHandler = function (event) {
        var eventToTrigger = delegatedRoots.get(node);
        if (eventToTrigger && eventToTrigger.eventHandler) {
            var eventData = {
                currentTarget: node
            };
            /* istanbul ignore next */
            Object.defineProperties(event, {
                currentTarget: {
                    configurable: true,
                    get: function get() {
                        return eventData.currentTarget;
                    }
                }
            });
            eventToTrigger.eventHandler(event);
        }
    };
    node.addEventListener(parseEventName(eventName), eventHandler, false);
    return eventHandler;
}

var options = {
    afterMount: noop$1,
    afterUpdate: noop$1,
    beforeUnmount: noop$1,
    roots: [],
    debug: false
};

function unmountChildren(children, parentDom) {
    if (isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            unmount(children[i], parentDom);
        }
    } else {
        unmount(children, parentDom);
    }
}
function unmount(vnode, parentDom) {
    if (isInvalid(vnode)) {
        return;
    }
    var vtype = vnode.vtype;
    // Bitwise operators for better performance
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
    var dom = vnode.dom;
    if ((vtype & (4 /* Composite */ | 8 /* Stateless */)) > 0) {
        options.beforeUnmount(vnode);
        vnode.destroy();
    } else if ((vtype & 2 /* Node */) > 0) {
        var props = vnode.props;
        var children = vnode.children;
        var ref = vnode.ref;
        unmountChildren(children);
        for (var propName in props) {
            if (isAttrAnEvent(propName)) {
                detachEvent(dom, propName, props[propName]);
            }
        }
        if (ref !== null) {
            Ref.detach(vnode, ref, dom);
        }
    } else if (vtype & 32 /* Portal */) {
            unmountChildren(vnode.children, vnode.type);
        }
    if (!isNullOrUndef(parentDom) && !isNullOrUndef(dom)) {
        parentDom.removeChild(dom);
    }
    // vnode.dom = null
}

var NS = {
    ev: 'http://www.w3.org/2001/xml-events',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace'
};
var ATTRS = {
    accentHeight: 'accent-height',
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 'alignment-baseline',
    allowReorder: 'allowReorder',
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 'arabic-form',
    ascent: 0,
    attributeName: 'attributeName',
    attributeType: 'attributeType',
    autoReverse: 'autoReverse',
    azimuth: 0,
    baseFrequency: 'baseFrequency',
    baseProfile: 'baseProfile',
    baselineShift: 'baseline-shift',
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 'calcMode',
    capHeight: 'cap-height',
    clip: 0,
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    clipPathUnits: 'clipPathUnits',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    contentScriptType: 'contentScriptType',
    contentStyleType: 'contentStyleType',
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 'diffuseConstant',
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 'dominant-baseline',
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 'edgeMode',
    elevation: 0,
    enableBackground: 'enable-background',
    end: 0,
    evEvent: 'ev:event',
    exponent: 0,
    externalResourcesRequired: 'externalResourcesRequired',
    fill: 0,
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    filter: 0,
    filterRes: 'filterRes',
    filterUnits: 'filterUnits',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    focusable: 0,
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    glyphRef: 'glyphRef',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    hanging: 0,
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    ideographic: 0,
    imageRendering: 'image-rendering',
    'in': 0,
    in2: 0,
    intercept: 0,
    k: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    kernelMatrix: 'kernelMatrix',
    kernelUnitLength: 'kernelUnitLength',
    kerning: 0,
    keyPoints: 'keyPoints',
    keySplines: 'keySplines',
    keyTimes: 'keyTimes',
    lengthAdjust: 'lengthAdjust',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    limitingConeAngle: 'limitingConeAngle',
    local: 0,
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    markerHeight: 'markerHeight',
    markerUnits: 'markerUnits',
    markerWidth: 'markerWidth',
    mask: 0,
    maskContentUnits: 'maskContentUnits',
    maskUnits: 'maskUnits',
    mathematical: 0,
    mode: 0,
    numOctaves: 'numOctaves',
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pathLength: 'pathLength',
    patternContentUnits: 'patternContentUnits',
    patternTransform: 'patternTransform',
    patternUnits: 'patternUnits',
    pointerEvents: 'pointer-events',
    points: 0,
    pointsAtX: 'pointsAtX',
    pointsAtY: 'pointsAtY',
    pointsAtZ: 'pointsAtZ',
    preserveAlpha: 'preserveAlpha',
    preserveAspectRatio: 'preserveAspectRatio',
    primitiveUnits: 'primitiveUnits',
    r: 0,
    radius: 0,
    refX: 'refX',
    refY: 'refY',
    renderingIntent: 'rendering-intent',
    repeatCount: 'repeatCount',
    repeatDur: 'repeatDur',
    requiredExtensions: 'requiredExtensions',
    requiredFeatures: 'requiredFeatures',
    restart: 0,
    result: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    seed: 0,
    shapeRendering: 'shape-rendering',
    slope: 0,
    spacing: 0,
    specularConstant: 'specularConstant',
    specularExponent: 'specularExponent',
    speed: 0,
    spreadMethod: 'spreadMethod',
    startOffset: 'startOffset',
    stdDeviation: 'stdDeviation',
    stemh: 0,
    stemv: 0,
    stitchTiles: 'stitchTiles',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    string: 0,
    stroke: 0,
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    surfaceScale: 'surfaceScale',
    systemLanguage: 'systemLanguage',
    tableValues: 'tableValues',
    targetX: 'targetX',
    targetY: 'targetY',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    textLength: 'textLength',
    to: 0,
    transform: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicode: 0,
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    values: 0,
    vectorEffect: 'vector-effect',
    version: 0,
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    viewBox: 'viewBox',
    viewTarget: 'viewTarget',
    visibility: 0,
    widths: 0,
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    x: 0,
    xHeight: 'x-height',
    x1: 0,
    x2: 0,
    xChannelSelector: 'xChannelSelector',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    xmlId: 'xml:id',
    xmlns: 0,
    xmlnsXlink: 'xmlns:xlink',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space',
    y: 0,
    y1: 0,
    y2: 0,
    yChannelSelector: 'yChannelSelector',
    z: 0,
    zoomAndPan: 'zoomAndPan'
};
var SVGPropertyConfig = {
    Properties: {},
    DOMAttributeNamespaces: {
        'ev:event': NS.ev,
        'xlink:actuate': NS.xlink,
        'xlink:arcrole': NS.xlink,
        'xlink:href': NS.xlink,
        'xlink:role': NS.xlink,
        'xlink:show': NS.xlink,
        'xlink:title': NS.xlink,
        'xlink:type': NS.xlink,
        'xml:base': NS.xml,
        'xml:id': NS.xml,
        'xml:lang': NS.xml,
        'xml:space': NS.xml
    },
    DOMAttributeNames: {}
};
Object.keys(ATTRS).forEach(function (key) {
    SVGPropertyConfig.Properties[key] = 0;
    if (ATTRS[key]) {
        SVGPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
    }
});

/* tslint:disable: no-empty*/
function patch(lastVnode, nextVnode, parentNode, context, isSvg) {
    var lastDom = lastVnode.dom;
    var newDom;
    if (isSameVNode(lastVnode, nextVnode)) {
        var vtype = nextVnode.vtype;
        if (vtype & 2 /* Node */) {
                isSvg = isNullOrUndef(isSvg) ? lastVnode.isSvg : isSvg;
                if (isSvg) {
                    nextVnode.isSvg = isSvg;
                }
                patchProps(lastDom, nextVnode.props, lastVnode.props, lastVnode, isSvg);
                patchChildren(lastDom, lastVnode.children, nextVnode.children, context, isSvg);
                if (nextVnode.ref !== null) {
                    Ref.update(lastVnode, nextVnode, lastDom);
                }
                newDom = lastDom;
            } else if ((vtype & (4 /* Composite */ | 8 /* Stateless */)) > 0) {
            newDom = nextVnode.update(lastVnode, nextVnode, context);
            options.afterUpdate(nextVnode);
        } else if (vtype & 1 /* Text */) {
                return patchVText(lastVnode, nextVnode);
            } else if (vtype & 32 /* Portal */) {
                patchChildren(lastVnode.type, lastVnode.children, nextVnode.children, context, isSvg);
            }
        // @TODO: test case
        nextVnode.dom = newDom || lastDom;
    } else if (isArray(lastVnode) && isArray(nextVnode)) {
        patchArrayChildren(lastDom, lastVnode, nextVnode, context, false);
    } else {
        unmount(lastVnode);
        newDom = createElement(nextVnode, isSvg, context);
        if (nextVnode !== null) {
            nextVnode.dom = newDom;
        }
        if (parentNode !== null) {
            parentNode.replaceChild(newDom, lastDom);
        }
    }
    return newDom;
}
function patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
    var lastLength = lastChildren.length;
    var nextLength = nextChildren.length;
    if (lastLength === 0) {
        if (nextLength > 0) {
            for (var i = 0; i < nextLength; i++) {
                mountChild(nextChildren[i], parentDom, context, isSvg);
            }
        }
    } else if (nextLength === 0) {
        unmountChildren(lastChildren);
        parentDom.textContent = '';
    } else {
        if (isKeyed(lastChildren, nextChildren)) {
            patchKeyedChildren(lastChildren, nextChildren, parentDom, context, isSvg, lastLength, nextLength);
        } else {
            patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength);
        }
    }
}
function patchChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
    // @TODO: is a better way to compatible with react-router?
    // if (lastChildren === nextChildren) {
    //   return
    // }
    var lastChildrenIsArray = isArray(lastChildren);
    var nextChildrenIsArray = isArray(nextChildren);
    if (lastChildrenIsArray && nextChildrenIsArray) {
        patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg);
    } else if (!lastChildrenIsArray && !nextChildrenIsArray) {
        patch(lastChildren, nextChildren, parentDom, context, isSvg);
    } else if (lastChildrenIsArray && !nextChildrenIsArray) {
        patchArrayChildren(parentDom, lastChildren, [nextChildren], context, isSvg);
    } else if (!lastChildrenIsArray && nextChildrenIsArray) {
        patchArrayChildren(parentDom, [lastChildren], nextChildren, context, isSvg);
    }
}
function patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength) {
    var minLength = Math.min(lastLength, nextLength);
    var i = 0;
    while (i < minLength) {
        patch(lastChildren[i], nextChildren[i], parentDom, context, isSvg);
        i++;
    }
    if (lastLength < nextLength) {
        for (i = minLength; i < nextLength; i++) {
            if (parentDom !== null) {
                parentDom.appendChild(createElement(nextChildren[i], isSvg, context));
            }
        }
    } else if (lastLength > nextLength) {
        for (i = minLength; i < lastLength; i++) {
            unmount(lastChildren[i], parentDom);
        }
    }
}
/**
 *
 * Virtual DOM patching algorithm based on ivi by
 * Boris Kaul (@localvoid)
 * Licensed under the MIT License
 * https://github.com/ivijs/ivi/blob/master/LICENSE
 *
 */
function patchKeyedChildren(a, b, dom, context, isSvg, aLength, bLength) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, context, isSvg);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, context, isSvg);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
        }
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                bStart++;
                attachNewNode(dom, createElement(node, isSvg, context), nextNode);
            }
        }
    } else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmount(a[aStart++], dom);
        }
    } else {
        var aLeft = aEnd - aStart + 1;
        var bLeft = bEnd - bStart + 1;
        var sources = new Array(bLeft);
        // Mark all nodes as inserted.
        for (i = 0; i < bLeft; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLeft <= 4 || aLeft * bLeft <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            } else {
                                pos = j;
                            }
                            patch(aNode, bNode, dom, context, isSvg);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        } else {
            var keyIndex = new MapClass();
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    j = keyIndex.get(aNode.key);
                    if (j !== undefined) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        } else {
                            pos = j;
                        }
                        patch(aNode, bNode, dom, context, isSvg);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        if (aLeft === aLength && patched === 0) {
            unmountChildren(a);
            dom.textContent = '';
            while (bStart < bLeft) {
                node = b[bStart];
                bStart++;
                attachNewNode(dom, createElement(node, isSvg, context), null);
            }
        } else {
            i = aLeft - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (aNode !== null) {
                    unmount(aNode, dom);
                    i--;
                }
            }
            if (moved) {
                var seq = lis(sources);
                j = seq.length - 1;
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        nextPos = pos + 1;
                        attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
                    } else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            attachNewNode(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
                        } else {
                            j--;
                        }
                    }
                }
            } else if (patched !== bLeft) {
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        nextPos = pos + 1;
                        attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
                    }
                }
            }
        }
    }
}
function attachNewNode(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        parentDom.appendChild(newNode);
    } else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
/**
 * Slightly modified Longest Increased Subsequence algorithm, it ignores items that have -1 value, they're representing
 * new items.
 *
 * http://en.wikipedia.org/wiki/Longest_increasing_subsequence
 *
 * @param a Array of numbers.
 * @returns Longest increasing subsequence.
 */
function lis(a) {
    var p = a.slice();
    var result = [];
    result.push(0);
    var u;
    var v;
    for (var i = 0, il = a.length; i < il; ++i) {
        if (a[i] === -1) {
            continue;
        }
        var j = result[result.length - 1];
        if (a[j] < a[i]) {
            p[i] = j;
            result.push(i);
            continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
            var c = (u + v) / 2 | 0;
            if (a[result[c]] < a[i]) {
                u = c + 1;
            } else {
                v = c;
            }
        }
        if (a[i] < a[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length > 0 && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
}
function isSameVNode(a, b) {
    if (isInvalid(a) || isInvalid(b) || isArray(a) || isArray(b)) {
        return false;
    }
    return a.type === b.type && a.vtype === b.vtype && a.key === b.key;
}
function patchVText(lastVNode, nextVNode) {
    var dom = lastVNode.dom;
    if (dom === null) {
        return;
    }
    var nextText = nextVNode.text;
    nextVNode.dom = dom;
    if (lastVNode.text !== nextText) {
        dom.nodeValue = nextText;
    }
    return dom;
}
var skipProps = {
    children: 1,
    key: 1,
    ref: 1,
    owner: 1
};
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function setStyle(domStyle, style, value) {
    if (isNullOrUndef(value) || isNumber(value) && isNaN(value)) {
        domStyle[style] = '';
        return;
    }
    if (style === 'float') {
        domStyle['cssFloat'] = value;
        domStyle['styleFloat'] = value;
        return;
    }
    domStyle[style] = !isNumber(value) || IS_NON_DIMENSIONAL.test(style) ? value : value + 'px';
}
function patchEvent(eventName, lastEvent, nextEvent, domNode) {
    if (lastEvent !== nextEvent) {
        if (isFunction(lastEvent)) {
            detachEvent(domNode, eventName, lastEvent);
        }
        attachEvent(domNode, eventName, nextEvent);
    }
}
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    var domStyle = dom.style;
    var style;
    var value;
    if (isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                setStyle(domStyle, style, value);
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    } else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            setStyle(domStyle, style, value);
        }
    }
}
function patchProp(domNode, prop, lastValue, nextValue, lastVnode, isSvg) {
    // fix the value update for textarea/input
    if (lastValue !== nextValue || prop === 'value') {
        if (prop === 'className') {
            prop = 'class';
        }
        if (skipProps[prop] === 1) {
            return;
        } else if (prop === 'class' && !isSvg) {
            domNode.className = nextValue;
        } else if (prop === 'dangerouslySetInnerHTML') {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml)) {
                    if (isValidElement(lastVnode) && lastVnode.children !== EMPTY_CHILDREN) {
                        unmountChildren(lastVnode.children);
                        lastVnode.children = [];
                    }
                    domNode.innerHTML = nextHtml;
                }
            }
        } else if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, domNode);
        } else if (prop === 'style') {
            patchStyle(lastValue, nextValue, domNode);
        } else if (prop !== 'list' && prop !== 'type' && !isSvg && prop in domNode) {
            setProperty(domNode, prop, nextValue == null ? '' : nextValue);
            if (nextValue == null || nextValue === false) {
                domNode.removeAttribute(prop);
            }
        } else if (isNullOrUndef(nextValue) || nextValue === false) {
            domNode.removeAttribute(prop);
        } else {
            var namespace = SVGPropertyConfig.DOMAttributeNamespaces[prop];
            if (isSvg && namespace) {
                if (nextValue) {
                    domNode.setAttributeNS(namespace, prop, nextValue);
                } else {
                    var colonPosition = prop.indexOf(':');
                    var localName = colonPosition > -1 ? prop.substr(colonPosition + 1) : prop;
                    domNode.removeAttributeNS(namespace, localName);
                }
            } else {
                if (!isFunction(nextValue)) {
                    domNode.setAttribute(prop, nextValue);
                }
                // WARNING: Non-event attributes with function values:
                // https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html#changes-in-detail
            }
        }
    }
}
function setProperty(node, name, value) {
    try {
        node[name] = value;
    } catch (e) {}
}
function patchProps(domNode, nextProps, previousProps, lastVnode, isSvg) {
    for (var propName in previousProps) {
        var value = previousProps[propName];
        if (isNullOrUndef(nextProps[propName]) && !isNullOrUndef(value)) {
            if (isAttrAnEvent(propName)) {
                detachEvent(domNode, propName, value);
            } else if (propName === 'dangerouslySetInnerHTML') {
                domNode.textContent = '';
            } else if (propName === 'className') {
                domNode.removeAttribute('class');
            } else {
                domNode.removeAttribute(propName);
            }
        }
    }
    for (var propName$1 in nextProps) {
        patchProp(domNode, propName$1, previousProps[propName$1], nextProps[propName$1], lastVnode, isSvg);
    }
}

var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
function createElement(vnode, isSvg, parentContext, parentComponent) {
    var domNode;
    if (isValidElement(vnode)) {
        var vtype = vnode.vtype;
        if (vtype & (4 /* Composite */ | 8 /* Stateless */)) {
            domNode = vnode.init(parentContext, parentComponent);
            options.afterMount(vnode);
        } else if (vtype & 1 /* Text */) {
                domNode = doc.createTextNode(vnode.text);
                vnode.dom = domNode;
            } else if (vtype & 2 /* Node */) {
                domNode = mountVNode$1(vnode, isSvg, parentContext, parentComponent);
            } else if (vtype & 16 /* Void */) {
                domNode = vnode.dom = doc.createTextNode('');
            } else if (isPortal(vtype, vnode)) {
            vnode.type.appendChild(createElement(vnode.children, isSvg, parentContext, parentComponent));
            domNode = doc.createTextNode('');
        }
    } else if (isString(vnode) || isNumber(vnode)) {
        domNode = doc.createTextNode(vnode);
    } else if (isNullOrUndef(vnode) || isBoolean(vnode)) {
        domNode = doc.createTextNode('');
    } else if (isArray(vnode)) {
        domNode = doc.createDocumentFragment();
        vnode.forEach(function (child) {
            if (!isInvalid(child)) {
                var childNode = createElement(child, isSvg, parentContext, parentComponent);
                if (childNode) {
                    domNode.appendChild(childNode);
                }
            }
        });
    } else {
        throw new Error('Unsupported VNode.');
    }
    return domNode;
}
function mountVNode$1(vnode, isSvg, parentContext, parentComponent) {
    if (vnode.isSvg) {
        isSvg = true;
    } else if (vnode.type === 'svg') {
        isSvg = true;
        /* istanbul ignore next */
    } else if (!isSupportSVG) {
        isSvg = false;
    }
    if (isSvg) {
        vnode.namespace = SVG_NAMESPACE;
        vnode.isSvg = isSvg;
    }
    var domNode = !isSvg ? doc.createElement(vnode.type) : doc.createElementNS(vnode.namespace, vnode.type);
    setProps(domNode, vnode, isSvg);
    if (vnode.type === 'foreignObject') {
        isSvg = false;
    }
    var children = vnode.children;
    if (isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            mountChild(children[i], domNode, parentContext, isSvg, parentComponent);
        }
    } else {
        mountChild(children, domNode, parentContext, isSvg, parentComponent);
    }
    vnode.dom = domNode;
    if (vnode.ref !== null) {
        Ref.attach(vnode, vnode.ref, domNode);
    }
    return domNode;
}
function mountChild(child, domNode, parentContext, isSvg, parentComponent) {
    child.parentContext = parentContext || EMPTY_OBJ;
    var childNode = createElement(child, isSvg, parentContext, parentComponent);
    if (childNode !== null) {
        domNode.appendChild(childNode);
    }
}
function setProps(domNode, vnode, isSvg) {
    var props = vnode.props;
    for (var p in props) {
        patchProp(domNode, p, null, props[p], null, isSvg);
    }
}

function createVText(text) {
    return {
        text: text,
        vtype: 1 /* Text */
        , dom: null
    };
}

function createVoid() {
    return {
        dom: null,
        vtype: 16 /* Void */
    };
}

// import { extend, isFunction, isNumber, isString } from 'nerv-utils'
var readyComponents = [];
function errorCatcher(fn, component) {
    try {
        return fn();
    } catch (error) {
        errorHandler(component, error);
    }
}
function errorHandler(component, error) {
    var boundary;
    while (true) {
        if (isFunction(component.componentDidCatch)) {
            boundary = component;
            break;
        } else if (component._parentComponent) {
            component = component._parentComponent;
        } else {
            break;
        }
    }
    if (boundary) {
        var _disable = boundary._disable;
        boundary._disable = false;
        boundary.componentDidCatch(error);
        boundary._disable = _disable;
    } else {
        throw error;
    }
}
function ensureVirtualNode(rendered) {
    if (isNumber(rendered) || isString(rendered)) {
        return createVText(rendered);
    } else if (isInvalid(rendered)) {
        return createVoid();
    }
    return rendered;
}
function mountVNode(vnode, parentContext, parentComponent) {
    return createElement(vnode, false, parentContext, parentComponent);
}
function mountComponent(vnode, parentContext, parentComponent) {
    var ref = vnode.ref;
    vnode.component = new vnode.type(vnode.props, parentContext);
    var component = vnode.component;
    component.vnode = vnode;
    if (isComponent(parentComponent)) {
        component._parentComponent = parentComponent;
    }
    if (isFunction(component.componentWillMount)) {
        errorCatcher(function () {
            component.componentWillMount();
        }, component);
        component.state = component.getState();
        component.clearCallBacks();
    }
    component._dirty = false;
    var rendered = renderComponent(component);
    rendered.parentVNode = vnode;
    component._rendered = rendered;
    if (isFunction(component.componentDidMount)) {
        readyComponents.push(component);
    }
    if (!isNullOrUndef(ref)) {
        Ref.attach(vnode, ref, vnode.dom);
    }
    var dom = vnode.dom = mountVNode(rendered, getChildContext(component, parentContext), component);
    component._disable = false;
    return dom;
}
function mountStatelessComponent(vnode, parentContext) {
    var rendered = vnode.type(vnode.props, parentContext);
    vnode._rendered = ensureVirtualNode(rendered);
    vnode._rendered.parentVNode = vnode;
    return vnode.dom = mountVNode(vnode._rendered, parentContext);
}
function getChildContext(component, context) {
    if (context === void 0) context = EMPTY_OBJ;

    if (component.getChildContext) {
        return extend(clone(context), component.getChildContext());
    }
    return clone(context);
}
function renderComponent(component) {
    Current.current = component;
    var rendered;
    errorCatcher(function () {
        rendered = component.render();
    }, component);
    rendered = ensureVirtualNode(rendered);
    Current.current = null;
    return rendered;
}
function flushMount() {
    if (!readyComponents.length) {
        return;
    }
    // @TODO: perf
    var queue = readyComponents.slice(0);
    readyComponents.length = 0;
    queue.forEach(function (item) {
        if (isFunction(item)) {
            item();
        } else if (item.componentDidMount) {
            errorCatcher(function () {
                item.componentDidMount();
            }, item);
        }
    });
}
function reRenderComponent(prev, current) {
    var component = current.component = prev.component;
    var nextProps = current.props;
    var nextContext = current.context;
    component._disable = true;
    if (isFunction(component.componentWillReceiveProps)) {
        errorCatcher(function () {
            component.componentWillReceiveProps(nextProps, nextContext);
        }, component);
    }
    component._disable = false;
    component.prevProps = component.props;
    component.prevState = component.state;
    component.prevContext = component.context;
    component.props = nextProps;
    component.context = nextContext;
    if (!isNullOrUndef(current.ref)) {
        Ref.update(prev, current);
    }
    return updateComponent(component);
}
function reRenderStatelessComponent(prev, current, parentContext, domNode) {
    var lastRendered = prev._rendered;
    var rendered = current.type(current.props, parentContext);
    rendered.parentVNode = current;
    current._rendered = rendered;
    return current.dom = patch(lastRendered, rendered, lastRendered && lastRendered.dom || domNode, parentContext);
}
function updateComponent(component, isForce) {
    if (isForce === void 0) isForce = false;

    var vnode = component.vnode;
    var dom = vnode.dom;
    var props = component.props;
    var state = component.getState();
    var context = component.context;
    var prevProps = component.prevProps || props;
    var prevState = component.prevState || component.state;
    var prevContext = component.prevContext || context;
    component.props = prevProps;
    component.context = prevContext;
    var skip = false;
    if (!isForce && isFunction(component.shouldComponentUpdate) && component.shouldComponentUpdate(props, state, context) === false) {
        skip = true;
    } else if (isFunction(component.componentWillUpdate)) {
        errorCatcher(function () {
            component.componentWillUpdate(props, state, context);
        }, component);
    }
    component.props = props;
    component.state = state;
    component.context = context;
    component._dirty = false;
    if (!skip) {
        var lastRendered = component._rendered;
        var rendered = renderComponent(component);
        rendered.parentVNode = vnode;
        var childContext = getChildContext(component, context);
        var parentDom = lastRendered.dom && lastRendered.dom.parentNode;
        dom = vnode.dom = patch(lastRendered, rendered, parentDom || null, childContext);
        component._rendered = rendered;
        if (isFunction(component.componentDidUpdate)) {
            errorCatcher(function () {
                component.componentDidUpdate(prevProps, prevState, context);
            }, component);
        }
        options.afterUpdate(vnode);
        while (vnode = vnode.parentVNode) {
            if ((vnode.vtype & (4 /* Composite */ | 8 /* Stateless */)) > 0) {
                vnode.dom = dom;
            }
        }
    }
    component.prevProps = component.props;
    component.prevState = component.state;
    component.prevContext = component.context;
    component.clearCallBacks();
    flushMount();
    return dom;
}
function unmountComponent(vnode) {
    var component = vnode.component;
    if (isFunction(component.componentWillUnmount)) {
        errorCatcher(function () {
            component.componentWillUnmount();
        }, component);
    }
    component._disable = true;
    unmount(component._rendered);
    if (!isNullOrUndef(vnode.ref)) {
        Ref.detach(vnode, vnode.ref, vnode.dom);
    }
}
function unmountStatelessComponent(vnode) {
    unmount(vnode._rendered);
}

var items = [];
function enqueueRender(component) {
    // tslint:disable-next-line:no-conditional-assignment
    if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
        nextTick(rerender);
    }
}
function rerender() {
    var p;
    var list = items;
    items = [];
    // tslint:disable-next-line:no-conditional-assignment
    while (p = list.pop()) {
        if (p._dirty) {
            updateComponent(p);
        }
    }
}

var Component = function Component(props, context) {
    this._dirty = true;
    this._disable = true;
    this._pendingStates = [];
    if (!this.state) {
        this.state = {};
    }
    this.props = props || {};
    this.context = context || EMPTY_OBJ;
    this.refs = {};
};
Component.prototype.setState = function setState(state, callback) {
    if (state) {
        (this._pendingStates = this._pendingStates || []).push(state);
    }
    if (isFunction(callback)) {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
    }
    if (!this._disable) {
        enqueueRender(this);
    }
};
Component.prototype.getState = function getState() {
    var this$1 = this;

    // tslint:disable-next-line:no-this-assignment
    var ref = this;
    var _pendingStates = ref._pendingStates;
    var state = ref.state;
    var props = ref.props;
    if (!_pendingStates.length) {
        return state;
    }
    var stateClone = clone(state);
    var queue = _pendingStates.concat();
    this._pendingStates.length = 0;
    queue.forEach(function (nextState) {
        if (isFunction(nextState)) {
            nextState = nextState.call(this$1, state, props);
        }
        extend(stateClone, nextState);
    });
    return stateClone;
};
Component.prototype.clearCallBacks = function clearCallBacks() {
    var this$1 = this;

    if (isArray(this._pendingCallbacks)) {
        while (this._pendingCallbacks.length) {
            this$1._pendingCallbacks.pop().call(this$1);
        }
    }
};
Component.prototype.forceUpdate = function forceUpdate(callback) {
    if (isFunction(callback)) {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
    }
    updateComponent(this, true);
};
// tslint:disable-next-line
Component.prototype.render = function render(nextProps, nextState, nextContext) {};
Component.prototype.isReactComponent = EMPTY_OBJ;

var PureComponent = function (Component$$1) {
    function PureComponent() {
        Component$$1.apply(this, arguments);
        this.isPureComponent = true;
    }

    if (Component$$1) PureComponent.__proto__ = Component$$1;
    PureComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
    PureComponent.prototype.constructor = PureComponent;
    PureComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    };

    return PureComponent;
}(Component);

function render(vnode, container, callback) {
    if (!container) {
        throw new Error(container + " should be a DOM Element");
    }
    var lastVnode = container._component;
    var dom;
    options.roots.push(vnode);
    if (lastVnode !== undefined) {
        options.roots = options.roots.filter(function (item) {
            return item !== lastVnode;
        });
        dom = patch(lastVnode, vnode, container, {});
    } else {
        dom = mountVNode(vnode, {});
        container.appendChild(dom);
    }
    if (container) {
        container._component = vnode;
    }
    flushMount();
    if (callback) {
        callback();
    }
    return isComposite(vnode) ? vnode.component : dom;
}

function createVNode(type, props, children, key, namespace, owner, ref) {
    return {
        type: type,
        key: key || null,
        vtype: 2 /* Node */
        , props: props || EMPTY_OBJ,
        children: children,
        namespace: namespace || null,
        _owner: owner,
        dom: null,
        ref: ref || null
    };
}

function h(type, props, children) {
    var childNodes;
    if (props.children) {
        if (!children) {
            children = props.children;
        }
    }
    if (isArray(children)) {
        childNodes = [];
        addChildren(childNodes, children, type);
    } else if (isString(children) || isNumber(children)) {
        children = createVText(String(children));
    } else if (!isValidElement(children)) {
        children = EMPTY_CHILDREN;
    }
    props.children = childNodes !== undefined ? childNodes : children;
    return createVNode(type, props, props.children, props.key, props.namespace, props.owner, props.ref);
}
function addChildren(childNodes, children, type) {
    if (isString(children) || isNumber(children)) {
        childNodes.push(createVText(String(children)));
    } else if (isValidElement(children)) {
        childNodes.push(children);
    } else if (isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            addChildren(childNodes, children[i], type);
        }
    } else {
        childNodes.push(createVoid());
    }
}

var ComponentWrapper = function ComponentWrapper(type, props) {
    this.vtype = 4 /* Composite */;
    this.type = type;
    this.name = type.name || type.toString().match(/^function\s*([^\s(]+)/)[1];
    type.displayName = this.name;
    this._owner = props.owner;
    delete props.owner;
    if (this.ref = props.ref) {
        delete props.ref;
    }
    this.props = props;
    this.key = props.key || null;
    this.dom = null;
};
ComponentWrapper.prototype.init = function init(parentContext, parentComponent) {
    return mountComponent(this, parentContext, parentComponent);
};
ComponentWrapper.prototype.update = function update(previous, current, parentContext, domNode) {
    this.context = parentContext;
    return reRenderComponent(previous, this);
};
ComponentWrapper.prototype.destroy = function destroy() {
    unmountComponent(this);
};

var StateLessComponent = function StateLessComponent(type, props) {
    this.vtype = 8 /* Stateless */;
    this.type = type;
    this._owner = props.owner;
    delete props.owner;
    this.props = props;
    this.key = props.key;
};
StateLessComponent.prototype.init = function init(parentContext) {
    return mountStatelessComponent(this, parentContext);
};
StateLessComponent.prototype.update = function update(previous, current, parentContext) {
    var props = current.props;
    var context = current.context;
    var shouldComponentUpdate = props.onShouldComponentUpdate;
    if (isFunction(shouldComponentUpdate) && !shouldComponentUpdate(previous.props, props, context)) {
        current._rendered = previous._rendered;
        return previous.dom;
    }
    return reRenderStatelessComponent(previous, this, parentContext, previous.dom);
};
StateLessComponent.prototype.destroy = function destroy() {
    unmountStatelessComponent(this);
};

function transformPropsForRealTag(type, props) {
    var newProps = {};
    for (var propName in props) {
        var propValue = props[propName];
        if (propName === 'defaultValue') {
            newProps.value = props.value || props.defaultValue;
            continue;
        }
        var svgPropName = SVGPropertyConfig.DOMAttributeNames[propName];
        if (svgPropName && svgPropName !== propName) {
            newProps[svgPropName] = propValue;
            continue;
        }
        newProps[propName] = propValue;
    }
    return newProps;
}
/**
 *
 * @param props
 * @param defaultProps
 * defaultProps should respect null but ignore undefined
 * @see: https://facebook.github.io/react/docs/react-component.html#defaultprops
 */
function transformPropsForComponent(props, defaultProps) {
    var newProps = {};
    for (var propName in props) {
        var propValue = props[propName];
        newProps[propName] = propValue;
    }
    if (defaultProps) {
        for (var propName$1 in defaultProps) {
            if (isUndefined(newProps[propName$1])) {
                newProps[propName$1] = defaultProps[propName$1];
            }
        }
    }
    return newProps;
}
function createElement$2(type, properties) {
    var _children = [],
        len = arguments.length - 2;
    while (len-- > 0) _children[len] = arguments[len + 2];

    var children = _children;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        } else if (_children.length === 0) {
            children = undefined;
        }
    }
    var props;
    if (isString(type)) {
        props = transformPropsForRealTag(type, properties);
        props.owner = Current.current;
        return h(type, props, children);
    } else if (isFunction(type)) {
        props = transformPropsForComponent(properties, type.defaultProps);
        if (!props.children || props.children === EMPTY_CHILDREN) {
            props.children = children || children === 0 ? children : EMPTY_CHILDREN;
        }
        props.owner = Current.current;
        return type.prototype && type.prototype.render ? new ComponentWrapper(type, props) : new StateLessComponent(type, props);
    }
    return type;
}

function cloneElement(vnode, props) {
    var children = [],
        len = arguments.length - 2;
    while (len-- > 0) children[len] = arguments[len + 2];

    if (isVText(vnode)) {
        return createVText(vnode.text);
    }
    if (isString(vnode) || isNumber(vnode)) {
        return createVText(vnode);
    }
    if (isInvalid(vnode) || !isInvalid(vnode) && isPortal(vnode.vtype, vnode) || vnode && vnode.vtype & 16 /* Void */) {
        return createVoid();
    }
    var properties = clone(extend(clone(vnode.props), props));
    if (vnode.namespace) {
        properties.namespace = vnode.namespace;
    }
    if (vnode.vtype & 4 /* Composite */ && !isNullOrUndef(vnode.ref)) {
        properties.ref = vnode.ref;
    }
    var childrenTmp = (arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children || properties.children) || [];
    if (childrenTmp.length) {
        if (childrenTmp.length === 1) {
            childrenTmp = children[0];
        }
    }
    if (isArray(vnode)) {
        return vnode.map(function (item) {
            return cloneElement(item);
        });
    }
    var newVNode = createElement$2(vnode.type, properties);
    if (isArray(childrenTmp)) {
        var _children = childrenTmp.map(function (child) {
            return cloneElement(child, child.props);
        });
        if (_children.length === 0) {
            _children = EMPTY_CHILDREN;
        }
        if (isVNode(newVNode)) {
            newVNode.children = _children;
        }
        newVNode.props.children = _children;
    } else if (childrenTmp) {
        if (isVNode(newVNode)) {
            newVNode.children = cloneElement(childrenTmp);
        }
        newVNode.props.children = cloneElement(childrenTmp, childrenTmp.props);
    }
    return newVNode;
}

var Children = {
    map: function map(children, fn, ctx) {
        if (isNullOrUndef(children)) {
            return children;
        }
        children = Children.toArray(children);
        if (ctx && ctx !== children) {
            fn = fn.bind(ctx);
        }
        return children.map(fn);
    },
    forEach: function forEach(children, fn, ctx) {
        if (isNullOrUndef(children)) {
            return;
        }
        children = Children.toArray(children);
        if (ctx && ctx !== children) {
            fn = fn.bind(ctx);
        }
        for (var i = 0, len = children.length; i < len; i++) {
            var child = isInvalid(children[i]) ? null : children[i];
            fn(child, i, children);
        }
    },
    count: function count(children) {
        children = Children.toArray(children);
        return children.length;
    },
    only: function only(children) {
        children = Children.toArray(children);
        if (children.length !== 1) {
            throw new Error('Children.only() expects only one child.');
        }
        return children[0];
    },
    toArray: function toArray(children) {
        if (isNullOrUndef(children)) {
            return [];
        }
        if (isArray(children)) {
            var result = [];
            flatten(children, result);
            return result;
        }
        return EMPTY_CHILDREN.concat(children);
    }
};
function flatten(arr, result) {
    for (var i = 0, len = arr.length; i < len; i++) {
        var value = arr[i];
        if (isArray(value)) {
            flatten(value, result);
        } else {
            result.push(value);
        }
    }
    return result;
}

// tslint:disable:no-conditional-assignment
function hydrate(vnode, container, callback) {
    if (container !== null) {
        // lastChild causes less reflow than firstChild
        var dom = container.lastChild;
        // there should be only a single entry for the root
        while (dom) {
            var next = dom.previousSibling;
            container.removeChild(dom);
            dom = next;
        }
        return render(vnode, container, callback);
    }
}

function createPortal(children, container) {
    return {
        type: container,
        vtype: 32 /* Portal */
        , children: children,
        dom: null
    };
}

// some library check React version
// see: https://github.com/NervJS/nerv/issues/46
var version = '15.4.2';

function unmountComponentAtNode(dom) {
    var component = dom._component;
    if (isValidElement(component)) {
        unmount(component, dom);
        delete dom._component;
        return true;
    }
    return false;
}
function findDOMNode(component) {
    if (isInvalid(component)) {
        return null;
    }
    return isComponent(component) ? component.vnode.dom : isValidElement(component) ? component.dom : component;
}
function createFactory(type) {
    return createElement$2.bind(null, type);
}
var WrapperComponent = function (Component$$1) {
    function WrapperComponent() {
        Component$$1.apply(this, arguments);
    }

    if (Component$$1) WrapperComponent.__proto__ = Component$$1;
    WrapperComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
    WrapperComponent.prototype.constructor = WrapperComponent;

    WrapperComponent.prototype.getChildContext = function getChildContext$$1() {
        // tslint:disable-next-line
        return this.props.context;
    };
    WrapperComponent.prototype.render = function render$$1() {
        return this.props.children;
    };

    return WrapperComponent;
}(Component);
function unstable_renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
    // @TODO: should handle props.context?
    var wrapper = createElement$2(WrapperComponent, { context: getChildContext(parentComponent, parentComponent.context) }, vnode);
    var rendered = render(wrapper, container);
    if (callback) {
        callback.call(rendered);
    }
    return rendered;
}
function isValidElement$1(element) {
    return isValidElement(element) && (element.vtype & (4 /* Composite */ | 2 /* Node */)) > 0;
}
var unstable_batchedUpdates = nextTick;

var shim = noop$1;
shim.isRequired = noop$1;
function getShim() {
    return shim;
}
var PropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    PropTypes: {},
    checkPropTypes: noop$1
};
PropTypes.PropTypes = PropTypes;

var index = {
    Children: Children,
    Component: Component,
    PureComponent: PureComponent,
    createElement: createElement$2,
    cloneElement: cloneElement,
    render: render,
    nextTick: nextTick,
    options: options,
    findDOMNode: findDOMNode,
    isValidElement: isValidElement$1,
    unmountComponentAtNode: unmountComponentAtNode,
    createPortal: createPortal,
    unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
    hydrate: hydrate,
    createFactory: createFactory,
    unstable_batchedUpdates: unstable_batchedUpdates,
    version: version,
    PropTypes: PropTypes
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.createElement = createElement$2;
exports.cloneElement = cloneElement;
exports.render = render;
exports.nextTick = nextTick;
exports.options = options;
exports.findDOMNode = findDOMNode;
exports.isValidElement = isValidElement$1;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.createPortal = createPortal;
exports.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer;
exports.hydrate = hydrate;
exports.createFactory = createFactory;
exports.unstable_batchedUpdates = unstable_batchedUpdates;
exports.version = version;
exports.PropTypes = PropTypes;
exports['default'] = index;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _Header = _interopRequireDefault(__webpack_require__(7));

exports["default"] = _Header["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _LogoName = _interopRequireDefault(__webpack_require__(10));

var _TLSMessage = _interopRequireDefault(__webpack_require__(11));

var _Nav = _interopRequireDefault(__webpack_require__(16));

var _Search = _interopRequireDefault(__webpack_require__(21));

var _Account = _interopRequireDefault(__webpack_require__(31));

var _HeaderModule = _interopRequireDefault(__webpack_require__(33));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Header =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Header, _Component);

  function Header(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isExpanded: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = Header.prototype;

  _proto.handleClick = function handleClick() {
    var _this2 = this;

    this.setState(function (prevState) {
      _newArrowCheck(this, _this2);

      return {
        isExpanded: !prevState.isExpanded
      };
    }.bind(this));
  };

  _proto.render = function render() {
    return this.props.enabled !== false && _react["default"].createElement("header", {
      className: _HeaderModule["default"].header
    }, _react["default"].createElement("a", {
      href: "https://www.nice.org.uk/",
      "aria-label": "Home"
    }, typeof SVGRect !== "undefined" && _react["default"].createElement(_LogoName["default"], {
      width: null,
      height: "50px"
    })), _react["default"].createElement("button", {
      className: _HeaderModule["default"].mobileMenuBtn,
      type: "button",
      onClick: this.handleClick
    }, this.state.isExpanded ? "Collapse" : "Expand", " Menu"), _react["default"].createElement(_Search["default"], null), _react["default"].createElement(_Account["default"], null), _react["default"].createElement(_Nav["default"], {
      service: this.props.service
    }), _react["default"].createElement(_TLSMessage["default"], null));
  };

  return Header;
}(_react.Component);

exports["default"] = Header;
Header.propTypes = {
  service: _propTypes["default"].string,
  enabled: _propTypes["default"].bool
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(9);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogoName = function SvgLogoName(props) {
  return _react["default"].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 2752 512",
    fill: "none",
    className: "icon",
    "aria-hidden": true
  }, props), _react["default"].createElement("path", {
    d: "M163.352 80.336v148.8H143.8L51.864 103.472v125.664H35v-148.8h19.552l91.92 125.2v-125.2h16.88zM275.24 211.168c-8.992 13.2-22.4 19.792-40.24 19.792-16.176 0-29.36-5.616-39.568-16.864-9.904-11.072-14.848-24.8-14.848-41.136 0-16.336 4.944-30.048 14.848-41.12 10.192-11.248 23.744-16.864 40.688-16.864 16.944 0 29.968 6.656 39.12 20v-18.224h16.864v112.384H275.24v-17.984.016zm-37.984 4.496c12.144 0 21.744-4.192 28.768-12.592 6.752-7.936 10.112-17.984 10.112-30.128 0-12.144-3.376-22.176-10.112-30.128-7.04-8.384-16.624-12.592-28.768-12.592-11.984 0-21.744 4.208-29.216 12.592-7.056 7.936-10.56 17.984-10.56 30.128 0 12.144 3.52 22.176 10.56 30.128 7.472 8.4 17.232 12.592 29.216 12.592zm93.952 13.488V131.6H308.28v-14.832h22.928v-40.24h16.864v40.24h25.84V131.6h-25.84v97.552h-16.864zM407.64 75.84v22.032h-18.208V75.84h18.208zm-17.536 40.928h16.864v112.384h-16.864V116.768zm92.608-1.808c16.784 0 30.416 5.616 40.912 16.864 9.888 10.784 14.832 24.496 14.832 41.12s-4.944 30.336-14.832 41.136c-10.496 11.248-24.112 16.864-40.912 16.864s-30.432-5.616-40.912-16.864c-9.888-10.784-14.832-24.496-14.832-41.136 0-16.64 4.944-30.336 14.832-41.12 10.48-11.248 24.112-16.864 40.912-16.864zm0 100.704c12.144 0 21.744-4.192 28.784-12.592 6.736-7.936 10.112-17.984 10.112-30.128 0-12.144-3.376-22.176-10.112-30.128-7.04-8.384-16.64-12.592-28.784-12.592-12.144 0-21.728 4.208-28.784 12.592-6.736 7.936-10.112 17.984-10.112 30.128 0 12.144 3.376 22.176 10.112 30.128 7.056 8.4 16.656 12.592 28.784 12.592zm92.608-98.896v17.536c4.032-5.392 9.008-9.968 14.832-13.712 5.824-3.744 12.528-5.616 20.016-5.616 7.488 0 13.936 1.04 19.328 3.136 5.392 2.096 10.112 5.248 14.16 9.44 9.28 9.136 13.936 21.2 13.936 36.208v65.408h-16.864v-64.96c0-10.352-2.928-18.592-8.768-24.736-5.84-6.144-13.408-9.216-22.688-9.216-9.44 0-17.472 3.136-24.064 9.456-6.592 6.448-9.888 14.688-9.888 24.72v64.736h-16.864V116.784h16.864v-.016zm191.472 94.4c-8.992 13.2-22.4 19.792-40.256 19.792-16.16 0-29.36-5.616-39.552-16.864-9.888-11.072-14.832-24.8-14.832-41.136 0-16.336 4.944-30.048 14.832-41.12 10.176-11.248 23.744-16.864 40.688-16.864 16.944 0 29.968 6.656 39.104 20v-18.224h16.848v112.384h-16.848v-17.984l.016.016zm-38 4.496c12.144 0 21.744-4.192 28.784-12.592 6.736-7.936 10.112-17.984 10.112-30.128 0-12.144-3.392-22.176-10.112-30.128-7.04-8.384-16.656-12.592-28.784-12.592-11.984 0-21.744 4.208-29.216 12.592-7.056 7.936-10.56 17.984-10.56 30.128 0 12.144 3.52 22.176 10.56 30.128 7.488 8.4 17.232 12.592 29.216 12.592zm98.672 13.488H810.6V71.808h16.864v157.344zm93.072 0h-16.864v-148.8h16.864v148.8zm47.424-112.384v17.536c4.064-5.392 9.008-9.968 14.848-13.712 5.84-3.744 12.512-5.616 20.012-5.616 7.49 0 13.92 1.04 19.32 3.136 5.39 2.096 10.11 5.248 14.17 9.44 9.3 9.136 13.92 21.2 13.92 36.208v65.408h-16.85v-64.96c0-10.352-2.94-18.592-8.76-24.736-5.83-6.144-13.43-9.216-22.72-9.216-9.444 0-17.46 3.136-24.052 9.456-6.608 6.448-9.904 14.688-9.904 24.72v64.736H951.08V116.784h16.864l.016-.016zm174.19 30.112c-1.49-11.68-10.89-17.52-28.19-17.52s-25.97 5.392-25.97 16.176c0 4.496 1.84 7.92 5.49 10.224 3.68 2.32 8.27 4.24 13.84 5.728 5.54 1.488 11.58 2.88 18.1 4.16 6.51 1.28 12.54 3.072 18.09 5.392 5.55 2.32 10.15 5.504 13.83 9.552 3.68 4.048 5.5 9.6 5.5 16.624 0 10.944-4.11 19.296-12.35 25.072-8.24 5.776-19.39 8.656-33.51 8.656-15 0-26.91-3.744-35.74-11.248-8.1-6.592-12.43-15.2-13.04-25.84h17.54c1.04 10.352 6.89 17.312 17.5 20.912 3.9 1.2 7.78 1.792 11.6 1.792 3.82 0 7.38-.224 10.69-.672a42.724 42.724 0 0 0 9.66-2.48c7.19-2.848 10.79-7.728 10.79-14.608 0-4.64-1.86-8.192-5.49-10.688-3.68-2.48-8.27-4.496-13.84-6.064a225.092 225.092 0 0 0-18.1-4.272c-6.51-1.264-12.54-3.024-18.09-5.296-5.56-2.272-10.15-5.312-13.83-9.216-3.68-3.904-5.5-9.296-5.5-16.176 0-10.192 3.71-18.096 11.12-23.728 7.41-5.632 18.4-8.432 32.93-8.432 13.79 0 24.64 3.312 32.6 9.904 6.58 5.552 10.42 12.896 11.46 22.016h-17.09v.032zm52.16 82.272V131.6h-22.93v-14.832h22.93v-40.24h16.87v40.24h25.84V131.6h-25.84v97.552h-16.87zm76.42-153.312v22.032h-18.23V75.84h18.23zm-17.52 40.928h16.86v112.384h-16.86V116.768zm55.97 112.384V131.6h-22.95v-14.832h22.95v-40.24h16.84v40.24h25.84V131.6h-25.84v97.552h-16.84zm140.03 0v-17.536c-4.05 5.376-8.99 9.968-14.85 13.712-5.86 3.744-12.51 5.616-20.02 5.616-7.5 0-13.93-1.04-19.32-3.136a38.907 38.907 0 0 1-14.16-9.44c-9.28-9.136-13.92-21.2-13.92-36.208v-65.408h16.84v64.96c0 10.352 2.95 18.592 8.79 24.736 5.84 6.144 13.41 9.216 22.69 9.216 9.45 0 17.47-3.136 24.08-9.44 6.57-6.448 9.9-14.704 9.9-24.736v-64.736h16.86v112.384h-16.86l-.03.016zm55.98 0V131.6h-22.94v-14.832h22.94v-40.24h16.85v40.24h25.84V131.6h-25.84v97.552h-16.85zm106.75-13.488c15.16 0 26-6.288 32.6-18.88h18.43c-3.91 10.192-10.08 18.432-18.55 24.736-8.46 6.304-19.37 9.44-32.7 9.44-16.93 0-30.72-5.616-41.34-16.864-10.36-10.944-15.54-24.64-15.54-41.136 0-16.64 4.96-30.336 14.86-41.12 10.48-11.248 24.12-16.864 40.92-16.864s30.43 5.616 40.92 16.864c9.91 10.784 14.84 24.496 14.84 41.12v6.736h-94.2c1.19 10.352 5.33 18.88 12.36 25.632 7.2 6.912 16.33 10.352 27.42 10.352l-.02-.016zm-1.34-85.408c-10.34 0-19.04 3.216-26.08 9.664-6.58 6.16-10.64 14.16-12.14 24.048h76.41c-1.49-9.904-5.55-17.888-12.14-24.048-7.01-6.448-15.73-9.664-26.07-9.664h.02zm168.13-44.304c-7.94 0-13.89 1.76-17.87 5.296-3.99 3.536-5.96 9.184-5.96 16.96v8.544h26.08V131.6h-26.08v97.552h-16.86V131.6h-19.33v-14.832h19.33v-9.888c0-12.288 3.66-21.52 11.02-27.664 7.33-6.144 17.52-9.216 30.56-9.216h1.36v15.968h-2.27l.02-.016zm64.97 29.008c16.79 0 30.42 5.616 40.92 16.864 9.9 10.784 14.83 24.496 14.83 41.12s-4.93 30.336-14.83 41.136c-10.48 11.248-24.12 16.864-40.92 16.864s-30.43-5.616-40.92-16.864c-9.89-10.784-14.85-24.496-14.85-41.136 0-16.64 4.96-30.336 14.85-41.12 10.49-11.248 24.12-16.864 40.92-16.864zm0 100.704c12.15 0 21.73-4.192 28.77-12.592 6.74-7.936 10.11-17.984 10.11-30.128 0-12.144-3.39-22.176-10.11-30.128-7.05-8.384-16.64-12.592-28.77-12.592-12.12 0-21.72 4.208-28.78 12.592-6.74 7.936-10.11 17.984-10.11 30.128 0 12.144 3.37 22.176 10.11 30.128 7.06 8.4 16.64 12.592 28.78 12.592zm135.09-100.704v16.864h-2.03c-12.14 0-22.03 4.864-29.68 14.608-7.18 9.296-10.78 20.384-10.78 33.264v49.456h-16.87v-112.4h16.87V144.4c3.58-11.712 11.37-20.304 23.37-25.856 4.93-2.4 10.93-3.6 17.97-3.6h1.12v.016h.03zM155.272 292.16v148.8h-16.864v-66.304h-86.56v66.304H35v-148.8h16.848v66.08h86.56v-66.08h16.864zm78.672 135.312c15.136 0 26-6.288 32.592-18.88h18.432c-3.904 10.192-10.08 18.416-18.544 24.72-8.464 6.304-19.376 9.456-32.704 9.456-16.928 0-30.72-5.632-41.36-16.864-10.336-10.944-15.504-24.64-15.504-41.12 0-16.656 4.928-30.336 14.832-41.152 10.48-11.232 24.112-16.864 40.896-16.864 16.784 0 30.432 5.632 40.928 16.864 9.904 10.8 14.832 24.512 14.832 41.152v6.736h-94.192c1.184 10.336 5.312 18.88 12.368 25.632 7.184 6.912 16.32 10.336 27.424 10.336v-.016zm-1.36-85.424c-10.336 0-19.024 3.216-26.064 9.664-6.592 6.16-10.64 14.176-12.16 24.064h76.432c-1.488-9.888-5.552-17.888-12.144-24.064-7.04-6.464-15.728-9.664-26.08-9.664h.016zm161.84 80.944c-8.992 13.2-22.4 19.776-40.24 19.776-16.176 0-29.376-5.632-39.568-16.864-9.904-11.088-14.832-24.8-14.832-41.12 0-16.32 4.928-30.064 14.832-41.152 10.192-11.232 23.744-16.864 40.688-16.864 16.944 0 29.968 6.688 39.12 20.032v-18.224h16.864v112.4h-16.864v-18 .016zm-37.984 4.48c12.144 0 21.728-4.208 28.784-12.592 6.736-7.936 10.112-17.968 10.112-30.112 0-12.16-3.376-22.176-10.112-30.144-7.056-8.384-16.64-12.592-28.784-12.592-11.984 0-21.728 4.208-29.216 12.592-7.056 7.968-10.56 17.968-10.56 30.144 0 12.144 3.52 22.176 10.56 30.112 7.488 8.384 17.216 12.592 29.216 12.592zm98.672 13.488h-16.864V283.616h16.864V440.96zm39.136 0v-97.552H471.32V328.56h22.928v-40.208h16.864v40.224h25.856v14.848h-25.856v97.552l-16.864-.016zm75.728-157.344v62.512c4.032-5.392 8.992-9.984 14.832-13.728 5.84-3.744 12.512-5.632 20.016-5.632 7.488 0 13.936 1.056 19.328 3.152 5.392 2.096 10.112 5.264 14.16 9.456 9.296 9.136 13.936 21.216 13.936 36.192v65.408h-16.864v-64.944c0-10.352-2.912-18.592-8.768-24.736-5.84-6.128-13.408-9.216-22.704-9.216-9.44 0-17.456 3.152-24.048 9.44-6.592 6.464-9.888 14.688-9.888 24.72v64.736h-16.864V283.632h16.864v-.016zM811.4 422.992c-9.008 13.2-22.4 19.776-40.24 19.776-16.176 0-29.376-5.632-39.552-16.864-9.904-11.088-14.848-24.8-14.848-41.12 0-16.32 4.928-30.064 14.848-41.152 10.176-11.232 23.728-16.864 40.672-16.864 16.944 0 29.968 6.688 39.104 20.032v-18.224h16.864v112.4h-16.864v-18l.016.016zm-38 4.48c12.144 0 21.728-4.208 28.768-12.592 6.752-7.936 10.128-17.968 10.128-30.112 0-12.16-3.376-22.176-10.128-30.144-7.056-8.384-16.64-12.592-28.768-12.592-11.984 0-21.728 4.208-29.2 12.592-7.072 7.968-10.56 17.968-10.56 30.144 0 12.144 3.504 22.176 10.56 30.112 7.488 8.384 17.232 12.592 29.2 12.592zm94.368-98.896v17.552c4.032-5.392 8.976-9.984 14.832-13.728 5.824-3.744 12.528-5.632 20.016-5.632 7.488 0 13.92 1.056 19.328 3.152 5.392 2.096 10.112 5.264 14.16 9.456 9.296 9.136 13.936 21.216 13.936 36.192v65.408h-16.864v-64.944c0-10.352-2.928-18.592-8.768-24.736-5.84-6.128-13.408-9.216-22.704-9.216-9.44 0-17.472 3.152-24.064 9.44-6.592 6.464-9.888 14.688-9.888 24.72v64.736h-16.864v-112.4l16.88.016v-.016zm191.452 94.416c-8.99 13.2-22.4 19.776-40.24 19.776-16.17 0-29.356-5.632-39.564-16.864-9.888-11.088-14.848-24.8-14.848-41.12 0-16.32 4.96-30.064 14.848-41.152 10.192-11.232 23.744-16.864 40.684-16.864 16.95 0 29.97 6.688 39.12 20.032v-63.168h16.85v157.344h-16.85v-18 .016zm-37.98 4.48c12.16 0 21.74-4.208 28.77-12.592 6.73-7.936 10.11-17.968 10.11-30.112 0-12.16-3.38-22.176-10.11-30.144-7.04-8.384-16.63-12.592-28.77-12.592-11.98 0-21.744 4.208-29.216 12.592-7.04 7.968-10.56 17.968-10.56 30.144 0 12.144 3.536 22.176 10.56 30.112 7.472 8.384 17.236 12.592 29.216 12.592zm201.66-1.12c10.64 0 19.97-2.704 28-8.096 8-5.392 13.96-12.672 17.86-21.808h17.78c-4.93 14.096-13.12 25.184-24.52 33.264-12.14 8.688-26.44 13.04-42.92 13.04-21.73 0-39.33-7.44-52.82-22.256-12.75-14.256-19.1-32.24-19.1-53.952 0-21.712 6.36-39.728 19.1-53.952 13.49-14.848 31.09-22.256 52.82-22.256 16.49 0 30.8 4.352 42.92 13.04 11.4 8.096 19.57 19.168 24.52 33.264h-17.78c-3.9-9.136-9.86-16.416-17.86-21.808-8.03-5.392-17.34-8.096-28-8.096-10.65 0-19.48 1.536-26.51 4.624-7.05 3.056-12.97 7.296-17.77 12.704-9.75 10.944-14.61 25.104-14.61 42.48 0 17.376 4.85 31.536 14.61 42.48 10.19 11.584 24.96 17.344 44.28 17.344v-.016zm170.63-3.36c-8.99 13.2-22.39 19.776-40.24 19.776-16.18 0-29.36-5.632-39.57-16.864-9.9-11.088-14.83-24.8-14.83-41.12 0-16.32 4.93-30.064 14.83-41.152 10.19-11.232 23.76-16.864 40.67-16.864 16.95 0 29.97 6.688 39.12 20.032v-18.224h16.85v112.4h-16.85v-18l.02.016zm-37.99 4.48c12.15 0 21.73-4.208 28.77-12.592 6.74-7.936 10.1-17.968 10.1-30.112 0-12.16-3.38-22.176-10.1-30.144-7.05-8.384-16.64-12.592-28.77-12.592-12 0-21.74 4.208-29.23 12.592-7.04 7.968-10.56 17.968-10.56 30.144 0 12.144 3.54 22.176 10.56 30.112 7.47 8.384 17.23 12.592 29.23 12.592zm141.16-100.704v16.864h-2.02c-12.14 0-22.03 4.88-29.66 14.624-7.19 9.296-10.8 20.368-10.8 33.264v49.44h-16.87v-112.4h16.87v27.664c3.61-11.712 11.39-20.304 23.39-25.856 4.94-2.4 10.96-3.616 17.98-3.616h1.12v.016h-.01zm63.16 100.704c15.14 0 26-6.288 32.6-18.88h18.43c-3.91 10.192-10.08 18.416-18.55 24.72-8.46 6.304-19.37 9.456-32.7 9.456-16.93 0-30.7-5.632-41.36-16.864-10.35-10.944-15.52-24.64-15.52-41.12 0-16.656 4.94-30.336 14.86-41.152 10.48-11.232 24.12-16.864 40.9-16.864 16.78 0 30.43 5.632 40.93 16.864 9.9 10.8 14.85 24.512 14.85 41.152v6.736h-94.2c1.2 10.336 5.32 18.88 12.36 25.632 7.2 6.912 16.33 10.336 27.44 10.336l-.04-.016zm-1.36-85.424c-10.33 0-19.02 3.216-26.08 9.664-6.57 6.16-10.62 14.176-12.14 24.064h76.43c-1.49-9.888-5.55-17.888-12.16-24.064-7.01-6.464-15.69-9.664-26.06-9.664h.01zm140.28-33.728v49.92h82.72v16.416h-82.72V424.8h92.62v16.16h-109.47v-148.8h109.47v16.16h-92.62zm163.2 74.656l43.6 58h-21.59l-31.68-45.856-31.92 45.856h-21.34l43.36-58-40.67-54.4h21.58l28.99 42.48 28.77-42.48h21.57l-40.67 54.4zm103.84 44.496c7.18 0 13.56-2.016 19.1-6.048 5.54-4.064 9.58-9.296 12.16-15.744h18.21c-3.46 11.088-9.76 20-18.9 26.736-9.58 6.912-20.97 10.352-34.17 10.352-16.5 0-29.89-5.632-40.23-16.864-10.03-10.944-15.05-24.64-15.05-41.12 0-16.48 5.02-30.192 15.05-41.152 10.35-11.232 23.75-16.864 40.23-16.864 13.2 0 24.59 3.456 34.17 10.352 9.14 6.736 15.44 15.664 18.9 26.736h-18.21c-2.56-6.432-6.61-11.68-12.16-15.712s-11.9-6.08-19.1-6.08c-7.19 0-13.32 1.12-18.32 3.376-5.01 2.256-9.27 5.344-12.71 9.216-7.36 8.096-11.02 18.128-11.02 30.144 0 11.984 3.66 22.032 11.02 30.112 7.51 8.336 17.84 12.528 31.03 12.528v.032zm118.22 0c15.15 0 26-6.288 32.59-18.88h18.42c-3.89 10.192-10.07 18.416-18.53 24.72-8.46 6.304-19.36 9.456-32.7 9.456-16.93 0-30.71-5.632-41.35-16.864-10.35-10.944-15.52-24.64-15.52-41.12 0-16.656 4.95-30.336 14.83-41.152 10.48-11.232 24.13-16.864 40.92-16.864 16.78 0 30.41 5.632 40.92 16.864 9.89 10.8 14.84 24.512 14.84 41.152v6.736h-94.2c1.19 10.336 5.32 18.88 12.36 25.632 7.18 6.912 16.33 10.336 27.42 10.336v-.016zm-1.34-85.424c-10.34 0-19.04 3.216-26.08 9.664-6.6 6.16-10.64 14.176-12.15 24.064h76.42c-1.49-9.888-5.55-17.888-12.15-24.064-7.02-6.464-15.72-9.664-26.06-9.664h.02zm91.02 98.912h-16.85V283.616h16.85V440.96zm43.86 0h-16.87V283.616h16.87V440.96zm77.1-13.488c15.12 0 26-6.288 32.58-18.88h18.41c-3.89 10.192-10.06 18.416-18.53 24.72-8.46 6.304-19.39 9.456-32.7 9.456-16.94 0-30.72-5.632-41.36-16.864-10.35-10.944-15.52-24.64-15.52-41.12 0-16.656 4.94-30.336 14.85-41.152 10.48-11.232 24.13-16.864 40.93-16.864s30.41 5.632 40.89 16.864c9.91 10.8 14.85 24.512 14.85 41.152v6.736h-94.18c1.2 10.336 5.32 18.88 12.36 25.632 7.2 6.912 16.33 10.336 27.44 10.336l-.02-.016zm-1.36-85.424c-10.37 0-19.04 3.216-26.1 9.664-6.57 6.16-10.62 14.176-12.12 24.064h76.41c-1.49-9.888-5.55-17.888-12.14-24.064-7.04-6.464-15.73-9.664-26.07-9.664h.02zm91.04-13.472v17.552c4.03-5.392 8.98-9.984 14.82-13.728 5.84-3.744 12.52-5.632 20.03-5.632 7.49 0 13.93 1.056 19.33 3.152 5.39 2.096 10.11 5.264 14.16 9.456 9.29 9.136 13.93 21.216 13.93 36.192v65.408h-16.86v-64.944c0-10.352-2.93-18.592-8.77-24.736-5.84-6.128-13.41-9.216-22.7-9.216-9.44 0-17.46 3.152-24.07 9.44-6.59 6.464-9.89 14.688-9.89 24.72v64.736h-16.86v-112.4l16.88.016v-.016zm160.03 98.896c7.19 0 13.57-2.016 19.11-6.048 5.53-4.064 9.58-9.296 12.16-15.744h18.2c-3.47 11.088-9.74 20-18.89 26.736-9.59 6.912-20.98 10.352-34.16 10.352-16.48 0-29.91-5.632-40.24-16.864-10.03-10.944-15.06-24.64-15.06-41.12 0-16.48 5.03-30.192 15.06-41.152 10.35-11.232 23.76-16.864 40.24-16.864 13.18 0 24.57 3.456 34.16 10.352 9.15 6.736 15.42 15.664 18.89 26.736h-18.2c-2.56-6.432-6.61-11.68-12.16-15.712-5.56-4.032-11.91-6.08-19.11-6.08-7.18 0-13.31 1.12-18.32 3.376s-9.26 5.344-12.7 9.216c-7.36 8.096-11.03 18.128-11.03 30.144 0 11.984 3.67 22.032 11.03 30.112 7.49 8.336 17.82 12.528 31.02 12.528v.032zm118.24 0c15.14 0 26-6.288 32.58-18.88h18.45c-3.91 10.192-10.1 18.416-18.56 24.72-8.47 6.304-19.36 9.456-32.71 9.456-16.91 0-30.72-5.632-41.34-16.864-10.37-10.944-15.52-24.64-15.52-41.12 0-16.656 4.94-30.336 14.85-41.152 10.48-11.232 24.11-16.864 40.91-16.864 16.8 0 30.41 5.632 40.93 16.864 9.88 10.8 14.83 24.512 14.83 41.152v6.736h-94.19c1.2 10.336 5.32 18.88 12.35 25.632 7.2 6.912 16.33 10.336 27.44 10.336l-.02-.016zm-1.34-85.424c-10.35 0-19.04 3.216-26.08 9.664-6.58 6.16-10.64 14.176-12.15 24.064h76.42c-1.49-9.888-5.54-17.888-12.14-24.064-7.03-6.464-15.75-9.664-26.07-9.664h.02z",
    fill: props.colour || "currentColor"
  }));
};

var _default = SvgLogoName;
exports["default"] = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _TLSMessage = _interopRequireDefault(__webpack_require__(12));

exports["default"] = _TLSMessage["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _TLSMessageModule = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var TLSMessage =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TLSMessage, _Component);

  function TLSMessage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TLSMessage.prototype;

  // See https://gist.github.com/padolsey/527683#gistcomment-768383
  _proto.getIEVersion = function getIEVersion() {
    var tmp = (document["documentMode"] || document.attachEvent) && "ev",
        msie = tmp && (tmp = window[tmp + "al"]) && tmp("/*@cc_on 1;@*/") && +((/msie (\d+)/i.exec(navigator.userAgent) || [])[1] || 0);
    return msie || void 0;
  };

  _proto.render = function render() {
    var ieVersion = this.getIEVersion();

    if (!ieVersion || ieVersion > 10) {
      return null;
    }

    return _react["default"].createElement("div", {
      className: _TLSMessageModule["default"].alert
    }, "Your version of Internet Explorer (version ", ieVersion, ") doesnt support TLS 1.2.");
  };

  return TLSMessage;
}(_react.Component);

exports["default"] = TLSMessage;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(14);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".gn_mdIvN {\n  background: red;\n  color: #fff; }\n", ""]);

// Exports
exports.locals = {
	"alert": "gn_mdIvN"
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _Nav = _interopRequireDefault(__webpack_require__(17));

exports["default"] = _Nav["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _NavModule = _interopRequireDefault(__webpack_require__(18));

var _links = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Nav =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Nav, _Component);

  function Nav() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Nav.prototype;

  _proto.render = function render() {
    var _this = this;

    return _react["default"].createElement("nav", {
      className: _NavModule["default"].nav
    }, _react["default"].createElement("ul", null, _links["default"].map(function (link) {
      _newArrowCheck(this, _this);

      return _react["default"].createElement("li", {
        key: link.href
      }, _react["default"].createElement("a", {
        href: link.href,
        "aria-current": this.props.service && link.id === this.props.service ? "page" : null
      }, link.abbreviation ? _react["default"].createElement("abbr", {
        title: link.title
      }, link.text) : link.text));
    }.bind(this))));
  };

  return Nav;
}(_react.Component);

exports["default"] = Nav;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(19);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".gn_Eoi6A {\n  background: #004650;\n  padding: 0.5rem 0rem;\n  padding: 0.5rem 0rem; }\n  .gn_Eoi6A a {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    color: #fff;\n    display: block;\n    padding: 0.5rem 1rem;\n    padding: 0.5rem 1rem;\n    text-decoration: none; }\n    .gn_Eoi6A a[aria-current='page'] {\n      background: #fff;\n      color: #222; }\n    .gn_Eoi6A a:focus {\n      background: #451551;\n      color: #fff;\n      outline: 3px solid #451551; }\n    .gn_Eoi6A a:hover {\n      background: #18646e;\n      color: #fff; }\n  .gn_Eoi6A abbr {\n    text-decoration: none; }\n  .gn_Eoi6A ul {\n    list-style: none;\n    margin: auto;\n    max-width: 73.125rem;\n    max-width: 73.125rem;\n    padding: 0; }\n  @media (min-width: 56.25em) {\n    .gn_Eoi6A {\n      padding: 0; }\n      .gn_Eoi6A a {\n        height: 100%;\n        padding: 1rem 1rem;\n        padding: 1rem 1rem;\n        position: relative;\n        text-align: center; }\n        .gn_Eoi6A a[aria-current='page']:before {\n          background: #004650;\n          content: '';\n          display: block;\n          height: 2px;\n          left: 0;\n          position: absolute;\n          top: 0;\n          width: 100%; }\n      .gn_Eoi6A ul {\n        display: table;\n        width: 96%;\n        width: calc(100% - 2rem); }\n      .gn_Eoi6A li {\n        display: table-cell; }\n      @supports (display: flex) {\n        .gn_Eoi6A ul {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n          -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between; }\n        .gn_Eoi6A li {\n          -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n          flex-grow: 1; } } }\n", ""]);

// Exports
exports.locals = {
	"nav": "gn_Eoi6A"
};

/***/ }),
/* 20 */
/***/ (function(module) {

module.exports = [{"href":"https://pathways.nice.org.uk/","text":"NICE Pathways","id":"pathways"},{"href":"https://www.nice.org.uk/guidance","text":"NICE guidance"},{"href":"https://www.nice.org.uk/standards-and-indicators","text":"Standards and indicators"},{"href":"https://www.evidence.nhs.uk/","text":"Evidence search"},{"href":"https://bnf.nice.org.uk/","text":"BNF","abbreviation":true,"title":"British National Formulary"},{"href":"https://bnfc.nice.org.uk/","text":"BNFC","abbreviation":true,"title":"British National Formulary for Children"},{"href":"https://cks.nice.org.uk/","text":"CKS","abbreviation":true,"title":"Clinical Knowledge Summaries"},{"href":"https://www.nice.org.uk/about/what-we-do/evidence-services/journals-and-databases","text":"Journals and databases"}];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _Search = _interopRequireDefault(__webpack_require__(22));

exports["default"] = _Search["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Search = _interopRequireDefault(__webpack_require__(23));

var _Autocomplete = _interopRequireDefault(__webpack_require__(24));

var _SearchModule = _interopRequireDefault(__webpack_require__(29));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Search =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Search, _Component);

  function Search() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("form", {
      role: "search",
      action: "/search",
      className: _SearchModule["default"].search
    }, _react["default"].createElement("label", {
      htmlFor: "autocomplete"
    }, "Search term"), _react["default"].createElement(_Autocomplete["default"], null), _react["default"].createElement("button", {
      type: "submit",
      "aria-label": "Perform search"
    }, !window || typeof SVGRect !== "undefined" ? _react["default"].createElement(_Search["default"], null) : _react["default"].createElement("span", {
      role: "img",
      "aria-label": "Magnifying glass"
    }, "\uD83D\uDD0E")));
  };

  return Search;
}(_react.Component);

exports["default"] = Search;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSearch = function SvgSearch(props) {
  return _react["default"].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    fill: "none",
    className: "icon",
    "aria-hidden": true
  }, props), _react["default"].createElement("path", {
    d: "M83.784 476.472L197.112 363.16c30.144 20.32 65.056 30.528 100.032 30.528 45.904 0 91.776-17.488 126.8-52.528 70.064-70.064 70.064-183.584 0-253.616C388.936 52.504 343.048 35 297.144 35c-45.904 0-91.808 17.504-126.848 52.528-61.696 61.696-68.976 157.12-21.968 226.864L35 427.752l48.784 48.72zm213.36-137.952c-33.168 0-64.352-12.896-87.792-36.368-48.416-48.448-48.416-127.2 0-175.616 23.44-23.44 54.64-36.352 87.792-36.352s64.336 12.912 87.776 36.368c23.44 23.456 36.384 54.64 36.384 87.792s-12.928 64.352-36.384 87.792c-23.456 23.472-54.624 36.368-87.776 36.368v.016z",
    fill: props.colour || "currentColor"
  }));
};

var _default = SvgSearch;
exports["default"] = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _react2 = _interopRequireDefault(__webpack_require__(25));

__webpack_require__(27);

var _this2 = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function suggest(query, syncResults) {
  var _this = this;

  fetch("https://www.nice.org.uk/autocomplete?q=" + query + "&ajax=ajax").then(function (response) {
    _newArrowCheck(this, _this);

    return response.json();
  }.bind(this)).then(function (data) {
    _newArrowCheck(this, _this);

    syncResults(data);
  }.bind(this));
}

var templates = {
  inputValue: function inputValue(suggestion) {
    _newArrowCheck(this, _this2);

    return suggestion && suggestion.Title;
  }.bind(void 0),
  suggestion: function suggestion(_suggestion) {
    _newArrowCheck(this, _this2);

    return _suggestion && "<a href=\"" + _suggestion.Link + "\">" + _suggestion.Title + "</a>";
  }.bind(void 0)
};

var onConfirm = function onConfirm(suggestion) {
  _newArrowCheck(this, _this2);

  if (suggestion) window.location.href = suggestion.Link;
}.bind(void 0);

var Search =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Search, _Component);

  function Search() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.render = function render() {
    return _react["default"].createElement(_react2["default"], {
      id: "autocomplete",
      source: suggest,
      templates: templates,
      onConfirm: onConfirm
    });
  };

  return Search;
}(_react.Component);

exports["default"] = Search;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26)


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(e,t){ true?module.exports=t(__webpack_require__(0)):undefined})(window,function(n){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=31)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var m=n(0),v=n(5),y=n(6),g=n(14),b=n(16),O="prototype",w=function(e,t,n){var r,o,u,i,a=e&w.F,s=e&w.G,l=e&w.S,c=e&w.P,p=e&w.B,f=s?m:l?m[t]||(m[t]={}):(m[t]||{})[O],d=s?v:v[t]||(v[t]={}),h=d[O]||(d[O]={});for(r in s&&(n=t),n)u=((o=!a&&f&&f[r]!==undefined)?f:n)[r],i=p&&o?b(u,m):c&&"function"==typeof u?b(Function.call,u):u,f&&g(f,r,u,e&w.U),d[r]!=u&&y(d,r,i),c&&h[r]!=u&&(h[r]=u)};m.core=v,w.F=1,w.G=2,w.S=4,w.P=8,w.B=16,w.W=32,w.U=64,w.R=128,e.exports=w},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(7),o=n(35);e.exports=n(3)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(8),u=n(33),i=n(34),a=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),u)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(2);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(e===undefined?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(20);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if(e==undefined)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=n},function(e,t,n){var r=n(2),o=n(0).document,u=r(o)&&r(o.createElement);e.exports=function(e){return u?o.createElement(e):{}}},function(e,t,n){var u=n(0),i=n(6),a=n(15),s=n(9)("src"),r="toString",o=Function[r],l=(""+o).split(r);n(5).inspectSource=function(e){return o.call(e)},(e.exports=function(e,t,n,r){var o="function"==typeof n;o&&(a(n,"name")||i(n,"name",t)),e[t]!==n&&(o&&(a(n,s)||i(n,s,e[t]?""+e[t]:l.join(String(t)))),e===u?e[t]=n:r?e[t]?e[t]=n:i(e,t,n):(delete e[t],i(e,t,n)))})(Function.prototype,r,function(){return"function"==typeof this&&this[s]||o.call(this)})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var u=n(17);e.exports=function(r,o,e){if(u(r),o===undefined)return r;switch(e){case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(37),o=n(26);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(10),o=n(11);e.exports=function(e){return r(o(e))}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var s=n(19),l=n(22),c=n(38);e.exports=function(a){return function(e,t,n){var r,o=s(e),u=l(o.length),i=c(n,u);if(a&&t!=t){for(;i<u;)if((r=o[i++])!=r)return!0}else for(;i<u;i++)if((a||i in o)&&o[i]===t)return a||i||0;return!a&&-1}}},function(e,t,n){var r=n(23),o=Math.min;e.exports=function(e){return 0<e?o(r(e),9007199254740991):0}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},function(e,t,n){var r=n(25)("keys"),o=n(9);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t,n){var r=n(5),o=n(0),u="__core-js_shared__",i=o[u]||(o[u]={});(e.exports=function(e,t){return i[e]||(i[e]=t!==undefined?t:{})})("versions",[]).push({version:r.version,mode:n(39)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(11);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(1);r(r.S,"Object",{create:n(42)})},function(e,t,n){var r=n(25)("wks"),o=n(9),u=n(0).Symbol,i="function"==typeof u;(e.exports=function(e){return r[e]||(r[e]=i&&u[e]||(i?u:o)("Symbol."+e))}).store=r},function(e,t,n){"use strict";var r=n(4);e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(32),n(28),n(45),n(50),n(51),n(52),n(55);var $=n(12),W=o(n(57)),r=o(n(58));function o(e){return e&&e.__esModule?e:{"default":e}}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i,a={13:"enter",27:"escape",32:"space",38:"up",40:"down"},G=((i=document.createElement("x")).style.cssText="pointer-events:auto","auto"===i.style.pointerEvents);function f(){return!(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g)||!navigator.userAgent.match(/AppleWebKit/g))}var s=function(n){function e(e){var t;return(t=n.call(this,e)||this).elementReferences={},t.state={focused:null,hovered:null,clicked:null,menuOpen:!1,options:e.defaultValue?[e.defaultValue]:[],query:e.defaultValue,selected:null},t.handleComponentBlur=t.handleComponentBlur.bind(u(u(t))),t.handleKeyDown=t.handleKeyDown.bind(u(u(t))),t.handleUpArrow=t.handleUpArrow.bind(u(u(t))),t.handleDownArrow=t.handleDownArrow.bind(u(u(t))),t.handleEnter=t.handleEnter.bind(u(u(t))),t.handlePrintableKey=t.handlePrintableKey.bind(u(u(t))),t.handleListMouseLeave=t.handleListMouseLeave.bind(u(u(t))),t.handleOptionBlur=t.handleOptionBlur.bind(u(u(t))),t.handleOptionClick=t.handleOptionClick.bind(u(u(t))),t.handleOptionFocus=t.handleOptionFocus.bind(u(u(t))),t.handleOptionMouseEnter=t.handleOptionMouseEnter.bind(u(u(t))),t.handleInputBlur=t.handleInputBlur.bind(u(u(t))),t.handleInputChange=t.handleInputChange.bind(u(u(t))),t.handleInputFocus=t.handleInputFocus.bind(u(u(t))),t.pollInputElement=t.pollInputElement.bind(u(u(t))),t.getDirectInputChanges=t.getDirectInputChanges.bind(u(u(t))),t}(function r(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t})(e,n);var t=e.prototype;return t.componentDidMount=function(){this.pollInputElement()},t.componentWillUnmount=function(){clearTimeout(this.$pollInput),clearTimeout(this.$blurInput)},t.pollInputElement=function(){var e=this;this.getDirectInputChanges(),this.$pollInput=setTimeout(function(){e.pollInputElement()},100)},t.getDirectInputChanges=function(){var e=this.elementReferences[-1];e&&e.value!==this.state.query&&this.handleInputChange({target:{value:e.value}})},t.componentDidUpdate=function(e,t){var n=this.state,r=n.focused,o=n.clicked,u=null===r,i=t.focused!==r;(i&&!u||null!==o)&&this.elementReferences[r].focus();var a=-1===r,s=i&&null===t.focused;if(a&&s){var l=this.elementReferences[r];l.setSelectionRange(0,l.value.length)}},t.hasAutoselect=function(){return!f()&&this.props.autoselect},t.templateInputValue=function(e){var t=this.props.templates&&this.props.templates.inputValue;return t?t(e):e},t.templateSuggestion=function(e){var t=this.props.templates&&this.props.templates.suggestion;return t?t(e):e},t.handleComponentBlur=function(e){var t,n=this.state,r=n.options,o=n.query,u=n.selected;this.props.confirmOnBlur?(t=e.query||o,this.props.onConfirm(r[u])):t=o,this.setState({focused:null,clicked:null,menuOpen:e.menuOpen||!1,query:t,selected:null})},t.handleListMouseLeave=function(e){this.setState({hovered:null})},t.handleOptionBlur=function(e,t){var n=this.state,r=n.focused,o=n.clicked,u=n.menuOpen,i=n.options,a=n.selected,s=null===e.relatedTarget&&null===o,l=e.relatedTarget===this.elementReferences[-1],c=r!==t&&-1!==r;if(!c&&s||!(c||l)){var p=u&&f();this.handleComponentBlur({menuOpen:p,query:this.templateInputValue(i[a])})}},t.handleInputBlur=function(e){var t=this,n=this.state,r=n.focused,o=n.menuOpen,u=n.options,i=n.query,a=n.selected,s=-1!==r;if(clearTimeout(this.$blurInput),!s){var l=o&&f(),c=f()?i:this.templateInputValue(u[a]);this.$blurInput=setTimeout(function(){return t.handleComponentBlur({menuOpen:l,query:c})},200)}},t.handleInputChange=function(e){var n=this,t=this.props,r=t.minLength,o=t.source,u=t.showAllValues,i=this.hasAutoselect(),a=e.target.value,s=0===a.length,l=this.state.query.length!==a.length,c=a.length>=r;this.setState({query:a}),u||!s&&l&&c?o(a,function(e){var t=0<e.length;n.setState({menuOpen:t,options:e,selected:i&&t?0:-1})}):!s&&c||this.setState({menuOpen:!1,options:[]})},t.handleInputClick=function(e){this.handleInputChange(e)},t.handleInputFocus=function(e){this.setState({focused:-1})},t.handleOptionFocus=function(e){this.setState({focused:e,hovered:null,selected:e})},t.handleOptionMouseEnter=function(e,t){f()||this.setState({hovered:t})},t.handleOptionClick=function(e,t){var n=this.state.options[t],r=this.templateInputValue(n);clearTimeout(this.$blurInput),this.props.onConfirm(n),this.setState({focused:-1,clicked:t,hovered:null,menuOpen:!1,query:r,selected:-1}),this.forceUpdate()},t.handleUpArrow=function(e){e.preventDefault();var t=this.state,n=t.menuOpen,r=t.selected;-1!==r&&n&&this.handleOptionFocus(r-1)},t.handleDownArrow=function(e){var t=this;if(e.preventDefault(),this.props.showAllValues&&!1===this.state.menuOpen)e.preventDefault(),this.props.source("",function(e){t.setState({menuOpen:!0,options:e,selected:0,focused:0,hovered:null})});else if(!0===this.state.menuOpen){var n=this.state,r=n.menuOpen,o=n.options,u=n.selected;u!==o.length-1&&r&&this.handleOptionFocus(u+1)}},t.handleSpace=function(e){var t=this;this.props.showAllValues&&!1===this.state.menuOpen&&""===this.state.query&&(e.preventDefault(),this.props.source("",function(e){t.setState({menuOpen:!0,options:e})})),-1!==this.state.focused&&(e.preventDefault(),this.handleOptionClick(e,this.state.focused))},t.handleEnter=function(e){this.state.menuOpen&&(e.preventDefault(),0<=this.state.selected&&this.handleOptionClick(e,this.state.selected))},t.handlePrintableKey=function(e){var t=this.elementReferences[-1];e.target===t||t.focus()},t.handleKeyDown=function(e){switch(a[e.keyCode]){case"up":this.handleUpArrow(e);break;case"down":this.handleDownArrow(e);break;case"space":this.handleSpace(e);break;case"enter":this.handleEnter(e);break;case"escape":this.handleComponentBlur({query:this.state.query});break;default:(function t(e){return 47<e&&e<58||32===e||8===e||64<e&&e<91||95<e&&e<112||185<e&&e<193||218<e&&e<223})(e.keyCode)&&this.handlePrintableKey(e)}},t.render=function(){var e,o=this,t=this.props,n=t.cssNamespace,r=t.displayMenu,u=t.id,i=t.minLength,a=t.name,s=t.placeholder,l=t.required,c=t.showAllValues,p=t.tNoResults,f=t.tStatusQueryTooShort,d=t.tStatusNoResults,h=t.tStatusSelectedOption,m=t.tStatusResults,v=t.dropdownArrow,y=this.state,g=y.focused,b=y.hovered,O=y.menuOpen,w=y.options,x=y.query,_=y.selected,S=this.hasAutoselect(),I=-1===g,E=0===w.length,j=0!==x.length,C=x.length>=i,M=this.props.showNoOptionsFound&&I&&E&&j&&C,A=n+"__wrapper",P=n+"__input",k=null!==g?" "+P+"--focused":"",F=this.props.showAllValues?" "+P+"--show-all-values":" "+P+"--default",R=n+"__dropdown-arrow-down",q=-1!==g&&null!==g,T=n+"__menu",N=T+"--"+r,D=T+"--"+(O||M?"visible":"hidden"),L=n+"__option",B=n+"__hint",V=this.templateInputValue(w[_]),K=V&&0===V.toLowerCase().indexOf(x.toLowerCase())&&S?x+V.substr(x.length):"",U=G&&K;return c&&"string"==typeof(e=v({className:R}))&&(e=(0,$.createElement)("div",{className:n+"__dropdown-arrow-down-wrapper",dangerouslySetInnerHTML:{__html:e}})),(0,$.createElement)("div",{className:A,onKeyDown:this.handleKeyDown,role:"combobox","aria-expanded":O?"true":"false"},(0,$.createElement)(W["default"],{length:w.length,queryLength:x.length,minQueryLength:i,selectedOption:this.templateInputValue(w[_]),selectedOptionIndex:_,tQueryTooShort:f,tNoResults:d,tSelectedOption:h,tResults:m}),U&&(0,$.createElement)("span",null,(0,$.createElement)("input",{className:B,readonly:!0,tabIndex:"-1",value:K})),(0,$.createElement)("input",z({"aria-activedescendant":!!q&&u+"__option--"+g,"aria-owns":u+"__listbox",autoComplete:"off",className:""+P+k+F,id:u,onClick:function(e){return o.handleInputClick(e)},onBlur:this.handleInputBlur},function Q(e){return{onChange:e}}(this.handleInputChange),{onFocus:this.handleInputFocus,name:a,placeholder:s,ref:function(e){o.elementReferences[-1]=e},type:"text",role:"textbox",required:l,value:x})),e,(0,$.createElement)("ul",{className:T+" "+N+" "+D,onMouseLeave:function(e){return o.handleListMouseLeave(e)},id:u+"__listbox",role:"listbox"},w.map(function(e,t){var n=(-1===g?_===t:g===t)&&null===b?" "+L+"--focused":"",r=t%2?" "+L+"--odd":"";return(0,$.createElement)("li",{"aria-selected":g===t,className:""+L+n+r,dangerouslySetInnerHTML:{__html:o.templateSuggestion(e)},id:u+"__option--"+t,key:t,onBlur:function(e){return o.handleOptionBlur(e,t)},onClick:function(e){return o.handleOptionClick(e,t)},onMouseEnter:function(e){return o.handleOptionMouseEnter(e,t)},ref:function(e){o.elementReferences[t]=e},role:"option",tabIndex:"-1"})}),M&&(0,$.createElement)("li",{className:L+" "+L+"--no-results"},p())))},e}($.Component);(t["default"]=s).defaultProps={autoselect:!1,cssNamespace:"autocomplete",defaultValue:"",displayMenu:"inline",minLength:0,name:"input-autocomplete",placeholder:"",onConfirm:function(){},confirmOnBlur:!0,showNoOptionsFound:!0,showAllValues:!1,required:!1,tNoResults:function(){return"No results found"},dropdownArrow:r["default"]}},function(e,t,n){var r=n(1);r(r.S+r.F,"Object",{assign:n(36)})},function(e,t,n){e.exports=!n(3)&&!n(4)(function(){return 7!=Object.defineProperty(n(13)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(2);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){"use strict";var f=n(18),d=n(40),h=n(41),m=n(27),v=n(10),o=Object.assign;e.exports=!o||n(4)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=o({},e)[n]||Object.keys(o({},t)).join("")!=r})?function(e,t){for(var n=m(e),r=arguments.length,o=1,u=d.f,i=h.f;o<r;)for(var a,s=v(arguments[o++]),l=u?f(s).concat(u(s)):f(s),c=l.length,p=0;p<c;)i.call(s,a=l[p++])&&(n[a]=s[a]);return n}:o},function(e,t,n){var i=n(15),a=n(19),s=n(21)(!1),l=n(24)("IE_PROTO");e.exports=function(e,t){var n,r=a(e),o=0,u=[];for(n in r)n!=l&&i(r,n)&&u.push(n);for(;t.length>o;)i(r,n=t[o++])&&(~s(u,n)||u.push(n));return u}},function(e,t,n){var r=n(23),o=Math.max,u=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):u(e,t)}},function(e,t){e.exports=!1},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,r){var o=r(8),u=r(43),i=r(26),a=r(24)("IE_PROTO"),s=function(){},l="prototype",c=function(){var e,t=r(13)("iframe"),n=i.length;for(t.style.display="none",r(44).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;n--;)delete c[l][i[n]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s[l]=o(e),n=new s,s[l]=null,n[a]=e):n=c(),t===undefined?n:u(n,t)}},function(e,t,n){var i=n(7),a=n(8),s=n(18);e.exports=n(3)?Object.defineProperties:function(e,t){a(e);for(var n,r=s(t),o=r.length,u=0;u<o;)i.f(e,n=r[u++],t[n]);return e}},function(e,t,n){var r=n(0).document;e.exports=r&&r.documentElement},function(e,t,n){"use strict";var r=n(1),o=n(46)(1);r(r.P+r.F*!n(30)([].map,!0),"Array",{map:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var b=n(16),O=n(10),w=n(27),x=n(22),r=n(47);e.exports=function(p,e){var f=1==p,d=2==p,h=3==p,m=4==p,v=6==p,y=5==p||v,g=e||r;return function(e,t,n){for(var r,o,u=w(e),i=O(u),a=b(t,n,3),s=x(i.length),l=0,c=f?g(e,s):d?g(e,0):undefined;l<s;l++)if((y||l in i)&&(o=a(r=i[l],l,u),p))if(f)c[l]=o;else if(o)switch(p){case 3:return!0;case 5:return r;case 6:return l;case 2:c.push(r)}else if(m)return!1;return v?-1:h||m?m:c}}},function(e,t,n){var r=n(48);e.exports=function(e,t){return new(r(e))(t)}},function(e,t,n){var r=n(2),o=n(49),u=n(29)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=undefined),r(t)&&null===(t=t[u])&&(t=undefined)),t===undefined?Array:t}},function(e,t,n){var r=n(20);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){"use strict";var r=n(1),o=n(21)(!1),u=[].indexOf,i=!!u&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(i||!n(30)(u)),"Array",{indexOf:function(e){return i?u.apply(this,arguments)||0:o(this,e,arguments[1])}})},function(e,t,n){var r=n(7).f,o=Function.prototype,u=/^\s*function ([^ (]*)/;"name"in o||n(3)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(e){return""}}})},function(e,t,n){var r=n(1);r(r.P,"Function",{bind:n(53)})},function(e,t,n){"use strict";var u=n(17),i=n(2),a=n(54),s=[].slice,l={};e.exports=Function.bind||function(t){var n=u(this),r=s.call(arguments,1),o=function(){var e=r.concat(s.call(arguments));return this instanceof o?function(e,t,n){if(!(t in l)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";l[t]=Function("F,a","return new F("+r.join(",")+")")}return l[t](e,n)}(n,e.length,e):a(n,e,t)};return i(n.prototype)&&(o.prototype=n.prototype),o}},function(e,t){e.exports=function(e,t,n){var r=n===undefined;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},function(e,t,n){n(56)("match",1,function(r,o,e){return[function(e){"use strict";var t=r(this),n=e==undefined?undefined:e[o];return n!==undefined?n.call(e,t):new RegExp(e)[o](String(t))},e]})},function(e,t,n){"use strict";var a=n(6),s=n(14),l=n(4),c=n(11),p=n(29);e.exports=function(t,e,n){var r=p(t),o=n(c,r,""[t]),u=o[0],i=o[1];l(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)})&&(s(String.prototype,t,u),a(RegExp.prototype,r,2==e?function(e,t){return i.call(e,this,t)}:function(e){return i.call(e,this)}))}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(28);var m=n(12);var r=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).state={bump:!1},e}(function n(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t})(e,o);var t=e.prototype;return t.componentWillReceiveProps=function(e){e.queryLength!==this.props.queryLength&&this.setState(function(e){return{bump:!e.bump}})},t.render=function(){var e=this.props,t=e.length,n=e.queryLength,r=e.minQueryLength,o=e.selectedOption,u=e.selectedOptionIndex,i=e.tQueryTooShort,a=e.tNoResults,s=e.tSelectedOption,l=e.tResults,c=this.state.bump,p=n<r,f=0===t,d=o?s(o,t,u):"",h=null;return h=p?i(r):f?a():l(t,d),(0,m.createElement)("div",{"aria-atomic":"true","aria-live":"polite",role:"status",style:{border:"0",clip:"rect(0 0 0 0)",height:"1px",marginBottom:"-1px",marginRight:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}},h,(0,m.createElement)("span",null,c?",":",,"))},e}(m.Component);(t["default"]=r).defaultProps={tQueryTooShort:function(e){return"Type in "+e+" or more characters for results."},tNoResults:function(){return"No search results."},tSelectedOption:function(e,t,n){return e+" ("+(n+1)+" of "+t+") is selected."},tResults:function(e,t){return e+" "+(1===e?"result":"results")+" "+(1===e?"is":"are")+" available. "+t}}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var r=n(12),o=function u(e){var t=e.className;return(0,r.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:t,focusable:"false"},(0,r.createElement)("g",{stroke:"none",fill:"none","fill-rule":"evenodd"},(0,r.createElement)("polygon",{fill:"#000000",points:"0 0 22 0 11 17"})))};t["default"]=o}])});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(28);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".autocomplete__wrapper{position:relative}.autocomplete__hint,.autocomplete__input{-webkit-appearance:none;border:2px solid;border-radius:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;margin-bottom:0;width:100%}.autocomplete__input{background-color:transparent;position:relative}.autocomplete__hint{color:#bfc1c3;position:absolute}.autocomplete__input--default{padding:4px}.autocomplete__input--focused{outline-offset:0;outline:3px solid #ffbf47}.autocomplete__input--show-all-values{padding:4px 34px 4px 4px;cursor:pointer}.autocomplete__dropdown-arrow-down{z-index:-1;display:inline-block;position:absolute;right:8px;width:24px;height:24px;top:10px}.autocomplete__menu{background-color:#fff;border:2px solid #0b0c0c;border-top:0;color:#34384b;margin:0;max-height:342px;overflow-x:hidden;padding:0;width:100%;width:calc(100% - 4px)}.autocomplete__menu--visible{display:block}.autocomplete__menu--hidden{display:none}.autocomplete__menu--overlay{box-shadow:rgba(0,0,0,.256863) 0 2px 6px;left:0;position:absolute;top:100%;z-index:100}.autocomplete__menu--inline{position:relative}.autocomplete__option{border-bottom:solid #bfc1c3;border-width:1px 0;cursor:pointer;display:block;position:relative}.autocomplete__option>*{pointer-events:none}.autocomplete__option:first-of-type{border-top-width:0}.autocomplete__option:last-of-type{border-bottom-width:0}.autocomplete__option--odd{background-color:#fafafa}.autocomplete__option--focused,.autocomplete__option:hover{background-color:#005ea5;border-color:#005ea5;color:#fff;outline:0}.autocomplete__option--no-results{background-color:#fafafa;color:#646b6f;cursor:not-allowed}.autocomplete__hint,.autocomplete__input,.autocomplete__option{font-size:16px;line-height:1.25}.autocomplete__hint,.autocomplete__option{padding:4px}@media (min-width:641px){.autocomplete__hint,.autocomplete__input,.autocomplete__option{font-size:19px;line-height:1.31579}}", ""]);



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(30);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".gn_2JLQS {\n  color: blue; }\n", ""]);

// Exports
exports.locals = {
	"search": "gn_2JLQS"
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _Account = _interopRequireDefault(__webpack_require__(32));

exports["default"] = _Account["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Account =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Account, _Component);

  function Account(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isLoggedIn: false
    };
    return _this;
  }

  var _proto = Account.prototype;

  _proto.componentDidMount = function componentDidMount() {
    console.warn("TODO: Check if we're logged in");
  };

  _proto.render = function render() {
    return this.state.isLoggedIn ? _react["default"].createElement("p", null, "You are logged in") : _react["default"].createElement("a", {
      href: "https://accounts.nice.org.uk/signin"
    }, "Sign in");
  };

  return Account;
}(_react.Component);

exports["default"] = Account;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(34);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".gn_1_xXA {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n  @media print {\n    .gn_1_xXA {\n      display: none; } }\n\n.gn_ZCMhw {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: none;\n  border: 0; }\n  @media (min-width: 56.25em) {\n    .gn_ZCMhw {\n      display: none; } }\n", ""]);

// Exports
exports.locals = {
	"header": "gn_1_xXA",
	"mobileMenuBtn": "gn_ZCMhw"
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _Social = _interopRequireDefault(__webpack_require__(36));

var _Copyright = _interopRequireDefault(__webpack_require__(42));

var _FooterModule = _interopRequireDefault(__webpack_require__(45));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Footer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Footer, _Component);

  function Footer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.render = function render() {
    return this.props.enabled && _react["default"].createElement("footer", {
      className: _FooterModule["default"].footer
    }, _react["default"].createElement(_Social["default"], null), _react["default"].createElement(_Copyright["default"], null));
  };

  return Footer;
}(_react.Component);

exports["default"] = Footer;
Footer.propTypes = {
  enabled: _propTypes["default"].bool
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Facebook = _interopRequireDefault(__webpack_require__(37));

var _Twitter = _interopRequireDefault(__webpack_require__(38));

var _YoutubePlay = _interopRequireDefault(__webpack_require__(39));

var _SocialModule = _interopRequireDefault(__webpack_require__(40));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Social =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Social, _Component);

  function Social() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Social.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: _SocialModule["default"].social
    }, _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "https://en-gb.facebook.com/NationalInstituteforHealthandCareExcellence/"
    }, typeof SVGRect !== "undefined" && _react["default"].createElement(_Facebook["default"], null), "Facebook")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "https://twitter.com/NICEcomms"
    }, typeof SVGRect !== "undefined" && _react["default"].createElement(_Twitter["default"], null), "Twitter")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "https://www.youtube.com/user/NICEmedia"
    }, typeof SVGRect !== "undefined" && _react["default"].createElement(_YoutubePlay["default"], null), "YouTube")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "https://www.instagram.com/nicecomms/"
    }, typeof SVGRect !== "undefined" && _react["default"].createElement(_YoutubePlay["default"], null), "Instagram"))));
  };

  return Social;
}(_react.Component);

exports["default"] = Social;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFacebook = function SvgFacebook(props) {
  return _react["default"].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    fill: "none",
    className: "icon",
    "aria-hidden": true
  }, props), _react["default"].createElement("path", {
    d: "M291.069 178.811H361l-8.168 77.197h-61.778V480h-92.789V256.008H152v-77.197h46.265V132.32c0-32.983 7.802-57.95 23.407-74.897C237.276 40.474 262.949 32 298.689 32h61.778v77.196h-38.646c-7.071 0-12.74.589-17.006 1.766-4.267 1.177-7.351 3.309-9.25 6.394-1.9 3.085-3.124 6.211-3.673 9.377-.549 3.167-.823 7.652-.823 13.457v38.621z",
    fill: props.colour || "currentColor"
  }));
};

var _default = SvgFacebook;
exports["default"] = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTwitter = function SvgTwitter(props) {
  return _react["default"].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    fill: "none",
    className: "icon",
    "aria-hidden": true
  }, props), _react["default"].createElement("path", {
    d: "M481.304 116.424c-12.757 18.667-28.187 34.571-46.288 47.712.192 2.667.288 6.667.288 12 0 24.757-3.621 49.472-10.864 74.144-7.243 24.672-18.245 48.341-33.008 71.008-14.763 22.667-32.336 42.715-52.72 60.144-20.384 17.429-44.955 31.333-73.712 41.712-28.757 10.379-59.52 15.568-92.288 15.568-51.616 0-98.853-13.808-141.712-41.424 6.667.757 14.096 1.136 22.288 1.136 42.859 0 81.051-13.141 114.576-39.424-20-.384-37.904-6.528-53.712-18.432S87.485 313.475 81.576 295c6.283.949 12.09 1.424 17.424 1.424a95.664 95.664 0 0 0 24.288-3.136c-21.333-4.384-39.003-15.003-53.008-31.856-14.005-16.853-21.008-36.427-21.008-58.72v-1.136c12.95 7.243 26.853 11.147 41.712 11.712-12.576-8.384-22.576-19.339-30-32.864-7.424-13.525-11.136-28.192-11.136-44 0-16.757 4.192-32.283 12.576-46.576 23.05 28.384 51.099 51.099 84.144 68.144 33.045 17.045 68.427 26.523 106.144 28.432-1.525-7.243-2.288-14.288-2.288-21.136 0-25.525 9.003-47.285 27.008-65.28 18.005-17.995 39.765-26.997 65.28-27.008 26.667 0 49.141 9.712 67.424 29.136 20.757-4 40.283-11.43 58.576-22.288-7.051 21.909-20.576 38.864-40.576 50.864 17.717-1.909 35.429-6.672 53.136-14.288h.032z",
    fill: props.colour || "currentColor"
  }));
};

var _default = SvgTwitter;
exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgYoutubePlay = function SvgYoutubePlay(props) {
  return _react["default"].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    fill: "none",
    className: "icon",
    "aria-hidden": true
  }, props), _react["default"].createElement("path", {
    d: "M209.753 314.5L330.746 252l-120.993-63.25V314.5zM256 99c27.998 0 55.039.375 81.12 1.125 26.082.75 45.206 1.542 57.372 2.375l18.249 1c.167 0 1.584.125 4.25.375 2.667.25 4.583.5 5.75.75 1.166.25 3.125.625 5.874 1.125 2.75.5 5.125 1.167 7.125 2s4.333 1.917 7 3.25a48.044 48.044 0 0 1 7.749 4.875c2.5 1.917 4.917 4.125 7.25 6.625 1 1 2.291 2.542 3.875 4.625 1.583 2.083 3.999 6.958 7.249 14.625 3.25 7.667 5.458 16.083 6.625 25.25 1.333 10.667 2.375 22.042 3.125 34.125.75 12.083 1.208 21.542 1.375 28.375v44a529.498 529.498 0 0 1-4.5 72.5c-1.167 9.167-3.25 17.458-6.25 24.875-3 7.417-5.666 12.542-7.999 15.375l-3.5 4.25c-2.333 2.5-4.75 4.708-7.25 6.625-2.5 1.917-5.083 3.5-7.749 4.75-2.667 1.25-5 2.292-7 3.125-2 .833-4.375 1.5-7.125 2-2.749.5-4.749.875-5.999 1.125s-3.167.5-5.75.75-3.958.375-4.125.375C370.91 412.417 318.663 414 256 414c-34.498-.333-64.455-.875-89.87-1.625-25.415-.75-42.123-1.375-50.122-1.875l-12.25-1-8.999-1c-6-.833-10.541-1.667-13.624-2.5s-7.333-2.583-12.75-5.25c-5.416-2.667-10.124-6.083-14.124-10.25-1-1-2.291-2.542-3.875-4.625-1.583-2.083-4-6.958-7.25-14.625-3.249-7.667-5.457-16.083-6.624-25.25-1.333-10.667-2.375-22.042-3.125-34.125-.75-12.083-1.208-21.542-1.374-28.375v-44a529.323 529.323 0 0 1 4.5-72.5c1.166-9.167 3.25-17.458 6.249-24.875 3-7.417 5.666-12.542 8-15.375l3.5-4.25c2.332-2.5 4.749-4.708 7.249-6.625A48.018 48.018 0 0 1 69.26 111c2.666-1.333 5-2.417 6.999-3.25 2-.833 4.375-1.5 7.125-2s4.708-.875 5.874-1.125c1.167-.25 3.084-.5 5.75-.75s4.083-.375 4.25-.375C141.09 100.5 193.337 99 256 99z",
    fill: props.colour || "currentColor"
  }));
};

var _default = SvgYoutubePlay;
exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(41);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".gn_SP_iV {\n  color: turquoise; }\n  .gn_SP_iV ul {\n    margin: auto;\n    max-width: 73.125rem;\n    max-width: 73.125rem; }\n", ""]);

// Exports
exports.locals = {
	"social": "gn_SP_iV"
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _CopyrightModule = _interopRequireDefault(__webpack_require__(43));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Copyright =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Copyright, _Component);

  function Copyright() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Copyright.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: _CopyrightModule["default"].copyright
    }, _react["default"].createElement("nav", null, _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "https://www.nice.org.uk/accessibility"
    }, "Accessibility")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "https://www.nice.org.uk/freedom-of-information"
    }, "Freedom of information")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "https://www.nice.org.uk/glossary"
    }, "Glossary")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "https://www.nice.org.uk/freedom-of-information"
    }, "Terms and conditions")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "https://www.nice.org.uk/privacy-notice"
    }, "Privacy notice")))), _react["default"].createElement("p", null, "\xA9 NICE ", new Date().getFullYear(), ". All rights reserved. Subject to", " ", _react["default"].createElement("a", {
      href: "https://www.nice.org.uk/terms-and-conditions#notice-of-rights"
    }, "Notice of rights"), "."));
  };

  return Copyright;
}(_react.Component);

exports["default"] = Copyright;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(44);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".gn_1Fxbb {\n  background: #393939; }\n", ""]);

// Exports
exports.locals = {
	"copyright": "gn_1Fxbb"
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(46);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".gn_3uAiL {\n  background: #222;\n  color: #fff;\n  font-family: Lato, Arial, Helvetica, sans-serif; }\n  .gn_3uAiL a {\n    color: #fff; }\n", ""]);

// Exports
exports.locals = {
	"footer": "gn_3uAiL"
};

/***/ })
/******/ ]);
//# sourceMappingURL=global-nav.js.map