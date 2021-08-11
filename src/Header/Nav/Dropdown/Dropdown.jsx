import React from "react";
import FocusTrap from "focus-trap-react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";
import { Guidance, More } from "./Components/";
import Remove from "@nice-digital/icons/lib/Remove";

export function Dropdown({
	text,
	className,
	nextNavSlug,
	closeDropdown,
	id,
	component,
	isActive,
}) {
	const components = {
		Guidance: Guidance,
		More: More,
	};
	const Component = components[component];

	return (
		<FocusTrap active={isActive}>
		<div className={className} id={id}>
			<div className={styles.container}>
				{nextNavSlug && (
					<a
						href={`#${nextNavSlug}`}
						className={styles.skiplink}
						onClick={closeDropdown}
					>
						Skip {text} submenu
					</a>
				)}
				<Component />
				<button onClick={closeDropdown} className={styles.exit}>
					Close menu <Remove />
				</button>
			</div>
		</div>
		</FocusTrap>
	);
}

Dropdown.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	nextNavSlug: PropTypes.string,
	closeDropdown: PropTypes.func,
	id: PropTypes.string,
	component: PropTypes.string,
	isActive: PropTypes.bool,
};

export default Dropdown;
