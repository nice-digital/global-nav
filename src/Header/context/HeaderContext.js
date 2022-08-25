import React, { useEffect, useState, createContext } from "react";

import PropTypes from "prop-types";

const defaultValues = { accountMenuIsExpanded: false, idOfOpenDropdown: null };

export const HeaderContext = createContext(defaultValues);

export const HeaderContextProvider = function ({ children }) {
	const [idOfOpenDropdown, setidOfOpenDropdown] = useState(null);
	const [accountMenuIsExpanded, setAccountMenuIsExpanded] = useState(false);
	const [isClickOutside, setIsClickOutside] = useState(false);

	const handleEvents = (e) => {
		// console.log("handing event ", e);
		if (e.type == "scroll") {
			setIsClickOutside(false);
		} else {
			setIsClickOutside(true);
		}

		if (e.type == "click") {
			if (
				(e.target.id !== "scrim" && e.offsetX > e.target.clientWidth) ||
				(e.target.id !== "scrim" && e.offsetY > e.target.clientHeight)
			) {
				console.log("is in scrollbar ", e.target);
				setIsClickOutside(false);
			} else {
				console.log("is not in scrollbar ", e.target);
				setIsClickOutside(true);
			}
		}
	};

	useEffect(() => {
		// console.log("click outside triggered ----> ", isClickOutside);
	}, [isClickOutside]);

	const value = {
		idOfOpenDropdown,
		setidOfOpenDropdown,
		accountMenuIsExpanded,
		setAccountMenuIsExpanded,
		isClickOutside,
	};

	useEffect(() => {
		setidOfOpenDropdown(null);
	}, [typeof location == "undefined" ? null : location.href]);

	const hashChangeHandler = () => {
		setidOfOpenDropdown(null);
	};

	useEffect(() => {
		["scroll", "click", "ontouchstart"].forEach((evt) =>
			window.addEventListener(evt, handleEvents, false)
		);

		// window &&
		// 	window.addEventListener("scroll", function () {
		// 		window.lastScrollTime = new Date().getTime();
		// 	});
		// return () => {
		// 	window && window.removeEventListener("scroll", () => null);
		// };
	}, []);

	useEffect(() => {
		window && window.addEventListener("hashchange", hashChangeHandler);
		return () => {
			window && window.removeEventListener("hashchange", hashChangeHandler);
		};
	}, []);

	useEffect(() => {
		// we know both are now open
		if (accountMenuIsExpanded && idOfOpenDropdown) {
			setAccountMenuIsExpanded((prevState) => {
				// if prevstate is not null, you know it was already open, therefore close it
				if (prevState) return false;
			});
		}
	}, [accountMenuIsExpanded, idOfOpenDropdown]);

	return (
		<HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
	);
};

HeaderContextProvider.propTypes = {
	children: PropTypes.node,
};

// const mousedownHandler = (e) => {
// 	if (e.offsetX > e.target.clientWidth || e.offsetY > e.target.clientHeight) {
// 		// mouse down over scroll element
// 		// idOfOpenDropdown && !scrollClick && setScrollClick(true);
// 		console.log("you clicked scroll ", idOfOpenDropdown);
// 	} else {
// 		console.log("you clicked elsewhere");
// 	}
// };

// window.addEventListener("scroll", function () {
// 	window.lastScrollTime = new Date().getTime();
// });
// function is_scrolling() {
// 	return (
// 		window.lastScrollTime &&
// 		new Date().getTime() < window.lastScrollTime + 500
// 	);
// }

// const handleEvents = (e) => {
// 	if (e.type == "scroll") {
// 		// window.lastScrollTime = new Date().getTime();
// 		setIsClickOutside(true);
// 	} else {
// 		setIsClickOutside(false);
// 	}
