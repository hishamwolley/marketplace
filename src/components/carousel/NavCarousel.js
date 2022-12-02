import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import { NavLink } from "react-router-dom";
import { MdPlaylistAdd } from "react-icons/md";
import { categories } from "./variables/categories";
import { responsiveNav } from "./variables/responsive";

const NavCarousel = () => {
	const [carouselShadow, setCarouselShadow] = useState(false);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (window.scrollY > 10) {
				setCarouselShadow(true);
			} else {
				setCarouselShadow(false);
			}
		});
	}, []);

	return (
		<section
			className={`${
				carouselShadow ? "shadow  transition-shadow" : "shadow-none"
			} flex sticky top-20 text-slate-700 items-center bg-white pt-2 z-10 `}
		>
			<div className=" w-full lg:w-11/12 px-4 md:px-12 lg:px-16 relative xl:px-20">
				<Carousel
					customButtonGroup={<ButtonGroup />}
					renderButtonGroupOutside={true}
					arrows={false}
					// swipeable={false}
					// infinite={true}
					draggable={false}
					itemClass=" flex item-center justify-center pt-2 "
					responsive={responsiveNav}
					centerMode={false}
					containerClass="w-full"
				>
					{categories.map((category) => {
						return (
							<NavLink
								key={category.id}
								tabIndex={-1}
								to={category.linkTo}
								draggable={false}
								className={(isActive) =>
									isActive.isActive
										? "border-b-trans-active border-b-trans font-medium flex flex-col items-center w-max select-none h-14 text-slate-700 transition-colors"
										: "border-b-trans font-medium  flex flex-col items-center w-max select-none h-14 text-gray-500 hover:text-gray-700"
								}
							>
								{category.logo}
								<span className="text-xs w-max">{category.name}</span>
							</NavLink>
						);
					})}
				</Carousel>
			</div>
			<button className="hidden hover:shadow-md lg:flex items-center justify-evenly select-none  bg-white border-slate-600 hover:border-none w-24 px-2 h-10 rounded-3xl text-slate-600 border lg:relative right-4">
				<span className="font-semibold">Filter</span>
				<MdPlaylistAdd className=" w-6 h-6 bg-white" />
			</button>
		</section>
	);
};

export default NavCarousel;
