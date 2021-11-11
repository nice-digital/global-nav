import React, { useState, createContext } from "react";

export const GlobalNavContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalNavContextProvider = function ({ children }) {
	// const [someData, setSomeData] = useState("initialData");

	const someData = "a static value";

	const handleChangeView = (value) => {
		alert(value);
	};

	const value = {
		someData,
		handleChangeView,
	};

	return (
		<GlobalNavContext.Provider value={value}>
			{children}
		</GlobalNavContext.Provider>
	);
};
