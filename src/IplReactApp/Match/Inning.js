import {Link} from 'react-router-dom';
import OversGraph from './OversGraph';
import WicketsTable from './WicketsTable';
import {PlayerDiv} from './MatchUtils';
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

export default function Inning ({
	inning
}) {

	const batsmen = inning.batsmen.map((b, i) => {
		if (b.dnb) return <PlayerRow key={i} b={b}>
			<td className="text-xl"></td>
			<td className="text-slate-500"></td>
			<td></td>
			<td></td>
		</PlayerRow>;

		return (
			<PlayerRow key={i} b={b}>
				<td className="text-base">{b.runsString()}</td>
				<td className="text-slate-500">{b.balls}</td>
				<td>{b.n4}</td>
				<td>{b.n6}</td>
			</PlayerRow>
		);
	});

	const bowlers = inning.bowlers.map((b, i) => {
		return (
			<PlayerRow key={i} b={b}>
				<td>{b.overs}</td>
				<td>{b.maidens}</td>
				<td>{b.runs}</td>
				<td className="text-xl text-slate-200">{b.wickets}</td>
			</PlayerRow>
		);
	});

	return (
		<div className="Inning text-white font-bold lg:w-1/2">

			<div className="flex px-4 pt-8 pb-6 border-y-8 border-zinc-800" style={inning.team.bgStyle}>
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
					<tr style={inning.team.bgStyle}>
						<td>Batting</td>
						<td>R</td>
						<td>B</td>
						<td>4s</td>
						<td>6s</td>
					</tr>
				</thead>
				<tbody>
					{batsmen}
				</tbody>
			</table>

			<OversGraph inning={inning} />

			<div>
				<table className="w-full ScorecardTable">
					<thead>
						<tr style={inning.opposition.bgStyle}>
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
