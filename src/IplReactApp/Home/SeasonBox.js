import {Link} from 'react-router-dom';

import './SeasonBox.css';

import CompactPointsTable from './CompactPointsTable';
import {MatchCard} from '../Utils';

import IPLRTable from '../Utils/IPLRTable';
import BatsmanInningRow from '../Utils/BatsmanInningRow';
import BowlerInningRow from '../Utils/BowlerInningRow';

import BattingRecordRow from '../Utils/BattingRecordRow';
import BowlingRecordRow from '../Utils/BowlingRecordRow';



export default function SeasonBox ({season}) {
	const {orangeCapTable, purpleCapTable} = season.seasonPointsTable;

	return (
		<div className="px-2 md:px-4 pt-4 pb-8 md:pb-16">
			<div>
				<div className="px-2 py-4">
					<Link to={season.getLink()} className="block text-8xl px-2 py-8 text-center rounded duration-300 hover:bg-zinc-900" style={season.winner.fgStyle}>{season.year}</Link>
				</div>
			</div>
			<div className="md:flex">
				<div>
					<MatchCard match={season.final} topStuff={false} />
				</div>
				<div className="grow md:pl-4 md:pr-2">
					<CompactPointsTable pointsTable={season.pointsTable} />
				</div>
			</div>

			<div className="lg:flex">
				<IPLRTable RowComponent={BatsmanInningRow} rowsData={orangeCapTable.getTopNScores(5)} title="High Scores" />
				<IPLRTable RowComponent={BowlerInningRow} rowsData={purpleCapTable.getTopNFigures(5)} title="Best Figures" />
			</div>

			<div className="lg:flex">
				<IPLRTable RowComponent={BattingRecordRow} rowsData={orangeCapTable.getTopNByRuns(5)} title="Orange Cap" />
				<IPLRTable RowComponent={BowlingRecordRow} rowsData={purpleCapTable.getTopNByWickets(5)} title="Purple Cap" />
			</div>

		</div>
	);
}
