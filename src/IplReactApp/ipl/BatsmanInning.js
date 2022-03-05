
export default class BatsmanInning {
	constructor (teamInning, jo) {
		this.teamInning = teamInning;
		this.jo = jo;
		this.player = teamInning.tournament.players[jo.id];

		this.runs = jo.r;
		this.balls = jo.b;
		this.n4 = jo.n4;
		this.n6 = jo.n6;
		this.is_out = jo.out ? true : false;
	}

	consoleLog () {
		console.log(`${this.player.bats_right ? " " : "@"} ${this.player.fn.padEnd(25)} ${this.runsString()} (${this.balls}) (${this.n4}x4, ${this.n6}x6, ${this.srPretty()})`);
	}

	sr = () => this.balls ? (this.runs * 100 / this.balls) : 0;
	srPretty = () => this.sr().toFixed(1);

	getBoundaries = () => (this.n4 + this.n6);
	getBoundaryRuns = () => (4 * this.n4 + 6 * this.n6);

	runsString = () => this.is_out ? this.runs : this.runs + "*";
}
