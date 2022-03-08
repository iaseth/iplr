import React from 'react';

import Inning from './Inning';



export function Match ({
	setTitleSuffix, PAGE_TYPES, setPageType,
	goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	ground, player, team,
	season, match
}) {

	React.useEffect(function () {
		setTitleSuffix(`${match.year} | M${match.seasonIndex+1}`);
	}, [setTitleSuffix, match]);

	return (
		<div className="Match pb-12">
			<div className="lg:flex lg:space-x-4">
				<Inning inning={match.firstInning} {...{goToPlayer, goToTeam}} />
				<Inning inning={match.secondInning} {...{goToPlayer, goToTeam}} />
			</div>
		</div>
	);
}
