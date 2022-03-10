import React from 'react';

import {useNavigate, Routes, Route} from 'react-router-dom';

import './IplReactApp.css';
import IPL from './node-iplr/src';

import {RainbowBorder} from './Utils';
import {Header} from './Header';
import {Splash} from './Splash';
import {DebugInfo} from './DebugInfo';
import {Settings} from './Settings';
import {PreFooter} from './PreFooter';
import {Footer} from './Footer';

import {Home} from './Home';
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

	// used for navigating to next and prev page
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = React.useState(false);

	// document title is set to "IPLR | titleSuffix"
	const [titleSuffix, setTitleSuffix] = React.useState("Home");

	const [pageType, setPageType] = React.useState(PAGE_TYPES.MATCH);

	let showDebugInfo = false;
	let showSettings = false;

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

	const scrollToTop = () => window.scrollTo({ top: 0 });

	React.useEffect(() => {
		const {hostname, href} = window.location;
		if (hostname === "iplr.netlify.app") {
			console.log(`URL: ${href}`);
		}
		scrollToTop();
	});

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

	const goSomewhere = path => setTimeout(() => navigate(path), 500);
	const goToHome = () => goSomewhere("");

	const goToNextPage = () => {
		if (!currentPage) {
			console.log("currentPage is not set!");
		} else if (!currentPage.next) {
			console.log("currentPage.next is not set!");
		} else {
			const link = currentPage.next.getLink();
			goSomewhere(link);
			console.log("Setting currentPage to " + link);
		}
	};

	const goToPreviousPage = () => {
		if (!currentPage) {
			console.log("currentPage is not set!");
		} else if (!currentPage.prev) {
			console.log("currentPage.prev is not set!");
		} else {
			const link = currentPage.prev.getLink();
			goSomewhere(link);
			console.log("Setting currentPage to " + link);
		}
	};

	const props = {
		ipl, setTitleSuffix, setCurrentPage,
		PAGE_TYPES, setPageType
	};

	const debugProps = {
		pageType
	};

	const settingsProps = {};

	const preFooterProps = {
		ipl, PAGE_TYPES,
		pageType, setPageType
	};

	return (
		<div className="IplReactApp">
			<Header {...{currentPage, goToPreviousPage, goToHome, goToNextPage}} />
			{!doneFetching && <Splash />}
			{doneFetching && <div className="min-h-screen bg-slate-800 text-slate-200">

				<div className="max-w-5xl mx-auto pb-12">
					<Routes>
						<Route path="">
							<Route path="" element={<Home {...props} />} />
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
							<Route path="" element={<Rivalry {...props} />} />
							<Route path=":rivalryPath" element={<Rivalry {...props} />} />
						</Route>
					</Routes>
				</div>
			</div>}
			<RainbowBorder />
			{showDebugInfo && <DebugInfo {...debugProps} />}
			{showDebugInfo && <RainbowBorder />}
			{showSettings && <Settings {...settingsProps} />}
			{showSettings && <RainbowBorder />}
			{doneFetching && <PreFooter {...preFooterProps} />}
			<Footer />
		</div>
	);
}
