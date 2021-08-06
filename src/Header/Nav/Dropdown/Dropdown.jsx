import React from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";

export function Dropdown({ text, className, nextNavSlug, toggleDropdown }) {
	return (
		<div className={className}>
			<div className={styles.dropdownRight}>
				{nextNavSlug && (
					<a
						href={`#${nextNavSlug}`}
						className={styles.skiplink}
						onClick={toggleDropdown}
					>
						Skip {text} submenu
					</a>
				)}
				<p>{text}</p>
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
