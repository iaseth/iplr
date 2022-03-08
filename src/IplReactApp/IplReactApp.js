import React from 'react';

import './IplReactApp.css';
import IPL from './ipl';

import {RainbowBorder} from './Utils';
import {Header} from './Header';
import {Splash} from './Splash';
import {DebugInfo} from './DebugInfo';
import {Settings} from './Settings';
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
	// doneFetching is set to true once bundle.json loads and stay true after that
	const [doneFetching, setDoneFetching] = React.useState(false);

	// document title is set to "IPLR | titleSuffix"
	const [titleSuffix, setTitleSuffix] = React.useState("Home");

	const [pageType, setPageType] = React.useState(PAGE_TYPES.MATCH);
	const [year, setYear] = React.useState(2008);
	const [matchIndex, setMatchIndex] = React.useState(58);
	const [groundId, setGroundId] = React.useState(0);
	const [playerId, setPlayerId] = React.useState(0);
	const [teamId, setTeamId] = React.useState(0);

	const season = doneFetching ? ipl.getSeason(year) : null;
	const match = doneFetching ? ipl.matches[matchIndex] : null;
	const ground = ipl.groundsArray[groundId];
	const player = ipl.playersArray[playerId];
	const team = ipl.teamsArray[teamId];

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

	React.useEffect(() => {
		function handleKeyDown (e) {
			const keyCode = e.keyCode;
			if (keyCode === 37) {
				goToPreviousPage();
			} else if (keyCode === 39) {
				goToNextPage();
			}
		}
		// console.log("Redefined handleKeyDown()");

		document.addEventListener('keydown', handleKeyDown, false);

		return function cleanUp () {
			document.removeEventListener('keydown', handleKeyDown, false);
		}
	});

	React.useEffect(function () {
		document.title = "IPLR | " + titleSuffix;
	}, [titleSuffix]);

	const scrollToTop = () => window.scrollTo({ top: 0 });

	const goToSeason = x => {setPageType(PAGE_TYPES.SEASON); setYear(x); scrollToTop();};
	const goToMatch = x => {setPageType(PAGE_TYPES.MATCH); setMatchIndex(x); scrollToTop();};
	const goToGround = x => {setPageType(PAGE_TYPES.GROUND); setGroundId(x); scrollToTop();};
	const goToPlayer = x => {setPageType(PAGE_TYPES.PLAYER); setPlayerId(x); scrollToTop();};
	const goToTeam = x => {setPageType(PAGE_TYPES.TEAM); setTeamId(x); scrollToTop();};
	const goToFuncs = {
		goToSeason, goToMatch,
		goToGround, goToPlayer, goToTeam
	};

	function jumpPage (j) {
		if (pageType === PAGE_TYPES.SEASON) {
			let x = parseInt(year) + j;
			if (ipl.getSeason(x)) setYear(x);
		} else if (pageType === PAGE_TYPES.MATCH) {
			let x = matchIndex + j;
			if (x >= 0 && x < ipl.matches.length) setMatchIndex(x);
		} else if (pageType === PAGE_TYPES.GROUND) {
			let x = groundId + j;
			if (ipl.groundsArray[x]) setGroundId(x);
		} else if (pageType === PAGE_TYPES.PLAYER) {
			let x = playerId + j;
			if (ipl.playersArray[x]) setPlayerId(x);
		} else if (pageType === PAGE_TYPES.TEAM) {
			let x = teamId + j;
			if (ipl.teamsArray[x]) setTeamId(x);
		}
	}

	const goToNextPage = () => jumpPage(1);
	const goToPreviousPage = () => jumpPage(-1);

	const currentItems = {
		team, ground, player,
		season, match
	};

	const idSetters = {
		setYear, setMatchIndex,
		setGroundId, setPlayerId, setTeamId
	};

	function getCurrentPage () {
		const props = {
			setTitleSuffix, PAGE_TYPES, setPageType,
			...goToFuncs,
			...idSetters,
			...currentItems
		};

		switch (pageType) {
			case PAGE_TYPES.TOURNAMENT:
			case PAGE_TYPES.SEASON:
				return <Season {...props} />;
			case PAGE_TYPES.MATCH:
				return <Match {...props} />;
			case PAGE_TYPES.GROUND:
				return <Ground {...props} />;
			case PAGE_TYPES.PLAYER:
				return <Player {...props} />;
			case PAGE_TYPES.RIVALRY:
				return <Rivalry {...props} />;
			case PAGE_TYPES.TEAM:
				return <Team {...props} />;
			default:
				return <Match {...props} />;
		}
	}

	const debugProps = {
		pageType, year, matchIndex,
		groundId, playerId, teamId
	};

	const settingsProps = {};

	const preFooterProps = {
		ipl, PAGE_TYPES,
		pageType, setPageType,
		year, setYear,
		groundId, setGroundId,
		teamId, setTeamId,
		...goToFuncs
	};

	return (
		<div className="IplReactApp">
			<Header />
			{!doneFetching && <Splash />}
			{doneFetching && <div className="min-h-screen bg-slate-800 text-slate-200">
				<div className="max-w-5xl mx-auto pb-12">
					{getCurrentPage()}
				</div>
			</div>}
			<DebugInfo {...debugProps} />
			<Settings {...settingsProps} />
			<RainbowBorder />
			{doneFetching && <PreFooter {...preFooterProps} />}
			<Footer />
		</div>
	);
}
