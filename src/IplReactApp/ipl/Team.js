
export default class Team {
	constructor (tournament, jo) {
		this.tournament = tournament;
		this.jo = jo;

		this.id = jo.id;
		this.fn = jo.fn;
		this.sn = jo.sn;
		this.name = jo.name;
		this.abb = jo.abb;
	}
}
