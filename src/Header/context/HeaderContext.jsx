import {
	useEffect,
	useState,
	createContext,
	createRef,
	useCallback,
} from "react";

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

	const handleClickOutsideHeaderMenu = useCallback(
		(e) => {
			if (
				clickOutsideRef.current &&
				clickOutsideRef.current.contains(e.target) == false
			) {
				setidOfOpenDropdown(null);
			}
		},
		[clickOutsideRef]
	);

	useEffect(() => {
		// listen for clicks outside of header menu to close dropdown
		document.body.addEventListener("click", handleClickOutsideHeaderMenu);
		return () => {
			document.body.removeEventListener("click", handleClickOutsideHeaderMenu);
		};
	}, [handleClickOutsideHeaderMenu]);

	const locationHref = typeof location == "undefined" ? null : location.href;

	useEffect(() => {
		setidOfOpenDropdown(null);
	}, [locationHref]);

	const popStateHandler = () => {
		setidOfOpenDropdown(null);
	};

	useEffect(() => {
		window && window.addEventListener("popstate", popStateHandler);
		return () => {
			window && window.removeEventListener("popstate", popStateHandler);
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
