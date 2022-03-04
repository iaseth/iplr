import Squad from './Squad';
import TeamInning from './TeamInning';



export default class Match {
	constructor (season, jo) {
		this.season = season;
		this.tournament = season.tournament;
		this.jo = jo;
		this.squad_a = new Squad(this, jo.teams[0]);
		this.squad_b = new Squad(this, jo.teams[1]);

		this.inning_a = new TeamInning(this.squad_a, jo.innings[0]);
		this.inning_b = new TeamInning(this.squad_b, jo.innings[1]);
	}
}
