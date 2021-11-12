import { useCallback, useEffect, useRef } from "react";

function useClickOutside(idOfOpenDropdown, setidOfOpenDropdown) {
	const ref = useRef(null);

	const handleClickOutside = useCallback(
		(event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setidOfOpenDropdown(null);
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
