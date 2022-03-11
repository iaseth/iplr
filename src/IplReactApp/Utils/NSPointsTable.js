import './NSPointsTable.css';



function NSPointsTableRow ({row}) {
	if (!row) {
		return (
			<tr>
				<td></td>
				<td>Team</td>
				<td>M</td>
				<td>W</td>
				<td>L</td>
				<td>Win %</td>
				<td>Points</td>
				<td>NRR</td>
			</tr>
		);
	}

	return (
		<tr>
			<td># {row.position}</td>
			<td style={row.team.fgStyle}>{row.team.abb}</td>
			<td>{row.matches.length}</td>
			<td>{row.wins}</td>
			<td>{row.losses}</td>
			<td>{row.getWinPercentF()}</td>
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
				<thead>
					<NSPointsTableRow />
				</thead>
				<tbody>
					{pointsTableRows}
				</tbody>
			</table>
		</div>
	);
}
