import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartData, setCartData] = useState([]);
	const { loginData } = useAuth();

	useEffect(() => {
		const getData = async () => {
			const options = {
				headers: {
					Authorization: `Bearer ${loginData.access_token}`,
				},
			};
			const endpoint = `http://localhost:4000/cart`;
			try {
				if (loginData.access_token) {
					const result = await axios.get(endpoint, options);
					setCartData(result.data);
				}
			} catch (err) {
				console.error(err);
			}
		};
		getData();
	}, [children, loginData]);

	return (
		<CartContext.Provider value={{ cartData, setCartData }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartData = () => useContext(CartContext);
