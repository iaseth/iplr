import Squad from './Squad';
import TeamInning from './TeamInning';



export default class Match {
	constructor (season, jo) {
		this.season = season;
		this.year = season.year;
		this.tournament = season.tournament;
		this.seasonIndex = season.matches.length;
		this.playoff = false;
		this.final = false;
		this.jo = jo;
		this.team_a = this.tournament.teams[jo.teams[0].team];
		this.team_b = this.tournament.teams[jo.teams[1].team];
		this.ground = this.tournament.grounds[jo.meta.ground];

		this.winner = null;
		this.loser = null;
		if (jo.meta.outcome === "A") {
			this.winner = this.team_a;
			this.loser = this.team_b;
		} else if (jo.meta.outcome === "B") {
			this.winner = this.team_b;
			this.loser = this.team_a;
		}

		this.bdStyle = this.winner ? this.winner.bdStyle : {
			borderColor: "#fff"
		};

		this.order = jo.meta.order;
		this.squad_a = new Squad(this, jo.teams[0], this.team_a, this.team_b);
		this.squad_b = new Squad(this, jo.teams[1], this.team_b, this.team_a);
		this.squad_a.oppositionSquad = this.squad_b;
		this.squad_b.oppositionSquad = this.squad_a;

		this.players = this.squad_a.members.concat(this.squad_b.members);
		this.players.forEach(player => player.addMatch(this));

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

	getLink = () => `/${this.year}/${this.seasonIndex+1}`;

	consoleLog () {
		this.firstInning.consoleLog();
		this.secondInning.consoleLog();
	}
}
