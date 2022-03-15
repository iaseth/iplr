


export default function BatsmanInningRow ({b, index}) {
	return (
		<tr className="BatsmanInningRow">
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
