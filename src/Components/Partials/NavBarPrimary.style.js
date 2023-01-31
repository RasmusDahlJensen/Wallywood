import styled from 'styled-components'
import { ClearList } from '../Styled/Mixins'

export const NavBarPrimaryStyle = styled.nav`
	border: solid red 1px;

	ul {
		display: flex;
		align-content: flex-end;

		${ClearList}

		li {
			margin-left: 20px;
		}
	}
`