import React from 'react';
import {useParams} from 'react-router-dom';

import Four04 from '../Four04';

import {MatchCard} from '../Utils';
import PointsTable from './PointsTable';

import IPLRTable from '../Utils/IPLRTable';
import BatsmanInningRow from '../Utils/BatsmanInningRow';
import BowlerInningRow from '../Utils/BowlerInningRow';

import BattingRecordRow from '../Utils/BattingRecordRow';
import BowlingRecordRow from '../Utils/BowlingRecordRow';



export function Season ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	let params = useParams();
	let season = null;
	if (params.year) {
		let year = parseInt(params.year);
		season = ipl.getSeason(year);
	}

	React.useEffect(function () {
		if (season) setCurrentPage(season);
	}, [setCurrentPage, season]);

	React.useEffect(function () {
		if (season) setTitleSuffix(`${season.year}`);
	}, [setTitleSuffix, season]);

	if (season === null) return <Four04 {...{setTitleSuffix}} />;

	const playoffItems = [...season.playoffMatches].reverse().map((match, i) => {
		return <MatchCard key={i} {...{match}} />;
	});

	const {orangeCapTable, purpleCapTable} = season.seasonPointsTable;

	const leagueItems = [...season.leagueMatches].reverse().map((match, i) => {
		return <MatchCard key={i} {...{match}} />;
	});

	const pointsTableProps = {
		season
	};

	return (
		<div className="Season px-2 sm:px-0 py-12">

			<div className="sm:flex flex-wrap justify-center">
				{playoffItems}
			</div>

			<div className="">
				<PointsTable {...pointsTableProps} />
			</div>

			<div className="lg:flex">
				<IPLRTable RowComponent={BatsmanInningRow} rowsData={orangeCapTable.getTopNScores(10)} title="High Scores" prefix={season.year} />
				<IPLRTable RowComponent={BowlerInningRow} rowsData={purpleCapTable.getTopNFigures(10)} title="Best Figures" prefix={season.year} />
			</div>

			<div className="lg:flex">
				<IPLRTable RowComponent={BattingRecordRow} rowsData={orangeCapTable.getTopNByRuns(10)} title="Orange Cap" prefix={season.year} />
				<IPLRTable RowComponent={BowlingRecordRow} rowsData={purpleCapTable.getTopNByWickets(10)} title="Purple Cap" prefix={season.year} />
			</div>

			<div className="sm:flex flex-wrap justify-center py-12">
				{leagueItems}
			</div>

		</div>
	);
}
