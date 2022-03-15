import {PSTHeading} from './PlayerUtils';
import {BowlingRecordRow} from '../Utils';



export default function PlayerBowlingRecord ({player}) {

	const bowlingRecord = player.getSeasonWiseBowlingRecord().map((r, i) => {
		return <BowlingRecordRow key={i} year={r.year} record={r.record} />;
	});

	const positionWiseBowlingRecord = player.getPositionWiseBowlingRecord().map((r, i) => {
		return <BowlingRecordRow key={i} position={r.position} record={r.record} />;
	});

	const forTeamBowlingItems = player.getForTeamWiseBowlingRecord().map((r, i) => {
		return <BowlingRecordRow key={i} forTeam={r.team} record={r.record} />;
	});

	const vsTeamBowlingItems = player.getVsTeamWiseBowlingRecord().map((r, i) => {
		return <BowlingRecordRow key={i} vsTeam={r.team} record={r.record} />;
	});

	return (
		<div className="PlayerBowlingRecord">

			<div className="IPLRTable">
				<PSTHeading>Bowling record</PSTHeading>
				<table class="IPLRTable">
					<thead>
						<BowlingRecordRow year={true} />
					</thead>
					<tbody>
						{bowlingRecord}
					</tbody>
				</table>
			</div>

			{player.hasEverBowled() && <div className="IPLRTable">
				<table class="IPLRTable">
					<thead>
						<BowlingRecordRow position={true} />
					</thead>
					<tbody>
						{positionWiseBowlingRecord}
					</tbody>
				</table>
			</div>}

			{player.hasEverBowled() && <div className="IPLRTable">
				<table class="IPLRTable">
					<thead>
						<BowlingRecordRow forTeam={true} />
					</thead>
					<tbody>{forTeamBowlingItems}</tbody>
				</table>
			</div>}

			{player.hasEverBowled() && <div className="IPLRTable">
				<table class="IPLRTable">
					<thead>
						<BowlingRecordRow vsTeam={true} />
					</thead>
					<tbody>{vsTeamBowlingItems}</tbody>
				</table>
			</div>}

		</div>
	);
}
