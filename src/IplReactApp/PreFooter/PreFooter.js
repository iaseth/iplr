import {Link} from 'react-router-dom';



function PreFooterSection ({children}) {
	return (
		<div className="py-8">
			{children}
		</div>
	);
}

function PreFooterHeading ({children}) {
	return (
		<div className="text-xl font-bold pl-4">
			{children}
		</div>
	);
}

function PreFooterButton ({to, team, children, n}) {
	return (
		<Link to={to} style={team.bdStyle} className="font-bold bg-slate-900 px-2 py-2 my-2 mx-2 border-2 rounded cursor-pointer duration-300 outline-none hover:bg-slate-700 focus:bg-slate-700">
			{children}
			{n && <div className="inline-block text-sm w-8 bg-slate-800 px-2 py-1 rounded">{n}</div>}
		</Link>
	);
}

export function PreFooter ({
	ipl, PAGE_TYPES,
	pageType, setPageType
}) {

	const seasonItems = [...ipl.seasons].reverse().map((s, i) => {
		return (
			<PreFooterButton key={i} to={s.getLink()} team={s.winner} n={s.matches.length}>
				<div className="inline-block text-base w-20 p-1">{s.year}</div>
			</PreFooterButton>
		);
	});

	const teamItems = ipl.teamsArray.map((t, i) => {
		return (
			<PreFooterButton key={i} to={t.getLink()} team={t}>
				<div className="text-sm px-4 py-2">{t.fn}</div>
			</PreFooterButton>
		);
	});

	const groundItems = ipl.groundsArray.map((g, i) => {
		return (
			<PreFooterButton key={i} to={g.getLink()} team={g.hometeam} n={g.matches.length}>
				<div className="inline-block text-sm px-2 p-1">{g.city}</div>
			</PreFooterButton>
		);
	});

	return (
		<div className="PreFooter bg-slate-800 text-slate-200 select-none">
			<div className="max-w-5xl m-auto px-4 py-24">
				<PreFooterSection>
					<PreFooterHeading>Seasons</PreFooterHeading>
					<div className="py-2 flex flex-wrap text-center">{seasonItems}</div>
				</PreFooterSection>
				<PreFooterSection>
					<PreFooterHeading>Teams</PreFooterHeading>
					<div className="py-2 flex flex-wrap text-center">{teamItems}</div>
				</PreFooterSection>
				<PreFooterSection>
					<PreFooterHeading>Grounds</PreFooterHeading>
					<div className="py-2 flex flex-wrap text-center">{groundItems}</div>
				</PreFooterSection>
			</div>
		</div>
	);
}
