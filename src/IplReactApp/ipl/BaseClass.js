


export default class BaseClass {
	constructor () {
		this.matches = [];
		this.innings = [];
	}

	addMatch (match) { this.matches.push(match) }
	addInning (inning) { this.innings.push(inning) }
}
