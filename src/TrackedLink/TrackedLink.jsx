import PropTypes from "prop-types";

import { defaultEventCategory, trackEvent } from "./../tracker";

const TrackedLink = ({
	children,
	href,
	eventCategory = defaultEventCategory,
	eventAction,
	eventLabel,
	eventValue,
	destinationUrl,
	...props
}) => {
	const handleClick = (e) => {
		e.preventDefault();

		const href = e.currentTarget.getAttribute("href");

		trackEvent(
			eventCategory,
			eventAction,
			eventLabel || e.currentTarget.textContent || e.currentTarget.innerText,
			null,
			href,
			(function () {
				window.location.assign(href);
			})()
		);
	};

	return (
		<a href={href} onClick={handleClick} {...props}>
			{children}
		</a>
	);
};

//TODO convert proptypes to typescript types
TrackedLink.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
	eventCategory: PropTypes.string.isRequired,
	eventAction: PropTypes.string.isRequired,
	eventLabel: PropTypes.string,
	eventValue: PropTypes.number,
	destinationUrl: PropTypes.string,
};

export default TrackedLink;

TrackedLink.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	eventCategory: PropTypes.string,
	eventAction: PropTypes.string.isRequired,
	eventLabel: PropTypes.string,
	eventValue: PropTypes.number,
	destinationUrl: PropTypes.string,
};
