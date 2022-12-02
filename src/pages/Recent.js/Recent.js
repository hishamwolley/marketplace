import React, { useState, useEffect, useLayoutEffect } from "react";
import ProductCarousel from "../../components/carousel/ProductCarousel";
import tailwindConfig from "../../tailwind.config";
import ProductOpened from "./components/ProductOpened";

const Recent = () => {
	const [isProductOpened, setIspProductOpened] = useState(false);
	const [openProductId, setOpenProductId] = useState();
	const [isLg, setIsLg] = useState(false);

	useLayoutEffect(() => {
		if (window.innerWidth >= parseInt(tailwindConfig.theme.screens.lg)) {
			setIsLg(true);
		} else {
			setIsLg(false);
		}
	}, []);

	useEffect(() => {
		if (isProductOpened && openProductId) {
			const offsetTop =
				document.getElementById(openProductId).getBoundingClientRect().top +
				window.scrollY -
				160; //Height of header + navcarousel + few px extra
			window.scrollTo({ top: offsetTop, behavior: "smooth" });
		}
		window.addEventListener("resize", () => {
			if (window.innerWidth >= parseInt(tailwindConfig.theme.screens.lg)) {
				setIsLg(true);
			} else {
				setIsLg(false);
			}
		});
	}, [isProductOpened, openProductId]);

	return (
		<div className="flex xl:justify-between mt-8 md:px-8 xl:px-12">
			<section
				className={`
				 ${
						isProductOpened && isLg
							? "lg:w-1/2 lg:grid-cols-1 xl:grid-cols-2 "
							: "lg:w-full lg:grid-cols-3 xl:grid-cols-4"
					}
				 grid grid-cols-1 sm:grid-cols-2 gap-6 h-max w-full transition-all `}
			>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={1}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={2}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={3}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={4}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={5}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={6}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={7}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={8}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={9}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={10}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={11}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={12}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={13}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={14}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={15}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={16}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={17}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={18}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={19}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={20}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={21}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={22}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={23}
				/>

				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={24}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={25}
				/>
				<ProductCarousel
					isLg={isLg}
					setIspProductOpened={setIspProductOpened}
					setOpenProductId={setOpenProductId}
					item={26}
				/>
			</section>

			{isProductOpened && isLg && <ProductOpened />}
		</div>
	);
};

export default Recent;
