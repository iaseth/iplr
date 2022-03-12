import React from 'react';
import {Link} from 'react-router-dom';

import './PointsTable.css';



export default function PointsTable ({season}) {
	const teamRows = season.pointsTable.rows.map((row, i) => {
		return (
			<tr key={i} className="PointsTableRow items-center bg-zinc-900">
				<td># {row.position}</td>
				<td className="md:w-1/2">
					<Link to={row.team.getLink()} className="py-1 border-b-2 hidden md:table-cell" style={row.team.bdStyle}>{row.team.fn}</Link>
					<Link to={row.team.getLink()} className="py-1 md:hidden" style={row.team.fgStyle}>{row.team.abb}</Link>
				</td>
				<td>{row.matches.length}</td>
				<td>{row.wins}</td>
				<td>{row.losses}</td>
				<td className="text-base text-slate-100">{row.points}</td>
				<td className="hidden md:table-cell">{row.getForRunRate()}</td>
				<td className="hidden md:table-cell">{row.getVsRunRate()}</td>
				<td>{row.getNetRunRate()}</td>
			</tr>
		);
	});

	return (
		<div className="PointsTable text-slate-200">
			<div className="font-bold text-sm py-12">
				<table className="mx-auto w-full max-w-3xl">
					<tbody>
						{teamRows}
					</tbody>
				</table>
			</div>
		</div>
	);
}
