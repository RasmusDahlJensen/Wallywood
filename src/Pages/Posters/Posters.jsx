import { Layout } from "../../Components/App/Layout/Layout";
import { Outlet, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Articlestyle, Posterstyle } from "./Posters.style";
import { AddToCartButton } from "../Cart/AddToCartButton";

export const Posters = () => {
	return (
		<Layout title="Plakater">
			<Posterstyle>
				<div className="genreList">
					<GenreList />
				</div>
				<div className="posterList">
					<Outlet />
				</div>
			</Posterstyle>
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
							<NavLink to={`/posters/${genre.slug}`}>{genre.title}</NavLink>
						</li>
					);
				})}
		</ul>
	);
};

export const PosterList = () => {
	const [data, setData] = useState([]);
	const { genre } = useParams();

	useEffect(() => {
		const getData = async () => {
			const endpoint = `http://localhost:4000/poster/list/${genre}`;
			// console.log(endpoint);
			const result = await axios.get(endpoint);
			setData(result.data);
			// console.log(genre);
		};
		getData();
	}, [genre]);

	return (
		<ol>
			{data &&
				data.map((poster) => {
					return (
						<li key={poster.id}>
							<img src={poster.image} alt="Poster" />
							<NavLink to={`/posters/details/${poster.slug}`}>
								{poster.name}
							</NavLink>
							<p>Kr. {poster.price}</p>
							<AddToCartButton id={data.id}>Læg i kurv</AddToCartButton>
						</li>
					);
				})}
		</ol>
	);
};

export const PosterDetails = () => {
	const [data, setData] = useState({});
	const { poster } = useParams();

	useEffect(() => {
		const getData = async () => {
			const endpoint = `http://localhost:4000/poster/details/${poster}`;
			// console.log(endpoint);
			const result = await axios.get(endpoint);
			setData(result.data);
			// console.log(result.data);
		};
		getData();
	}, [poster]);

	return (
		<Articlestyle>
			<img src={data.image} alt="film" />
			<h2>{data.name}</h2>
			<div>
				<h3>Beskrivelse:</h3>
				<p>{data.description}</p>
			</div>
			<div>
				<div>
					<h3>Pris:</h3>
					<p>{data.price} Kr.</p>
				</div>
				<div>
					<p>
						Der er <b>{data.stock}</b> tilbage
					</p>
				</div>
			</div>
			<AddToCartButton id={data.id}>Læg i kurv</AddToCartButton>
		</Articlestyle>
	);
};
