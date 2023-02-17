import { Layout } from "../../Components/App/Layout/Layout";
import { Outlet, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
	Articlestyle,
	Posterstyle,
	SelectStyle,
	SearchStyle,
} from "./Posters.style";
import { AddToCartButton } from "../../Components/Cart/AddToCartButton";

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
	const [sort, setSort] = useState();
	const [filter, setFilter] = useState([]);
	const { genre } = useParams();

	useEffect(() => {
		const getData = async () => {
			let endpoint;
			sort === undefined
				? (endpoint = `http://localhost:4000/poster/list/${genre}?sortkey=name`)
				: (endpoint = `http://localhost:4000/poster/list/${genre}${sort}`);
			const result = await axios.get(endpoint);
			if (filter.length === 0) {
				setData(result.data);
			} else {
				let filteredArr = result.data.filter((el) =>
					el.name.toLowerCase().includes(filter.toLowerCase())
				);
				setData(filteredArr);
			}
			// console.log(genre);
		};
		getData();
	}, [genre, sort, filter]);

	const getSort = (e) => {
		setSort(e.target.value);
		// console.log(sort);
	};
	const getFilter = (e) => {
		setFilter(e.target.value);
	};
	return (
		<div>
			<SearchStyle>
				<SelectStyle onChange={getSort}>
					<option value="?sortkey=name">Titel</option>
					<option value="?sortdir=asc&sortkey=price">Pris - Stigende</option>
					<option value="?sortdir=desc&sortkey=price">Pris - Faldende</option>
				</SelectStyle>
				<div>
					<input type="text" placeholder="Søg..." onChange={getFilter} />
				</div>
			</SearchStyle>
			<ol>
				{data &&
					data.map((poster) => {
						return (
							<li key={poster.id}>
								<NavLink to={`/posters/details/${poster.slug}`}>
									<img src={poster.image} alt="Poster" />

									{poster.name}
								</NavLink>
								<p>Kr. {poster.price}</p>
								<AddToCartButton id={poster.id}>Læg i kurv</AddToCartButton>
							</li>
						);
					})}
			</ol>
		</div>
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

			<div className="articleContent">
				<h2>{data.name}</h2>
				<div>
					<h3>Beskrivelse:</h3>
					<p>{data.description}</p>
				</div>
				<div>
					<h3>Mål:</h3>
					<p>
						{data.width} x {data.height}
					</p>
				</div>
				<div>
					<h3>Pris:</h3>
					<p>{data.price} Kr.</p>
				</div>
				<div>
					<h3>Lager:</h3>
					<p>
						Der er{" "}
						<u>
							<b>{data.stock}</b>
						</u>{" "}
						tilbage
					</p>
				</div>
				<AddToCartButton id={data.id}>Læg i kurv</AddToCartButton>
			</div>
		</Articlestyle>
	);
};
