import { Layout } from "../../Components/App/Layout/Layout";
import { Link } from "react-router-dom";

export const Notfound = () => {
	return (
		<Layout title="Siden blev ikke fundet">
			<p>Siden findes ikke</p>
			<p>
				<Link to="/">Til forsiden</Link>
			</p>
		</Layout>
	);
};
