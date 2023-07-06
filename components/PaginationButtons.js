import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useRouter } from "next/router"
import SideContainer from "./SideContainer"

export default function PaginationButtons() {
	const router = useRouter()
	const startIndex = Math.abs(Number(router.query.start)) || 0
	return (
			<div className="flex justify-center max-w-xs mb-8 mx-auto">
				{startIndex >= 10 && (
					<Link
						href={`/search?q=${router.query.q}&start=${startIndex - 10}`}
						className="flex items-center gap-3 text-blue-800 mr-auto trasition duration-150 transform hover:scale-110"
					>
						<ArrowLeftIcon className="h-5" />
						<p>Previous</p>
					</Link>
				)}
				<Link
					href={`/search?q=${router.query.q}&start=${startIndex + 10}`}
					className="flex items-center gap-3 text-blue-800 trasition duration-150 transform hover:scale-110"
				>
					<p>Next</p>
					<ArrowRightIcon className="h-5" />
				</Link>
			</div>
	)
}
