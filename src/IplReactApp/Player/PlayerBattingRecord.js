import {PSTHeading} from './PlayerUtils';
import BattingRecordRow from './BattingRecordRow';



export default function PlayerBattingRecord ({player}) {

	const battingRecord = player.getSeasonWiseBattingRecord().map((r, i) => {
		return <BattingRecordRow key={i} year={r.year} record={r.record} />;
	});

	const positionWiseBattingRecord = player.getPositionWiseBattingRecord().map((r, i) => {
		return <BattingRecordRow key={i} position={r.position} record={r.record} />;
	});

	const forTeamBattingItems = player.getForTeamWiseBattingRecord().map((r, i) => {
		return <BattingRecordRow key={i} forTeam={r.team} record={r.record} />;
	});

	const vsTeamBattingItems = player.getVsTeamWiseBattingRecord().map((r, i) => {
		return <BattingRecordRow key={i} vsTeam={r.team} record={r.record} />;
	});

	return (
		<div className="PlayerBattingRecord">

			<div className="IPLRTable">
				<PSTHeading>Batting record</PSTHeading>
				<table class="IPLRTable">
					<thead>
						<BattingRecordRow year={true} />
					</thead>
					<tbody>
						{battingRecord}
					</tbody>
				</table>
			</div>

			{player.hasEverBatted() && <div className="IPLRTable">
				<table class="IPLRTable">
					<thead>
						<BattingRecordRow position={true} />
					</thead>
					<tbody>
						{positionWiseBattingRecord}
					</tbody>
				</table>
			</div>}

			{player.hasEverBatted() && <div className="IPLRTable">
				<table class="IPLRTable">
					<thead>
						<BattingRecordRow forTeam={true} />
					</thead>
					<tbody>{forTeamBattingItems}</tbody>
				</table>
			</div>}

			{player.hasEverBatted() && <div className="IPLRTable">
				<table class="IPLRTable">
					<thead>
						<BattingRecordRow vsTeam={true} />
					</thead>
					<tbody>{vsTeamBattingItems}</tbody>
				</table>
			</div>}

		</div>
	);
}
