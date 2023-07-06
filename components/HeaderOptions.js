import HeaderOption from "./HeaderOption"
import crypto from 'crypto';
import iconsToRender from "../data/iconsToRender"
import SideContainer from "./SideContainer"

export default function HeaderOptions() {
	return (
		<SideContainer>
			<div className="flex justify-center text-gray-700">
				<div className="flex gap-4 w-full justify-evenly sm:justify-between max-w-md">
					{iconsToRender.map((obj) => (
						<HeaderOption
							Icon={obj.icon}
							text={obj.text}
							selected={obj.selected}
							key={crypto.randomBytes(16).toString('hex')}
						/>
					))}
				</div>
				<ul className="sm:flex gap-4 ml-auto hidden ">
					<li className="link">Tools</li>
				</ul>
			</div>
		</SideContainer>
	)
}
