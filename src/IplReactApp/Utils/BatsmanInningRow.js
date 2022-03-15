


export default function BatsmanInningRow ({rowData, index}) {
	if (rowData === undefined) {
		return <tr>
			<td></td>
			<td>Batsman</td>
			<td>R</td>
			<td>B</td>
			<td>4s</td>
			<td>6s</td>
			<td>SR</td>
		</tr>;
	}

	const b = rowData;
	return (
		<tr>
			<td># {index+1}</td>
			<td>{b.player.fn}</td>
			<td>{b.runsString()}</td>
			<td>{b.balls}</td>
			<td>{b.n4}</td>
			<td>{b.n6}</td>
			<td>{b.srF()}</td>
		</tr>
	);
}
