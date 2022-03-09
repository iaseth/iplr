import BatsmanInning from './BatsmanInning';
import BowlerInning from './BowlerInning';
import Wicket from './Wicket';
import OverHistory from './OverHistory';

import {getBalls} from '../Utils';



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

		if (jo === undefined) {
			this.dnp = true;
			return;
		}
		this.dnp = false;

		this.jo = jo;
		this.runs = jo.runs;
		this.overs = jo.overs;
		this.balls = getBalls(jo.overs);
		this.wkts = jo.wickets.length;
		this.allout = this.wkts === 10;

		for (let bj of jo.batting) {
			let position = this.batsmen.length + 1;
			let x = new BatsmanInning(this, bj, position);
			x.player.battingPerformances.push(x);
			this.batsmen.push(x);
		}

		this.squad.members.forEach(member => {
			for (let batsman of this.batsmen) {
				if (batsman.player.id === member.id) return;
			}
			let x = new BatsmanInning(this, {
				id: member.id,
				dnb: true
			});
			x.player.battingPerformances.push(x);
			this.batsmen.push(x);
		});

		for (let bj of jo.bowling) {
			let position = this.bowlers.length + 1;
			let x = new BowlerInning(this, bj, position);
			x.player.bowlingPerformances.push(x);
			this.bowlers.push(x);
		}
	}

	runrate = () => this.balls ? (this.runs * 6 / this.balls) : 0;
	runrateF = () => this.runrate().toFixed(1);

	actuallyHappened = () => !this.dnp;

	consoleLog () {
		const dashes = "=".repeat(50);
		console.log(dashes);
		console.log(`${this.squad.team.fn} ${this.runs}/${this.wkts} (${this.overs}) @${this.runrateF()}`);
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
