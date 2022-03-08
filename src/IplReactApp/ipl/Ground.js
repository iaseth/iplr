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

	postmatchSetup () {
		this.setHometeam();
	}

	setHometeam () {
		let teamIds = [];
		for (let match of this.matches) {
			teamIds.push(match.team_a.id);
			teamIds.push(match.team_b.id);
		}

		let counter = {};
		for (let teamId of teamIds) {
			counter[teamId] = counter[teamId] ? counter[teamId] + 1 : 1;
		}

		this.teams = [];
		for (let k in counter) {
			this.teams.push({
				team: this.tournament.teams[k],
				count: counter[k]
			})
		}

		this.teams.sort((a, b) => (b.count - a.count));

		// default value is used when only one season is initialized
		this.hometeam = this.teams[0] ? this.teams[0].team : this.tournament.teamsArray[0];
	}
}
