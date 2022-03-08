


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
			<tr key={i}>
				<td>{year}</td>
				<td>{record.mats}</td>
				<td>{record.inns}</td>
				<td>{record.runs}</td>
				<td>{record.getAvgF()}</td>
				<td>{record.getSRF()}</td>
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
				<table className="iplr-table">
					<thead>
						<tr>
							<td>Year</td>
							<td>M</td>
							<td>I</td>
							<td>Runs</td>
							<td>Avg</td>
							<td>SR</td>
							<td>4s</td>
							<td>6s</td>
							<td>50s</td>
							<td>100s</td>
							<td>HS</td>
						</tr>
					</thead>
					<tbody>
						{seasonItems}
					</tbody>
				</table>
			</div>
		</div>
	);
}
