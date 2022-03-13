import {Link} from 'react-router-dom';
import OversGraph from './OversGraph';
import WicketsTable from './WicketsTable';



function PlayerDiv ({b}) {
	return (
		<div className="grow space-x-1 py-[2px]">
			{b.isCaptain() && <span style={b.for.fgStyle}>c</span>}
			<Link to={b.player.getLink()}>
				<span className="py-1 cursor-pointer text-sm border-b-2" style={b.for.bdStyle}>{b.player.fn}</span>
			</Link>
			{b.isWk() && <span style={b.for.fgStyle}>k</span>}
			{b.player.isOverseas() && <span>o</span>}
		</div>
	);
}

function PlayerRow ({b, children}) {
	return (
		<div className="border-b lg:border-x border-slate-400 px-2 py-3 flex items-center">
			<PlayerDiv b={b} />
			{children}
		</div>
	);
}

export default function Inning ({
	inning
}) {

	const batsmen = inning.batsmen.map((b, i) => {
		if (b.dnb) return <tr key={i}>
			<td><PlayerDiv b={b} /></td>
			<td className="text-xl"></td>
			<td className="text-slate-500 px-2"></td>
		</tr>;

		return (
			<tr key={i}>
				<td>
					<PlayerDiv b={b} />
				</td>
				<td className="text-xl">{b.runsString()}</td>
				<td className="text-slate-500 px-2">{b.balls}</td>
			</tr>
		);
	});

	const bowlers = inning.bowlers.map((b, i) => {
		return (
			<tr className="text-slate-500" key={i}>
				<td>
					<PlayerDiv b={b} />
				</td>
				<td>{b.overs}</td>
				<td>{b.maidens}</td>
				<td>{b.runs}</td>
				<td className="text-xl text-slate-200">{b.wickets}</td>
			</tr>
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

			<table className="w-full">
				<thead>
					<tr className="text-white px-4 py-2 border border-slate-400" style={inning.team.bgStyle}>
						<td>Batting</td>
						<td>R</td>
						<td>B</td>
					</tr>
				</thead>
				<tbody>
					{batsmen}
				</tbody>
			</table>

			<OversGraph inning={inning} />

			<div>
				<table className="w-full">
					<thead>
						<tr className="text-white px-4 py-2 border border-slate-400" style={inning.opposition.bgStyle}>
							<td>Bowling</td>
							<td>Ov</td>
							<td>M</td>
							<td>R</td>
							<td>W</td>
						</tr>
					</thead>
					<tbody>
						{bowlers}
					</tbody>
				</table>
			</div>

			<WicketsTable inning={inning} />

		</div>
	);
}
