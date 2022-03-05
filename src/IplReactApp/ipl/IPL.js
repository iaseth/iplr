import Ground from './Ground';
import Player from './Player';
import Team from './Team';
import Season from './Season';
import Rivalry from './Rivalry';



export default class IPL {
	constructor (codes) {
		this.codes = codes;

		this.teams = {};
		this.teamsArray = [];
		for (let k in codes.teams) {
			let x = new Team(this, codes.teams[k]);
			this.teams[k] = x;
			this.teamsArray.push(x);
		}

		this.grounds = {};
		this.groundsArray = [];
		for (let k in codes.grounds) {
			let x = new Ground(this, codes.grounds[k]);
			this.grounds[k] = x;
			this.groundsArray.push(x);
		}

		this.players = {};
		this.playersArray = [];
		for (let k in codes.players) {
			let x = new Player(this, codes.players[k]);
			this.players[k] = x;
			this.playersArray.push(x);
		}

		this.matches = [];
		this.seasons = [];
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
