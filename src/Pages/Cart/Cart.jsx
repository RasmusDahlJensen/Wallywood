import { Layout } from "../../Components/App/Layout/Layout";
import { CartList } from "../../Components/Cart/CartList";

export const Cart = () => {
	return (
		<>
			<Layout title="Kurv">
				<CartList></CartList>
			</Layout>
		</>
	);
};
