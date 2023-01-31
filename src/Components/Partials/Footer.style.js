import styled from "styled-components";
import { Reset } from "../Styled/Mixins";

export const FooterStyle = styled.footer`
	border-top: solid 1px ${(props) => props.theme.colors.quinary};
	margin-top: 1rem;
	color: ${(props) => props.theme.colors.tertiary};
	display: grid;
	grid-template-columns: 1fr 1fr 2fr;
	font-size: 0.8rem;

	h2 {
		font-size: 1rem;
		text-transform: uppercase;
		color: ${(props) => props.theme.colors.secondary};
		${Reset};
	}

	address {
		font-style: normal;
	}

	figure {
		display: flex;
		justify-content: flex-end;
		${Reset}
		padding: 0.5rem 0 0 0;
		gap: 2%;
		svg {
			height: 28px;
			width: 28px;
		}
	}
`;
