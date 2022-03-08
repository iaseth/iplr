import {Link} from 'react-router-dom';



function PreFooterSection ({children}) {
	return (
		<div className="py-4">
			{children}
		</div>
	);
}

function PreFooterHeading ({children}) {
	return (
		<div className="text-xl font-bold pl-2">
			{children}
		</div>
	);
}

function PreFooterButton ({to, team, children}) {
	return (
		<Link to={to}>
			<div className="Season bg-slate-900 px-4 py-2 mb-4 mr-4 border-2 rounded cursor-pointer duration-300 outline-none hover:bg-slate-700 focus:bg-slate-700"
					style={team.bdStyle} tabIndex="0">
				{children}
			</div>
		</Link>
	);
}

export function PreFooter ({
	ipl, PAGE_TYPES,
	pageType, setPageType,
	year, setYear,
	goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam
}) {

	const seasonItems = ipl.seasons.map((s, i) => {
		return (
			<PreFooterButton key={i} to={s.getLink()} team={s.winner}>
				<div className="font-bold text-base w-16 p-1">{s.year}</div>
			</PreFooterButton>
		);
	});

	const teamItems = ipl.teamsArray.map((t, i) => {
		return (
			<PreFooterButton key={i} to={t.getLink()} team={t}>
				<div className="font-bold text-sm p-2">{t.fn}</div>
			</PreFooterButton>
		);
	});

	const groundItems = ipl.groundsArray.map((g, i) => {
		return (
			<PreFooterButton key={i} to={g.getLink()} team={g.hometeam}>
				<div className="font-bold text-sm">{g.city}</div>
			</PreFooterButton>
		);
	});

	return (
		<div className="PreFooter bg-slate-800 text-slate-200 select-none">
			<div className="max-w-5xl m-auto px-4 py-24">
				<PreFooterSection>
					<PreFooterHeading>Seasons</PreFooterHeading>
					<div className="py-6 flex flex-wrap text-center">{seasonItems}</div>
				</PreFooterSection>
				<PreFooterSection>
					<PreFooterHeading>Teams</PreFooterHeading>
					<div className="py-6 flex flex-wrap text-center">{teamItems}</div>
				</PreFooterSection>
				<PreFooterSection>
					<PreFooterHeading>Grounds</PreFooterHeading>
					<div className="py-6 flex flex-wrap text-center">{groundItems}</div>
				</PreFooterSection>
			</div>
		</div>
	);
}
