import {BowlingAvg, BowlingSR, BowlingEcon} from '../Utils/SpanUtils';
import {PlayerTD} from '../Utils/TdUtils';



export default function Top10BowlerRow ({rowData, index}) {
	if (!rowData) {
		return <tr>
			<td></td>
			<td>Bowler</td>
			<td className="nomobile">I</td>
			<td>W</td>
			<td>Avg</td>
			<td className="nomobile">Sr</td>
			<td>Econ</td>
		</tr>;
	}

	const r = rowData;
	return (
		<tr>
			<td># {index+1}</td>
			<PlayerTD player={r.player} />
			<td className="nomobile">{r.inns}</td>
			<td className="text-base">{r.wickets}</td>
			<td>
				<BowlingAvg avg={r.getAvgF()} />
			</td>
			<td className="nomobile">
				<BowlingSR sr={r.getSRF()} />
			</td>
			<td>
				<BowlingEcon econ={r.getEconF()} />
			</td>
		</tr>
	);
}
