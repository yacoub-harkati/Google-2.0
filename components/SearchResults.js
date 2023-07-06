import React from "react"
import crypto from "crypto"
import PaginationButtons from "./PaginationButtons"

export default function SearchResults({ results }) {
    console.log(results)
	return (
		<div className="px-3">
			<p className="text-gray-600 text-md mb-5">
				About {results.searchInformation?.formattedTotalResults} results (
				{results.searchInformation?.formattedSearchTime} seconds)
			</p>
			{results.items?.map((result) => (
				<div
					key={crypto.randomBytes(16).toString("hex")}
					className="mb-8 group max-w-xs sm:max-w-xl"
				>
					<div>
						<a href={result.link} className="text-sm max-w-xs trancate  text-gray-500 whitespace-pre-wrap">
							{result.link.split("/")[2]}
						</a>
						<a href={result.link}>
							<h2 className="trancate text-xl text-blue-800 font-medium group-hover:underline">{result.title}</h2>
						</a>
					</div>
					<p className="line-clamp-2">{result.snippet}</p>
				</div>
			))}
            <PaginationButtons/>
		</div>
	)
}
