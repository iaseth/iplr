


export default function PointsTable ({season}) {
	const teamRows = season.pointsTable.teams.map((team, i) => {
		return (
			<>
				{(i === 2 || i === 4) && <div className="h-1"></div>}
				<div key={i} className="Row flex items-center bg-slate-900 px-3 py-3 space-x-4">
					<div className="w-1/2">
						<span className="py-1 border-b-2" style={team.team.bdStyle}>{team.team.fn}</span>
					</div>
					<div>{team.matches.length}</div>
					<div>{team.wins}</div>
					<div>{team.losses}</div>
					<div className="text-base text-slate-100">{team.points}</div>
					<div className="flex space-x-4">
						<div>{team.getForRunRate()}</div>
						<div>{team.getVsRunRate()}</div>
					</div>
					<div>{team.getNetRunRate()}</div>
				</div>
			</>
		);
	});

	return (
		<div className="PointsTable text-slate-200">
			<div className="space-y-1 font-bold text-sm">
				{teamRows}
			</div>
		</div>
	);
}
