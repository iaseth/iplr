import BaseClass from './BaseClass';



export default class Ground extends BaseClass {
	constructor (tournament, jo) {
		super();
		this.tournament = tournament;
		this.jo = jo;
		this.id = jo.id;
		this.fn = jo.fn;
		this.sn = jo.sn;
		this.city = jo.city;
	}
}
