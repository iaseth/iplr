import {Link} from 'react-router-dom';

import {NSPointsTable} from '../Utils';
import SeasonBox from './SeasonBox';



export function Home ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	const finalItems = [...ipl.seasons].reverse().map((season, i) => <SeasonBox key={i} season={season} />);

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
