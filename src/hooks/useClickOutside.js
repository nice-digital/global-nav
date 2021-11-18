import { useCallback, useEffect, useRef } from "react";

function useClickOutside(variable, action) {
	const ref = useRef(null);

	const handleClickOutside = useCallback(
		(event) => {
			// detects that the clicked element is not inside the referenced element
			if (ref.current && !ref.current.contains(event.target)) {
				action(true);
			}
		},
		[variable]
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
