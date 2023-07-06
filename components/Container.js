export default function Container({ children }) {
	return (
			<div className="min-h-screen flex flex-col justify-between ">
				{children}
			</div>
	)
}
