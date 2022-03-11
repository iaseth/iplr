import React from 'react';
import {useParams} from 'react-router-dom';

import {Four04} from '../Four04';

import {MatchCard} from '../Utils';
import PointsTable from './PointsTable';



export function Season ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	let params = useParams();
	let season = null;
	if (params.year) {
		let year = parseInt(params.year);
		season = ipl.getSeason(year);
	}

	React.useEffect(function () {
		if (season) setCurrentPage(season);
	}, [setCurrentPage, season]);

	React.useEffect(function () {
		if (season) setTitleSuffix(`${season.year}`);
	}, [setTitleSuffix, season]);

	if (season === null) return <Four04 {...{setTitleSuffix}} />;

	const playoffItems = [...season.playoffMatches].reverse().map((match, i) => {
		return <MatchCard key={i} {...{match}} />;
	});

	const leagueItems = [...season.leagueMatches].reverse().map((match, i) => {
		return <MatchCard key={i} {...{match}} />;
	});

	const pointsTableProps = {
		season
	};

	return (
		<div className="Season px-4 sm:px-0 py-12">
			<div className="sm:flex flex-wrap justify-center">
				{playoffItems}
			</div>
			<div className="py-8">
				<PointsTable {...pointsTableProps} />
			</div>
			<div className="sm:flex flex-wrap justify-center py-12">
				{leagueItems}
			</div>
		</div>
	);
}
