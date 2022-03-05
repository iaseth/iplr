import {RainbowBorder} from '../Utils';



function PreFooterHeading ({children}) {
	return (
		<div className="text-xl font-bold">
			{children}
		</div>
	);
}

export function PreFooter ({
	ipl, PAGE_TYPES,
	pageType, setPageType,
	year, setYear,
	groundId, setGroundId,
	teamId, setTeamId
}) {

	const seasonItems = ipl.seasons.map((s, i) => {
		return (
			<div key={i} className="Season bg-slate-900 px-4 py-3 mb-4 mr-4 cursor-pointer"
				onClick={() => {setPageType(PAGE_TYPES.SEASON);}}>
				<div className="font-bold text-sm">IPL {s.year}</div>
			</div>
		);
	});

	const teamItems = ipl.teamsArray.map((t, i) => {
		return (
			<div key={i} className="Team bg-slate-900 px-4 py-3 mb-4 mr-4 cursor-pointer"
				onClick={() => {setPageType(PAGE_TYPES.TEAM);}}>
				<div className="font-bold text-sm">{t.fn}</div>
			</div>
		);
	});

	const groundItems = ipl.groundsArray.map((g, i) => {
		return (
			<div key={i} className="Ground bg-slate-900 px-3 py-2 mb-4 mr-4 cursor-pointer"
				onClick={() => {setPageType(PAGE_TYPES.GROUND);}}>
				<div className="font-bold text-sm">{g.city}</div>
			</div>
		);
	});

	return (
		<div className="PreFooter bg-slate-700 text-white">
			<RainbowBorder />
			<div className="max-w-5xl m-auto px-4 py-24">
				<PreFooterHeading>Seasons</PreFooterHeading>
				<div className="py-6 flex flex-wrap">{seasonItems}</div>
				<PreFooterHeading>Teams</PreFooterHeading>
				<div className="py-6 flex flex-wrap">{teamItems}</div>
				<PreFooterHeading>Grounds</PreFooterHeading>
				<div className="py-6 flex flex-wrap">{groundItems}</div>
			</div>
		</div>
	);
}
