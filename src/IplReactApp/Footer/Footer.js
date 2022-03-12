import {EA, RainbowBorder} from '../Utils';



export function Footer () {

	return (
		<div className="Footer bg-zinc-900 text-white">
			<RainbowBorder />
			<div className="max-w-5xl m-auto px-4 pt-24 pb-28">
				<div className="font-bold text-center space-y-4">
					<div>Created by <EA href="https://github.com/iaseth">Ankur Seth</EA>.</div>
					<div>Hosted at Netlify (<EA href="https://github.com/iaseth/iplr">source</EA>).</div>
				</div>
			</div>
			<RainbowBorder />
		</div>
	);
}
