import {MatchCard} from '../Utils';

import CompactPointsTable from './CompactPointsTable';



export function Home ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	const finalItems = [...ipl.seasons].reverse().map((season, i) => {
		return (
			<div key={i} className="px-4 py-4 flex">
				<MatchCard match={season.final} />
				<CompactPointsTable pointsTable={season.pointsTable} />
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
