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
		}
	}

	printStatus () {
		console.log(`IPL object:`);
		console.log(`\t---- ${Object.keys(this.teams).length} teams`);
		console.log(`\t---- ${Object.keys(this.grounds).length} grounds`);
		console.log(`\t---- ${Object.keys(this.players).length} players`);
		console.log(`\t---- ${Object.keys(this.seasons).length} seasons`);
		console.log(`\t---- ${Object.keys(this.matches).length} matches`);
	}
}
