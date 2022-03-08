


export function Player ({
	setTitleSuffix, goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	PAGE_TYPES, setPageType,
	setYear, setMatchIndex,
	setGroundId, setPlayerId, setTeamId,
	player
}) {

	const seasonWiseBattingRecord = player.getSeasonWiseBattingRecord();
	const seasonItems = seasonWiseBattingRecord.map((r, i) => {
		const {year, record} = r;
		return (
			<tr key={i} className="bg-slate-600">
				<td>{year}</td>
				<td>{record.mats}</td>
				<td>{record.inns}</td>
				<td>{record.runs}</td>
				<td>{record.balls}</td>
				<td>{record.n4}</td>
				<td>{record.n6}</td>
				<td>{record.n50}</td>
				<td>{record.n100}</td>
				<td>{record.hs.runs}</td>
			</tr>
		);
	});

	return (
		<div className="Player">
			<div className="px-2 py-8">
				<h2 className="text-5xl py-4">{player.fn}</h2>
				<h3 className="text-xl">{player.first_match.year} to {player.last_match.year}</h3>
			</div>
			<div>
				<table>
					<tbody>
						{seasonItems}
					</tbody>
				</table>
			</div>
		</div>
	);
}
