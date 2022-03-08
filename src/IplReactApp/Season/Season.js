import React from 'react';
import {useParams} from 'react-router-dom';

import {MatchCard} from '../Utils';
import PointsTable from './PointsTable';



export function Season ({
	ipl, setTitleSuffix,
	PAGE_TYPES, setPageType,
	goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	ground, player, team,
	season, match
}) {

	let params = useParams();
	if (params.year) {
		let year = parseInt(params.year);
		season = ipl.getSeason(year);
	}

	React.useEffect(function () {
		setTitleSuffix(`${season.year}`);
	}, [setTitleSuffix, season]);

	const playoffItems = [...season.playoffMatches].reverse().map((match, i) => {
		return <MatchCard key={i} {...{match, goToMatch}} />;
	});

	const leagueItems = [...season.leagueMatches].reverse().map((match, i) => {
		return <MatchCard key={i} {...{match, goToMatch}} />;
	});

	const pointsTableProps = {
		season
	};

	return (
		<div className="Season px-4 sm:px-0 py-12">
			<div className="sm:flex flex-wrap">
				{playoffItems}
			</div>
			<div className="py-8">
				<PointsTable {...pointsTableProps} />
			</div>
			<div className="sm:flex flex-wrap py-12">
				{leagueItems}
			</div>
		</div>
	);
}
