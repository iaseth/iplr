import {Link} from 'react-router-dom';



function BestBatsmanAndBowler ({inning}) {
	if (!inning.actuallyHappened()) {
		return null;
	}

	const bat = inning.bestBatsman;
	const bowl = inning.bestBowler;

	return (
		<div className="space-y-1">
			<div className="px-2 py-3 bg-zinc-900 flex items-center rounded">
				<div className="grow">
					<Link to={bat.player.getLink()} className="inline-block border-b-2 pb-1" style={inning.team.bdStyle}>{bat.player.fn}</Link>
				</div>
				<div className="space-x-3">
					<span className="text-base">{bat.runsString()}</span>
					<span className="text-slate-400">{bat.balls}</span>
				</div>
			</div>
			<div className="ml-4 px-2 py-3 bg-zinc-900 flex items-center rounded">
				<div className="grow">
					<Link to={bowl.player.getLink()} className="inline-block border-b-2 pb-1" style={inning.opposition.bdStyle}>{bowl.player.fn}</Link>
				</div>
				<div className="space-x-3">
					<span className="text-base">{bowl.getString()}</span>
					<span className="text-slate-400">{bowl.overs}</span>
				</div>
			</div>
		</div>
	);
}

function InningBox ({inning}) {
	return (
		<div className="grow text-center font-bold">
			<div className="text-xl" style={inning.team.fgStyle}>{inning.team.abb}</div>
			<div className="text-xl pt-2 pb-3">
				<span className="text-5xl">{inning.runs}</span>
				<span className="px-1 text-slate-500">/</span>
				<span className="text-slate-500">{inning.wkts}</span>
			</div>
			<div className="text-base">
				<span className="text-slate-200 mr-1">{inning.overs}</span>
				<span className="text-slate-500">overs</span>
			</div>
		</div>
	);
}

export function MatchCard ({match, topStuff=true, bottomStuff=true}) {

	return (
		<div className="MatchCard mb-6 md:mb-12">
			{topStuff && <div className="px-2 py-3 text-slate-200 text-sm font-bold flex space-x-2">
				<div className="px-4 py-2 bg-zinc-900">{match.season.year}</div>
				<div className="px-4 py-2 bg-zinc-900"># {match.seasonIndex + 1}</div>
			</div>}
			<Link to={match.getLink()} className="block select-none sm:mx-2 px-4 py-5 sm:w-80 bg-zinc-900 text-slate-200 border-2 border-zinc-600 rounded cursor-pointer hover:bg-zinc-800"
				style={match.bdStyle}>
				<div className="flex">
					<InningBox inning={match.firstInning} />
					<InningBox inning={match.secondInning} />
				</div>
			</Link>
			{bottomStuff && <div className="px-2 py-3 text-slate-200 text-sm font-bold space-y-1">
				<BestBatsmanAndBowler inning={match.firstInning} />
				<BestBatsmanAndBowler inning={match.secondInning} />
			</div>}
		</div>
	);
}
