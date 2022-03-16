import {BowlingAvg, BowlingSR, BowlingEcon} from '../Utils/SpanUtils';
import {PlayerTD} from '../Utils/TdUtils';



export default function Top10BowlerRow ({rowData, index}) {

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
			<td>
				<BowlingSR sr={r.getSRF()} />
			</td>
			<td>
				<BowlingEcon econ={r.getEconF()} />
			</td>
		</tr>
	);
}
