import BaseClass from './BaseClass';



export default class Rivalry extends BaseClass {
	constructor (tournament, t1, t2) {
		super();
		this.tournament = tournament;
		this.t1 = t1;
		this.t2 = t2;

		for (let match of tournament.matches) {
			const ta = match.team_a;
			const tb = match.team_b;
			if (((t1 === ta) && (t2 === tb)) || ((t1 === tb) && (t2 === ta))) {
				this.addMatch(match);
			}
		}
	}

	getLength = () => this.matches.length;
	getFullName = () => `${this.t1.abb} vs ${this.t2.abb}`;
}
