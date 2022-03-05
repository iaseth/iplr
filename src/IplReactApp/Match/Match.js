import Inning from './Inning';



export function Match ({
	goToSeason, goToMatch,
	goToGround, goToPlayer, goToTeam,
	PAGE_TYPES, setPageType,
	setYear, setMatchIndex,
	setGroundId, setPlayerId, setTeamId,
	match
}) {

	return (
		<div className="Match pb-12">
			<div className="lg:flex lg:space-x-4">
				<Inning inning={match.firstInning} goToPlayer={goToPlayer} />
				<Inning inning={match.secondInning} goToPlayer={goToPlayer} />
			</div>
		</div>
	);
}
