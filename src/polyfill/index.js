// The following imports are polyfills needed for IE8 because it's and ES3 browser
// and can be removed (alongwith the extra entry point in webpack.config.js) when
// we drop support for IE8.

// They are the specific polyfills needed to get IE8 to work, rather than loading in
// a awhole shim/sham library.

// They're taken from a mixture of MDN docs, es5shim/sham and FT's polyfill service.
// Modify with care!

import "./function.bind";

import "./object.keys";
import "./object.create";
import "./object.getOwnPropertyDescriptor";
import "./object.defineproperty";

import "./array.foreach";
import "./array.filter";
import "./array.isarray";

import "./event";
