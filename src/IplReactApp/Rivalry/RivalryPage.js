import {MatchCard} from '../Utils/MatchCard';
import CompactPointsTable from '../Home/CompactPointsTable';

import FrontMatter from '../FrontMatter';
import {MatchList} from '../Utils/MatchList';



export default function RivalryPage ({
	ipl, rivalry
}) {

	const matchItems = [...rivalry.matches].reverse().map((m, i) => <MatchCard key={i} match={m} />);

	return (
		<div className="RivalryPage">
			<FrontMatter title={rivalry.getFullName()}></FrontMatter>
			<div className="px-4 py-8 flex">
				<div className="grow mx-auto">
					<CompactPointsTable pointsTable={rivalry.pointsTable} />
				</div>
			</div>
			<div>
				<MatchList matches={rivalry.matchesReversed} />
			</div>
			<div className="md:flex flex-wrap px-4 md:px-2 py-12">
				{matchItems}
			</div>
		</div>
	);
}
