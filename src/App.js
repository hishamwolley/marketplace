import Product from "./pages/Product";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/global/Layout";
import Recent from "./pages/Recent.js/Recent";
function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Recent />} />
					<Route path="product">
						<Route path=":id" element={<Product />} />
					</Route>
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
