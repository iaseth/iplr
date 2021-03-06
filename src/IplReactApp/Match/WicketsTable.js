import './WicketsTable.css';

import {PlayerDiv} from './MatchUtils';
import {RunRate} from '../Utils/SpanUtils';



export default function WicketsTable ({inning}) {
	const wicketRows = inning.wickets.map((w, i) => {
		return (
			<tr key={i}>
				<td>{w.wicket}</td>
				<td>{w.runs}</td>
				<td>{w.over}.{w.ball}</td>
				<td>
					<PlayerDiv b={w.batsmanInning} />
				</td>
				<td className="nomobile">
					<span>{w.batsmanInning.runs}</span>
					<span className="text-slate-500 pl-4">{w.batsmanInning.balls}</span>
				</td>
				<td>
					<RunRate runrate={w.getRRF(2)} />
				</td>
			</tr>
		);
	});

	return (
		<div className="WicketsTable text-sm">
			<h2 className="px-2 py-2 text-base">Fall of Wickets</h2>
			<table className="w-full">
				<thead>
					<tr style={inning.team.bgStyle}>
						<td>W</td>
						<td>R</td>
						<td>Ov</td>
						<td>Batsman</td>
						<td className="nomobile">Score</td>
						<td>RR</td>
					</tr>
				</thead>
				<tbody>
					{wicketRows}
				</tbody>
			</table>
		</div>
	);
}
