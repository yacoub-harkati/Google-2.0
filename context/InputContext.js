import { createContext, useState } from "react"
import { useRouter } from "next/router"
const InputContext = createContext()

function InputContextProvider({ children }) {
    const router = useRouter()
	const [inputValue, setInputValue] = useState("")

	function handleChange(value) {
		setInputValue(value)
	}

	function search(e) {
		e.preventDefault()
		if (!inputValue) return
		router.push(`/search?q=${inputValue}`)
	}

	return (
		<InputContext.Provider value={{inputValue, handleChange, search }}>
			{children}
		</InputContext.Provider>
	)
}


export {InputContextProvider, InputContext}