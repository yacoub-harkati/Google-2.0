import { InputContextProvider } from "../context/InputContext"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
	return (
		<InputContextProvider>
			<Component {...pageProps} />
		</InputContextProvider>
	)
}
