import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ButtonGroup = ({ next, previous, carouselState }) => {
	const { totalItems, currentSlide, slidesToShow } = carouselState;

	return (
		<div className="carousel-button-group">
			<div
				className={
					currentSlide === 0
						? "disable hidden"
						: "hover:shadow-md hidden md:flex shadow w-8 h-8 cursor-pointer top-9 transform -translate-y-1/2 z-20 lg:flex left-2 lg:left-12 absolute items-center justify-center rounded-full bg-white border"
				}
				onClick={() => previous()}
			>
				<BiChevronLeft className="w-5 h-5 text-slate-600 " />
			</div>
			<div
				className={
					currentSlide === totalItems - slidesToShow
						? "disable hidden"
						: " hidden md:flex hover:shadow-md shadow transition-transform w-8 h-8 cursor-pointer top-9 transform -translate-y-1/2 z-20 lg:flex right-2 lg:right-12 absolute items-center justify-center rounded-full bg-white border"
				}
				onClick={() => next()}
			>
				<BiChevronRight className="w-5 h-5 text-slate-600 hover:scale-90 " />
			</div>
		</div>
	);
};

export default ButtonGroup;
