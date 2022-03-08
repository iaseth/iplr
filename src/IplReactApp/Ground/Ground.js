import React from 'react';
import {useParams} from 'react-router-dom';



export function Ground ({
	ipl, setTitleSuffix,
	PAGE_TYPES, setPageType,
	goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam
}) {

	// console.log(`Ground: {id: ${ground.id}, index: ${ground.index}}`);
	let ground = null;
	let params = useParams();
	if (params.groundPath) {
		ground = ipl.getGroundFromPath(params.groundPath);
	}

	React.useEffect(function () {
		setTitleSuffix(ground.fn);
	}, [setTitleSuffix, ground]);

	return (
		<div className="Ground">
			<h2>Ground</h2>
		</div>
	);
}
