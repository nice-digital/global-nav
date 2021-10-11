import React from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";
import {
	AboutUs,
	Guidance,
	More,
	StandardsAndIndicators,
	BNF,
	BNFc,
	CKS,
	AboutUs,
	Pathways
	Pathways,
} from "./Components/";

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
		AboutUs: AboutUs,
		Guidance: Guidance,
		More: More,
		StandardsAndIndicators: StandardsAndIndicators,
		BNF: BNF,
		BNFc: BNFc,
		CKS: CKS,
		Pathways: Pathways,
		AboutUs: AboutUs,
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
