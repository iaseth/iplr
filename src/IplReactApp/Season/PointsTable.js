import React from 'react';
import {Link} from 'react-router-dom';

import './PointsTable.css';



export default function PointsTable ({season}) {
	const teamRows = season.pointsTable.rows.map((row, i) => {
		return (
			<tr key={i} className="PointsTableRow items-center bg-slate-900">
				<td># {row.position}</td>
				<td className="w-1/2">
					<Link to={row.team.getLink()} className="py-1 border-b-2" style={row.team.bdStyle}>{row.team.fn}</Link>
				</td>
				<td>{row.matches.length}</td>
				<td>{row.wins}</td>
				<td>{row.losses}</td>
				<td className="text-base text-slate-100">{row.points}</td>
				<td>{row.getForRunRate()}</td>
				<td>{row.getVsRunRate()}</td>
				<td>{row.getNetRunRate()}</td>
			</tr>
		);
	});

	return (
		<div className="PointsTable text-slate-200">
			<div className="font-bold text-sm py-12">
				<table className="mx-auto">
					<tbody>
						{teamRows}
					</tbody>
				</table>
			</div>
		</div>
	);
}
