
export function getBalls (overs) {
	let [ov, b=0] = overs.split(".");
	return 6 * parseInt(ov) + parseInt(b);
}
