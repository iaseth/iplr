import BaseClass from './BaseClass';



export default class Player extends BaseClass {
	constructor (tournament, jo) {
		super();
		this.tournament = tournament;
		this.jo = jo;
		this.id = jo.id;
		this.fn = jo.fn;
		this.sn = jo.sn;

		this.bats_right = jo.batright;
		this.bowls_right = jo.bowlright;

		this.batting_performances = [];
		this.bowling_performances = [];
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
