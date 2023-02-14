import axios from "axios";
import { Layout } from "../../Components/App/Layout/Layout";
import { useAuth } from "../../Components/Providers/AuthProvider";

export const Login = () => {
	const { loginData, setLoginData } = useAuth();

	const submitHandle = async (e) => {
		const formdata = new URLSearchParams();
		formdata.append("username", e.target.form.username.value);
		formdata.append("password", e.target.form.password.value);
		const endpoint = `http://localhost:4000/login`;
		try {
			const result = await axios.post(endpoint, formdata);
			handleSessionData(result.data);
		} catch (err) {
			console.error(`Kunne ikke logge ind: ${err}`);
		}
	};

	const handleSessionData = (data) => {
		if (data) {
			sessionStorage.setItem("token", JSON.stringify(data));
			setLoginData(data);
		}
	};

	const Logout = () => {
		sessionStorage.removeItem("token");
		setLoginData("");
	};

	return (
		<Layout title="Login">
			{!loginData ? (
				<form method="POST">
					<div>
						<label htmlFor="username">Brugernavn</label>
						<input type="text" name="username" placeholder="admin@admin.dk" />
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
			) : (
				<div>
					<p>Du er logget ind.</p>
					<button onClick={() => Logout()}>Log ud</button>
				</div>
			)}
		</Layout>
	);
};
