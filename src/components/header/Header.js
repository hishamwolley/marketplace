import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ReactComponent as BrandIcon } from "../../assets/icons/logoipsum-244.svg";
import HeaderInput from "./HeaderInput";
import HeaderProfile from "./HeaderProfile";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="w-full sticky top-0 bg-white z-20 border-b h-20 flex items-center">
			<section className="w-10/12 mx-auto relative sm:flex sm:items-center sm:justify-around">
				<Link to={"/"}>
					<BrandIcon className="w-28 lg:w-36 transition-all hidden sm:block" />
				</Link>
				<HeaderInput />
				<section className=" select-none hidden md:flex md:w-32 transition-all justify-around ">
					<button className="text-md px-2 py-1 shadow-md rounded-sm font-light bg-orange-500 hover:bg-orange-400 transition-all text-white flex items-center justify-evenly w-max">
						<span>Sell</span>
						<AiOutlinePlus />
					</button>
					<HeaderProfile />
				</section>
			</section>
		</header>
	);
};

export default Header;
