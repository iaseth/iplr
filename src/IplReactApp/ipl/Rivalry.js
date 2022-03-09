import BaseClass from './BaseClass';



export default class Rivalry extends BaseClass {
	constructor (tournament, t1, t2) {
		super();
		this.tournament = tournament;
		this.t1 = t1;
		this.t2 = t2;
		this.link = `/rivalry/${t1.path}-vs-${t2.path}`;

		for (let match of tournament.matches) {
			const ta = match.team_a;
			const tb = match.team_b;
			if (((t1 === ta) && (t2 === tb)) || ((t1 === tb) && (t2 === ta))) {
				this.addMatch(match);
			}
		}

		this.t1Wins = 0;
		this.t2Wins = 0;
		this.matches.forEach(m => {
			if (!m.winner) return;
			if (m.winner === this.t1) this.t1Wins += 1;
			if (m.winner === this.t2) this.t2Wins += 1;
		});
	}

	getLength = () => this.matches.length;
	getFullName = () => `${this.t1.abb} vs ${this.t2.abb}`;
	getLink = () => this.link;
}
