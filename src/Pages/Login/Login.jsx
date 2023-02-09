import axios from "axios";
import { useContext } from "react";
import { Layout } from "../../Components/App/Layout/Layout";
import { useAuth } from "../../Components/Providers/AuthProvider";

export const Login = () => {
	const { loginData, setLoginData } = useAuth();

	console.log(`Login Provider ${loginData}`);

	const submitHandle = async (e) => {
		// console.log(e.target.form.password.value);

		const formdata = new URLSearchParams();
		formdata.append("username", e.target.form.username.value);
		formdata.append("password", e.target.form.password.value);
		console.log(...formdata);

		const endpoint = `http://localhost:4000/login`;
		try {
			const result = await axios.post(endpoint, formdata);
			console.log(result.data.access_token);
			handleSessionData(result.data.access_token);
		} catch (err) {
			console.error(`Kunne ikke logge ind: ${err}`);
		}
	};

	const handleSessionData = (data) => {
		if (data) {
			sessionStorage.setItem("token", JSON.stringify(data));
		}
	};

	return (
		<Layout title="Login">
			<form method="POST">
				<div>
					<label htmlFor="username">Brugernavn</label>
					<input type="text" name="username" />
				</div>
				<div>
					<label htmlFor="password">Adgangskode:</label>
					<input type="password" name="password" />
				</div>
				<div>
					<button type="button" onClick={(e) => submitHandle(e)}>
						Login
					</button>
				</div>
			</form>
		</Layout>
	);
};
