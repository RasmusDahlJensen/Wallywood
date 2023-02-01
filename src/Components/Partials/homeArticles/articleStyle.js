import styled from "styled-components";
import { Reset } from "../../Styled/Mixins";

export const ArticleStyle = styled.div`
	article {
		display: flex;
		width: 100%;
		justify-content: space-around;
		img {
			width: 300px;
			height: 300px;
			margin-right: 4%;
		}
		figure {
			display: flex;
			width: 100%;
			margin: 0;
			padding: 0;
		}
		h3 {
			font-family: ${(props) => props.theme.fonts[0]};
			font-size: 1.2rem;
			margin: 0;
		}
		button {
		}
	}
`;
