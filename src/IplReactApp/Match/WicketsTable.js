import './WicketsTable.css';

import {PlayerDiv} from './MatchUtils';



export default function WicketsTable ({inning}) {
	const wicketRows = inning.wickets.map((w, i) => {
		return (
			<tr key={i}>
				<td>{w.wicket}</td>
				<td>{w.runs}</td>
				<td>{w.over}.{w.ball}</td>
				<td>{w.getRRF()}</td>
				<td>
					<PlayerDiv b={w.batsmanInning} />
				</td>
				<td>
					<span>{w.batsmanInning.runs}</span>
					<span className="text-slate-500 pl-4">{w.batsmanInning.balls}</span>
				</td>
			</tr>
		);
	});

	return (
		<div className="WicketsTable px-2 py-6 text-sm">
			<table className="w-full">
				<tbody>
					{wicketRows}
				</tbody>
			</table>
		</div>
	);
}
