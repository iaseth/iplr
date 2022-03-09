import React from 'react';
import {useParams} from 'react-router-dom';

import {Four04} from '../Four04';

import Inning from './Inning';



export function Match ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	let params = useParams();
	let season = null;
	let match = null;
	if (params.year && params.matchNumber) {
		let year = parseInt(params.year);
		let matchNumber = parseInt(params.matchNumber);
		season = ipl.getSeason(year);
		if (season && matchNumber <= season.matches.length) {
			match = season.matches[matchNumber-1];
		}
	}

	React.useEffect(function () {
		if (match) setCurrentPage(match);
	}, [setCurrentPage, match]);

	React.useEffect(function () {
		if (match) setTitleSuffix(`${match.year} | M${match.seasonIndex+1}`);
	}, [setTitleSuffix, match]);

	if (match === null) return <Four04 {...{setTitleSuffix}} />;

	return (
		<div className="Match pb-12">
			<div className="lg:flex lg:space-x-4">
				<Inning inning={match.firstInning} />
				<Inning inning={match.secondInning} />
			</div>
		</div>
	);
}
