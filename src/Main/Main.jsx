import React from "react";
import { BackToTop } from "./BackToTop/BackToTop";
import PropTypes from "prop-types";

import styles from "./Main.module.scss";

export const Main = (props) => {
	const { children, elementType: ElementType = "main", ...rest } = props;

	return (
		<ElementType className={styles.main} {...rest}>
			{children}
			<BackToTop />
		</ElementType>
	);
};

Main.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	elementType: PropTypes.elementType,
};

export default Main;

// class Main extends Component {
// 	render() {
// 		return (
// 			<main className={styles.main}>
// 				{this.props.children}
// 				<BackToTop />
// 			</main>
// 		);
// 	}
// }

// Main.propTypes = {
// 	children: PropTypes.oneOfType([
// 		PropTypes.arrayOf(PropTypes.node),
// 		PropTypes.node,
// 	]),
// };

// export default Main;

// import React from "react";
// import { BackToTop } from "./BackToTop/BackToTop";
// import PropTypes from "prop-types";

// import styles from "./Main.module.scss";

// const Main = function ({ children }) {
// 	return (
// 		<main className={styles.main}>
// 			{children}
// 			<BackToTop />
// 		</main>
// 	);
// };

// Main.propTypes = {
// 	children: PropTypes.oneOfType([
// 		PropTypes.arrayOf(PropTypes.node),
// 		PropTypes.node,
// 	]).isRequired,
// };

// export default Main;
