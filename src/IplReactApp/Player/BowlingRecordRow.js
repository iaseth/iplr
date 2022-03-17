import {Link} from 'react-router-dom';

import {BowlingAvg, BowlingSR, BowlingEcon} from '../Utils/SpanUtils';



export default function BowlingRecordRow ({
	titleColumn, year, position, forTeam, vsTeam,
	record
}) {

	if (!record) {
		return (
			<tr>
				{titleColumn && <td></td>}
				{year && <td>Year</td>}
				{position && <td>Pos</td>}
				{forTeam && <td>For</td>}
				{vsTeam && <td>Vs</td>}
				<td>M</td>
				<td>I</td>
				<td>Balls</td>
				<td>Runs</td>
				<td>Wkts</td>
				<td>Avg</td>
				<td>SR</td>
				<td>Econ</td>
				<td>Best</td>
			</tr>
		);
	}

	let bestSpan = <span>{record.getBestString()}</span>;
	if (record.best) {
		bestSpan = <Link to={record.best.teamInning.match.getLink()} className="cursor-pointer">{record.getBestString()}</Link>;
	}

	return (
		<tr className="BowlingRecordRow">
			{titleColumn && <td>{titleColumn}</td>}
			{year && <td>{year}</td>}
			{position && <td># {position}</td>}
			{forTeam && <td style={forTeam.fgStyle}>{forTeam.abb}</td>}
			{vsTeam && <td style={vsTeam.fgStyle}>{vsTeam.abb}</td>}
			<td>{record.mats}</td>
			<td>{record.inns}</td>
			<td>{record.balls}</td>
			<td>{record.runs}</td>
			<td>{record.wickets}</td>
			<td>
				<BowlingAvg avg={record.getAvgF()} />
			</td>
			<td>
				<BowlingSR sr={record.getSRF()} />
			</td>
			<td>
				<BowlingEcon econ={record.getEconF()} />
			</td>
			<td>{bestSpan}</td>
		</tr>
	);
}
