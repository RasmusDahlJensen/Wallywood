import { HeaderStyle } from "./Header.style";
import NavBarPrimary from "./NavBarPrimary";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<HeaderStyle>
			<Link to="/" style={{ textDecoration: "none" }}>
				<h1>Wallywood</h1>
			</Link>
			<NavBarPrimary />
		</HeaderStyle>
	);
};

export default Header;
