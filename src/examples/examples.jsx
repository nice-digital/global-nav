import React from "react";
import ReactDOM from "react-dom/client";

const Examples = () => {
	return (
		<main className="container">
			<div className="page-header mt--e">
				<h1 className="page-header__heading">Global navigation test</h1>
				<p className="page-header__lead">
					Test site for the NICE global navigation (header and footer).
				</p>
			</div>

			<h2>Example pages</h2>
			<p>The following example pages are available for testing:</p>

			<ul>
				<li>
					<a href="blank.html">Blank</a>
				</li>
				<li>
					<a href="guidance.html">Guidance</a>
				</li>
				<li>
					<a href="standards.html">Standards and indicators</a>
				</li>
				<li>
					<a href="bnf.html">BNF</a>
				</li>
				<li>
					<a href="bnfc.html">BNFC</a>
				</li>
				<li>
					<a href="cks.html">CKS</a>
				</li>
				<li>
					<a href="journals-and-databases.html">Journals and databases</a>
				</li>
				<li>
					<a href="identityadmin-loggedout.html">Identity Admin Logged out</a>
				</li>
				<li>
					<a href="identityadmin-loggedin.html">Identity Admin Logged in</a>
				</li>
				<li>
					<a href="noauth-nosearch.html">No auth and No search</a>
				</li>
				<li>
					<a href="indev.html">NICE Indevelopment</a>
				</li>
			</ul>

			<h2>Cookies</h2>
			<p>
				Use the following button to clear the <em>CookieControl</em> message:
			</p>
			<button
				type="button"
				className="btn"
				// onClick={() => {
				// 	document.cookie =
				// 		"CookieControl=; expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=" +
				// 		(window.location.hostname.indexOf("nice.org.uk") > 0
				// 			? "nice.org.uk"
				// 			: window.location.hostname);
				// }}
				onClick={() => {
					const domain =
						window.location.hostname.indexOf("nice.org.uk") > 0
							? "nice.org.uk"
							: window.location.hostname;
					const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
					const cookie = `CookieControl=; ${expires}; path=/;`;
					if (window.location.hostname === "localhost") {
						document.cookie = `${cookie}`;
					} else {
						document.cookie = `${cookie} domain=${domain};`;
					}
				}}
			>
				Delete CookieControl cookie
			</button>
		</main>
	);
};

ReactDOM.createRoot(document.getElementById("examples")).render(<Examples />);
