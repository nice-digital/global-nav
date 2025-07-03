// Checks if you are logged in via NICE Accounts
// Returns a promise that resolves with the data from NICE Accounts.
// Returns a promise that rejects if the data could not be loaded.

export const checkIsLoggedIn = function (environment) {
	return new Promise(function (resolve, reject) {
		const url = getDomainBaseUrl(environment) + "tophat";

		var body = document.body;
		var script = document.createElement("script");
		script.src =
			url +
			(~url.indexOf("?") ? "&" : "?") +
			Math.floor(Math.random() * 10000000000);

		let done = false;

		const timeout = setTimeout(() => {
			if (!done) {
				done = true;
				if (body && script.parentNode) {
					script.onload = script.onreadystatechange = null;
					body.removeChild(script);
				}
				reject(new Error("Timeout loading NICE Accounts tophat script"));
			}
		}, 5000); // 5 seconds

		script.onload = script.onreadystatechange = function () {
			if (
				!done &&
				(!script.readyState ||
					script.readyState === "loaded" ||
					script.readyState === "complete")
			) {
				done = true;
				clearTimeout(timeout);
				// Handle memory leak in IE
				script.onload = script.onreadystatechange = null;
				if (body && script.parentNode) {
					body.removeChild(script);
				}

				resolve(window._na);
			}
		};
		script.onerror = function () {
			if (!done) {
				done = true;
				clearTimeout(timeout);
				if (body && script.parentNode) {
					body.removeChild(script);
				}
				reject(new Error("Failed to load NICE Accounts tophat script"));
			}
		};

		body.insertBefore(script, body.firstChild);
	});
};

export const getDomainBaseUrl = function (environment) {
	return `https://${
		environment !== "live" ? environment + "-" : ""
	}accounts.nice.org.uk/`;
};
