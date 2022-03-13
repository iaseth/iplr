import {Link} from 'react-router-dom';



export function PlayerDiv ({b}) {
	return (
		<div className="grow space-x-1 py-[3px]">
			{b.isCaptain() && <span style={b.for.fgStyle}>c</span>}
			<Link to={b.player.getLink()}>
				<span className="py-1 cursor-pointer text-sm border-b-2" style={b.for.bdStyle}>{b.player.fn}</span>
			</Link>
			{b.isWk() && <span style={b.for.fgStyle}>k</span>}
			{b.player.isOverseas() && <span>o</span>}
		</div>
	);
}
