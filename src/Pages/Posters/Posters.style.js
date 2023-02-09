import styled from "styled-components";

export const Posterstyle = styled.div`
	display: flex;
	width: 100%;
	img {
		width: 230px;
		height: 350px;
	}
	li {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		margin: 15px 0 15px 0;
	}
	p {
		margin: 0;
	}
	ol {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 15px;
		width: 100%;
		margin: 0;
		button {
			background-color: ${(props) => props.theme.colors.quinary};
			border-radius: 5px;
			padding: 5px 15px 5px 15px;
			border: 1px solid black;
			box-shadow: none;
			border-radius: 0px;
		}
	}
	ul {
		padding: 0;
		width: 150px;
		text-align: start;

		a {
			text-decoration: none;
		}
		.active {
			color: black;
			font-weight: 600;
			font-size: 1.1rem;
		}
	}
	.genreList {
		margin: 0;
		border-right: 1px solid #b6b6b6;
		height: 750px;
		text-align: start;
	}
	.posterList {
		max-width: 1000px;
	}
`;

export const Articlestyle = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	button {
		width: 150px;
		background-color: ${(props) => props.theme.colors.quinary};
		border-radius: 5px;
		padding: 5px 15px 5px 15px;
		border: 1px solid black;
		box-shadow: none;
		border-radius: 0px;
	}
	h2 {
		font-size: 1.7 + -rem;
	}
	img {
		width: 350px;
		height: auto;
	}
`;
