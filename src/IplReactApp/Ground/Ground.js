import React from 'react';
import {useParams} from 'react-router-dom';

import FrontMatter from '../FrontMatter';
import Four04 from '../Four04';
import {NSPointsTable} from '../Utils';
import {MatchList} from '../Utils/MatchList';



export function Ground ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	// console.log(`Ground: {id: ${ground.id}, index: ${ground.index}}`);
	let ground = null;
	let params = useParams();
	if (params.groundPath) {
		ground = ipl.getGroundFromPath(params.groundPath);
	}

	React.useEffect(function () {
		if (ground) setCurrentPage(ground);
	}, [setCurrentPage, ground]);

	React.useEffect(function () {
		if (ground) setTitleSuffix(ground.fn);
	}, [setTitleSuffix, ground]);

	if (ground === null) return <Four04 {...{setTitleSuffix}} />;

	return (
		<div className="Ground">
			<FrontMatter title={ground.fn}></FrontMatter>
			<div className="px-2 py-8 flex">
				<div className="grow mx-auto">
					<NSPointsTable pointsTable={ground.pointsTable} />
				</div>
			</div>
			<div>
				<MatchList matches={ground.matches} />
			</div>
		</div>
	);
}
