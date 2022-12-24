import Image from "next/image"
import SearchInput from "./SearchInput"
import {useRouter} from "next/router"
import { useContext } from "react"
import { InputContext } from "../context/InputContext"

export default function SearchForm() {
	const context= useContext(InputContext)
	const router = useRouter()

	return (
		<form className="flex flex-col items-center px-3 w-full">
			<Image
				src="https://lh3.googleusercontent.com/4yclDYQkYGYTuVvF4zhi_O5s0dBl0d2abDPgxdbtWL83lOvVA_tW7FDzpRw6buxau7X2aXOd3r_Ct7yEXnZmylG7O3G740eeVktNcQ=w600-sg-rp"
				alt="google-doodle-logo"
				width={350}
				height={100}
				className="cursor-pointer"
				onClick={() => {
					router.push("/")
				}}
			/>
			<SearchInput/>
			<div className="flex flex-col w-1/2 max-w-sm space-y-4 sm:max-w-md sm:space-x-4 sm:space-y-0 mt-6 sm:flex-row sm:justify-center sm:items-center">
				<button type="submit" className="btn" onClick={context.search}>
					Search Google
				</button>
				<button type="button" className="btn">
					I'm feeling lucky!
				</button>
			</div>
		</form>
	)
}
