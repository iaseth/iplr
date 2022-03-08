
export function getBalls (overs) {
	let [ov, b=0] = overs.split(".");
	return 6 * parseInt(ov) + parseInt(b);
}

export function setNextPrev (arr) {
	arr.forEach((current, index) => {
		if (index === 0) current.prev = null;
		if (index + 1 < arr.length) {
			let next = arr[index + 1];
			current.next = next;
			next.prev = current;
		} else {
			current.next = null;
		}
	});
}
