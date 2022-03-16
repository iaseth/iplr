import './TopPlayersFooter.css';

import Top10BatsmanRow from './Top10BatsmanRow';
import Top10BowlerRow from './Top10BowlerRow';



const TPFTable = ({title, children}) => {
	return (
		<div className="grow md:px-8 py-8">
			<h2 className="text-xl text-center font-bold py-6">{title}</h2>
			<table className="TPFTable w-full">{children}</table>
		</div>
	);
};

export function TopPlayersFooter ({
	ipl
}) {

	const top10BatsmenItems = ipl.top10Batsmen.map((r, i) => <Top10BatsmanRow rowData={r} index={i} />);
	const top10BowlersItems = ipl.top10Bowlers.map((r, i) => <Top10BowlerRow rowData={r} index={i} />);

	return (
		<div className="TopPlayersFooter bg-zinc-800 text-slate-200">
			<div className="max-w-5xl m-auto md:px-4 py-24">
				<TPFTable title="Top 10 Batsmen">
					<tbody>{top10BatsmenItems}</tbody>
				</TPFTable>
				<TPFTable title="Top 10 Bowlers">
					<tbody>{top10BowlersItems}</tbody>
				</TPFTable>
			</div>
		</div>
	);
}
