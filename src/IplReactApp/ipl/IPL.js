import Ground from './Ground';
import Player from './Player';
import Team from './Team';
import Season from './Season';
import Rivalry from './Rivalry';



export default class IPL {
	constructor (codes) {
		this.codes = codes;
		this.loadCodes();
		this.matches = [];
		this.seasons = [];
	}

	loadCodes () {
		this.loadTeams();
		this.loadGrounds();
		this.loadPlayers();
	}

	loadTeams () {
		this.teams = {};
		this.teamsArray = [];
		for (let k in this.codes.teams) {
			let x = new Team(this, this.codes.teams[k]);
			this.teams[k] = x;
			this.teamsArray.push(x);
		}

		this.teamsArray.forEach((x, index) => x.index = index);
	}

	loadGrounds () {
		this.grounds = {};
		this.groundsArray = [];
		for (let k in this.codes.grounds) {
			let x = new Ground(this, this.codes.grounds[k]);
			this.grounds[k] = x;
			this.groundsArray.push(x);
		}

		this.groundsArray.forEach((x, index) => x.index = index);
	}

	loadPlayers () {
		this.players = {};
		this.playersArray = [];
		for (let k in this.codes.players) {
			let x = new Player(this, this.codes.players[k]);
			this.players[k] = x;
			this.playersArray.push(x);
		}

		this.playersArray.forEach((x, index) => x.index = index);
	}

	loadBundle (json) {
		this.bundle = json;
		for (let season of json.seasons) {
			let x = new Season(this, season);
			this.seasons.push(x);
			this.matches = this.matches.concat(x.matches);
			// console.log(`IPL ${x.year} has ${x.matches.length} matches.`);
			// break;
		}

		this.matches.forEach((m, index) => m.index = index);
		this.groundsArray.forEach(g => g.postmatchSetup());
		this.playersArray.forEach(x => x.postmatchSetup());

		this.rivalries = [];
		for (let t1 of this.teamsArray) {
			for (let t2 of this.teamsArray) {
				if (t1.id < t2.id) {
					const r = new Rivalry(this, t1, t2);
					if (r.matches.length) {
						this.rivalries.push(r);
					}
				}
			}
		}
		this.rivalries.sort((a, b) => (b.getLength() - a.getLength()));
	}

	getSeason (year) {
		for (let season of this.seasons) {
			if (season.year === year) return season;
		}
		return null;
	}

	doStuff () {
		this.printStatus();
		// csk vs kxip
		// this.matches[1].consoleLog();

		// dhoni and oram
		// this.findPlayerByName("dhoni").print50s();
		// this.findPlayerByName("lee").print2Ws();
	}

	getTeamFromPath (path) {
		path = path.toLowerCase();
		for (let team of this.teamsArray) {
			if (path === team.path) return team;
		}
		return null;
	}

	getGroundFromPath (path) {
		path = path.toLowerCase();
		for (let ground of this.groundsArray) {
			if (path === ground.path) return ground;
		}
		return null;
	}

	getPlayerFromPath (path) {
		path = path.toLowerCase();
		for (let player of this.playersArray) {
			if (path === player.path) return player;
		}

		for (let player of this.playersArray) {
			// russell goes to andre-russell
			if (player.path.search(path) !== -1) return player;
			// andre-russell-batsman goes to andre-russell
			if (path.search(player.path) !== -1) return player;
		}
		return null;
	}

	findXByName (name, obj) {
		for (let x of obj) {
			if (x.fn.toLowerCase().search(name) !== -1) {
				return x;
			}
		}
		return null;
	}

	findGroundByName = (name) => this.findXByName(name, this.groundsArray);
	findPlayerByName = (name) => this.findXByName(name, this.playersArray);
	findTeamByName = (name) => this.findXByName(name, this.teamsArray);

	printStatus () {
		console.log(`IPL object:`);
		console.log(`\t---- ${Object.keys(this.teams).length} teams`);
		console.log(`\t---- ${Object.keys(this.grounds).length} grounds`);
		console.log(`\t---- ${Object.keys(this.players).length} players`);
		console.log(`\t---- ${Object.keys(this.seasons).length} seasons`);
		console.log(`\t---- ${Object.keys(this.matches).length} matches`);
	}

	printRivalries () {
		for (let r of this.rivalries) {
			console.log(`Rivalry: ${r.getFullName()} (${r.getLength()} matches)`);
		}
	}
}
