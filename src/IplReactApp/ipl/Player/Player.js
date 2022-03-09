import BaseClass from '../BaseClass';
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

		this.batsRight = jo.batright;
		this.bowlsRight = jo.bowlright;

		this.firstMatch = null;
		this.lastMatch = null;
		this.seasons = {};
		this.forTeamIndexes = [];
		this.vsTeamIndexes = [];

		this.battingPerformances = [];
		this.bowlingPerformances = [];
	}

	postmatchSetup () {
		this.battingPositions = [];
		this.battingPerformances.forEach(bp => {
			if (!bp.dnb) this.battingPositions[bp.position] = true;
		});

		this.bowlingPositions = [];
		this.bowlingPerformances.forEach(bp => {
			if (!bp.dnb) this.bowlingPositions[bp.position] = true;
		});
	}

	getLink = () => `/players/${this.path}`;

	isIndian = () => this.country === "India";
	isOverseas = () => !this.isIndian();

	hasNeverBatted = () => !this.hasEverBatted();
	hasEverBatted () {
		for (let battingPerformance of this.battingPerformances) {
			if (!battingPerformance.dnb) return true;
		}
		return false;
	}

	hasNeverBowled = () => this.bowlingPerformances.length === 0;
	hasEverBowled = () => !this.hasNeverBowled();

	addMatch (match) {
		this.matches.push(match);
		if (this.firstMatch === null) this.firstMatch = match;
		this.lastMatch = match;
		this.seasons[match.year] = true;
	}


	getForTeamWiseBattingRecord () {
		const records = [];
		[...this.forTeamIndexes.keys()].forEach(teamIndex => {
			if (!this.forTeamIndexes[teamIndex]) return; // player has not played for this team
			records.push({
				team: this.tournament.teamsArray[teamIndex],
				record: new BattingRecord(this, this.battingPerformances, x => x.for.index === teamIndex)
			});
		});
		return records;
	}

	getVsTeamWiseBattingRecord () {
		const records = [];
		[...this.vsTeamIndexes.keys()].forEach(teamIndex => {
			if (!this.vsTeamIndexes[teamIndex]) return; // player has not played vs this team
			records.push({
				team: this.tournament.teamsArray[teamIndex],
				record: new BattingRecord(this, this.battingPerformances, x => x.vs.index === teamIndex)
			});
		});
		return records;
	}


	getForTeamWiseBowlingRecord () {
		const records = [];
		[...this.forTeamIndexes.keys()].forEach(teamIndex => {
			if (!this.forTeamIndexes[teamIndex]) return; // player has not played for this team
			records.push({
				team: this.tournament.teamsArray[teamIndex],
				record: new BowlingRecord(this, this.bowlingPerformances, x => x.for.index === teamIndex)
			});
		});
		return records;
	}

	getVsTeamWiseBowlingRecord () {
		const records = [];
		[...this.vsTeamIndexes.keys()].forEach(teamIndex => {
			if (!this.vsTeamIndexes[teamIndex]) return; // player has not played vs this team
			records.push({
				team: this.tournament.teamsArray[teamIndex],
				record: new BowlingRecord(this, this.bowlingPerformances, x => x.vs.index === teamIndex)
			});
		});
		return records;
	}


	getPositionWiseBattingRecord () {
		const records = [];
		this.battingPositions.forEach((x, position) => {
			records.push({
				position: position,
				record: new BattingRecord(this, this.battingPerformances, x => x.position === position)
			});
		});
		return records;
	}

	getPositionWiseBowlingRecord () {
		const records = [];
		this.bowlingPositions.forEach((x, position) => {
			records.push({
				position: position,
				record: new BowlingRecord(this, this.bowlingPerformances, x => x.position === position)
			});
		});
		return records;
	}

	getSeasonWiseBattingRecord () {
		const seasonWiseBattingRecord = [];
		Object.keys(this.seasons).reverse().forEach(year => {
			seasonWiseBattingRecord.push({
				year: year,
				record: new BattingRecord(this, this.battingPerformances, x => x.teamInning.match.year === parseInt(year))
			});
		});
		return seasonWiseBattingRecord;
	}

	getSeasonWiseBowlingRecord () {
		const seasonWiseBowlingRecord = [];
		Object.keys(this.seasons).reverse().forEach(year => {
			seasonWiseBowlingRecord.push({
				year: year,
				record: new BowlingRecord(this, this.bowlingPerformances, x => x.teamInning.match.year === parseInt(year))
			});
		});
		return seasonWiseBowlingRecord;
	}

	printBattingPerformances () {
		console.log(`${this.fn} (${this.batsRight ? "Right" : "Left"} handed)`);
		for (let x of this.battingPerformances) {
			x.consoleLog();
		}
	}

	print50s () {
		console.log(`${this.fn} (${this.batsRight ? "Right" : "Left"} handed)`);
		for (let x of this.battingPerformances) {
			if (x.runs >= 50) x.consoleLog();
		}
	}

	printBowlingPerformances () {
		console.log(`${this.fn} (${this.bowlsRight ? "Right" : "Left"} arm)`);
		for (let x of this.bowlingPerformances) {
			x.consoleLog();
		}
	}

	print2Ws () {
		console.log(`${this.fn} (${this.batsRight ? "Right" : "Left"} handed)`);
		for (let x of this.bowlingPerformances) {
			if (x.wickets >= 2) x.consoleLog();
		}
	}
}
