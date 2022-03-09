import {Link} from 'react-router-dom';

import {RainbowBorder} from '../Utils';



export function Header () {

	return (
		<div className="Header bg-slate-800 text-white">
			<RainbowBorder />
			<div className="max-w-5xl m-auto px-4 py-4">
				<div className="font-bold">
					<Link to="/">Home</Link>
				</div>
			</div>
			<RainbowBorder />
		</div>
	);
}
