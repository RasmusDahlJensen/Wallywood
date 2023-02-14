import { CartIconStyle } from "./CartIcon.style";
import { ReactComponent as IconCartSVG } from "../../Assets/svg/icon_cart.svg";
import { useCartData } from "../Providers/CartProvider";
import { Link } from "react-router-dom";

export const CartIcon = () => {
	const { cartData } = useCartData();

	return (
		<CartIconStyle>
			<Link to="/cart">
				<IconCartSVG />
				<p>Du har {cartData.length} varer i kurven</p>
			</Link>
		</CartIconStyle>
	);
};
