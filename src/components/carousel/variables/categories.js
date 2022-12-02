import { ReactComponent as HomeAppliances } from "../../../assets/icons/smart-home-svgrepo-com.svg";
import { ReactComponent as Vehicles } from "../../../assets/icons/motorcycle-svgrepo-com.svg";
import { ReactComponent as Infinity } from "../../../assets/icons/infinity-svgrepo-com.svg";
import { ReactComponent as Phone } from "../../../assets/icons/iphone-svgrepo-com.svg";
import { ReactComponent as Desktop } from "../../../assets/icons/desktop-svgrepo-com.svg";
import { ReactComponent as Fashion } from "../../../assets/icons/shirt-svgrepo-com.svg";
import { ReactComponent as Pets } from "../../../assets/icons/pet-svgrepo-com.svg";
import { ReactComponent as Shops } from "../../../assets/icons/shop-svgrepo-com.svg";
import { ReactComponent as Jobs } from "../../../assets/icons/businessman-paper-of-the-application-for-a-job-svgrepo-com.svg";
import { ReactComponent as Baby } from "../../../assets/icons/baby-svgrepo-com.svg";
import { ReactComponent as Furniture } from "../../../assets/icons/couch-svgrepo-com.svg";

export const categories = [
	{
		id: 1,
		name: "Recent Listings",
		linkTo: "/",
		logo: <Infinity className="w-8 h-8" fill="#455a64" />,
	},
	{
		id: 2,
		name: "Shops",
		linkTo: "/shops",
		logo: <Shops className="w-8 h-8" fill="#455a64" />,
	},

	{
		id: 3,
		name: "Vehicles",
		linkTo: "/vehicles",
		logo: <Vehicles className="w-8 h-8" fill="#455a64" />,
	},

	{
		id: 4,
		name: "Furniture",
		linkTo: "/furniture",
		logo: <Furniture className="w-8 h-8" fill="#455a64" />,
	},

	{
		id: 5,
		name: "Phones",
		linkTo: "/phones",
		logo: <Phone className="w-8 h-8" fill="#455a64" />,
	},

	{
		id: 6,
		name: "Pc / Laptops",
		linkTo: "/pc-laptops",
		logo: <Desktop className="w-8 h-8" fill="#455a64" />,
	},

	{
		id: 7,
		name: "Home Appliances",
		linkTo: "/home-appliances",
		logo: <HomeAppliances className="w-8 h-8" fill="#455a64" />,
	},

	{
		id: 8,
		name: "Fashion",
		linkTo: "/fashion",
		logo: <Fashion className="w-8 h-8" fill="#455a64" />,
	},
	{
		id: 9,
		name: "Kids & Babies",
		linkTo: "/kids",
		logo: <Baby className="w-8 h-8" fill="#455a64" />,
	},

	{
		id: 10,
		name: "Pets",
		linkTo: "/pets",
		logo: <Pets className="w-8 h-8" fill="#455a64" />,
	},

	{
		id: 11,
		name: "Jobs & Services",
		linkTo: "/jobs",
		logo: <Jobs className="w-8 h-8" fill="#455a64" />,
	},
];
