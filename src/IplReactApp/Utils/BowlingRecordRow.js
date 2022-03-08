


export function BowlingRecordRow ({
	year, record, goToMatch
}) {

	let bestSpan = <span>{record.getBestString()}</span>;
	if (record.best && goToMatch) {
		bestSpan = <span className="cursor-pointer" onClick={() => goToMatch(record.best.teamInning.match.index)}>{record.getBestString()}</span>;
	}

	return (
		<tr className="BowlingRecordRow">
			{year && <td>{year}</td>}
			<td>{record.mats}</td>
			<td>{record.inns}</td>
			<td>{record.balls}</td>
			<td>{record.runs}</td>
			<td>{record.wickets}</td>
			<td>{record.getAvgF()}</td>
			<td>{record.getSRF()}</td>
			<td>{record.getEconF()}</td>
			<td>{bestSpan}</td>
		</tr>
	);
}
