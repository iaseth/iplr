
export function getBalls (overs) {
	if (overs.length === 1) return 6 * parseInt(overs);
	let [o, b] = overs.split(".");
	return 6 * parseInt(o) + parseInt(b);
}
