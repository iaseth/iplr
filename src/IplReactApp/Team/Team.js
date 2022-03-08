import React from 'react';
import {useParams} from 'react-router-dom';



export function Team ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	// console.log(`Team: {id: ${team.id}, index: ${team.index}}`);
	let team = null;
	let params = useParams();
	if (params.teamPath) {
		team = ipl.getTeamFromPath(params.teamPath);
	}

	React.useEffect(function () {
		setTitleSuffix(team.abb);
	}, [setTitleSuffix, team]);

	return (
		<div className="Team">
			<h2>Team</h2>
		</div>
	);
}
