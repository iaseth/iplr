import {Link} from 'react-router-dom';

import {PlayerLink, BattingSR} from './SpanUtils';



export default function BatsmanInningRow ({rowData, index}) {
	if (rowData === undefined) {
		return <tr>
			<td></td>
			<td>Batsman</td>
			<td>R</td>
			<td>B</td>
			<td>4s</td>
			<td>6s</td>
			<td>SR</td>
		</tr>;
	}

	const b = rowData;
	return (
		<tr>
			<td>
				<Link to={b.teamInning.match.getLink()} style={b.teamInning.team.fgStyle}># {index+1}</Link>
			</td>
			<td><PlayerLink b={b} /></td>
			<td>{b.runsString()}</td>
			<td>{b.balls}</td>
			<td>{b.n4}</td>
			<td>{b.n6}</td>
			<td><BattingSR sr={b.srF()} /></td>
		</tr>
	);
}
