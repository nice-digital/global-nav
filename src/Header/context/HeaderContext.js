import React, { useEffect, useState, createContext, createRef } from "react";

import PropTypes from "prop-types";

const defaultValues = { accountMenuIsExpanded: false, idOfOpenDropdown: null };

export const HeaderContext = createContext(defaultValues);

export const HeaderContextProvider = function ({ children }) {
	const [idOfOpenDropdown, setidOfOpenDropdown] = useState(null);
	const [accountMenuIsExpanded, setAccountMenuIsExpanded] = useState(false);
	const clickOutsideRef = createRef();

	const value = {
		idOfOpenDropdown,
		setidOfOpenDropdown,
		accountMenuIsExpanded,
		setAccountMenuIsExpanded,
		clickOutsideRef,
	};

	const handleClickOutsideHeaderMenu = (e) => {
		if (
			clickOutsideRef.current &&
			clickOutsideRef.current.contains(e.target) == false
		) {
			setidOfOpenDropdown(null);
		}
	};

	useEffect(() => {
		// listen for clicks outside of header menu to close dropdown
		document.body.addEventListener("click", handleClickOutsideHeaderMenu);
		return () => {
			document.body.removeEventListener("click", handleClickOutsideHeaderMenu);
		};
	}, [idOfOpenDropdown]);

	useEffect(() => {
		setidOfOpenDropdown(null);
	}, [typeof location == "undefined" ? null : location.href]);

	const hashChangeHandler = () => {
		setidOfOpenDropdown(null);
	};

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
