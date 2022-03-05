import Inning from './Inning';



export function Match ({
	PAGE_TYPES, setPageType,
	setYear, setMatchIndex,
	setGroundId, setPlayerId, setTeamId,
	match
}) {

	return (
		<div className="Match pb-12">
			<div className="lg:flex lg:space-x-4">
				<Inning inning={match.firstInning} />
				<Inning inning={match.secondInning} />
			</div>
		</div>
	);
}
