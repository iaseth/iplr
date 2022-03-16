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

	const b = rowData;
	return (
		<tr>
			<td># {index+1}</td>
			<td><PlayerLink b={b.performances[0]} /></td>
			<td>{b.wickets}</td>
			<td>
				<BowlingAvg avg={b.getAvgF()} />
			</td>
			<td>
				<BowlingSR sr={b.getSRF()} />
			</td>
			<td><BowlingEcon econ={b.getEconF()} /></td>
		</tr>
	);
}
