/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useFocusTrap } from "@mantine/hooks";
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
		const href = e.currentTarget.getAttribute("href");

		if (href && href.indexOf("#") === 0) {
			const id = href.split("#")[1],
				element = document.getElementById(id);

			if (element) {
				e.preventDefault();
				element.setAttribute("tabIndex", "-1");
				element.focus();
				closeDropdown();
			}
		}
	}

	const { host } = services.external.find((service) => service.id == id);
	const rootUrl = id === currentService ? "" : `https://${host}`;

	return (
		<div
			className={classnames([className, reset.wrapper])}
			id={`dropdown-${id}`}
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
