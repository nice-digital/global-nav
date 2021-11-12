import React, { useState, createContext } from "react";

export const GlobalNavContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalNavContextProvider = function ({ children }) {
	const [idOfOpenDropdown, setidOfOpenDropdown] = useState(null);

	const handleChangeView = (value) => {
		console.log("test handleChange", value);
	};

	const value = {
		idOfOpenDropdown,
		setidOfOpenDropdown,
		handleChangeView,
	};

	return (
		<GlobalNavContext.Provider value={value}>
			{children}
		</GlobalNavContext.Provider>
	);
};
