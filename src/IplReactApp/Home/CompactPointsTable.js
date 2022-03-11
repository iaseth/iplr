import {Link} from 'react-router-dom';

import './CompactPointsTable.css';



function CompactPointsTableRow ({row}) {
	return (
		<tr className="CompactPointsTableRow">
			<td># {row.position}</td>
			<td>
				<Link to={row.team.getLink()} style={row.team.fgStyle}>{row.team.abb}</Link>
			</td>
			<td>{row.matches.length}</td>
			<td>{row.wins} | {row.losses}</td>
			<td>
				<span className="border-b-2 pb-[1px]" style={row.team.bdStyle}>{row.points}</span>
			</td>
			<td>{row.getNetRunRate()}</td>
		</tr>
	);
}

export default function CompactPointsTable ({pointsTable, separator=true}) {
	const pointsTableRows = pointsTable.rows.map((row, i) => <CompactPointsTableRow key={i} row={row} />);
	return (
		<div className="CompactPointsTable">
			<table className="CompactPointsTable w-full max-w-lg bg-slate-900">
				<tbody>
					{pointsTableRows}
				</tbody>
			</table>
		</div>
	);
}
