
export default class BowlingRecord {
	constructor (player, performances, filter) {
		this.player = player;
		this.performances = performances;
		this.filter = filter ? filter : () => true;

		this.zeroInit();
		this.addInnings();
	}

	zeroInit () {
		this.mats = 0;
		this.inns = 0;
		this.balls = 0;
		this.runs = 0;
		this.wickets = 0;
		this.maidens = 0;
		this.dots = 0;
		this.wd = 0;
		this.nb = 0;
		this.n1w = 0;
		this.n2w = 0;
		this.n3w = 0;
		this.n4w = 0;
		this.n5w = 0;
		this.best = null;
	}

	addInnings () {
		this.performances.filter(this.filter).forEach(performance => {
			this.mats++;
			this.inns++;
			this.runs += performance.runs;
			this.balls += performance.balls;
			this.maidens += performance.maidens;
			this.wickets += performance.wickets;
			this.dots += performance.dots;
			this.wd += performance.wd;
			this.nb += performance.nb;
			if (this.best === null || this.best.wickets < performance.wickets) {
				this.best = performance;
			}
		});
	}

	getAvgF = () => this.getAvg().toFixed(1);
	getAvg = () => this.wickets ? (this.runs / this.wickets) : 0;

	getSRF = () => this.getSR().toFixed(1);
	getSR = () => this.wickets ? (this.balls / this.wickets) : 0;

	getEconF = () => this.getEcon().toFixed(1);
	getEcon = () => this.balls ? (this.runs * 6 / this.balls) : 0;

	getBestString = () => this.best ? this.best.getString() : "-";
}
