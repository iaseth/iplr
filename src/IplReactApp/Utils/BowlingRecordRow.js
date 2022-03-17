import {PlayerLink, BowlingAvg, BowlingSR, BowlingEcon} from './SpanUtils';



export default function BowlingRecordRow ({rowData, index}) {
	if (rowData === undefined) {
		return <tr>
			<td></td>
			<td>Bowler</td>
			<td>W</td>
			<td>Avg</td>
			<td>Sr</td>
			<td>Econ</td>
		</tr>;
	}

	const record = rowData;
	return (
		<tr>
			<td># {index+1}</td>
			<td><PlayerLink b={record.performances[0]} /></td>
			<td className="big">{record.wickets}</td>
			<td>
				<BowlingAvg avg={record.getAvgF()} />
			</td>
			<td>
				<BowlingSR sr={record.getSRF()} />
			</td>
			<td><BowlingEcon econ={record.getEconF()} /></td>
		</tr>
	);
}
