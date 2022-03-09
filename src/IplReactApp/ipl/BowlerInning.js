import PlayerInning from './PlayerInning';
import {getBalls} from './Utils';



export default class BowlerInning extends PlayerInning {
	constructor (teamInning, jo, position=0) {
		super();
		this.teamInning = teamInning;
		this.position = position;
		this.for = teamInning.opposition;
		this.vs = teamInning.team;
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

	isCaptain = () => (this.player.id === this.teamInning.squad.opposition_squad.captain.id);
	isWk = () => (this.player.id === this.teamInning.squad.opposition_squad.wk.id);

	getString = () => `${this.wickets}-${this.runs}`;

	econ = () => this.balls ? (this.runs * 6 / this.balls) : 0;
	econF = () => this.econ().toFixed(1);

	consoleLog () {
		console.log(`${this.player.bowls_right ? " " : "@"} ${this.player.fn.padEnd(25)} ${this.overs}-${this.maidens}-${this.runs}-${this.wickets} (${this.econF()})`);
	}
}
