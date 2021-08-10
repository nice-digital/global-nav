import React from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";
import { Guidance } from "./Guidance/Guidance";
import Remove from "@nice-digital/icons/lib/Remove";

export function Dropdown({ text, className, nextNavSlug, toggleDropdown, id }) {
	return (
		<div className={className} id={id}>
			<div className={styles.container}>
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
				<button onClick={toggleDropdown} className={styles.exit}>
					Close menu <Remove />
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
	id: PropTypes.string,
};

export default Dropdown;
