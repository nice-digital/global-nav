import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";

// Callback can either be a reference to a function
const ensureCallback = callback => {
	if (callback) {
		callback = typeof callback === "function" ? callback : window[callback];
		if (typeof callback === "function") {
			return callback;
		}
	}
	return null;
};

const config = window.global_nav_config || {};
config.header = config.header || {};
config.footer = config.footer || {};

if (config.header.enabled !== false) {
	var headerElement = document.getElementById("header");
	if (!headerElement) {
		headerElement = document.createElement("div");
		document.body.insertBefore(headerElement, document.body.firstChild);
	}

	let onRendering = ensureCallback(config.header.onRendering);
	if (onRendering) {
		onRendering.call(window, headerElement);
	}

	render(
		<Header service={config.service} {...config.header} />,
		headerElement,
		() => {
			let onRendered = ensureCallback(config.header.onRendered);
			if (onRendered) {
				onRendered.call(window, headerElement);
			}
		}
	);
}

// Render footer
var footerElement = document.getElementById("footer");
if (!footerElement) {
	footerElement = document.createElement("div");
	document.body.appendChild(footerElement);
}
render(<Footer {...config.footer} />, footerElement);
