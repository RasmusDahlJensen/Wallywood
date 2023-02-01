import { Routes, Route } from "react-router-dom";
import Home from "../../../Pages/Home/Home";
import Plakater from "../../../Pages/Plakater/Plakater";
import { Notfound } from "../../../Pages/NotFound/Notfound";
import { About } from "../../../Pages/About/About";
import { Kontakt } from "../../../Pages/Kontakt/Kontakt";
import { Login } from "../../../Pages/Login/Login";

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/plakater" element={<Plakater />} />
			<Route path="/about" element={<About />} />
			<Route path="/kontakt" element={<Kontakt />} />
			<Route path="/login" element={<Login />} />
			<Route path="/*" element={<Notfound />} />
		</Routes>
	);
};

export default AppRouter;
