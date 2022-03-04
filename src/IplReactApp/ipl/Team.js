
export default class Team {
	constructor (tournament, jo) {
		this.tournament = tournament;
		this.jo = jo;

		this.id = jo.id;
		this.fullname = jo.fullname;
		this.shortname = jo.shortname;
		this.name = jo.name;
		this.abb = jo.abb;
	}
}
