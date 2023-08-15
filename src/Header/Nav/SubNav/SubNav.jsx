import React from "react";
import cksIcon from "./images/cks.svg";
import bnfIcon from "./images/bnf.svg";
import bnfcIcon from "./images/bnfc.svg";
import { getCallbackFunction } from "../../../utils";
import PropTypes from "prop-types";

const images = {
	cks: cksIcon,
	bnf: bnfIcon,
	bnfc: bnfcIcon,
};

import {
	trackEvent,
	defaultEventCategory,
	headerClickEventAction,
} from "../../../tracker";

import styles from "./SubNav.module.scss";

const SubNav = (props) => {
	const handleClick = (e) => {
		e.preventDefault();

		const { currentTarget } = e;
		const href = currentTarget.getAttribute("href");

		const eventLabel =
			currentTarget.textContent ||
			currentTarget.innerText ||
			currentTarget.ariaLabel;

		trackEvent(
			defaultEventCategory,
			headerClickEventAction,
			eventLabel,
			null,
			href,
			function () {
				const { onNavigating } = props;

				const onNavigatingCallback = getCallbackFunction(onNavigating);

				if (onNavigatingCallback) {
					onNavigatingCallback({
						element: currentTarget,
						href: href,
					});
				} else window.location.assign(href);
			}
		);
	};

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list} aria-label={`${props.text} links`}>
				{props.links.map(function (subLink, i) {
					let ariaCurrent = null;

					if (typeof window !== "undefined") {
						if (window.location.pathname === subLink.href) {
							ariaCurrent = "page";
						} else if (window.location.pathname.indexOf(subLink.href) === 0)
							ariaCurrent = true;
					}

					return (
						<li key={i} className={subLink.image && styles.imageLink}>
							<a
								href={subLink.href}
								aria-current={ariaCurrent}
								className={styles.link}
								onClick={handleClick}
								aria-label={subLink.text}
							>
								{subLink.image ? (
									<img
										src={images[subLink.image]}
										className={styles.image}
										alt=""
									/>
								) : (
									subLink.text
								)}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SubNav;

//TODO Convert proptypes to typescript
SubNav.propTypes = {
	text: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			href: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
	onNavigating: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
