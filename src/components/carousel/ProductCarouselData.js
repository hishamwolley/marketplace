import React from "react";

const ProductCarouselData = () => {
	return (
		<div className="px-1 cursor-pointer">
			<div className="flex justify-between items-center ">
				<p>Product name</p>
				<p className="text-xs">1 hour ago</p>
			</div>
			<p className="text-sm text-gray-500">9999 Km's away</p>
			<p className="text-sm text-gray-500 font-semibold ">1000$</p>
		</div>
	);
};

export default ProductCarouselData;
