import React from 'react';
import {useParams} from 'react-router-dom';

import {Four04} from '../Four04';



export function Ground ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	// console.log(`Ground: {id: ${ground.id}, index: ${ground.index}}`);
	let ground = null;
	let params = useParams();
	if (params.groundPath) {
		ground = ipl.getGroundFromPath(params.groundPath);
	}

	React.useEffect(function () {
		if (ground) setTitleSuffix(ground.fn);
	}, [setTitleSuffix, ground]);

	if (ground === null) return <Four04 {...{setTitleSuffix}} />;

	return (
		<div className="Ground">
			<h2>Ground</h2>
		</div>
	);
}
