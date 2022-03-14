
const spanClasses = {
	"excellent": "text-purple-400",
	"verygood": "text-green-400",
	"good": "text-yellow-400",
	"ok": "text-blue-400",
	"bad": "text-red-400"
};

export function RunRate ({runrate}) {
	let spanClass = "text-red-400";
	if (runrate > 10) spanClass = spanClasses.excellent;
	else if (runrate > 9) spanClass = spanClasses.verygood;
	else if (runrate > 8) spanClass = spanClasses.good;
	else if (runrate > 7) spanClass = spanClasses.ok;

	return <span className={spanClass}>{runrate}</span>
}


export function BattingAvg ({avg}) {
	let spanClass = "text-red-400";
	if (avg > 50) spanClass = spanClasses.excellent;
	else if (avg > 40) spanClass = spanClasses.verygood;
	else if (avg > 30) spanClass = spanClasses.good;
	else if (avg > 25) spanClass = spanClasses.ok;

	return <span className={spanClass}>{avg}</span>
}

export function BattingSR ({sr}) {
	let spanClass = spanClasses.bad;
	if (sr > 170) spanClass = spanClasses.excellent;
	else if (sr > 150) spanClass = spanClasses.verygood;
	else if (sr > 130) spanClass = spanClasses.good;
	else if (sr > 110) spanClass = spanClasses.ok;

	return <span className={spanClass}>{sr}</span>
}


export function BowlingAvg ({avg}) {
	let spanClass = "text-red-400";
	if (avg < 15) spanClass = spanClasses.excellent;
	else if (avg < 20) spanClass = spanClasses.verygood;
	else if (avg < 25) spanClass = spanClasses.good;
	else if (avg < 30) spanClass = spanClasses.ok;

	return <span className={spanClass}>{avg}</span>
}

export function BowlingSR ({sr}) {
	let spanClass = "text-red-400";
	if (sr < 15) spanClass = spanClasses.excellent;
	else if (sr < 20) spanClass = spanClasses.verygood;
	else if (sr < 25) spanClass = spanClasses.good;
	else if (sr < 30) spanClass = spanClasses.ok;

	return <span className={spanClass}>{sr}</span>
}

export function BowlingEcon ({econ}) {
	let spanClass = "text-red-400";
	if (econ < 6) spanClass = spanClasses.excellent;
	else if (econ < 7) spanClass = spanClasses.verygood;
	else if (econ < 8) spanClass = spanClasses.good;
	else if (econ < 9) spanClass = spanClasses.ok;

	return <span className={spanClass}>{econ}</span>
}
