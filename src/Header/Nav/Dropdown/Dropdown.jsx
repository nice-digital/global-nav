import React from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";
import { Guidance } from "./Guidance/Guidance";
export function Dropdown({ text, className, nextNavSlug, toggleDropdown, id }) {
	return (
		<div className={className} id={id}>
			<div className={styles.dropdownContainer}>
				<div className={styles.dropdownContent}>
					<button onClick={toggleDropdown} className={styles.exit}>
						Close menu &#10006;
					</button>
					{nextNavSlug && (
						<a
							href={`#${nextNavSlug}`}
							className={styles.skiplink}
							onClick={toggleDropdown}
						>
							Skip {text} submenu
						</a>
					)}
					<Guidance />
				</div>
			</div>
		</div>
	);
}

Dropdown.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	nextNavSlug: PropTypes.string,
	toggleDropdown: PropTypes.func,
	id: PropTypes.string,
};

export default Dropdown;
