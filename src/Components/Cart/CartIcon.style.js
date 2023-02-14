import styled from "styled-components";

export const CartIconStyle = styled.div`
	a {
		text-decoration: none;
	}
	svg {
		&:hover {
			fill: ${(props) => props.theme.colors.secondary};
		}
	}
`;
