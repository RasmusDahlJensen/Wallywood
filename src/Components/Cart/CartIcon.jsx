import { CartIconStyle } from "./CartIcon.style";
import { ReactComponent as IconCartSVG } from "../../Assets/svg/icon_cart.svg";
import { useCartData } from "../Providers/CartProvider";

export const CartIcon = () => {
	const { cartData } = useCartData();

	return (
		<CartIconStyle>
			<IconCartSVG />
			<p>Du har {cartData.length} varer i kurven</p>
		</CartIconStyle>
	);
};
