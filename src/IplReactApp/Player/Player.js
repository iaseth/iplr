import React from 'react';
import {useParams} from 'react-router-dom';

import {Four04} from '../Four04';
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
		if (player) setCurrentPage(player);
	}, [setCurrentPage, player]);

	React.useEffect(function () {
		// console.log(`Set current title-suffix to '${player.fn}'`);
		if (player) setTitleSuffix(player.fn);
	}, [setTitleSuffix, player]);

	if (player === null) return <Four04 {...{setTitleSuffix}} />;

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

	const forTeamBattingItems = player.getForTeamWiseBattingRecord().map((r, i) => {
		return <BattingRecordRow key={i} forTeam={r.team} record={r.record} />;
	});

	const vsTeamBattingItems = player.getVsTeamWiseBattingRecord().map((r, i) => {
		return <BattingRecordRow key={i} vsTeam={r.team} record={r.record} />;
	});

	const seasonWiseBowlingRecord = player.getSeasonWiseBowlingRecord();
	const bowlingRecord = seasonWiseBowlingRecord.map((r, i) => {
		const {year, record} = r;
		const props = {
			year, record
		};
		return <BowlingRecordRow {...props} key={i} />;
	});

	const positionWiseBowlingRecord = player.getPositionWiseBowlingRecord().map((r, i) => {
		const {position, record} = r;
		const props = {
			position, record
		};
		return <BowlingRecordRow {...props} key={i} />;
	});

	return (
		<div className="Player">

			<div className="px-4 pt-8">
				<h2 className="text-4xl py-4 font-bold">{player.fn}</h2>
				<h3 className="text-xl font-bold">{player.first_match.year} to {player.last_match.year}</h3>
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

			{player.hasEverBatted() && <div className="iplr-table">
				<table>
					<thead>
						<BattingRecordRow position={true} />
					</thead>
					<tbody>
						{positionWiseBattingRecord}
					</tbody>
				</table>
			</div>}

			{player.hasEverBatted() && <div className="iplr-table">
				<table>
					<thead>
						<BattingRecordRow forTeam={true} />
					</thead>
					<tbody>{forTeamBattingItems}</tbody>
				</table>
			</div>}

			{player.hasEverBatted() && <div className="iplr-table">
				<table>
					<thead>
						<BattingRecordRow vsTeam={true} />
					</thead>
					<tbody>{vsTeamBattingItems}</tbody>
				</table>
			</div>}

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

			{player.hasEverBowled() && <div className="iplr-table">
				<table>
					<thead>
						<BowlingRecordRow position={true} />
					</thead>
					<tbody>
						{positionWiseBowlingRecord}
					</tbody>
				</table>
			</div>}

		</div>
	);
}
