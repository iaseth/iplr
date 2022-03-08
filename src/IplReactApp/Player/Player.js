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
						<tr>
							<td>Year</td>
							<td>M</td>
							<td>I</td>
							<td>Runs</td>
							<td>Avg</td>
							<td>SR</td>
							<td>4s/6s</td>
							<td>50/100</td>
							<td>HS</td>
						</tr>
					</thead>
					<tbody>
						{battingRecord}
					</tbody>
				</table>
			</div>

			<div className="iplr-table">
				<table>
					<tbody>
						{positionWiseBattingRecord}
					</tbody>
				</table>
			</div>

			<div className="iplr-table">
				<table>
					<thead>
						<tr>
							<td>Year</td>
							<td>M</td>
							<td>I</td>
							<td>Balls</td>
							<td>Runs</td>
							<td>Wkts</td>
							<td>Avg</td>
							<td>SR</td>
							<td>Econ</td>
							<td>Best</td>
						</tr>
					</thead>
					<tbody>
						{bowlingRecord}
					</tbody>
				</table>
			</div>

		</div>
	);
}
