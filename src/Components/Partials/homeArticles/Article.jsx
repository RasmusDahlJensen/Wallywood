import { useState, useEffect } from "react";
import { ArticleStyle } from "./articleStyle";

const ArticleAPI = async () => {
	let url = "http://localhost:4000/poster";
	const response = await fetch(url);
	const responseData = await response.json();
	return responseData;
};

export const Article = () => {
	const [apiResponse, setApiResponse] = useState(true);

	useEffect(() => {
		ArticleAPI().then((result) => setApiResponse(result));
	}, []);
	console.log(apiResponse[0]?.image);

	return (
		<ArticleStyle>
			{/* <div>
				<img src={require(`${apiResponse[0]?.image}`)} alt="Film poster" />
			</div> */}
			<div>
				<h3>{apiResponse[0]?.name}</h3>
				{/* <img
					src={require("https://info.kinorevuen.dk/wp-content/uploads/2021/01/rise-of-skywalker-plakat-1.jpg")}
					alt="Film poster"
				/> */}
			</div>
		</ArticleStyle>
	);
};
