import {Link} from 'react-router-dom';



export function RivalryCard ({rivalry}) {
	const RivalryScore = ({score}) => <div className="text-5xl font-bold py-4">{score}</div>;
	const RivalryTeamName = ({team}) => <div className="text-xl font-bold" style={team.fgStyle}>{team.abb}</div>;

	return (
		<div className="RivalryCard px-4 py-4">
			<Link to={rivalry.getLink()} className="block md:w-64 px-4 py-6 rounded bg-slate-900 border-2 border-slate-600 duration-300 hover:bg-slate-800">
				<div className="flex px-4">
					<div className="grow">
						<RivalryScore score={rivalry.t1Wins} />
						<RivalryTeamName team={rivalry.t1} />
					</div>
					<div className="grow">
						<RivalryScore score={rivalry.t2Wins} />
						<RivalryTeamName team={rivalry.t2} />
					</div>
				</div>
				<div className="hidden">
					<h4>{rivalry.getLength()} matches</h4>
				</div>
			</Link>
		</div>
	);
}
