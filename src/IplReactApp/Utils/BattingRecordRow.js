import {Link} from 'react-router-dom';

import {BattingAvg, BattingSR} from './SpanUtils';



export function BattingRecordRow ({
	year, position, forTeam, vsTeam,
	record
}) {

	if (!record) {
		return (
			<tr>
				{year && <td>Year</td>}
				{position && <td>Pos</td>}
				{forTeam && <td>For</td>}
				{vsTeam && <td>Vs</td>}
				<td>M</td>
				<td>I</td>
				<td>Runs</td>
				<td>Avg</td>
				<td>SR</td>
				<td>4s/6s</td>
				<td>50/100</td>
				<td>HS</td>
			</tr>
		);
	}

	let hsSpan = <span>{record.getHsString()}</span>;
	if (record.hs) {
		hsSpan = <Link to={record.hs.teamInning.match.getLink()} className="cursor-pointer">{record.getHsString()}</Link>;
	}

	return (
		<tr className="BattingRecordRow">
			{year && <td>{year}</td>}
			{position && <td># {position}</td>}
			{forTeam && <td style={forTeam.fgStyle}>{forTeam.abb}</td>}
			{vsTeam && <td style={vsTeam.fgStyle}>{vsTeam.abb}</td>}
			<td>{record.mats}</td>
			<td>{record.inns}</td>
			<td>{record.runs}</td>
			<td>
				<BattingAvg avg={record.getAvgF()} />
			</td>
			<td>
				<BattingSR sr={record.getSRF()} />
			</td>
			<td>{record.n4} | {record.n6}</td>
			<td>{record.n50} | {record.n100}</td>
			<td>{hsSpan}</td>
		</tr>
	);
}
