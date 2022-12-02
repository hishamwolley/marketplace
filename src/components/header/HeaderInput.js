import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdPlaylistAdd } from "react-icons/md";

const HeaderInput = () => {
	return (
		<nav className="flex items-center border-gray-100 border shadow-lg h-12 rounded-3xl relative z-20  bg-white w-full sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-96 transition-all">
			<button className="outline-blue-300 flex items-center border-r hover:shadow-md rounded-l-3xl bg-white h-full w-2/12 ">
				<BiSearchAlt className="w-7 h-7 text-slate-400 mx-auto" />
			</button>
			<input
				placeholder="What are you looking for today?"
				type={"text"}
				className=" w-full pl-4 rounded-r-3xl h-full outline-blue-300 placeholder:text-xs lg:placeholder:text-center text-sm "
			></input>

			<button className=" absolute right-4 font-bold w-7 h-7 flex items-center justify-center lg:hidden ">
				<MdPlaylistAdd className="w-full h-full text-slate-400 bg-white" />
			</button>
		</nav>
	);
};

export default HeaderInput;
