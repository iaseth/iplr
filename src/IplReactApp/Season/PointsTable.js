import React from 'react';

import './PointsTable.css';



export default function PointsTable ({season}) {
	const teamRows = season.pointsTable.teams.map((team, i) => {
		return (
			<tr key={i} className="PointsTableRow items-center bg-slate-900">
				<td className="w-1/2">
					<span className="py-1 border-b-2" style={team.team.bdStyle}>{team.team.fn}</span>
				</td>
				<td>{team.matches.length}</td>
				<td>{team.wins}</td>
				<td>{team.losses}</td>
				<td className="text-base text-slate-100">{team.points}</td>
				<td>{team.getForRunRate()}</td>
				<td>{team.getVsRunRate()}</td>
				<td>{team.getNetRunRate()}</td>
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
