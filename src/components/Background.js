import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Background = p => {
	const location = useLocation();
	const [ isHome, setIsHome ] = useState(false);

	const [ bgColor1, setBgColor1 ] = useState('#5B3A73');
	const [ bgColor2, setBgColor2 ] = useState('#FE5F55');

	useEffect(() => {
		location.pathname === "/" ? setIsHome(true) : setIsHome(false)

		if (p.colors) {
			if (p.colors[0]) { setBgColor1(p.colors[0]) }
			if (p.colors[1]) { setBgColor2(p.colors[1]) }
		}
	}, [location])

	// console.log(isHome)
	// console.log(location.pathname)

	if (isHome) {
		return (
			<div id="Background">
				<div className="bg-noise" />
				<div className="bg-circles index">
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

	return (
		<div id="Background">
			<div className="bg-noise" />
			<div className="bg-circles">
				<div className="bg-circle _1" style={{ backgroundColor: bgColor1 }}></div>
				<div className="bg-circle _3"></div>
				<div className="bg-circle _4" style={{ backgroundColor: bgColor2 }}></div>
			</div>
		</div>
	)	
}

export default Background;