import React from 'react';

import {MatchCard} from '../Utils';
import PointsTable from './PointsTable';



export function Season ({
	setTitleSuffix, goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	PAGE_TYPES, setPageType,
	setYear, setMatchIndex,
	setGroundId, setPlayerId, setTeamId,
	season
}) {

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
			<div className="flex flex-wrap py-8">
				<PointsTable {...pointsTableProps} />
			</div>
			<div className="sm:flex flex-wrap py-12">
				{leagueItems}
			</div>
		</div>
	);
}
