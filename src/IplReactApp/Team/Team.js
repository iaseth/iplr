import React from 'react';



export function Team ({
	setTitleSuffix, PAGE_TYPES, setPageType,
	goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	ground, player, team,
	season, match
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
