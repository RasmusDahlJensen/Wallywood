import { Layout } from "../../Components/App/Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Posters = () => {
	return (
		<Layout title="Plakater">
			<GenreList />
		</Layout>
	);
};

const GenreList = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get("http://localhost:4000/genre");
			// console.log(result)
			setData(result.data);
		};
		getData();
	}, [setData]);

	return (
		<ul>
			{data &&
				data.map((genre) => {
					return (
						<li key={genre.id}>
							<Link to={`/posters/${genre.slug}`}>{genre.title}</Link>
						</li>
					);
				})}
		</ul>
	);
};
