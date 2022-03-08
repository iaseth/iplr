import React from 'react';



export function Ground ({
	setTitleSuffix, PAGE_TYPES, setPageType,
	goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	ground, player, team,
	season, match
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
