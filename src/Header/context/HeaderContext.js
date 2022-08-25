import React, { useEffect, useState, createContext } from "react";

import PropTypes from "prop-types";

const defaultValues = { accountMenuIsExpanded: false, idOfOpenDropdown: null };

export const HeaderContext = createContext(defaultValues);

export const HeaderContextProvider = function ({ children }) {
	const [idOfOpenDropdown, setidOfOpenDropdown] = useState(null);
	const [accountMenuIsExpanded, setAccountMenuIsExpanded] = useState(false);

	const handleEvents = (e) => {
		if (e.type == "click") {
			if (
				e.target.id == "scrim" ||
				e.target.getAttribute("aria-label") == "Site header"
			) {
				setidOfOpenDropdown(null);
			}
		}
	};

	const value = {
		idOfOpenDropdown,
		setidOfOpenDropdown,
		accountMenuIsExpanded,
		setAccountMenuIsExpanded,
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
