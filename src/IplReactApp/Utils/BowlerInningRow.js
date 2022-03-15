


export default function BowlerInningRow ({rowData, index}) {
	if (rowData === undefined) {
		return <tr>
			<td></td>
			<td>Bowler</td>
			<td>W</td>
			<td>R</td>
			<td>Ov</td>
			<td>Econ</td>
		</tr>;
	}

	const b = rowData;
	return (
		<tr className="BowlerInningRow">
			<td># {index+1}</td>
			<td>{b.player.fn}</td>
			<td>{b.wickets}</td>
			<td>{b.runs}</td>
			<td>{b.overs}</td>
			<td>{b.econF()}</td>
		</tr>
	);
}
