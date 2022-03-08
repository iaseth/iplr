import BaseClass from './BaseClass';
import Match from './Match';
import PointsTable from './PointsTable';



export default class Season extends BaseClass {
	constructor (tournament, jo) {
		super();
		this.tournament = tournament;
		this.jo = jo;
		this.year = parseInt(jo.year);
		for (let match of jo.matches) {
			let m = new Match(this, match);
			this.addMatch(m);
			m.team_a.addMatch(m);
			m.team_b.addMatch(m);
			m.ground.addMatch(m);
			// break;
		}

		const n = this.matches.length;
		this.opening = this.matches[0];
		this.final = this.matches[n-1];
		this.winner = this.final.winner;
		this.loser = this.final.loser;

		this.numberOfLeagueMatches = (n % 2 === 0) ? (n-4) : (n-3);
		this.leagueMatches = this.matches.slice(0, this.numberOfLeagueMatches);
		this.playoffMatches = this.matches.slice(this.numberOfLeagueMatches);
		this.playoffMatches.forEach((x) => x.playoff = true);
		this.pointsTable = new PointsTable(this);
	}

	getLink = () => `/${this.year}`;
}
