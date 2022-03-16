import {Link} from 'react-router-dom';



export function PlayerTD ({player}) {
	return (
		<td>
			<Link to={player.getLink()} className="border-b-[3px] pb-1" style={player.bdStyle}>{player.fn}</Link>
		</td>
	);
};
