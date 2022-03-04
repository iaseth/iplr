
export default class BatsmanInning {
	constructor (teamInning, jo) {
		this.teamInning = teamInning;
		this.jo = jo;
		this.player = teamInning.tournament.players[jo.player];

		this.runs = jo.r;
		this.balls = jo.b;
		this.fours = jo["4s"];
		this.sixes = jo["6s"];
	}

	consoleLog () {
		console.log(`${this.player.jo.fullname.padEnd(18)} ${this.runs} (${this.balls}) [${this.fours} fours, ${this.sixes} sixes]`);
	}
}
