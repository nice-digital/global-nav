/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { useFocusTrap } from "@mantine/hooks";
import { HeaderContext } from "../../context/HeaderContext";
import styles from "./Dropdown.module.scss";
import reset from "./Reset.module.scss";
import classnames from "classnames";
import services from "../../../services.json";

const url = require("url");

import {
	AboutUs,
	BNF,
	BNFc,
	CKS,
	Guidance,
	LifeSciences,
	StandardsAndIndicators,
} from "./Components/";

import Remove from "@nice-digital/icons/lib/Remove";

export function Dropdown({
	text,
	className,
	nextNavSlug,
	closeDropdown,
	id,
	currentService,
	component,
}) {
	const components = {
		AboutUs: AboutUs,
		BNF: BNF,
		BNFc: BNFc,
		CKS: CKS,
		Guidance: Guidance,
		LifeSciences: LifeSciences,
		StandardsAndIndicators: StandardsAndIndicators,
	};
	const Component = components[component];
	const { idOfOpenDropdown } = useContext(HeaderContext);
	const focusTrapRef = useFocusTrap(idOfOpenDropdown !== null);

	function handleSkipLink(e) {
		e.preventDefault();
		const element = document.getElementById(e.target.hash.substr(1));
		requestAnimationFrame(() => {
			element && element.focus();
		});
		closeDropdown();
	}

	let baseUrl, rootUrl;

	if (currentService) {
		if (id === `dropdown-${currentService}`) {
			baseUrl = "";
		} else {
			baseUrl = services.external.filter(
				(service) => service.id == currentService
			)[0].landingUrl;

			const urlObject = url.parse(
				services.external.filter((service) => service.id == currentService)[0]
					.landingUrl
			);

			rootUrl = `${urlObject.protocol}//${urlObject.host}`;
		}
	}

	return (
		<div
			className={classnames([className, reset.wrapper])}
			id={id}
			data-tracking={`${text} dropdown`}
			ref={focusTrapRef}
		>
			<div className={styles.container}>
				{nextNavSlug && (
					<>
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
					</>
				)}
				{Component && <Component baseUrl={baseUrl} rootUrl={rootUrl} />}
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

export default Dropdown;
