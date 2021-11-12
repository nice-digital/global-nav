import { useEffect, useRef, useCallback } from "react";

function useClickOutside(idOfOpenDropdown) {
	const ref = useRef(null);

	const handleClickOutside = useCallback(
		(event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				console.log("outside click ", idOfOpenDropdown);
				// setidOfOpenDropdown(null);
			} else {
				console.log("inside click ", idOfOpenDropdown);
			}
		},
		[idOfOpenDropdown]
	);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [handleClickOutside]);

	return {
		ref,
	};
}

export default useClickOutside;
