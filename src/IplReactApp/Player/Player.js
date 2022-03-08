


export function Player ({
	setTitleSuffix, goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	PAGE_TYPES, setPageType,
	setYear, setMatchIndex,
	setGroundId, setPlayerId, setTeamId,
	player
}) {

	const seasonWiseBattingRecord = player.getSeasonWiseBattingRecord();
	const battingRecord = seasonWiseBattingRecord.map((r, i) => {
		const {year, record} = r;
		return (
			<tr key={i}>
				<td>{year}</td>
				<td>{record.mats}</td>
				<td>{record.inns}</td>
				<td>{record.runs}</td>
				<td>{record.getAvgF()}</td>
				<td>{record.getSRF()}</td>
				<td>{record.n4} | {record.n6}</td>
				<td>{record.n50} | {record.n100}</td>
				<td>{record.getHsString()}</td>
			</tr>
		);
	});

	const seasonWiseBowlingRecord = player.getSeasonWiseBowlingRecord();
	const bowlingRecord = seasonWiseBowlingRecord.map((r, i) => {
		const {year, record} = r;
		return (
			<tr key={i}>
				<td>{year}</td>
				<td>{record.mats}</td>
				<td>{record.inns}</td>
				<td>{record.balls}</td>
				<td>{record.runs}</td>
				<td>{record.wickets}</td>
				<td>{record.getAvgF()}</td>
				<td>{record.getSRF()}</td>
				<td>{record.getEconF()}</td>
				<td>{record.getBestString()}</td>
			</tr>
		);
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
