import React from 'react';

import {Routes, Route} from 'react-router-dom';

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
		fetch("/data/bundle.json")
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

	const goToNextPage = () => {
		console.log("next");
	};
	const goToPreviousPage = () => {
		console.log("prev");
	};

	const currentItems = {
		team, ground, player,
		season, match
	};

	const props = {
		ipl, setTitleSuffix,
		PAGE_TYPES, setPageType,
		// ...currentItems
	};

	const debugProps = {
		pageType, year, matchIndex,
		groundId, playerId, teamId
	};

	const settingsProps = {};

	const preFooterProps = {
		ipl, PAGE_TYPES,
		pageType, setPageType,
		year, setYear
	};

	return (
		<div className="IplReactApp">
			<Header />
			{!doneFetching && <Splash />}
			{doneFetching && <div className="min-h-screen bg-slate-800 text-slate-200">

				<div className="max-w-5xl mx-auto pb-12">
					<Routes>
						<Route path="">
							<Route path="" element={<div>Home</div>} />
							<Route path=":year">
								<Route path="" element={<Season {...props} />} />
								<Route path=":matchNumber" element={<Match {...props} />} />
							</Route>
						</Route>
						<Route path="teams">
							<Route path="" element={<div>Teams</div>} />
							<Route path=":teamPath" element={<Team {...props} />} />
						</Route>
						<Route path="grounds">
							<Route path="" element={<div>Grounds</div>} />
							<Route path=":groundPath" element={<Ground {...props} />} />
						</Route>
						<Route path="players">
							<Route path="" element={<div>Players</div>} />
							<Route path=":playerPath" element={<Player {...props} />} />
						</Route>
						<Route path="rivalry">
							<Route path="" element={<div>Rivalry</div>} />
							<Route path=":rivalryPath" element={<Rivalry {...props} />} />
						</Route>
					</Routes>
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
