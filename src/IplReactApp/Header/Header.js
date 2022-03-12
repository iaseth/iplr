import {RainbowBorder} from '../Utils';



export function Header ({
	currentPage, goToPreviousPage, goToHome, goToNextPage
}) {

	const HeaderButton = ({goTo, children}) => <div onClick={goTo} className="inline-block rounded w-24 cursor-pointer bg-zinc-900 px-4 py-3 border-2 border-zinc-900 duration-300 hover:bg-zinc-900 hover:border-zinc-700">{children}</div>;

	return (
		<div className="Header bg-zinc-900 text-white select-none">
			<RainbowBorder />
			<div className="max-w-5xl flex m-auto px-4 py-3 font-bold text-sm text-center text-slate-200">
				<div className="w-24">
					{currentPage && currentPage.prev && <HeaderButton goTo={goToPreviousPage}>previous</HeaderButton>}
				</div>
				<div className="grow text-center font-bold">
					<HeaderButton goTo={goToHome}>home</HeaderButton>
				</div>
				<div className="w-24">
					{currentPage && currentPage.next && <HeaderButton goTo={goToNextPage}>next</HeaderButton>}
				</div>
			</div>
			<RainbowBorder />
		</div>
	);
}
