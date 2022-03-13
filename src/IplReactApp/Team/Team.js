import React from 'react';
import {useParams} from 'react-router-dom';

import FrontMatter from '../FrontMatter';
import Four04 from '../Four04';
import {NSPointsTable, RivalryCard} from '../Utils';
import {MatchList} from '../Utils/MatchList';



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

	const rivalryItems = team.rivalries.map((r, i) => {
		if (r.getLength() < 10) return null;
		return <RivalryCard key={i} rivalry={r} />;
	});

	return (
		<div className="Team">

			<FrontMatter title={team.fn}></FrontMatter>

			<div className="px-2 py-8 flex">
				<div className="grow mx-auto">
					<NSPointsTable pointsTable={team.pointsTable} />
				</div>
			</div>

			<div className="md:flex flex-wrap justify-center px-4 py-4 select-none text-center font-bold">
				{rivalryItems}
			</div>

			<div>
				<MatchList matches={team.matches} reverse={true} />
			</div>

		</div>
	);
}
