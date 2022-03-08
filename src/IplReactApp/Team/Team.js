import React from 'react';



export function Team ({
	setTitleSuffix, goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	PAGE_TYPES, setPageType,
	setYear, setMatchIndex,
	setGroundId, setPlayerId, setTeamId,
	team
}) {

	// console.log(`Team: {id: ${team.id}, index: ${team.index}}`);

	React.useEffect(function () {
		setTitleSuffix(team.abb);
	}, [setTitleSuffix, team]);

	return (
		<div className="Team">
			<h2>Team</h2>
		</div>
	);
}
