import { renderHeader, renderFooter } from "./renderer";
console.log(`server in ${import.meta.env.MODE.toUpperCase()} mode`);

renderHeader();

renderFooter();

// Check if the redirection flag is not set and the environment is development to show html examples
if (
	!localStorage.getItem("redirected") &&
	import.meta.env.MODE === "development"
) {
	// Set the redirection flag
	localStorage.setItem("redirected", "true");

	// Redirect to /examples/ in development mode
	window.location.href = "/examples/";
} else {
	// Clear the redirection flag from localStorage
	localStorage.removeItem("redirected");
}
