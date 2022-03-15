import {Link} from 'react-router-dom';

import {PlayerLink, BowlingEcon} from './SpanUtils';



export default function BowlerInningRow ({rowData, index}) {
	if (rowData === undefined) {
		return <tr>
			<td></td>
			<td>Bowler</td>
			<td>W</td>
			<td>R</td>
			<td>Ov</td>
			<td>Econ</td>
		</tr>;
	}

	const b = rowData;
	return (
		<tr>
			<td>
				<Link to={b.teamInning.match.getLink()} style={b.teamInning.team.fgStyle}># {index+1}</Link>
			</td>
			<td><PlayerLink b={b} /></td>
			<td>{b.wickets}</td>
			<td>{b.runs}</td>
			<td>{b.overs}</td>
			<td><BowlingEcon econ={b.econF()} /></td>
		</tr>
	);
}
