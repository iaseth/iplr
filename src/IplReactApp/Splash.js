import React from 'react';



export default function Splash () {
	const [currentDot, setCurrentDot] = React.useState(0);

	React.useEffect(function () {
		// console.log("Splash.");
		const id = setInterval(function () {
			setCurrentDot(currentDot => (currentDot + 1 < 5) ? (currentDot + 1) : 0);
		}, 800);

		return function cleanup () {
			clearInterval(id);
			// console.log("Unsplash.");
		};
	}, []);

	const dots = [...Array(5).keys()].map((v, i) => {
		let dotClass = "border-4";
		dotClass += (currentDot === i) ? " w-6 h-6 -m-1 bg-red-400 border-red-800" : " w-4 h-4 bg-red-600 border-transparent";
		return (
			<div key={i} className={dotClass}></div>
		);
	});

	return (
		<div className="Splash">
			<div className="bg-green-600 min-h-screen flex flex-col">
				<div className="m-auto">
					<div className="text-white text-4xl lg:text-8xl font-bold">Cricdocs IPL R</div>
					<div className="flex">
						<div className="m-auto flex space-x-4 py-6">{dots}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
