import './TopPlayersFooter.css';

import {Link} from 'react-router-dom';



const TPFSection = ({children}) => <div className="py-8">{children}</div>;
const TPFHeading = ({children}) => <div className="text-xl text-center font-bold py-2">{children}</div>;
const TPFTable = ({title, children}) => {
	return (
		<div className="grow md:px-8 py-4">
			<h2 className="text-xl text-center font-bold py-4">{title}</h2>
			<table className="TPFTable w-full">{children}</table>
		</div>
	);
};

export function TopPlayersFooter ({
	ipl
}) {

	const top10BatsmenItems = ipl.top10Batsmen.map((r, i) => {
		return (
			<tr key={i}>
				<td># {i+1}</td>
				<td>{r.player.fn}</td>
				<td className="nomobile">{r.inns}</td>
				<td className="text-base">{r.runs}</td>
				<td>{r.getAvgF()}</td>
				<td>{r.getSRF()}</td>
				<td className="nomobile">{r.n4}</td>
				<td className="nomobile">{r.n6}</td>
				<td className="nomobile">{r.n50} / {r.n100}</td>
			</tr>
		);
	});

	const top10BowlersItems = ipl.top10Bowlers.map((r, i) => {
		return (
			<tr key={i}>
				<td># {i+1}</td>
				<td>{r.player.fn}</td>
				<td className="nomobile">{r.inns}</td>
				<td className="text-base">{r.wickets}</td>
				<td>{r.getAvgF()}</td>
				<td>{r.getSRF()}</td>
				<td>{r.getEconF()}</td>
			</tr>
		);
	});

	return (
		<div className="TopPlayersFooter bg-zinc-800 text-slate-200">
			<div className="max-w-5xl m-auto px-2 md:px-4 py-24">
				<TPFSection>
					<div className="">
						<TPFTable title="Top 10 Batsmen">
							<tbody>{top10BatsmenItems}</tbody>
						</TPFTable>
						<TPFTable title="Top 10 Bowlers">
							<tbody>{top10BowlersItems}</tbody>
						</TPFTable>
					</div>
				</TPFSection>
			</div>
		</div>
	);
}
