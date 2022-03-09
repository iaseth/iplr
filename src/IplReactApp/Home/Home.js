import {MatchCard} from '../Utils';



export function Home ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	const finals = ipl.getAllFinals();
	const finalItems = [...finals].reverse().map((match, i) => {
		return (
			<div key={i} className="px-4 py-4">
				<MatchCard {...{match}} />
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
