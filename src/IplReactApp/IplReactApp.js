import React from 'react';

import IPL from './ipl';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const codes = require('../codes.json');



export default function IplReactApp () {
	const ipl = new IPL(codes);

	React.useEffect(function () {
		fetch("data/bundle.json")
			.then(response => response.text())
			.then(text => JSON.parse(text))
			.then(json => {
				ipl.loadBundle(json);
				ipl.doStuff();
			});
	});

	return (
		<div className="IplReactApp">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}
