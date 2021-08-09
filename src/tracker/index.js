export const eventTimeout = 2000;

export const eventName = "GlobalNav";
export const defaultEventCategory = "TopHat and footer";
export const headerClickEventAction = "Tophat click";
export const footerClickEventAction = "Footer click";

export const ensureDataLayer = function () {
	window.dataLayer = window.dataLayer || [];
};

/**
 * Pushes an event object to the GTM dataLayer
 *
 * @param {string} category The event category
 * @param {string} action The event action
 * @param {string} label The event label
 * @param {Number} value The optional event value
 * @param {string} destinationUrl The optional link destination
 * @param {Function} callback The callback function to be called when the GTM event has fired
 */
export const trackEvent = function (
	category,
	action,
	label,
	value = null,
	destinationUrl = null,
	callback = null
) {
	ensureDataLayer();

	const dataLayerEvent = {
		event: eventName,
		eventCategory: category,
		eventAction: action,
		eventLabel: label,
	};

	if (value) {
		dataLayerEvent.eventValue = value;
	}

	if (destinationUrl) {
		dataLayerEvent.destinationUrl = destinationUrl;
	}

	if (callback) {
		let callbackTimeout;
		const wrappedCallback = function () {
			clearTimeout(callbackTimeout);
			callback();
		};
		callbackTimeout = setTimeout(wrappedCallback, eventTimeout);
		dataLayerEvent.eventCallback = wrappedCallback;
		dataLayerEvent.eventTimeout = eventTimeout;
	}

	window.dataLayer.push(dataLayerEvent);
};
