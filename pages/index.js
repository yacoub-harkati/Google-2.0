import Head from "next/head"
import Header from "../components/Header"
import SearchForm from "../components/SearchForm"
import Footer from "../components/Footer"
import Container from "../components/Container"
import { useContext } from "react"
import { InputContext } from "../context/InputContext"

export default function Home() {
	const context = useContext(InputContext)

	return (
		<>
			<Head page={{ page: "Home" }}>
				<title>Google 2.0</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Header />
				<SearchForm />
				<Footer />
			</Container>
		</>
	)
}
