import styled from "styled-components";

export const Posterstyle = styled.div`
	display: flex;
	width: 100%;
	img {
		width: 250px;
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
		gap: 15px;
		width: 100%;
	}
	ul {
		width: 30%;
	}
	.genreList {
		max-width: 150px;
		margin: 0;
		text-align: center;
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
	}
	h2 {
		font-size: 1.7 + -rem;
	}
	img {
		width: 350px;
		height: auto;
	}
`;
