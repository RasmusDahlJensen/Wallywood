import { useCartData } from "../../Components/Providers/CartProvider";
import { CartIconStyle } from "./CartIcon.style";

export const CartIcon = () => {
	const { cartData } = useCartData();
	return (
		<CartIconStyle>
			<p>Du har {cartData.length} varer i kurven</p>
		</CartIconStyle>
	);
};
