import {EA, RainbowBorder} from '../Utils';



export function Footer () {

	return (
		<div className="Footer bg-slate-900 text-white">
			<RainbowBorder />
			<div className="max-w-5xl m-auto px-4 py-24">
				<div className="font-bold">
					<div className="font-bold text-center">Created by <EA href="https://github.com/iaseth">Ankur Seth</EA>. Hosted at Netlify (<EA href="https://github.com/iaseth/iplr">source</EA>).</div>
				</div>
			</div>
			<RainbowBorder />
		</div>
	);
}
