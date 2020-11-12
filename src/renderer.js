import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

export const headerId = "global-nav-header";
export const footerId = "global-nav-footer";

const createAndAttachDiv = function (id, attachAtStart) {
	const divElement = document.createElement("div");
	divElement.setAttribute("id", id);
	if (attachAtStart)
		document.body.insertBefore(divElement, document.body.firstChild);
	else document.body.appendChild(divElement);
	return divElement;
};

// Callback can either be a reference to a function or a string name of a global function
const ensureCallback = function (callback) {
	if (callback) {
		callback = typeof callback === "function" ? callback : window[callback];
		if (typeof callback === "function") {
			return callback;
		}
	}
	return null;
};

export const renderHeader = function () {
	const config = window.global_nav_config || {};

	if (config.header !== false) {
		config.header = config.header || {};

		const headerElement =
			document.getElementById(headerId) || createAndAttachDiv(headerId, true);

		let onRendering = ensureCallback(config.header.onRendering);
		if (onRendering) {
			onRendering.call(window, headerElement);
		}

		render(
			<Header service={config.service} {...config.header} />,
			headerElement,
			function () {
				const onRendered = ensureCallback(config.header.onRendered);
				onRendered && onRendered.call(window, headerElement);
			}
		);
	}
};

export const renderFooter = function () {
	const config = window.global_nav_config || {};

	if (config.footer !== false) {
		config.footer = config.footer || {};

		const footerElement =
			document.getElementById(footerId) || createAndAttachDiv(footerId, false);

		render(
			<Footer service={config.service} {...config.footer} />,
			footerElement
		);
	}
};
