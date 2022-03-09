


export function BowlingRecordRow ({
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
				<td>Balls</td>
				<td>Runs</td>
				<td>Wkts</td>
				<td>Avg</td>
				<td>SR</td>
				<td>Econ</td>
				<td>Best</td>
			</tr>
		);
	}

	let bestSpan = <span>{record.getBestString()}</span>;
	if (record.best) {
		bestSpan = <span className="cursor-pointer">{record.getBestString()}</span>;
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
