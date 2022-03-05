
export default class Squad {
	constructor (match, jo, team, opposition) {
		this.match = match;
		this.tournament = match.tournament;
		this.team = team;
		this.opposition = opposition;
		this.jo = jo;
		this.members = [];
		for (let id of jo.players) {
			this.members.push(this.tournament.players[id]);
		}
		this.captain = this.tournament.players[jo.captain];
		this.wk = this.tournament.players[jo.wk];
	}

	consoleLog () {
		let member_names = this.members.map(m => m.jo.fullname);
		console.log(member_names);
	}
}
