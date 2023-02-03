import { useState, useEffect } from "react";
import { ArticleStyle } from "./articleStyle";
import axios from "axios";

export const Article = () => {
	const [apiResponse, setApiResponse] = useState([]);

	useEffect(() => {
		const getData = async () => {
			let url = "http://localhost:4000/poster/list";
			const result = await axios.get(url);
			setApiResponse(result.data.slice(0, 2));
		};
		getData();
	}, [setApiResponse]);
	console.log(apiResponse[0]);

	return (
		<ArticleStyle>
			<article>
				{apiResponse &&
					apiResponse.map((item) => {
						return (
							<figure key={item.id}>
								{item.image && <img src={`${item.image}`} alt="Film poster" />}
								<div>
									<h3>{item.name}</h3>
									<p>
										Tempor laborum voluptate enim consectetur exercitation.
										Aliquip do labore ullamco exercitation ipsum. Consectetur ex
										non incididunt eiusmod amet eiusmod do laboris nisi ad
										reprehenderit dolor cillum. Velit commodo nulla qui anim est
										enim et irure quis sunt irure et.
									</p>
									<p>{item.genre}</p>
									<button>Læs mere</button>
								</div>
							</figure>
						);
					})}
			</article>
		</ArticleStyle>
	);
};
