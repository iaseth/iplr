import React from 'react';
import {useParams} from 'react-router-dom';

import FrontMatter from '../FrontMatter';
import Four04 from '../Four04';
import {NSPointsTable} from '../Utils';
import {MatchList} from '../Utils/MatchList';

import IPLRTable from '../Utils/IPLRTable';
import BatsmanInningRow from '../Utils/BatsmanInningRow';
import BowlerInningRow from '../Utils/BowlerInningRow';



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

	ground.pointsTable.setupOrangePurple();
	const {orangeCapTable, purpleCapTable} = ground.pointsTable;

	return (
		<div className="Ground">
			<FrontMatter title={ground.fn}></FrontMatter>

			<div className="px-2 py-8 flex">
				<div className="grow mx-auto">
					<NSPointsTable pointsTable={ground.pointsTable} />
				</div>
			</div>

			<div>
				<MatchList matches={ground.matches} reverse={true} />
			</div>

			<div className="lg:flex">
				<IPLRTable RowComponent={BatsmanInningRow} rowsData={orangeCapTable.getTopNScores(10)} title="High Scores" />
				<IPLRTable RowComponent={BowlerInningRow} rowsData={purpleCapTable.getTopNFigures(10)} title="Best Figures" />
			</div>

		</div>
	);
}
