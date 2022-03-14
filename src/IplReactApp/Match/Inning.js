import {Link} from 'react-router-dom';
import OversGraph from './OversGraph';
import WicketsTable from './WicketsTable';
import ExtrasTable from './ExtrasTable';
import {PlayerDiv} from './MatchUtils';
import {BattingSR, BowlingEcon} from '../Utils/SpanUtils';
import './Inning.css';



function PlayerRow ({b, children}) {
	return (
		<tr>
			<td>
				<PlayerDiv b={b} />
			</td>
			{children}
		</tr>
	);
}

function BattingScorecardRow ({b, inning}) {
	if (!b && inning) {
		return (
			<tr style={inning.team.bgStyle}>
				<td>Batsman</td>
				<td>R</td>
				<td>B</td>
				<td>4s</td>
				<td>6s</td>
				<td className="nomobile">SR</td>
			</tr>
		);
	}

	if (b.dnb) {
		return (
			<PlayerRow b={b}>
				<td className="text-xl"></td>
				<td className="text-slate-500"></td>
				<td></td>
				<td></td>
				<td className="nomobile"></td>
			</PlayerRow>
		);
	}

	return (
		<PlayerRow b={b}>
			<td className="text-base">{b.runsString()}</td>
			<td className="text-slate-500">{b.balls}</td>
			<td>{b.n4S}</td>
			<td>{b.n6S}</td>
			<td className="nomobile">
				<BattingSR sr={b.srF()} />
			</td>
		</PlayerRow>
	);
}

function BowlingScorecardRow ({b, inning}) {
	if (!b && inning) {
		return (
			<tr style={inning.opposition.bgStyle}>
				<td>Bowler</td>
				<td>Ov</td>
				<td>M</td>
				<td>R</td>
				<td>W</td>
				<td>Econ</td>
			</tr>
		);
	}

	return (
		<PlayerRow b={b}>
			<td>{b.overs}</td>
			<td>{b.maidens}</td>
			<td>{b.runs}</td>
			<td className="text-xl text-slate-200">{b.nWS}</td>
			<td>
				<BowlingEcon econ={b.econF()} />
			</td>
		</PlayerRow>
	);
}

export default function Inning ({
	inning
}) {

	const batsmen = inning.batsmen.map((b, i) => <BattingScorecardRow key={i} b={b} />);
	const bowlers = inning.bowlers.map((b, i) => <BowlingScorecardRow key={i} b={b} />);

	return (
		<div className="Inning text-white font-bold lg:w-1/2">

			<div className="px-3 py-1 border-y-8 border-zinc-800 flex items-center" style={inning.team.bgStyle}>
				<div className="text-sm font-bold grow">{inning.team.fn}</div>
				<div><span className="text-xl">{inning.runrateF(2)}</span> rpo</div>
			</div>

			<div className="flex px-4 pt-8 pb-6 border-b-8 border-zinc-800" style={inning.team.bgStyle}>
				<div className="grow py-3">
					<div className="text-6xl text-white">
						<Link to={inning.team.getLink()} className="px-4 pb-1 rounded cursor-pointer">{inning.team.abb}</Link>
					</div>
				</div>
				<div className="px-4 text-slate-200">
					<div className="text-4xl pb-2">
						<span className="text-6xl text-white">{inning.runs}</span>
						<span className="mx-1">/</span>
						<span>{inning.wkts}</span>
					</div>
					<div className="text-center">
						<span className="text-3xl text-white">{inning.overs}</span>
						<span className="text-xl ml-2">overs</span>
					</div>
				</div>
			</div>

			<table className="w-full ScorecardTable">
				<thead>
					<BattingScorecardRow inning={inning} />
				</thead>
				<tbody>
					{batsmen}
				</tbody>
			</table>

			<OversGraph inning={inning} />
			<ExtrasTable inning={inning} />
			<div className="h-6"></div>

			<div>
				<table className="w-full ScorecardTable">
					<thead>
						<BowlingScorecardRow inning={inning} />
					</thead>
					<tbody>
						{bowlers}
					</tbody>
				</table>
			</div>

			<div className="h-6"></div>
			<WicketsTable inning={inning} />
			<div className="h-12"></div>

		</div>
	);
}
