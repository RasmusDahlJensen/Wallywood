import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/Styled/Theme";
import { GlobalStyle } from "./Components/Styled/Global.style";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Components/Providers/AuthProvider";
import { CartProvider } from "./Components/Providers/CartProvider";
// import { PosterProvider } from "./Components/App/PosterProvider/PosterProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <PosterProvider> */}
		<AuthProvider>
			<CartProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</CartProvider>
		</AuthProvider>
		{/* </PosterProvider> */}
	</React.StrictMode>
);
