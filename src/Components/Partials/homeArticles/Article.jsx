let apiData = [];

const ArticleAPI = async () => {
	let url = "http://localhost:4000/poster";
	await fetch(url)
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.error(err));
};

ArticleAPI();
export const Article = () => {
	// return `<div>${apiData[0][0].name}</div>;`;
};
