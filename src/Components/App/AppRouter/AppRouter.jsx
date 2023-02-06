import { Routes, Route } from "react-router-dom";
import Home from "../../../Pages/Home/Home";
import {
	Posters,
	PosterList,
	PosterDetails,
} from "../../../Pages/Posters/Posters";
import { Notfound } from "../../../Pages/NotFound/Notfound";
import { About } from "../../../Pages/About/About";
import { Kontakt } from "../../../Pages/Kontakt/Kontakt";
import { Login } from "../../../Pages/Login/Login";

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":genre" element={<PosterList />} />
				<Route path=":genre/:poster" element={<PosterDetails />} />
			</Route>
			<Route path="/about" element={<About />} />
			<Route path="/kontakt" element={<Kontakt />} />
			<Route path="/login" element={<Login />} />
			<Route path="/*" element={<Notfound />} />
		</Routes>
	);
};

export default AppRouter;
