import './TopPlayersFooter.css';

import Top10BatsmanRow from './Top10BatsmanRow';
import Top10BowlerRow from './Top10BowlerRow';
import IPLRTable from '../Utils/IPLRTable';



export function TopPlayersFooter ({
	ipl
}) {

	return (
		<div className="TopPlayersFooter bg-zinc-800 text-slate-200">
			<div className="max-w-5xl m-auto md:px-4 py-24">
				<IPLRTable RowComponent={Top10BatsmanRow} rowsData={ipl.top10Batsmen} title="Top 10 Batsmen" />
				<IPLRTable RowComponent={Top10BowlerRow} rowsData={ipl.top10Bowlers} title="Top 10 Bowlers" />
			</div>
		</div>
	);
}
