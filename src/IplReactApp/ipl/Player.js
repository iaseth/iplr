
export default class Player {
	constructor (tournament, jo) {
		this.tournament = tournament;
		this.jo = jo;

		this.batting_performances = [];
		this.bowling_performances = [];
	}

	printBattingPerformances () {
		console.log(this.jo.fullname);
		for (let x of this.batting_performances) {
			x.consoleLog();
		}
	}

	printBowlingPerformances () {
		console.log(this.jo.fullname);
		for (let x of this.bowling_performances) {
			x.consoleLog();
		}
	}
}
