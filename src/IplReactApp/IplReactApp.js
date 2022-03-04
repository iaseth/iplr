import React from 'react';

import IPL from './ipl';

import Header from './Header';
import Splash from './Splash';
import Body from './Body';
import Footer from './Footer';

const codes = require('../codes.json');



export default function IplReactApp () {
	const [doneFetching, setDoneFetching] = React.useState(false);
	const ipl = new IPL(codes);

	React.useEffect(function () {
		fetch("data/bundle.json")
			.then(response => response.text())
			.then(text => JSON.parse(text))
			.then(json => {
				ipl.loadBundle(json);
				ipl.doStuff();
				setTimeout(() => setDoneFetching(true), 5000);
			});
	});

	return (
		<div className="IplReactApp">
			<Header />
			{!doneFetching && <Splash />}
			{doneFetching && <Body {...{ipl}} />}
			<Footer />
		</div>
	);
}
