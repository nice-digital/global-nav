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

	function handleSkipLink(e) {
		e.preventDefault();
		const element = document.getElementById(e.target.hash.substr(1));
		requestAnimationFrame(() => {
			element && element.focus();
		});
		closeDropdown();
	}

	return (
		<div
			className={classnames([className, reset.wrapper])}
			id={id}
			data-tracking={`${text} dropdown`}
		>
			<div className={styles.container}>
				{nextNavSlug && (
					<a
						href={
							nextNavSlug == "content-start"
								? `#${nextNavSlug}`
								: `#navlink-${nextNavSlug}`
						}
						className={styles.skiplink}
						onClick={handleSkipLink}
					>
						Skip {text} submenu
					</a>
				)}
				<Component />
				<button
					onClick={closeDropdown}
					className={styles.exit}
					data-tracking="Close menu"
				>
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
