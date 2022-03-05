import {RainbowBorder} from '../Utils';



export function DebugInfo ({
	ipl
}) {

	return (
		<div className="DebugInfo bg-slate-800 text-white">
			<RainbowBorder />
			<div className="max-w-5xl m-auto px-4 py-16">
				<div className="font-bold">
					<a href="/">DebugInfo</a>
				</div>
			</div>
		</div>
	);
}
