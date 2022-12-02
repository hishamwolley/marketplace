import { useEffect } from "react";

const useOutsideAlerter = (ref, stateFunction) => {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				// alert("You clicked outside of me!");
				stateFunction(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, stateFunction]);
};

export default useOutsideAlerter;
