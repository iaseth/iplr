


function InningBox ({inning}) {
	return (
		<div className="grow text-center font-bold">
			<div className="text-2xl" style={inning.team.fgStyle}>{inning.team.abb}</div>
			<div className="text-2xl py-2">
				<span className="text-5xl">{inning.runs}</span>
				<span className="px-1 text-slate-500">/</span>
				<span className="text-slate-500">{inning.wkts}</span>
			</div>
		</div>
	);
}

export function MatchCard ({match, goToMatch}) {

	return (
		<div className="MatchCard mr-4 mb-4 p-4 w-80 bg-white border border-slate-200 text-slate-800 cursor-pointer" onClick={() => goToMatch(match.index)}>
			<div className="flex">
				<InningBox inning={match.firstInning} />
				<InningBox inning={match.secondInning} />
			</div>
		</div>
	);
}
