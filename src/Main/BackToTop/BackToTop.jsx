import ChevronUp from "@nice-digital/icons/lib/ChevronUp";
import { Container } from "@nice-digital/nds-container";

import styles from "./BackToTop.module.scss";

export const BackToTop = function () {
	const handleClick = function (e) {
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
		<div className={styles.wrapper}>
			<nav aria-labelledby="back-to-top-link" className={styles.nav}>
				<a
					className={styles.anchor}
					id="back-to-top-link"
					href="#top"
					onClick={handleClick}
				>
					<Container className={styles.container}>
						<ChevronUp /> Back to top
					</Container>
				</a>
			</nav>
		</div>
	);
};
