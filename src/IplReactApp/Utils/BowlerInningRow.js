


export default function BowlerInningRow ({b, index}) {
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
