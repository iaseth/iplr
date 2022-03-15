import './IPLRTable.css';



export default function IPLRTable ({RowComponent, rowsData, title}) {
	const rowItems = rowsData.map((rowData, i) => <RowComponent key={i} rowData={rowData} index={i} />);

	return (
		<div className="IPLRTable w-full px-1 py-2">
			{title && <div className="bg-zinc-900 px-4 py-4 mb-1">{title}</div>}
			<table className="IPLRTable">
				<thead>
					<RowComponent />
				</thead>
				<tbody>{rowItems}</tbody>
			</table>
		</div>
	);
}
