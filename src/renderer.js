import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";

export const headerId = "global-nav-header";
export const footerId = "global-nav-footer";

const createAndAttachDiv = id => {
	const divElement = document.createElement("div");
	divElement.setAttribute("id", id);
	document.body.insertBefore(divElement, document.body.firstChild);
	return divElement;
};

// Callback can either be a reference to a function or a string name of a global function
const ensureCallback = callback => {
	if (callback) {
		callback = typeof callback === "function" ? callback : window[callback];
		if (typeof callback === "function") {
			return callback;
		}
	}
	return null;
};

export const renderHeader = () => {
	const config = window.global_nav_config || {};

	if (config.header !== false) {
		config.header = config.header || {};

		const headerElement =
			document.getElementById(headerId) || createAndAttachDiv(headerId);

		let onRendering = ensureCallback(config.header.onRendering);
		if (onRendering) {
			onRendering.call(window, headerElement);
		}

		render(
			<Header service={config.service} {...config.header} />,
			headerElement,
			() => {
				const onRendered = ensureCallback(config.header.onRendered);
				onRendered && onRendered.call(window, headerElement);
			}
		);
	}
};

export const renderFooter = () => {
	const config = window.global_nav_config || {};
	config.footer = config.footer || {};

	const footerElement =
		document.getElementById(footerId) || createAndAttachDiv(footerId);

	render(<Footer {...config.footer} />, footerElement);
};
