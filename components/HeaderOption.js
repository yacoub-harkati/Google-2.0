export default function HeaderOption({ renderIcon, text, selected, Icon }) {
	return (
		<div className={`link flex items-center gap-1 border-b-4 border-transparent ${selected && "border-blue-500 text-blue-500"} hover:border-blue-500 pb-3 cursor-pointer hover:text-blue-500`}>
			<Icon className="h-6 sm:h-4 px-1" />
			<span className="hidden sm:inline-flex">{text}</span>
		</div>
	)
}
