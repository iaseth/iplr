import {MatchCard} from '../Utils/MatchCard';



export default function RivalryPage ({
	ipl, rivalry
}) {

	const matchItems = [...rivalry.matches].reverse().map((m, i) => <MatchCard key={i} match={m} />);

	return (
		<div className="RivalryPage">
			<div className="flex flex-wrap py-12">
				{matchItems}
			</div>
		</div>
	);
}
