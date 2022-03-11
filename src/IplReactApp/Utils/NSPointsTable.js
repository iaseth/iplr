import './NSPointsTable.css';



function NSPointsTableRow ({row}) {
	return (
		<tr>
			<td># {row.position}</td>
			<td style={row.team.fgStyle}>{row.team.abb}</td>
			<td>{row.matches.length}</td>
			<td>{row.wins}</td>
			<td>{row.losses}</td>
			<td>
				<span className="border-b-2 pb-[1px]" style={row.team.bdStyle}>{row.points}</span>
			</td>
			<td>{row.getNetRunRate()}</td>
		</tr>
	);
}

export function NSPointsTable ({
	pointsTable
}) {

	// non-season points-table
	// started out as just a CompactPointsTable but without separators
	// to be used on Home, Team and Ground pages

	const pointsTableRows = pointsTable.teams.map((team, i) => <NSPointsTableRow key={i} row={team} />);
	return (
		<div className="NSPointsTable">
			<table className="NSPointsTable w-full max-w-lg bg-slate-900">
				<tbody>
					{pointsTableRows}
				</tbody>
			</table>
		</div>
	);
}
