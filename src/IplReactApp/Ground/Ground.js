import React from 'react';



export function Ground ({
	setTitleSuffix, goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	PAGE_TYPES, setPageType,
	setYear, setMatchIndex,
	setGroundId, setPlayerId, setTeamId,
	ground
}) {

	// console.log(`Ground: {id: ${ground.id}, index: ${ground.index}}`);

	React.useEffect(function () {
		setTitleSuffix(ground.fn);
	}, [setTitleSuffix, ground]);

	return (
		<div className="Ground">
			<h2>Ground</h2>
		</div>
	);
}
