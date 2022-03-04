import React from 'react';

import {Scorecard} from './Scorecard';



export default function Body ({ipl}) {
	const [season, setSeason] = React.useState(null);
	const [match, setMatch] = React.useState(null);
	const [player, setPlayer] = React.useState(null);

	return (
		<div className="Body">
			<div className="bg-red-600 min-h-screen flex flex-col">
				<div className="m-auto text-white text-4xl lg:text-8xl font-bold">Cricdocs IPL R</div>
				<Scorecard />
			</div>
		</div>
	);
}
