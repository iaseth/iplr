import {Link} from 'react-router-dom';
import './OversGraph.css';



export default function OversGraph ({inning}) {
	const overItems = inning.overHistory.overs.map((ov, i) => {
		const style = {
			height: ov.getHeightPercent(),
			borderColor: inning.team.color
		};
		return (
			<div key={i} style={style}></div>
		);
	});

	const Markings = <div className="bg-zinc-800 h-full w-6"></div>;

	return (
		<div className="OversGraph py-4">
			<div className="h-64 flex bg-zinc-900 border-4 border-zinc-700">
				{Markings}
				<div className="OversGraphInner grow flex items-end h-full px-2 pt-2">
					{overItems}
				</div>
				{Markings}
			</div>
		</div>
	);
}
