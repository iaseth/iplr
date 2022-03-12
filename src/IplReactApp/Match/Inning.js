import {Link} from 'react-router-dom';



function OversGraph ({inning}) {
	const overItems = inning.overHistory.overs.map((ov, i) => {
		const style = {
			height: (ov.getRuns() * 10) + "px",
			borderColor: inning.team.color
		};
		return (
			<div className="bg-zinc-800 border-2 grow" style={style}></div>
		);
	});

	return (
		<div className="OversGraph py-4">
			<div className="h-64 px-2 pt-2 flex items-end space-x-1 bg-zinc-900 border-4 border-zinc-700">
				{overItems}
			</div>
		</div>
	);
}

function PlayerRow ({b, children}) {
	return (
		<div className="border-b lg:border-x border-slate-400 px-2 py-3 flex items-center">
			<div className="grow space-x-1 py-[2px]">
				{b.isCaptain() && <span style={b.for.fgStyle}>c</span>}
				<Link to={b.player.getLink()}>
					<span className="py-1 cursor-pointer text-sm border-b-2" style={b.for.bdStyle}>{b.player.fn}</span>
				</Link>
				{b.isWk() && <span style={b.for.fgStyle}>k</span>}
				{b.player.isOverseas() && <span>o</span>}
			</div>
			{children}
		</div>
	);
}

export default function Inning ({
	inning
}) {

	const batsmen = inning.batsmen.map((b, i) => {
		if (b.dnb) return <PlayerRow key={i} {...{b}}></PlayerRow>;

		return (
			<PlayerRow key={i} {...{b}}>
				<div>
					<span className="text-xl">{b.runsString()}</span>
					<span className="text-slate-500 px-2">{b.balls}</span>
				</div>
			</PlayerRow>
		);
	});

	const bowlers = inning.bowlers.map((b, i) => {
		return (
			<PlayerRow key={i} {...{b}}>
				<div className="text-slate-500">
					<span>{b.overs}</span>
					<span className="px-2">-</span>
					<span>{b.maidens}</span>
					<span className="px-2">-</span>
					<span>{b.runs}</span>
					<span className="px-2">-</span>
					<span className="text-xl text-slate-200">{b.wickets}</span>
				</div>
			</PlayerRow>
		);
	});

	return (
		<div className="Inning text-white font-bold lg:w-1/2">
			<div className="flex px-4 pt-8 pb-5">
				<div className="grow py-3">
					<div className="text-6xl text-white">
						<Link to={inning.team.getLink()} className="px-4 pb-1 rounded cursor-pointer" style={inning.match.playoff ? inning.team.bgStyle : inning.team.fgStyle}>{inning.team.abb}</Link>
					</div>
				</div>
				<div className="px-4">
					<div className="text-4xl pb-2">
						<span className="text-6xl">{inning.runs}</span>
						<span className="mx-3 text-slate-400">/</span>
						<span className="text-slate-400">{inning.wkts}</span>
					</div>
					<div className="text-4xl">
						<span>{inning.overs}</span>
						<span className="text-2xl text-slate-400 ml-2">overs</span>
					</div>
				</div>
			</div>

			<div className="">
				<div>
					<div className="text-white px-4 py-2 border border-slate-400" style={inning.team.bgStyle}>Batting</div>
					{batsmen}
				</div>
			</div>

			<OversGraph inning={inning} />

			<div>
				<div>
					<div className="text-white px-4 py-2 border border-slate-400" style={inning.opposition.bgStyle}>Bowling</div>
					{bowlers}
				</div>
			</div>
		</div>
	);
}
