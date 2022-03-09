
export default class BattingRecord {
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
		this.runs = 0;
		this.balls = 0;
		this.outs = 0;
		this.n4 = 0;
		this.n6 = 0;
		this.n50 = 0;
		this.n100 = 0;
		this.hs = null;
	}

	addInnings () {
		this.performances.filter(this.filter).forEach(performance => {
			this.mats++;
			if (performance.dnb) return;
			this.inns++;
			this.runs += performance.runs;
			this.balls += performance.balls;
			if (performance.isOut) this.outs++;

			this.n4 += performance.n4;
			this.n6 += performance.n6;
			if (performance.runs >= 100) {
				this.n100++;
			} else if (performance.runs >= 50) {
				this.n50++;
			}
			if (this.hs === null || this.hs.runs < performance.runs) this.hs = performance;
		});
	}

	getAvgF = () => this.getAvg().toFixed(1);
	getAvg = () => this.outs ? (this.runs / this.outs) : 0;

	getSRF = () => this.getSR().toFixed(1);
	getSR = () => this.balls ? (this.runs * 100 / this.balls) : 0;

	getHsString = () => this.hs ? this.hs.runs : "-";
}
