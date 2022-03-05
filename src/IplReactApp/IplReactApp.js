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
	const [year, setYear] = React.useState("2008");
	const [matchIndex, setMatchIndex] = React.useState(58);
	const [groundId, setGroundId] = React.useState(100);
	const [playerId, setPlayerId] = React.useState(1000);
	const [teamId, setTeamId] = React.useState(10);

	const season = doneFetching ? ipl.getSeason(year) : null;
	const match = doneFetching ? season.matches[matchIndex] : null;
	const ground = ipl.grounds[groundId];
	const player = ipl.players[playerId];
	const team = ipl.teams[teamId];

	React.useEffect(function () {
		// return;
		fetch("data/bundle.json")
			.then(response => response.text())
			.then(text => JSON.parse(text))
			.then(json => {
				ipl.loadBundle(json);
				ipl.doStuff();
				setTimeout(() => setDoneFetching(true), 500);
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
