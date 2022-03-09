import React from 'react';
import {useParams} from 'react-router-dom';

import {Four04} from '../Four04';



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
		if (team) setCurrentPage(team);
	}, [setCurrentPage, team]);

	React.useEffect(function () {
		if (team) setTitleSuffix(team.abb);
	}, [setTitleSuffix, team]);

	if (team === null) return <Four04 {...{setTitleSuffix}} />;

	return (
		<div className="Team">
			<h2>Team</h2>
		</div>
	);
}
