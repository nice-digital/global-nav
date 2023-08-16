import React from "react";
import styles from "./SkipLink.module.scss";

interface SkipLinkProps {
	to: string;
	children: React.ReactNode;
}

const SkipLink = (props: SkipLinkProps) => {
	const handleClick = (e: React.MouseEvent) => {
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

export default SkipLink;
