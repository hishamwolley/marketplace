import React from "react";
import Header from "../header/Header";
import MobileNav from "./MobileNav";
import Login from "./Login";
import { Outlet } from "react-router-dom";
import NavCarousel from "../carousel/NavCarousel";

const Layout = () => {
	return (
		<>
			<Header />
			<Login />
			<NavCarousel />
			<MobileNav />
			<Outlet />
		</>
	);
};

export default Layout;
