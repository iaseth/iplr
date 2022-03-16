import {PlayerLink, BattingSR} from './SpanUtils';



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

	const b = rowData;
	return (
		<tr>
			<td># {index+1}</td>
			<td><PlayerLink b={b.performances[0]} /></td>
			<td>{b.runs}</td>
			<td>{b.getAvgF()}</td>
			<td>{b.n4}</td>
			<td>{b.n6}</td>
			<td><BattingSR sr={b.getSRF()} /></td>
		</tr>
	);
}
