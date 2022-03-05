


export default function Inning ({
	inning, goToPlayer
}) {

	const batsmen = inning.batsmen.map((b, i) => {
		return (
			<div key={i} className="bg-slate-100 border-b lg:border-x border-slate-400 px-2 py-2 flex">
				<div className="grow">
					<span className="cursor-pointer" style={inning.team.fgStyle} onClick={() => goToPlayer(b.player.id)}>{b.player.fn}</span>
				</div>
				<div>
					<span className="text-xl">{b.runsString()}</span>
					<span className="text-slate-600 px-2">{b.balls}</span>
				</div>
			</div>
		);
	});

	const bowlers = inning.bowlers.map((b, i) => {
		return (
			<div key={i} className="bg-slate-100 border-b lg:border-x border-slate-400 px-2 py-2 flex">
				<div className="grow">
					<span className="cursor-pointer" style={inning.opposition.fgStyle} onClick={() => goToPlayer(b.player.id)}>{b.player.fn}</span>
				</div>
				<div className="text-slate-600">
					<span>{b.overs}</span>
					<span className="px-2">-</span>
					<span>{b.maidens}</span>
					<span className="px-2">-</span>
					<span>{b.runs}</span>
					<span className="px-2">-</span>
					<span className="text-xl text-slate-800">{b.wickets}</span>
				</div>
			</div>
		);
	});

	return (
		<div className="Inning text-slate-800 font-bold lg:w-1/2">
			<div className="sm:flex px-4 py-8">
				<div className="grow">
					<div className="text-7xl text-white">
						<span className="px-4 py-1 rounded" style={inning.match.playoff ? inning.team.bgStyle : inning.team.fgStyle}>{inning.team.abb}</span>
					</div>
				</div>
				<div className="px-4">
					<div className="text-5xl pb-2">
						<span className="text-7xl">{inning.runs}</span>
						<span className="mx-3 text-slate-600">/</span>
						<span className="text-slate-600">{inning.wkts}</span>
					</div>
					<div className="text-4xl">
						<span>{inning.overs}</span>
						<span className="text-2xl text-slate-600 ml-2">overs</span>
					</div>
				</div>
			</div>

			<div className="">
				<div>
					<div className="text-white px-4 py-2 border border-slate-400" style={inning.team.bgStyle}>Batting</div>
					{batsmen}
				</div>
			</div>

			<div className="h-4"></div>

			<div>
				<div>
					<div className="text-white px-4 py-2 border border-slate-400" style={inning.opposition.bgStyle}>Bowling</div>
					{bowlers}
				</div>
			</div>
		</div>
	);
}
