import { GlobeAltIcon } from "@heroicons/react/24/solid"
import React from "react"

export default function Footer() {
	return (
		<footer className="w-full bg-gray-50 divide-y-[1px] divide-gray-300 text-sm text-gray-500">
			<p className="py-3 px-6">Morocco</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-y-4 px-8 py-3 grid-flow-row-dense">
				<div className="flex gap-1 items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2 " >
					<GlobeAltIcon className="text-green-600 h-4" />
					Carbon Neutral Since 2007
				</div>
				<div className="flex gap-8 justify-center whitespace-nowrap md:justify-self-start">
					<p className="link">Advertising</p>
					<p className="link">Business</p>
					<p className="link">How Search Works</p>
				</div>
				<div className="flex gap-8 justify-center whitespace-nowrap md:justify-self-end lg:col-start-3 ">
					<p className="link">Privacy</p>
					<p className="link">Terms</p>
					<p className="link">Setting</p>
				</div>
			</div>
		</footer>
	)
}
