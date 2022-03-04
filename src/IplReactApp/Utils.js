


export function EA ({href, children}) {
	return (
		<a href={href} target="_blank" rel="noreferrer" className="font-bold border-b-2 border-blue-500 duration-300 pb-[1px] text-blue-500 hover:text-blue-300 hover:border-blue-300">{children}</a>
	);
}

export function RainbowBorder () {
	const bgClasses = [
		"bg-red-500", "bg-slate-500",
		"bg-blue-500", "bg-slate-500-500",
		"bg-green-500"
	];

	let items = bgClasses.map((v, i) => {
		return <div key={i} className={"grow " + v}></div>
	});

	return (
		<div className="bg-slate-600 h-1 flex">
			{items}
		</div>
	);
}


