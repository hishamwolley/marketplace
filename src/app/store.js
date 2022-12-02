import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./features/modal/modalsSlice";

export default configureStore({
	reducer: {
		modals: modalsReducer,
	},
});
