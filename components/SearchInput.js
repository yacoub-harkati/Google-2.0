import {
	MagnifyingGlassIcon,
	MicrophoneIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid"
import { useRouter } from "next/router"
import { useContext, useRef } from "react"
import { InputContext } from "../context/InputContext"

function HomeInput() {
	const context = useContext(InputContext)
	const input = useRef()

	return (
		<div
			className="w-full mt-2 flex focus-within:shadow-lg hover:shadow-lg rounded-3xl py-2 px-4 items-center ring-2 ring-gray-100 max-w-md sm:max-w-xl lg:max-w-2xl flex-row-reverse sm:flex-row gap-2"
			onClick={() => input.current.focus()}
		>
			<MagnifyingGlassIcon
				className="h-6 text-gray-700 cursor-pointer transition duration-150 transform hover:scale-110 "
				onClick={(e) => context.search(e)}
			/>
			<input
				type="text"
				name="search-input"
				className="focus:outline-none flex-grow mx-2 focus:bg-white"
				onChange={(e) => context.handleChange(e.target.value)}
				value={context.inputValue}
				ref={input}
			/>
			<MicrophoneIcon className="h-6 text-gray-700 cursor-pointer transition duration-150 transform hover:scale-110 hidden sm:inline-block" />
		</div>
	)
}

function SearchPageInput() {
	const context = useContext(InputContext)
	const input = useRef()
	console.log("ContextValue:", context.inputValue)

	return (
		<div
			className="w-full flex focus-within:shadow-lg hover:shadow-lg rounded-3xl py-2 px-4 items-center ring-2 ring-gray-100 max-w-md sm:max-w-xl lg:max-w-2xl"
			onClick={() => input.current.focus()}
		>
			<input
				type="text"
				name="search-input"
				className="focus:outline-none flex-grow mx-2 focus:bg-white"
				onChange={(e) => context.handleChange(e.target.value)}
				value={context.inputValue}
				ref={input}
			/>
			<div className="flex pl-1 sm:pl-3 items-center sm:divide-x-[2px] sm:divide-gray-200">
				<XMarkIcon
					className={`${
						!context.inputValue && "hidden"
					}  h-6 text-gray-500 cursor-pointer transition duration-150 transform hover:scale-110 sm:pr-2`}
					onClick={() => {
						context.handleChange("")
						input.current.focus()
					}}
				/>
				<MagnifyingGlassIcon
					className="h-6 text-blue-500 cursor-pointer pl-2 hidden sm:inline-flex "
					onClick={(e) => context.search(e)}
				/>
			</div>
			<MicrophoneIcon className="h-6 text-blue-500 cursor-pointer transition duration-150 transform hover:scale-110 pl-2 hidden sm:inline-flex" />
		</div>
	)
}

export default function SearchInput() {
	const { pathname } = useRouter()
	return pathname != "/search" ? <HomeInput /> : <SearchPageInput />
}
