import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
	const count = useSelector((state) => state.modals.loginModal);
	// console.log(count);
	return (
		<>
			{/* <section
				className=" z-50 fixed  left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-xl transition-all "
				style={{ height: "500px", width: "568px", top: "150vh" }}
			>
				<div>
					<section className="w-full flex justify-center items-center relative py-3 border-b">
						<AiOutlineClose className="absolute left-4 w-7 h-7 cursor-pointer hover:bg-slate-200 rounded-full p-1" />
						<span className=" font-bold">Log in or Signup</span>
					</section>
					<form className="mt-6 px-4">
						<h3 className=" text-xl font-semibold">Welcome to TheMarket</h3>
					</form>
				</div>
			</section>
			<div className="w-full h-screen bg-black opacity-50 z-40 fixed top-0"></div> */}
		</>
	);
};

export default Login;
