import React from "react";
import PropTypes from "prop-types";
// import { Link } from "@reach/router";
import styles from "./Dropdown.module.scss";

export function Dropdown({ text, className, nextNavSlug, toggleDropdown }) {
	if (!text) return <p>Loading...</p>;
	return (
		<div className={className}>
			<div className={styles.dropdownRight}>
				{nextNavSlug ? (
					<a
						href={`#${nextNavSlug}`}
						className={styles.skiplink}
						onClick={toggleDropdown}
					>
						Skip to next nav
					</a>
				) : (
					<a
						href="#content-start"
						className={styles.skiplink}
						onClick={toggleDropdown}
					>
						Skip to content
					</a>
				)}
				<h1>{text}</h1>
			</div>
			<div>
				<button onClick={toggleDropdown} className={styles.exit}>
					&#10006;
				</button>
			</div>
		</div>
	);
}

Dropdown.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	nextNavSlug: PropTypes.string,
	toggleDropdown: PropTypes.func,
};

export default Dropdown;
