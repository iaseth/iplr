import './IPLRTable.css';



export default function IPLRTable ({RowComponent, rowsData, title, prefix}) {
	const rowItems = rowsData.map((rowData, i) => <RowComponent key={i} rowData={rowData} index={i} />);

	return (
		<div className="IPLRTable w-full px-1 py-2">
			{title && <div className="bg-zinc-900 px-4 pt-4 pb-3 mb-1 text-base">
				{prefix && <span className="bg-zinc-800 px-2 py-1 mr-2">{prefix}</span>}
				<span>{title}</span>
			</div>}
			<table className="IPLRTable">
				<thead>
					<RowComponent />
				</thead>
				<tbody>{rowItems}</tbody>
			</table>
		</div>
	);
}
