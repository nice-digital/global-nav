import React, { useEffect, useState, createContext } from "react";
import { useScrollLock } from "@mantine/hooks";

import PropTypes from "prop-types";

const defaultValues = { accountMenuIsExpanded: false, idOfOpenDropdown: null };

export const HeaderContext = createContext(defaultValues);

export const HeaderContextProvider = function ({ children }) {
	const [idOfOpenDropdown, setidOfOpenDropdown] = useState(null);
	const [accountMenuIsExpanded, setAccountMenuIsExpanded] = useState(false);

	const menuOpen = new CustomEvent("menuOpen", {
		bubbles: true,
	});

	const value = {
		idOfOpenDropdown,
		setidOfOpenDropdown,
		accountMenuIsExpanded,
		setAccountMenuIsExpanded,
		menuOpen,
	};

	useEffect(() => {
		setidOfOpenDropdown(null);
	}, [typeof location == "undefined" ? null : location.href]);

	const hashChangeHandler = () => {
		setidOfOpenDropdown(null);
	};

	const mousedownHandler = function (e) {
		if (e.offsetX > e.target.clientWidth || e.offsetY > e.target.clientHeight) {
			// mouse down over scroll element
			console.log("you clicked scroll ", idOfOpenDropdown);
		} else {
			console.log("you clicked elsewhere");
			window.dispatchEvent(menuOpen);
		}
	};

	useEffect(() => {
		window &&
			window.addEventListener("menuOpen", () => {
				setidOfOpenDropdown(null);
			});
		window && window.addEventListener("mousedown", mousedownHandler);
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

	// const [scrollLock, setScrollLock] = useScrollLock(false, {
	// 	disableBodyPadding: true,
	// });

	// useEffect(() => {
	// 	setScrollLock(!!idOfOpenDropdown);
	// }, [idOfOpenDropdown]);

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
