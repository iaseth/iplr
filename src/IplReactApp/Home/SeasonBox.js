import {Link} from 'react-router-dom';

import './SeasonBox.css';

import CompactPointsTable from './CompactPointsTable';
import {MatchCard} from '../Utils';
import BatsmanInningRow from '../Utils/BatsmanInningRow';
import BowlerInningRow from '../Utils/BowlerInningRow';



export default function SeasonBox ({season}) {

	const {orangeCapTable, purpleCapTable} = season.seasonPointsTable;
	const top10BattingPerformances = orangeCapTable.top10BattingPerformances.map((b, i) => <BatsmanInningRow key={i} b={b} index={i} />);
	const top10BowlingPerformances = purpleCapTable.top10BowlingPerformances.map((b, i) => <BowlerInningRow key={i} b={b} index={i} />);

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

			<div>
				<table>
					<tbody>{top10BattingPerformances}</tbody>
				</table>
				<table>
					<tbody>{top10BowlingPerformances}</tbody>
				</table>
			</div>

		</div>
	);
}
