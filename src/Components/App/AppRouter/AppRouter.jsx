import { Routes, Route } from "react-router-dom";
import Home from "../../../Pages/Home/Home";
import Plakater from "../../../Pages/Plakater/Plakater";
import { Notfound } from "../../../Pages/NotFound/Notfound";

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/plakater" element={<Plakater />} />
			<Route path="/*" element={<Notfound />} />
		</Routes>
	);
};

export default AppRouter;
