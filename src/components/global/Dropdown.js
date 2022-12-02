import React from "react";

const Dropdown = ({ classList, children }) => {
	return (
		<section className={`${classList} absolute w-full h-auto top-full shadow `}>
			{children}
		</section>
	);
};

export default Dropdown;
