import { useCallback, useEffect, useRef } from "react";

function useClickOutside(
	idOfOpenDropdown,
	setidOfOpenDropdown
	// setAccountMenuIsExpanded
) {
	const ref = useRef(null);

	const handleClickOutside = useCallback(
		(event) => {
			// detects that the clicked element is not inside the referenced element
			if (ref.current && !ref.current.contains(event.target)) {
				setidOfOpenDropdown(null);
			}
			// if (ref.current && ref.current.contains(event.target)) {
			// 	setAccountMenuIsExpanded(false);
			// 	ref.current.focus();
			// }
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
