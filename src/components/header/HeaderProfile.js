import React, { useState, useRef } from "react";
import { HiUser } from "react-icons/hi";
import { BsClock } from "react-icons/bs";
import Dropdown from "../global/Dropdown";
import { Link } from "react-router-dom";
import useOutsideAlerter from "../../helpers/useOutsideAlerter";

const HeaderProfile = () => {
	const [showNav, setShowNav] = useState(false);
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, setShowNav);
	return (
		<div
			ref={wrapperRef}
			className={`${
				showNav ? "bg-white" : "bg-slate-700 "
			} w-8 h-8 transition-all rounded-full flex items-center justify-center relative`}
		>
			<HiUser
				onClick={() => {
					setShowNav(!showNav);
				}}
				className={`p-2 w-full h-full cursor-pointer rounded-full transition-all shadow-md ${
					showNav ? "bg-white text-gray-600" : " text-white "
				} `}
			/>
			{showNav && (
				<Dropdown
					classList={
						"md:w-48 lg:w-72 bg-white border mt-2 rounded-md z-10 text-left "
					}
				>
					<div className="w-full flex justify-around items-center text-sm pt-2 pr-2 text-blue-500">
						<section>
							<span className="text-gray-700 font-semibold">Hi, Guest</span>
						</section>
						<section>
							<Link to="/login" className="hover:underline">
								Login
							</Link>
							<span>&nbsp;/&nbsp;</span>
							<Link to="sign-up">
								<span className="hover:underline">Sign up</span>
							</Link>
						</section>
					</div>
					<p className="md:ml-2 lg:ml-8 mt-2 font-semibold text-xs text-gray-700">
						Subscribe now to get unlimited access
					</p>
					<section className="text-sm md:ml-2 lg:ml-8 mt-2">
						<div className="flex items-center">
							<span>Recently viewed</span>
							<BsClock className="ml-3 text-gray-400 w-5 h-5" />
						</div>
						<ul className="text-sm h-52 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50">
							<li className="py-2">asdasd</li>
							<li>asdasd</li>
						</ul>
					</section>
				</Dropdown>
			)}
		</div>
	);
};

export default HeaderProfile;
