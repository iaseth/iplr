import React from 'react';
import {useParams} from 'react-router-dom';

import Inning from './Inning';



export function Match ({
	ipl, setTitleSuffix,
	PAGE_TYPES, setPageType
}) {

	let params = useParams();
	let season = null;
	let match = null;
	if (params.year && params.matchNumber) {
		let year = parseInt(params.year);
		let matchNumber = parseInt(params.matchNumber);
		season = ipl.getSeason(year);
		match = season.matches[matchNumber-1]
	}

	React.useEffect(function () {
		setTitleSuffix(`${match.year} | M${match.seasonIndex+1}`);
	}, [setTitleSuffix, match]);

	return (
		<div className="Match pb-12">
			<div className="lg:flex lg:space-x-4">
				<Inning inning={match.firstInning} />
				<Inning inning={match.secondInning} />
			</div>
		</div>
	);
}
