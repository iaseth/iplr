import Ipl from './ipl';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const codes = require('../codes.json');



export default function IplReactApp () {
	const ipl = new Ipl(codes);
	ipl.printStatus();

	return (
		<div className="IplReactApp">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}
