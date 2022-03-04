import BatsmanInning from './BatsmanInning';
import BowlerInning from './BowlerInning';
import Wicket from './Wicket';
import OverHistory from './OverHistory';



export default class TeamInning {
	constructor (squad, jo) {
		this.squad = squad;
		this.match = squad.match;
		this.tournament = squad.tournament;
		this.jo = jo;

		this.batsmen = [];
		for (let bj of jo.batting) {
			let x = new BatsmanInning(this, bj);
			this.batsmen.push(x);
		}

		this.bowlers = [];
		for (let bj of jo.bowling) {
			let x = new BowlerInning(this, bj);
			this.bowlers.push(x);
		}

		this.consoleLog();
	}

	consoleLog () {
		const dashes = "=".repeat(50);
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
