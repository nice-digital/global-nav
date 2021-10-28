import React from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";
import reset from "./Reset.module.scss";
import classnames from "classnames";

import {
	AboutUs,
	BNF,
	BNFc,
	CKS,
	Guidance,
	LifeSciences,
	More,
	StandardsAndIndicators,
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
		BNF: BNF,
		BNFc: BNFc,
		CKS: CKS,
		Guidance: Guidance,
		LifeSciences: LifeSciences,
		More: More,
		StandardsAndIndicators: StandardsAndIndicators,
	};
	const Component = components[component];

	return (
		<div className={classnames([className, reset.wrapper])} id={id}>
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
