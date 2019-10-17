// Checks if you are logged in via NICE Accounts
// Returns a promise that resolves with the data from NICE Accounts.
// Returns a promise that rejects if the data could not be loaded.
export const checkIsLoggedIn = function(environment, provider) {
	return new Promise(function(resolve, reject) {
		let url = getDomainBaseUrl(environment) + "tophat";

		if (provider == "idam") {
			url = "http://test-identityapi.nice.org.uk/api/status";
		}

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

				if (!window._na) {
					window._na = script.innerHTML;
				}

				if (body && script.parentNode) {
					body.removeChild(script);
				}

				console.log(window._na);

				resolve(window._na);
			}
		};
		script.onerror = reject;

		body.insertBefore(script, body.firstChild);
	});
};

export const getDomainBaseUrl = function(environment) {
	return (
		"https://" +
		(environment !== "live" ? environment + "-" : "") +
		"accounts.nice.org.uk/"
	);
};
