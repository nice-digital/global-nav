import { useRef, useEffect } from "react";

function useClickOutside() {
	const ref = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			console.log("outside click ");
			// setidOfOpenDropdown(null);
		} else {
			console.log("inside click ");
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return {
		ref,
	};
}

export default useClickOutside;
