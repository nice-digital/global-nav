import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const GlobalNavContext = createContext();

export const GlobalNavContextProvider = function ({ children }) {
	const [idOfOpenDropdown, setidOfOpenDropdown] = useState(null);

	const value = {
		idOfOpenDropdown,
		setidOfOpenDropdown,
	};

	return (
		<GlobalNavContext.Provider value={value}>
			{children}
		</GlobalNavContext.Provider>
	);
};

GlobalNavContextProvider.propTypes = {
	children: PropTypes.array,
};