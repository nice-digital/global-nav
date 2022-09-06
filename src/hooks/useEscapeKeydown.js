import { useEffect, useRef, useCallback } from "react";

function useEscapeKeydown(action) {
	const keydownRef = useRef(null);

	const ESCAPE_KEYS = ["27", "Escape", "Esc"];

	const handleKeydown = useCallback(
		(event) => {
			if (ESCAPE_KEYS.includes(event.key)) {
				action(true);
			}
		},
		[action]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeydown, true);
		return () => {
			document.removeEventListener("keydown", handleKeydown, true);
		};
	}, [handleKeydown]);

	return {
		keydownRef,
	};
}

export default useEscapeKeydown;
