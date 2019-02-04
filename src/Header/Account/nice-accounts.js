// Checks if you are logged in via NICE Accounts
// Returns a promise that resolves with the data from NICE Accounts.
// Returns a promise that rejects if the data could not be loaded.
const checkIsLoggedIn = () => {
	return new Promise((resolve, reject) => {
		const url = "https://accounts.nice.org.uk/tophat";

		var body = document.body;
		var script = document.createElement("script");
		script.src =
			url +
			(~url.indexOf("?") ? "&" : "?") +
			Math.floor(Math.random() * 10000000000);

		let done = false;

		script.onload = script.onreadystatechange = () => {
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
		script.onerror = () => {
			reject();
		};

		body.insertBefore(script, body.firstChild);
	});
};

export { checkIsLoggedIn };
