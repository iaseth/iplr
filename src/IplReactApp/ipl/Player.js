
export default class Player {
	constructor (tournament, jo) {
		this.tournament = tournament;
		this.jo = jo;
		this.id = jo.id;
		this.fn = jo.fn;
		this.sn = jo.sn;

		this.batting_performances = [];
		this.bowling_performances = [];
	}

	printBattingPerformances () {
		console.log(this.fn);
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
