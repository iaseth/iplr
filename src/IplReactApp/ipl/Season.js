import BaseClass from './BaseClass';
import Match from './Match';



export default class Season extends BaseClass {
	constructor (tournament, jo) {
		super();
		this.tournament = tournament;
		this.jo = jo;
		this.year = jo.year;
		for (let match of jo.matches) {
			let m = new Match(this, match);
			this.addMatch(m);
			m.team_a.addMatch(m);
			m.team_b.addMatch(m);
			m.ground.addMatch(m);
			// break;
		}
	}
}
