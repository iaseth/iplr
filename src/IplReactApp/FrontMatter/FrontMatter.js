


export default function FrontMatter ({
	title="Untitled", description, children
}) {
	// used by Team, Ground, Player and Rivalry pages

	return (
		<div className="FrontMatter px-4 pt-8 max-w-4xl mx-auto">
			<h2 className="text-4xl py-4 font-bold">{title}</h2>
			{description && <h4>{description}</h4>}
			<div>
				{children}
			</div>
		</div>
	);
}
