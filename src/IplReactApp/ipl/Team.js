import BaseClass from './BaseClass';



export default class Team extends BaseClass {
	constructor (tournament, jo) {
		super();
		this.tournament = tournament;
		this.jo = jo;

		this.id = jo.id;
		this.fn = jo.fn;
		this.sn = jo.sn;
		this.name = jo.name;
		this.abb = jo.abb;
		this.path = jo.abb.toLowerCase();

		this.color = jo.bg;
		this.fgStyle = {color: this.color};
		this.bgStyle = {backgroundColor: this.color};
		this.bdStyle = {borderColor: this.color};
	}

	getLink = () => `/teams/${this.path}`;
}
