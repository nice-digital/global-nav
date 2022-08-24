/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useRef } from "react";
import { useFocusTrap, useMergedRef, useViewportSize } from "@mantine/hooks";
import { HeaderContext } from "../../context/HeaderContext";
import styles from "./Dropdown.module.scss";
import reset from "./Reset.module.scss";
import classnames from "classnames";
import services from "../../../services.json";

import Remove from "@nice-digital/icons/lib/Remove";

export function Dropdown({
	text,
	className,
	nextNavSlug,
	closeDropdown,
	id,
	currentService,
	component: DropdownComponent,
}) {
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

	const { host } = services.external.find((service) => service.id == id);
	const rootUrl = id === currentService ? "" : `https://${host}`;

	const dropdownRef = useRef();
	const mergedRef = useMergedRef(dropdownRef, focusTrapRef);
	const { height, width } = useViewportSize();

	useEffect(() => {
		// if (idOfOpenDropdown == id) {
		// 	const top = dropdownRef.current.getBoundingClientRect().top;
		// 	dropdownRef.current.style.maxHeight = `calc(100vh - ${top}px)`;
		// 	dropdownRef.current.style.overflowY = "auto";
		// }
	}, [idOfOpenDropdown, dropdownRef, id, height, width]);

	return (
		<div
			className={classnames([className, reset.wrapper])}
			id={`dropdown-${id}`}
			data-tracking={`${text} dropdown`}
			ref={mergedRef}
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
				{<DropdownComponent rootUrl={rootUrl} />}
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
