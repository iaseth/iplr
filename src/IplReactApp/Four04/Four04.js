import React from 'react';



export function Four04 ({
	setTitleSuffix
}) {

	React.useEffect(function () {
		setTitleSuffix("404");
	}, [setTitleSuffix]);

	return (
		<div className="Four04">
			<div className="text-center py-20">
				<h1 className="text-9xl py-16">404</h1>
				<h3 className="text-2xl">This page could not be found!</h3>
			</div>
		</div>
	);
}
