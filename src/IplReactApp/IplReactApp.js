import React from 'react';

import IPL from './ipl';

import {Header} from './Header';
import {Splash} from './Splash';
import {DebugInfo} from './DebugInfo';
import {PreFooter} from './PreFooter';
import {Footer} from './Footer';

import {Season} from './Season';
import {Match} from './Match';
import {Ground} from './Ground';
import {Player} from './Player';
import {Rivalry} from './Rivalry';
import {Team} from './Team';

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

	const [pageType, setPageType] = React.useState(PAGE_TYPES.MATCH);
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

	function jumpPage (j) {
		if (pageType === PAGE_TYPES.MATCH) {
			let x = matchIndex + j;
			console.log(x);
			if (x >= 0 && x < season.matches.length) setMatchIndex(x);
		}
	}

	const goToNextPage = () => jumpPage(1);
	const goToPreviousPage = () => jumpPage(-1);

	function handleKeyDown (e) {
		const keyCode = e.keyCode;
		if (keyCode === 37) {
			goToPreviousPage();
		} else if (keyCode === 39) {
			goToNextPage();
		}
	}

	function getCurrentPage () {
		const commonProps = {
			PAGE_TYPES, setPageType,
			setYear, setMatchIndex,
			setGroundId, setPlayerId, setTeamId
		};
		let props = {...commonProps};

		switch (pageType) {
			case PAGE_TYPES.TOURNAMENT:
			case PAGE_TYPES.SEASON:
				props.season = season;
				return <Season {...props} />;
			case PAGE_TYPES.MATCH:
				props.match = match;
				return <Match {...props} />;
			case PAGE_TYPES.GROUND:
				props.ground = ground;
				return <Ground {...props} />;
			case PAGE_TYPES.PLAYER:
				props.player = player;
				return <Player {...props} />;
			case PAGE_TYPES.RIVALRY:
				props.season = season;
				return <Rivalry {...props} />;
			case PAGE_TYPES.TEAM:
				props.team = team;
				return <Team {...props} />;
			default:
				return <Match {...props} />;
		}
	}

	const debugProps = {
		pageType, year, matchIndex,
		groundId, playerId, teamId
	};

	const preFooterProps = {
		ipl, PAGE_TYPES,
		pageType, setPageType,
		year, setYear,
		groundId, setGroundId,
		teamId, setTeamId
	};

	return (
		<div className="IplReactApp select-none" tabIndex="0" onKeyDown={handleKeyDown}>
			<Header />
			{!doneFetching && <Splash />}
			{doneFetching && <div className="min-h-screen">
				<div className="max-w-5xl mx-auto">
					{getCurrentPage()}
				</div>
			</div>}
			<DebugInfo {...debugProps} />
			<PreFooter {...preFooterProps} />
			<Footer />
		</div>
	);
}
