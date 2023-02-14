import { CartListStyle } from "./CartList.styled";
import { useCartData } from "../Providers/CartProvider";
import { ReactComponent as IconTrashSVG } from "../../Assets/svg/icon_trash.svg";
import axios from "axios";
import { useAuth } from "../Providers/AuthProvider";

export const CartList = () => {
	const { cartData, setCartData } = useCartData();
	// console.log(cartData);
	const { loginData } = useAuth();

	let sum = cartData.reduce((prev, current) => {
		return prev + +current.poster.price;
	}, 0);

	const deleteButton = async (id) => {
		const options = {
			headers: {
				Authorization: `Bearer ${loginData.access_token}`,
			},
		};
		const endpoint = `http://localhost:4000/cart/${id}`;
		const result = await axios.delete(endpoint, options);
		if (result.data) {
			const endpoint = `http://localhost:4000/cart`;
			const newCartData = await axios.get(endpoint, options);
			setCartData(newCartData.data);
		}
	};
	return (
		<CartListStyle>
			<div>
				<div>Produkt</div>
				<div>Antal</div>
				<div>Pris</div>
				<div>Handling</div>
			</div>
			{cartData &&
				cartData.map((item) => {
					return (
						<div key={item.id}>
							<div>{item.poster.name}</div>
							<div>{item.quantity}</div>
							<div>{item.poster.price} DKK</div>
							<div>
								<IconTrashSVG onClick={() => deleteButton(item.id)} />
							</div>
						</div>
					);
				})}
			<div>
				<div>Total</div>
				<div></div>
				<div>{sum},00 DKK</div>
			</div>
		</CartListStyle>
	);
};
