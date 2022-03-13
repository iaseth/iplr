import './MatchList.css';

import React from 'react';
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
	const [maxN, setMaxN] = React.useState(10);
	if (reverse) matches = [...matches].reverse();

	const matchListRows = matches.slice(0, maxN).map((m, i) => {
		return <MatchListRow key={i} match={m} index={matches.length - i} />;
	});

	function showMore () {
		setMaxN(maxN => maxN+10);
	}

	return (
		<div className="MatchList">
			<table>
				<tbody>
					{matchListRows}
				</tbody>
			</table>
			{maxN < matches.length && <div className="py-4">
				<button onClick={showMore} className="text-sm font-bold px-4 py-3 bg-zinc-900 hover:bg-zinc-700">Show More</button>
			</div>}
		</div>
	);
}
