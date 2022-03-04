import {RainbowBorder} from './Utils';



export default function Header () {

	return (
		<div className="Header bg-slate-800 text-white">
			<RainbowBorder />
			<div className="max-w-5xl m-auto px-4 py-4">
				<div className="font-bold">
					<a href="/">Cricdocs Ipl R</a>
				</div>
			</div>
			<RainbowBorder />
		</div>
	);
}
