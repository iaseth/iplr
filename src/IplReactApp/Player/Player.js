import React from 'react';
import {useParams} from 'react-router-dom';

import {Four04} from '../Four04';

import PlayerBattingRecord from './PlayerBattingRecord';
import PlayerBowlingRecord from './PlayerBowlingRecord';



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

	return (
		<div className="Player">

			<div className="px-4 pt-8 max-w-4xl mx-auto">
				<h2 className="text-4xl py-4 font-bold">{player.fn}</h2>
				<h3 className="text-base font-bold py-6">
					<span className="bg-slate-900 px-4 py-3 rounded border-2" style={player.firstMatch.season.winner.bdStyle}>{player.firstMatch.year}</span>
					<span className="px-3">to</span>
					<span className="bg-slate-900 px-4 py-3 rounded border-2" style={player.lastMatch.season.winner.bdStyle}>{player.lastMatch.year}</span>
				</h3>
			</div>

			<PlayerBattingRecord player={player} />
			<PlayerBowlingRecord player={player} />

		</div>
	);
}
