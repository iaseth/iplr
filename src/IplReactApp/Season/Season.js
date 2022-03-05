import {MatchCard} from '../Utils';



export function Season ({
	goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	PAGE_TYPES, setPageType,
	setYear, setMatchIndex,
	setGroundId, setPlayerId, setTeamId,
	season
}) {

	const playoffItems = [...season.playoffMatches].reverse().map((match, i) => {
		return <MatchCard key={i} {...{match, goToMatch}} />;
	});

	const leagueItems = [...season.leagueMatches].reverse().map((match, i) => {
		return <MatchCard key={i} {...{match, goToMatch}} />;
	});

	return (
		<div className="Season py-12">
			<div className="flex flex-wrap justify-center">
				{playoffItems}
			</div>
			<div className="flex flex-wrap py-12 justify-center">
				{leagueItems}
			</div>
		</div>
	);
}
