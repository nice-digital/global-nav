import React from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";
import { Guidance, More, StandardsAndIndicators, AboutUs, BNF, BNFc } from "./Components/";
import Remove from "@nice-digital/icons/lib/Remove";

export function Dropdown({
	text,
	className,
	nextNavSlug,
	closeDropdown,
	id,
	component,
}) {
	const components = {
		Guidance: Guidance,
		More: More,
		AboutUs: AboutUs,
		StandardsAndIndicators: StandardsAndIndicators,
		BNF: BNF,
		BNFc: BNFc,
	};
	const Component = components[component];

	return (
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
	);
}

Dropdown.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	nextNavSlug: PropTypes.string,
	closeDropdown: PropTypes.func,
	id: PropTypes.string,
	component: PropTypes.string,
};

export default Dropdown;
