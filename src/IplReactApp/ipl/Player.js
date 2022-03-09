import BaseClass from './BaseClass';
import BattingRecord from './BattingRecord';
import BowlingRecord from './BowlingRecord';



export default class Player extends BaseClass {
	constructor (tournament, jo) {
		super();
		this.tournament = tournament;
		this.jo = jo;
		this.id = jo.id;
		this.fn = jo.fn;
		this.sn = jo.sn;
		this.country = jo.country;
		this.path = jo.path;

		this.bats_right = jo.batright;
		this.bowls_right = jo.bowlright;

		this.first_match = null;
		this.last_match = null;
		this.seasons = {};

		this.batting_performances = [];
		this.bowling_performances = [];
	}

	postmatchSetup () {
		this.batting_positions = [];
		this.batting_performances.forEach(bp => {
			if (!bp.dnb) this.batting_positions[bp.position] = true;
		});

		this.bowling_positions = [];
		this.bowling_performances.forEach(bp => {
			if (!bp.dnb) this.bowling_positions[bp.position] = true;
		});
	}

	getLink = () => `/players/${this.path}`;

	isIndian = () => this.country === "India";
	isOverseas = () => !this.isIndian();

	hasNeverBowled = () => this.bowling_performances.length === 0;
	hasEverBowled = () => !this.hasNeverBowled();

	addMatch (match) {
		this.matches.push(match);
		if (this.first_match === null) this.first_match = match;
		this.last_match = match;
		this.seasons[match.year] = true;
	}

	getPositionWiseBattingRecord () {
		const records = [];
		this.batting_positions.forEach((x, position) => {
			records.push({
				position: position,
				record: new BattingRecord(this, this.batting_performances, x => x.position === position)
			});
		});
		return records;
	}

	getPositionWiseBowlingRecord () {
		const records = [];
		this.bowling_positions.forEach((x, position) => {
			records.push({
				position: position,
				record: new BowlingRecord(this, this.bowling_performances, x => x.position === position)
			});
		});
		return records;
	}

	getSeasonWiseBattingRecord () {
		const seasonWiseBattingRecord = [];
		Object.keys(this.seasons).reverse().forEach(year => {
			seasonWiseBattingRecord.push({
				year: year,
				record: new BattingRecord(this, this.batting_performances, x => x.teamInning.match.year === parseInt(year))
			});
		});
		return seasonWiseBattingRecord;
	}

	getSeasonWiseBowlingRecord () {
		const seasonWiseBowlingRecord = [];
		Object.keys(this.seasons).reverse().forEach(year => {
			seasonWiseBowlingRecord.push({
				year: year,
				record: new BowlingRecord(this, this.bowling_performances, x => x.teamInning.match.year === parseInt(year))
			});
		});
		return seasonWiseBowlingRecord;
	}

	printBattingPerformances () {
		console.log(`${this.fn} (${this.bats_right ? "Right" : "Left"} handed)`);
		for (let x of this.batting_performances) {
			x.consoleLog();
		}
	}

	print50s () {
		console.log(`${this.fn} (${this.bats_right ? "Right" : "Left"} handed)`);
		for (let x of this.batting_performances) {
			if (x.runs >= 50) x.consoleLog();
		}
	}

	printBowlingPerformances () {
		console.log(`${this.fn} (${this.bowls_right ? "Right" : "Left"} arm)`);
		for (let x of this.bowling_performances) {
			x.consoleLog();
		}
	}

	print2Ws () {
		console.log(`${this.fn} (${this.bats_right ? "Right" : "Left"} handed)`);
		for (let x of this.bowling_performances) {
			if (x.wickets >= 2) x.consoleLog();
		}
	}
}
