import {useParams} from 'react-router-dom';

import RivalryHome from './RivalryHome';
import RivalryTeam from './RivalryTeam';
import RivalryPage from './RivalryPage';
import {Four04} from '../Four04';



export function Rivalry ({
	ipl, setTitleSuffix, setCurrentPage,
	PAGE_TYPES, setPageType
}) {

	const params = useParams();
	const {rivalryPath} = params;
	if (rivalryPath) {
		const rivalry = ipl.getRivalryFromPath(rivalryPath);
		if (rivalry) {
			return <RivalryPage {...{ipl, rivalry}} />;
		}

		const team = ipl.getTeamFromPath(rivalryPath);
		if (team) {
			return <RivalryTeam {...{ipl, team}} />;
		}

		return <Four04 {...{setTitleSuffix}} />;
	} else {
		return <RivalryHome ipl={ipl} />;
	}
}
