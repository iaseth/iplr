import './IPLRTable.css';



export default function IPLRTable ({RowComponent, rowsData}) {
	const rowItems = rowsData.map((rowData, i) => <RowComponent key={i} rowData={rowData} index={i} />);

	return (
		<table className="IPLRTable">
			<thead>
				<RowComponent />
			</thead>
			<tbody>{rowItems}</tbody>
		</table>
	);
}
