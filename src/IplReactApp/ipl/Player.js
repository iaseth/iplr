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

		this.bats_right = jo.batright;
		this.bowls_right = jo.bowlright;

		this.first_match = null;
		this.last_match = null;
		this.seasons = {};

		this.batting_performances = [];
		this.bowling_performances = [];
	}

	isIndian = () => this.country === "Indian";
	isOverseas = () => !this.isIndian();

	addMatch (match) {
		this.matches.push(match);
		if (this.first_match === null) this.first_match = match;
		this.last_match = match;
		this.seasons[match.year] = true;
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
