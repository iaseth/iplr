import {getBalls} from './Utils';



export default class BowlerInning {
	constructor (teamInning, jo) {
		this.teamInning = teamInning;
		this.jo = jo;
		this.player = teamInning.tournament.players[jo.id];

		this.overs = jo.ov;
		this.balls = getBalls(jo.ov);
		this.maidens = jo.m;
		this.runs = jo.r;
		this.wickets = jo.w;

		this.dots = jo.d;
		this.wd = jo.wd;
		this.nb = jo.nb;
	}

	consoleLog () {
		console.log(`${this.player.bowls_right ? " " : "@"} ${this.player.fn.padEnd(25)} ${this.overs}-${this.maidens}-${this.runs}-${this.wickets} (${this.econPretty()})`);
	}

	econ () {
		return (this.runs * 6 / this.balls);
	}

	econPretty = () => this.econ().toFixed(1);
}
