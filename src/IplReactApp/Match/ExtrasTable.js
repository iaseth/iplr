import './ExtrasTable.css';



export default function ExtrasTable ({inning}) {
	const extras = inning.extras;

	return (
		<div className="ExtrasTable text-sm">
			<h2 className="px-3 py-2" style={inning.team.bgStyle}>Extras</h2>
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
						<td className="text-base" style={inning.team.fgStyle}>TOTAL</td>
						<td>{inning.totalExtras}</td>
					</tr>
				</thead>
			</table>
		</div>
	);
}
