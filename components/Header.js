import { ArrowsPointingOutIcon, MapIcon } from "@heroicons/react/24/solid"
import Avatar from "../components/Avatar"
import { useRouter } from "next/router"
import { useContext } from "react"
import Image from "next/image"
import SearchInput from "./SearchInput"
import HeaderOptions from "./HeaderOptions"
import { InputContext } from "../context/InputContext"

function HomeHeader() {
	return (
		<header className="flex px-7 py-5 items-center text-md text-gray-700 gap-3 w-full">
			<ul className="flex gap-2 ml-auto">
				<li className="link">Gmail</li>
				<li className="link">Images</li>
			</ul>
			<ArrowsPointingOutIcon className="h-7 text-gray-700 cursor-pointer hover:bg-gray-100 p-1 rounded-full" />
			<Avatar url="https://cdn.discordapp.com/attachments/965026766462795786/1055951247301156984/161331905_783679345901980_212166018986053682_n.png" />
		</header>
	)
}

function SearchHeader() {
	const router = useRouter()
	const context = useContext(InputContext)

	return (
		<header className="w-full border-b-[2px] border-gray-100 mb-3">
			<form
				className="flex flex-col sm:flex-row w-full px-7 py-5 items-center gap-4 justify-between"
				onSubmit={context.search}
			>
				<Image
					src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
					width={110}
					height={30}
					onClick={() => router.push("/")}
					className="cursor-pointer self-center mx-5 sm:mr-10"
					alt="Google-logo"
				/>
				<SearchInput />
				<ul className="gap-2 ml-auto hidden lg:flex">
					<li className="link">Gmail</li>
				</ul>
				<div className="hidden lg:inline-flex">
					<Avatar url="https://cdn.discordapp.com/attachments/965026766462795786/1055951247301156984/161331905_783679345901980_212166018986053682_n.png" />
				</div>
			</form>
			<HeaderOptions />
		</header>
	)
}

export default function Header() {
	const { pathname } = useRouter()

	return pathname !== "/search" ? <HomeHeader /> : <SearchHeader />
}
