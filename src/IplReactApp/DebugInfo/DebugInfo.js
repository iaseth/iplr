


export function DebugInfo (props) {
	const items = [...Object.keys(props)].map((v, i) => {
		const prop = props[v];
		return (
			<div key={i} className="flex font-bold text-sm mb-1 max-w-md">
				<div className="w-32 px-3 py-2 mr-1 bg-slate-800">{v}</div>
				<div className="px-3 py-2 bg-slate-800 grow">
					<span className="text-orange-500">{prop}</span>
					<span className="px-4 text-slate-500">{typeof prop}</span>
				</div>
			</div>
		);
	});

	return (
		<div className="DebugInfo bg-slate-900 text-white">
			<div className="max-w-5xl m-auto px-4 py-20">
				<div>
					<div className="text-xl font-bold pl-2">DebugInfo</div>
				</div>
				<div className="py-8">
					{items}
				</div>
			</div>
		</div>
	);
}
