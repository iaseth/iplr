import Match from './Match';



export default class Season {
	constructor (tournament, jo) {
		this.tournament = tournament;
		this.jo = jo;
		this.year = jo.year;
		this.matches = [];
		for (let match of jo.matches) {
			let m = new Match(this, match);
			this.matches.push(m);
			break;
		}
	}
}
