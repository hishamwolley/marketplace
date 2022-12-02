import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import ProductCarouselData from "./ProductCarouselData";
import { responsiveProduct } from "./variables/responsive";

const ProductCarousel = ({
	isLg,
	item,
	setIspProductOpened,
	setOpenProductId,
}) => {
	return (
		<div
			className={`h-max w-11/12 mx-auto md:w-80 lg:w-72 xl:w-72 
			 `}
		>
			<div className="shadow rounded-xl ">
				<Carousel
					arrows={false}
					showDots={true}
					containerClass="w-full h-full rounded-xl"
					responsive={responsiveProduct}
					itemClass="h-72 flex "
				>
					<div id={item} className=" bg-red-400 w-full">
						item {item}
					</div>
					<div className="bg-green-400">Item 1</div>
					<div>Item 1</div>
				</Carousel>
			</div>
			{!isLg && (
				<Link className="w-full h-full rounded-xl" to={"product/1"}>
					<ProductCarouselData />
				</Link>
			)}

			{isLg && (
				<div
					onClick={() => {
						setIspProductOpened(true);
						setOpenProductId(item);
					}}
				>
					<ProductCarouselData />
				</div>
			)}
		</div>
	);
};

export default ProductCarousel;
