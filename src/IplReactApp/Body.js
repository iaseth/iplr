import {Match} from './Match';



export default function Body ({ipl}) {

	return (
		<div className="Body">
			<div className="bg-red-600 min-h-screen flex flex-col">
				<div className="m-auto text-white text-4xl lg:text-8xl font-bold">Cricdocs IPL R</div>
				<Match />
			</div>
		</div>
	);
}
