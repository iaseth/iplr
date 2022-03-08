
export default class BattingRecord {
	constructor (player, performances, filter) {
		this.player = player;
		this.performances = performances;

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
		for (let performance of performances) {
			if (!filter(performance)) continue;
			this.mats++;
			this.inns++;
			this.runs += performance.runs;
			this.balls += performance.balls;
			if (performance.is_out) this.outs++;

			this.n4 += performance.n4;
			this.n6 += performance.n6;
			if (performance.runs >= 100) {
				this.n100++;
			} else if (performance.runs >= 50) {
				this.n50++;
			}
			if (this.hs === null || this.hs.runs < performance.runs) this.hs = performance;
		}
	}
}
