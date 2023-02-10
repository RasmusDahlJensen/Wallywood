import { HeaderStyle } from "./Header.style";
import NavBarPrimary from "./NavBarPrimary";
import { Link } from "react-router-dom";
import { CartIconStyle } from "../../Pages/Cart/CartIcon.style";

const Header = () => {
	return (
		<HeaderStyle>
			<Link to="/" style={{ textDecoration: "none" }}>
				<h1>Wallywood</h1>
			</Link>
			<CartIconStyle></CartIconStyle>
			<NavBarPrimary />
		</HeaderStyle>
	);
};

export default Header;
