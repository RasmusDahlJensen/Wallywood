import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PosterContext = createContext();

export const PosterProvider = ({ children }) => {
	const [posterList, setPosterList] = useState([]);

	useEffect(() => {
		if (sessionStorage.getItem("posterlist")) {
			setPosterList(JSON.parse(sessionStorage.getItem("posterlist")));
		} else {
			const getData = async () => {
				let url = "http://localhost:4000/poster/list";
				const result = await axios.get(url);
				sessionStorage.setItem("posterlist", JSON.stringify(result.data));
				setPosterList(result.data);
			};
			getData();
		}
	}, [children]);

	return (
		<PosterContext.Provider value={{ posterList, setPosterList }}>
			{children}
		</PosterContext.Provider>
	);
};

export const usePosterData = () => useContext(PosterContext);
