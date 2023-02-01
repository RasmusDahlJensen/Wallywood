import { Layout } from "../../Components/App/Layout/Layout";
import { SlideWrapper } from "../../Components/App/SlideWrapper/SlideWrapper";
import { Article } from "../../Components/Partials/homeArticles/Article";

const Home = () => {
	return (
		<>
			<SlideWrapper />
			<Layout
				title="Sidste nyt..."
				description="Her finder du nye og gamle plakater"
			></Layout>
			<Article />
		</>
	);
};

export default Home;
