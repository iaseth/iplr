import './ExtrasTable.css';



export default function ExtrasTable ({inning}) {
	const extras = inning.extras;

	return (
		<div className="ExtrasTable">
			<h2 className="px-3 py-2 text-base" style={inning.team.bgStyle}>ExtrasTable</h2>
			<table className="ExtrasTable">
				<thead>
					<tr>
						<td>Byes</td>
						<td>{extras.b}</td>
						<td>Legbyes</td>
						<td>{extras.lb}</td>
					</tr>
					<tr>
						<td>Wides</td>
						<td>{extras.wd}</td>
						<td>Noballs</td>
						<td>{extras.nb}</td>
					</tr>
					<tr>
						<td>Penalty</td>
						<td>{extras.p}</td>
						<td>Total</td>
						<td>{inning.totalExtras}</td>
					</tr>
				</thead>
			</table>
		</div>
	);
}
