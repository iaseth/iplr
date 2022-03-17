import {PSTHeading} from './PlayerUtils';
import BattingRecordRow from './BattingRecordRow';
import BowlingRecordRow from './BowlingRecordRow';



export default function PlayerOverallRecord ({player}) {
	const battingRecord = player.overallBattingRecord;
	const bowlingRecord = player.overallBowlingRecord;

	return (
		<div>

			<div className="IPLRTable">
				<PSTHeading>Batting record</PSTHeading>
				<table className="IPLRTable">
					<thead>
						<BattingRecordRow titleColumn={true} />
					</thead>
					<tbody>
						<BattingRecordRow titleColumn="Overall" record={battingRecord} />
					</tbody>
				</table>
			</div>

			<div className="IPLRTable">
				<PSTHeading>Bowling record</PSTHeading>
				<table className="IPLRTable">
					<thead>
						<BowlingRecordRow titleColumn={true} />
					</thead>
					<tbody>
						<BowlingRecordRow titleColumn="Overall" record={bowlingRecord} />
					</tbody>
				</table>
			</div>

		</div>
	);
}
