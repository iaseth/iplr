import {MatchCard} from '../Utils';

import CompactPointsTable from './CompactPointsTable';



export function Home ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	const finalItems = [...ipl.seasons].reverse().map((season, i) => {
		return (
			<div key={i} className="px-4 py-4 md:flex">
				<div>
					<div>
						<h1 className="text-6xl px-4 pt-8 pb-4 text-center" style={season.winner.fgStyle}>{season.year}</h1>
					</div>
					<MatchCard match={season.final} />
				</div>
				<div className="grow md:px-4 md:py-4">
					<CompactPointsTable pointsTable={season.pointsTable} />
				</div>
			</div>
		);
	});

	return (
		<div className="Home">
			<div>
				{finalItems}
			</div>
		</div>
	);
}
