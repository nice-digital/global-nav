import { renderHeader, renderFooter } from "./renderer";
console.log(`server in ${import.meta.env.MODE.toUpperCase()} mode`);

renderHeader();

renderFooter();

// Check if the redirection flag is not set and the environment is development to show html examples
if (import.meta.env.MODE === "development") {
	if (
		["http://localhost:3000", "http://localhost:3000/"].includes(
			window.location.href
		) &&
		import.meta.env.MODE === "development"
	) {
		window.location.href = "/examples/";
	}
}
