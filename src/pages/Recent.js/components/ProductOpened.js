import React from "react";
import Carousel from "react-multi-carousel";

const ProductOpened = () => {
	return (
		<div
			style={{ height: "70vh" }}
			className="sticky top-44 w-1/2 overflow-y-scroll scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-slate-100 scrollbar-thin"
		>
			<div className="w-11/12 mx-auto">
				{/* <Carousel /> */}
				<div className="w-full h-60 bg-red-200 rounded-xl shadow-sm"></div>
				<div className="flex my-6">
					<section className="w-1/2">
						<p className="text-xl font-semibold">Legion Y530</p>
						<div>
							<p className="text-sm">Home & Appliances </p>
							<p className="text-xs">18 hours ago </p>
						</div>
					</section>
					<section className="w-1/2 flex justify-end">
						{/* <div className="w-52 flex  h-max items-center justify-between"> */}
						<div className="flex flex-col items-center">
							<div className="rounded-full w-9 h-9 bg-slate-100 shadow-md"></div>
							<p className="text-xs mt-2">Hisham Wolley</p>
						</div>
						{/* </div> */}
					</section>
				</div>
				<p className=" max-w-md ">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centurie
				</p>
			</div>
		</div>
	);
};

export default ProductOpened;
