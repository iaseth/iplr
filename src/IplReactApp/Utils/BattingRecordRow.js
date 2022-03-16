import {PlayerLink, BattingAvg, BattingSR} from './SpanUtils';



export default function BattingRecordRow ({rowData, index}) {
	if (rowData === undefined) {
		return <tr>
			<td></td>
			<td>Batsman</td>
			<td>R</td>
			<td>Avg</td>
			<td>4s</td>
			<td>6s</td>
			<td>SR</td>
		</tr>;
	}

	const record = rowData;
	return (
		<tr>
			<td># {index+1}</td>
			<td><PlayerLink b={record.performances[0]} /></td>
			<td>{record.runs}</td>
			<td><BattingAvg avg={record.getAvgF()} /></td>
			<td>{record.n4}</td>
			<td>{record.n6}</td>
			<td><BattingSR sr={record.getSRF()} /></td>
		</tr>
	);
}
