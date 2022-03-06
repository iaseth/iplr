import BatsmanInning from './BatsmanInning';
import BowlerInning from './BowlerInning';
import Wicket from './Wicket';
import OverHistory from './OverHistory';

import {getBalls} from './Utils';



export default class TeamInning {
	constructor (squad, jo) {
		this.squad = squad;
		this.captain = squad.captain;
		this.wk = squad.wk;
		this.match = squad.match;
		this.tournament = squad.tournament;
		this.team = squad.team;
		this.opposition = squad.opposition;
		this.batsmen = [];
		this.bowlers = [];

		if (jo === undefined) return;

		this.jo = jo;
		this.runs = jo.runs;
		this.overs = jo.overs;
		this.balls = getBalls(jo.overs);
		this.wkts = jo.wickets.length;

		for (let bj of jo.batting) {
			let x = new BatsmanInning(this, bj);
			x.player.batting_performances.push(x);
			this.batsmen.push(x);
		}

		for (let bj of jo.bowling) {
			let x = new BowlerInning(this, bj);
			x.player.bowling_performances.push(x);
			this.bowlers.push(x);
		}
	}

	runrate () {
		return (this.runs * 6 / this.balls);
	}

	runratePretty = () => this.runrate().toFixed(1);

	consoleLog () {
		const dashes = "=".repeat(50);
		console.log(dashes);
		console.log(`${this.squad.team.fn} ${this.runs}/${this.wkts} (${this.overs}) @${this.runratePretty()}`);
		console.log(dashes);

		for (let batsman of this.batsmen) {
			batsman.consoleLog();
		}

		console.log(dashes);

		for (let bowler of this.bowlers) {
			bowler.consoleLog();
		}

		console.log(dashes);
	}
}
