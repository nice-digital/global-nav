import { useEffect, useRef } from "react";

function useClickOutside(action) {
	const ref = useRef(null);

	const handleClickOutside = (event) => {
		// detects that the clicked element is not inside the referenced element
		if (ref.current && !ref.current.contains(event.target)) {
			action(true);
		}
	};

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
