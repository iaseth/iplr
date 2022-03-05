


export default function Inning ({inning}) {

	const batsmen = inning.batsmen.map((b, i) => {
		return (
			<div key={i} className="bg-slate-100 border-y lg:border-x border-slate-400 -mb-[1px] px-2 py-2 flex">
				<div className="grow">
					<span>{b.player.fn}</span>
				</div>
				<div>
					<span className="text-xl">{b.runs}</span>
					<span className="text-slate-600 px-2">{b.balls}</span>
				</div>
			</div>
		);
	});

	const bowlers = inning.bowlers.map((b, i) => {
		return (
			<div key={i} className="bg-slate-100 border-y lg:border-x border-slate-400 -mb-[1px] px-2 py-2 flex">
				<div className="grow">
					<span>{b.player.fn}</span>
				</div>
				<div>
					<span className="text-xl">{b.wickets}</span>
					<span className="px-2">-</span>
					<span className="text-slate-600">{b.runs}</span>
				</div>
			</div>
		);
	});

	return (
		<div className="Inning text-slate-800 font-bold grow">
			<div className="sm:flex px-4 py-8">
				<div className="grow">
					<div className="text-7xl">{inning.team.abb}</div>
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
				<div>{batsmen}</div>
			</div>

			<div className="h-4"></div>

			<div>
				<div>{bowlers}</div>
			</div>
		</div>
	);
}
