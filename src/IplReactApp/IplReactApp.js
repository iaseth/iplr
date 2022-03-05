import React from 'react';

import IPL from './ipl';

import {Header} from './Header';
import {Splash} from './Splash';
import {PreFooter} from './PreFooter';
import {Footer} from './Footer';

import {Match} from './Match';

const codes = require('../codes.json');
const ipl = new IPL(codes);

const PAGE_TYPES = {
	TOURNAMENT: 0,
	SEASON: 1,
	MATCH: 2,
	GROUND: 3,
	PLAYER: 4,
	RIVALRY: 5,
	TEAM: 6
};



export default function IplReactApp () {
	const [doneFetching, setDoneFetching] = React.useState(false);

	const [pageType, setPageType] = React.useState(PAGE_TYPES.TOURNAMENT);
	const [season, setSeason] = React.useState(null);
	const [match, setMatch] = React.useState(null);
	const [ground, setGround] = React.useState(null);
	const [player, setPlayer] = React.useState(null);
	const [team, setTeam] = React.useState(null);

	React.useEffect(function () {
		// return;
		fetch("data/bundle.json")
			.then(response => response.text())
			.then(text => JSON.parse(text))
			.then(json => {
				ipl.loadBundle(json);
				ipl.doStuff();
				setTimeout(() => setDoneFetching(true), 5000);
			});
	}, []);

	return (
		<div className="IplReactApp">
			<Header />
			{!doneFetching && <Splash />}
			{doneFetching && <div className="bg-red-600 min-h-screen flex flex-col">
				<div className="m-auto text-white text-4xl lg:text-8xl font-bold">Cricdocs IPL R</div>
				<Match />
			</div>}
			<PreFooter />
			<Footer />
		</div>
	);
}
