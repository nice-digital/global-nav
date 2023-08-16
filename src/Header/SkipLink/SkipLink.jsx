import React from "react";
import PropTypes from "prop-types";
import styles from "./SkipLink.module.scss";

const SkipLink = (props) => {
	const handleClick = (e) => {
		const href = e.currentTarget.getAttribute("href");

		if (href && href.indexOf("#") === 0) {
			const id = href.split("#")[1],
				element = document.getElementById(id);

			if (element) {
				e.preventDefault();

				element.setAttribute("tabIndex", "-1");
				element.focus();
				element.scrollIntoView();
			}
		}
	};

	return (
		<a href={props.to} className={styles.link} onClick={handleClick}>
			{props.children}
		</a>
	);
};

//TODO Convert proptypes to typescript
SkipLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default SkipLink;
