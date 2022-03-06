import Squad from './Squad';
import TeamInning from './TeamInning';



export default class Match {
	constructor (season, jo) {
		this.season = season;
		this.tournament = season.tournament;
		this.seasonIndex = season.matches.length;
		this.playoff = false;
		this.jo = jo;
		this.team_a = this.tournament.teams[jo.teams[0].team];
		this.team_b = this.tournament.teams[jo.teams[1].team];
		this.ground = this.tournament.grounds[jo.meta.ground];

		if (jo.meta.outcome === "A") {
			this.winner = this.team_a;
			this.loser = this.team_b;
		} else if (jo.meta.outcome === "B") {
			this.winner = this.team_b;
			this.loser = this.team_a;
		}

		this.order = jo.meta.order;
		this.squad_a = new Squad(this, jo.teams[0], this.team_a, this.team_b);
		this.squad_b = new Squad(this, jo.teams[1], this.team_b, this.team_a);
		this.squad_a.opposition_squad = this.squad_b;
		this.squad_b.opposition_squad = this.squad_a;

		if (this.order[0] === 0) {
			this.inning_a = new TeamInning(this.squad_a, jo.innings[0]);
			this.inning_b = new TeamInning(this.squad_b, jo.innings[1]);
		} else {
			this.inning_a = new TeamInning(this.squad_a, jo.innings[1]);
			this.inning_b = new TeamInning(this.squad_b, jo.innings[0]);
		}

		this.firstInning = (this.order[0] === 0) ? this.inning_a : this.inning_b;
		this.secondInning = (this.order[0] === 0) ? this.inning_b : this.inning_a;
	}

	consoleLog () {
		this.firstInning.consoleLog();
		this.secondInning.consoleLog();
	}
}
