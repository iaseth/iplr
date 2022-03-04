
export default class BatsmanInning {
	constructor (teamInning, jo) {
		this.teamInning = teamInning;
		this.jo = jo;
		this.player = teamInning.tournament.players[jo.id];

		this.runs = jo.r;
		this.balls = jo.b;
		this.fours = jo["4s"];
		this.sixes = jo["6s"];
		this.is_out = jo.out ? true : false;
	}

	consoleLog () {
		console.log(`${this.player.fn.padEnd(20)} ${this.runsString()} (${this.balls}) [${this.fours}x4, ${this.sixes}x6] (${this.srPretty()})`);
	}

	sr = () => this.balls ? (this.runs * 100 / this.balls) : 0;
	srPretty = () => this.sr().toFixed(1);

	runsString () {
		return this.is_out ? this.runs : this.runs + "*";
	}
}
