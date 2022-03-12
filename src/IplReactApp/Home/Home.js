import {Link} from 'react-router-dom';

import {NSPointsTable, MatchCard} from '../Utils';
import CompactPointsTable from './CompactPointsTable';



export function Home ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	const finalItems = [...ipl.seasons].reverse().map((season, i) => {
		return (
			<div key={i} className="px-2 md:px-4 pt-4 pb-8 md:pb-16 md:flex">
				<div>
					<div className="px-2 py-4">
						<Link to={season.getLink()} className="block text-8xl px-2 py-8 text-center rounded duration-300 hover:bg-slate-900" style={season.winner.fgStyle}>{season.year}</Link>
					</div>
					<MatchCard match={season.final} naked={true} />
				</div>
				<div className="grow md:px-4 md:py-4">
					<CompactPointsTable pointsTable={season.pointsTable} />
				</div>
			</div>
		);
	});

	return (
		<div className="Home">
			<div className="px-2 py-12">
				<NSPointsTable pointsTable={ipl.pointsTable} />
			</div>
			<div>
				{finalItems}
			</div>
		</div>
	);
}
