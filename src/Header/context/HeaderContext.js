import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";

const defaultValues = { accountMenuIsExpanded: false, idOfOpenDropdown: null };

export const HeaderContext = createContext(defaultValues);

export const HeaderContextProvider = function ({ children }) {
	const [idOfOpenDropdown, setidOfOpenDropdown] = useState(null);
	const [accountMenuIsExpanded, setAccountMenuIsExpanded] = useState(false);

	const value = {
		idOfOpenDropdown,
		setidOfOpenDropdown,
		accountMenuIsExpanded,
		setAccountMenuIsExpanded,
	};

	const locationOrHashChangeHandler = () => {
		console.log("closing any open dropdown due to location or hash change");
		setidOfOpenDropdown(null);
	};

	useEffect(() => {
		window.addEventListener("hashchange", locationOrHashChangeHandler);
		return () => {
			window.removeEventListener("hashchange", locationOrHashChangeHandler);
		};
	}, []);

	useEffect(() => {
		locationOrHashChangeHandler();
	}, [location]);

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
