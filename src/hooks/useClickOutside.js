import { useEffect, useRef } from "react";

function useClickOutside(action) {
	const ref = useRef(null);

	// Returns true if it is a DOM element for IE11
	// see https://stackoverflow.com/questions/384286/how-do-you-check-if-a-javascript-object-is-a-dom-object
	function isElement(o) {
		return typeof HTMLElement === "object"
			? o instanceof HTMLElement //DOM2
			: o &&
					typeof o === "object" &&
					o !== null &&
					o.nodeType === 1 &&
					typeof o.nodeName === "string";
	}

	const handleClickOutside = (event) => {
		// detects that the clicked element is not inside the referenced element
		if (
			ref.current &&
			isElement(ref.current) &&
			!ref.current.contains(event.target)
		) {
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
