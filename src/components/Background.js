import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Background = () => {
	const location = useLocation();
	const [ isHome, setIsHome ] = useState(false);
	
	useEffect(() => {
		if (location.pathname === "/") {
			setIsHome(true)
		} else {
			setIsHome(false)
		}
	}, [])

	console.log(location)

	return (
		<div id="Background">
			<div className="bg-noise" />
			<div className={`bg-circles${ isHome ? " index" : "" }`}>
				<div className="bg-circle _1"></div>
				<div className="bg-circle _2"></div>
				<div className="bg-circle _3"></div>
				<div className="bg-circle _4"></div>
				<div className="bg-circle _5"></div>
				<div className="bg-circle _6"></div>
			</div>
		</div>
	)
}

export default Background;