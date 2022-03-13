import './MatchList.css';

import {Link} from 'react-router-dom';



function InningCells ({inning}) {
	return (
		<>
			<td style={inning.team.fgStyle}>{inning.team.abb}</td>
			<td>{inning.runs} / {inning.wkts}</td>
			<td className="hidden md:table-cell">{inning.overs}</td>
		</>
	);
}

function MatchListRow ({match, index}) {
	return (
		<tr>
			<td>
				<Link to={match.getLink()} style={match.fgStyle}># {index}</Link>
			</td>
			<td>{match.year}</td>
			<td className="hidden md:table-cell"># {match.seasonIndex + 1}</td>
			<InningCells inning={match.firstInning} />
			<InningCells inning={match.secondInning} />
		</tr>
	);
}

export function MatchList ({matches, reverse=false}) {
	if (reverse) matches = [...matches].reverse();

	const matchListRows = matches.map((m, i) => {
		return <MatchListRow key={i} match={m} index={matches.length - i} />;
	});

	return (
		<div className="MatchList">
			<table>
				<tbody>
					{matchListRows}
				</tbody>
			</table>
		</div>
	);
}
