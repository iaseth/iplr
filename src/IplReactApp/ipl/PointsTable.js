


class PointsTableTeam {
	constructor (table, team) {
		this.table = table;
		this.team = team;
		this.matches = [];
		this.points = 0;
		this.wins = 0;
		this.losses = 0;
		this.no_results = 0;

		this.for_runs = 0;
		this.for_balls = 0;
		this.for_wickets = 0;
		this.for_runrate = 0;

		this.vs_runs = 0;
		this.vs_balls = 0;
		this.vs_wickets = 0;
		this.vs_runrate = 0;

		this.net_runrate = 0;
	}

	getForRunRate = () => this.for_runrate.toFixed(2);
	getVsRunRate = () => this.vs_runrate.toFixed(2);
	getNetRunRate = () => this.net_runrate.toFixed(2);
}

export default class PointsTable {
	constructor (season) {
		this.season = season;
		this.tournament = season.tournament;
		this.matches = season.leagueMatches;

		const teamsObject = {}
		for (let match of this.matches) {
			teamsObject[match.team_a.id] = true;
			teamsObject[match.team_b.id] = true;
		}

		this.teams = [];
		Object.keys(teamsObject).forEach(teamId => this.teams.push(new PointsTableTeam(this, this.tournament.teams[teamId])));

		this.matches.forEach(match => {
			this.teams.forEach(team => {
				if (match.team_a === team.team || match.team_b === team.team) {
					team.matches += 1;

					// adding points
					if (match.winner === null) {
						team.points += 1;
						team.no_results += 1;
					} else if (match.winner === team.team) {
						team.points += 2;
						team.wins += 1;
					} else if (match.loser === team.team) {
						team.losses += 1;
					}

					// adding runs, overs and wickets
					let forInning = null, vsInning = null;
					if (match.firstInning.team === team.team) {
						forInning = match.firstInning;
						vsInning = match.secondInning;
					} else {
						forInning = match.secondInning;
						vsInning = match.firstInning;
					}

					if (forInning && forInning.actuallyHappened()) {
						team.for_runs += forInning.runs;
						team.for_balls += forInning.allout ? 120 : forInning.balls;
						team.for_wickets += forInning.wkts;
					}

					if (vsInning && vsInning.actuallyHappened()) {
						team.vs_runs += vsInning.runs;
						team.vs_balls += vsInning.allout ? 120 : vsInning.balls;
						team.vs_wickets += vsInning.wkts;
					}
				}
			});
		});

		this.teams.forEach(row => {
			row.for_runrate = row.for_runs * 6 / row.for_balls;
			row.vs_runrate = row.vs_runs * 6 / row.vs_balls;
			row.net_runrate = row.for_runrate - row.vs_runrate;
		});

		this.teams.sort((a, b) => {
			if (a.points === b.points) return (b.net_runrate - a.net_runrate);
			return (b.points - a.points);
		})
	}
}
