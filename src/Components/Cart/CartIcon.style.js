import styled from "styled-components";

export const CartIconStyle = styled.div`
	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 5px;
		flex-direction: row-reverse;
	}
	svg {
		&:hover {
			fill: ${(props) => props.theme.colors.secondary};
		}
	}
`;
