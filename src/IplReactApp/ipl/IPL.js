import Ground from './Ground';
import Player from './Player';
import Team from './Team';
import Season from './Season';



export default class IPL {
	constructor (codes) {
		this.codes = codes;

		this.teams = {};
		for (let k in codes.teams) {
			let x = new Team(this, codes.teams[k]);
			this.teams[k] = x;
		}

		this.grounds = {};
		for (let k in codes.grounds) {
			let x = new Ground(this, codes.grounds[k]);
			this.grounds[k] = x;
		}

		this.players = {};
		for (let k in codes.players) {
			let x = new Player(this, codes.players[k]);
			this.players[k] = x;
		}
	}

	loadBundle (json) {
		this.bundle = json;
		this.matches = [];
		this.seasons = [];
		for (let season of json.seasons) {
			let x = new Season(this, season);
			this.seasons.push(x);
			this.matches = this.matches.concat(x.matches);
			console.log(`IPL ${x.year} has ${x.matches.length} matches.`);
			break;
		}
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
		this.matches[1].consoleLog();

		// dhoni and oram
		this.findPlayerByName("dhoni").printBattingPerformances();
		this.findPlayerByName("lee").printBowlingPerformances();
	}

	findXByName (name, obj) {
		for (let id in obj) {
			let x = obj[id];
			if (x.fn.toLowerCase().search(name) !== -1) {
				return x;
			}
		}
		return null;
	}

	findGroundByName = (name) => this.findXByName(name, this.grounds);
	findPlayerByName = (name) => this.findXByName(name, this.players);
	findTeamByName = (name) => this.findXByName(name, this.teams);

	printStatus () {
		console.log(`IPL object:`);
		console.log(`\t---- ${Object.keys(this.teams).length} teams`);
		console.log(`\t---- ${Object.keys(this.grounds).length} grounds`);
		console.log(`\t---- ${Object.keys(this.players).length} players`);
		console.log(`\t---- ${Object.keys(this.seasons).length} seasons`);
		console.log(`\t---- ${Object.keys(this.matches).length} matches`);
	}
}
