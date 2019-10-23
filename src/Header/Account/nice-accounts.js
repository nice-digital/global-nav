// Checks if you are logged in via NICE Accounts
// Returns a promise that resolves with the data from NICE Accounts.
// Returns a promise that rejects if the data could not be loaded.

export const niceAccountsLoggedIn = environment => {
	return new Promise(function(resolve, reject) {
		const url = getDomainBaseUrl(environment) + "tophat";

		var body = document.body;
		var script = document.createElement("script");
		script.src =
			url +
			(~url.indexOf("?") ? "&" : "?") +
			Math.floor(Math.random() * 10000000000);

		let done = false;

		script.onload = script.onreadystatechange = function() {
			if (
				!done &&
				(!script.readyState ||
					script.readyState === "loaded" ||
					script.readyState === "complete")
			) {
				done = true;
				// Handle memory leak in IE
				script.onload = script.onreadystatechange = null;
				if (body && script.parentNode) {
					body.removeChild(script);
				}

				resolve(window._na);
			}
		};
		script.onerror = reject;

		body.insertBefore(script, body.firstChild);
	});
};

export const getDomainBaseUrl = function(environment) {
	return `https://${
		environment !== "live" ? environment + "-" : ""
	}accounts.nice.org.uk/`;
};
