import { createGlobalStyle } from "styled-components";
import { Reset } from "./Mixins";

const GlobalStyle = createGlobalStyle`


	* {
		box-sizing: border-box;
		font-family: ${(props) => props.theme.fonts[1]};
		color: ${(props) => props.theme.colors.tertiary};
		font-size: 1rem;
	}

	body {
		background-color: ${(props) => props.theme.colors.primary};
		${Reset};
	}

	h1{
		color: ${(props) => props.theme.colors.secondary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: 2rem;
		margin: 1rem 0 1rem 0;

	}
`;

export { GlobalStyle, Reset };
