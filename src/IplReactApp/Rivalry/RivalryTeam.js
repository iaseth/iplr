import {Link} from 'react-router-dom';

import {RivalryCard} from '../Utils';



export default function RivalryTeam ({
	ipl, team
}) {

	const rivalryItems = team.rivalries.map((r, i) => <RivalryCard key={i} rivalry={r} />);

	return (
		<div className="Rivalry">
			<div className="md:flex flex-wrap justify-center px-4 py-4 select-none text-center font-bold">
				{rivalryItems}
			</div>
		</div>
	);
}
