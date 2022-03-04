import Ground from './Ground';
import Player from './Player';
import Team from './Team';



export default class Ipl {
	constructor (codes) {
		this.codes = codes;

		this.teams = [];
		for (let k in codes.teams) {
			let x = new Team(this, codes.teams[k]);
			this.teams.push(x);
		}

		this.grounds = [];
		for (let k in codes.grounds) {
			let x = new Ground(this, codes.grounds[k]);
			this.grounds.push(x);
		}

		this.players = [];
		for (let k in codes.players) {
			let x = new Player(this, codes.players[k]);
			this.players.push(x);
		}
	}
}
