import React from 'react';
import {useParams} from 'react-router-dom';

import {BattingRecordRow} from '../Utils';
import {BowlingRecordRow} from '../Utils';



export function Player ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	let params = useParams();
	let player = null;
	if (params.playerPath) {
		player = ipl.getPlayerFromPath(params.playerPath);
	}

	// console.log(`Player: {id: ${player.id}, index: ${player.index}}`);

	React.useEffect(function () {
		// console.log(`Set current page to '${player.getLink()}'`);
		setCurrentPage(player);
	}, [setCurrentPage, player]);

	React.useEffect(function () {
		// console.log(`Set current title-suffix to '${player.fn}'`);
		setTitleSuffix(player.fn);
	}, [setTitleSuffix, player]);

	const seasonWiseBattingRecord = player.getSeasonWiseBattingRecord();
	const battingRecord = seasonWiseBattingRecord.map((r, i) => {
		const {year, record} = r;
		const props = {
			year, record
		};

		return <BattingRecordRow {...props} key={i} />;
	});

	const positionWiseBattingRecord = player.getPositionWiseBattingRecord().map((r, i) => {
		const {position, record} = r;
		const props = {
			position, record
		};

		return <BattingRecordRow {...props} key={i} />;
	});

	const seasonWiseBowlingRecord = player.getSeasonWiseBowlingRecord();
	const bowlingRecord = seasonWiseBowlingRecord.map((r, i) => {
		const {year, record} = r;
		const props = {
			year, record
		};

		return <BowlingRecordRow {...props} key={i} />;
	});

	return (
		<div className="Player">

			<div className="px-2 py-8">
				<h2 className="text-5xl py-4">{player.fn}</h2>
				<h3 className="text-xl">{player.first_match.year} to {player.last_match.year}</h3>
			</div>

			<div className="iplr-table">
				<table>
					<thead>
						<BattingRecordRow year={true} />
					</thead>
					<tbody>
						{battingRecord}
					</tbody>
				</table>
			</div>

			<div className="iplr-table">
				<table>
					<thead>
						<BattingRecordRow position={true} />
					</thead>
					<tbody>
						{positionWiseBattingRecord}
					</tbody>
				</table>
			</div>

			<div className="iplr-table">
				<table>
					<thead>
						<BowlingRecordRow year={true} />
					</thead>
					<tbody>
						{bowlingRecord}
					</tbody>
				</table>
			</div>

		</div>
	);
}
