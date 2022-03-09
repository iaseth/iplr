


export function BattingRecordRow ({
	year, position,
	record
}) {

	if (!record) {
		return (
			<tr>
				{year && <td>Year</td>}
				{position && <td>Pos</td>}
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
		hsSpan = <span className="cursor-pointer">{record.getHsString()}</span>;
	}

	return (
		<tr className="BattingRecordRow">
			{year && <td>{year}</td>}
			{position && <td># {position}</td>}
			<td>{record.mats}</td>
			<td>{record.inns}</td>
			<td>{record.runs}</td>
			<td>{record.getAvgF()}</td>
			<td>{record.getSRF()}</td>
			<td>{record.n4} | {record.n6}</td>
			<td>{record.n50} | {record.n100}</td>
			<td>{hsSpan}</td>
		</tr>
	);
}
