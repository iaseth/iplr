import {Link} from 'react-router-dom';



export default function RivalryTeam ({
	ipl, team
}) {

	const RivalryScore = ({score}) => <div className="text-5xl font-bold py-4">{score}</div>;
	const RivalryTeamName = ({team}) => <div className="text-xl font-bold" style={team.fgStyle}>{team.abb}</div>;

	const rivalryItems = team.rivalries.map((r, i) => {
		return (
			<div key={i} className="p-4">
				<Link to={r.getLink()} className="block md:w-64 px-4 py-6 rounded bg-slate-900 border-2 border-slate-600 duration-300 hover:bg-slate-800">
					<div className="flex px-4">
						<div className="grow">
							<RivalryScore score={r.t1Wins} />
							<RivalryTeamName team={r.t1} />
						</div>
						<div className="grow">
							<RivalryScore score={r.t2Wins} />
							<RivalryTeamName team={r.t2} />
						</div>
					</div>
					<div className="hidden">
						<h4>{r.getLength()} matches</h4>
					</div>
				</Link>
			</div>
		);
	});

	return (
		<div className="Rivalry">
			<div className="md:flex flex-wrap justify-center px-4 py-4 select-none text-center font-bold">
				{rivalryItems}
			</div>
		</div>
	);
}
