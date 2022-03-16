import {BattingAvg, BattingSR, BattingBRP} from '../Utils/SpanUtils';
import {PlayerTD} from '../Utils/TdUtils';



export default function Top10BatsmanRow ({rowData, index}) {
	if (!rowData) {
		return <tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>;
	}

	const r = rowData;
	return (
		<tr>
			<td># {index+1}</td>
			<PlayerTD player={r.player} />
			<td className="nomobile">{r.inns}</td>
			<td className="text-base">{r.runs}</td>
			<td>
				<BattingAvg avg={r.getAvgF()} />
			</td>
			<td>
				<BattingSR sr={r.getSRF()} />
			</td>
			<td className="nomobile">{r.n4}</td>
			<td className="nomobile">{r.n6}</td>
			<td className="nomobile">
				<BattingBRP brp={r.getBoundaryPercent()} />
			</td>
			<td className="nomobile">{r.n50} / {r.n100}</td>
		</tr>
	);
}
