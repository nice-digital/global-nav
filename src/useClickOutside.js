import { useState, useRef, useEffect } from "react";

function useClickOutside() {
	// const [clickTarget, setClickTarget] = useState();
	const ref = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			console.log("outside click ", event.target);
			// setClickTarget("inside");
			// setidOfOpenDropdown(null);
		} else {
			console.log("inside click ", event.target);
			// setClickTarget("outside");
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
