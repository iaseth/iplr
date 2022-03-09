
export default class Squad {
	constructor (match, jo, team, opposition) {
		this.match = match;
		this.tournament = match.tournament;
		this.team = team;
		this.opposition = opposition;
		this.jo = jo;
		this.members = [];
		for (let id of jo.players) {
			let player = this.tournament.players[id];
			this.members.push(player);
			player.forTeamIndexes[this.team.index] = true;
			player.vsTeamIndexes[this.opposition.index] = true;
		}
		this.captain = this.tournament.players[jo.captain];
		this.wk = this.tournament.players[jo.wk];
	}

	consoleLog () {
		let memberNames = this.members.map(m => m.jo.fullname);
		console.log(memberNames);
	}
}
