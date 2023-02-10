import { AddToCartButtonStyle } from "./AddToCartButton.style";
import { useAuth } from "../../Components/Providers/AuthProvider";
import axios from "axios";
import { useCartData } from "../../Components/Providers/CartProvider";

export const AddToCartButton = (props) => {
	const { loginData } = useAuth();
	const { cartData, setCartData } = useCartData();
	// console.log(cartData);

	const submitToCart = () => {
		console.log(props.id);
		console.log(loginData);
		const options = {
			headers: {
				Authorization: `Bearer ${loginData}`,
			},
		};
		const formdata = new URLSearchParams();
		formdata.append("poster_id", props.id);
		formdata.append("quantity", 1);
		const endpoint = `http://localhost:4000/cart`;
		const result = axios.post(endpoint, formdata, options);
	};

	return cartData.find((x) => x.poster_id === props.id) ? (
		<>Dette produkt er allerede i kurven</>
	) : (
		<AddToCartButtonStyle onClick={submitToCart}>
			{props.children}
		</AddToCartButtonStyle>
	);
};
