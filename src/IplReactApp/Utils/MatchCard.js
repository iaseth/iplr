


function InningBox ({inning}) {
	return (
		<div className="grow text-center font-bold">
			<div className="text-2xl" style={inning.team.fgStyle}>{inning.team.abb}</div>
			<div className="text-2xl py-2">
				<span className="text-5xl">{inning.runs}</span>
				<span className="px-1 text-slate-500">/</span>
				<span className="text-slate-500">{inning.wkts}</span>
			</div>
			<div className="text-2xl">
				<span className="text-xl text-slate-200 mr-1">{inning.overs}</span>
				<span className="text-base text-slate-500">overs</span>
			</div>
		</div>
	);
}

export function MatchCard ({match, goToMatch}) {

	return (
		<div className="MatchCard">
			<div className="py-2 text-slate-200 text-sm font-bold flex space-x-2">
				<div className="px-3 py-1 bg-slate-900">{match.season.year}</div>
				<div className="px-3 py-1 bg-slate-900">#{match.seasonIndex + 1}</div>
			</div>
			<div className="mr-4 mb-4 px-4 py-5 w-80 bg-slate-900 text-white border border-slate-600 cursor-pointer" onClick={() => goToMatch(match.index)}>
				<div className="flex">
					<InningBox inning={match.firstInning} />
					<InningBox inning={match.secondInning} />
				</div>
			</div>
		</div>
	);
}
