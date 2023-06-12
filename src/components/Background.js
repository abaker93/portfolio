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
	}, [location, p.colors])

	if (isHome) {
		return (
			<div id="Background">
				<div className="bg-noise" />
				<div className="bg-circles index">
					<div className="bg-circle_1"></div>
					<div className="bg-circle_2"></div>
					<div className="bg-circle_3"></div>
					<div className="bg-circle_4"></div>
					<div className="bg-circle_5"></div>
					<div className="bg-circle_6"></div>
				</div>
			</div>
		)
	}

	return (
		<div id="Background">
			<div className="bg-noise" />
			<div className="bg-circles">
				<div className="bg-circle_1" style={{ backgroundColor: bgColor1 }}></div>
				<div className="bg-circle_3"></div>
				<div className="bg-circle_4" style={{ backgroundColor: bgColor2 }}></div>
				<div className="bg-circle_7" style={{ backgroundColor: bgColor1 }}></div>
				<div className="bg-circle_8" style={{ backgroundColor: bgColor2 }}></div>
				<div className="bg-circle_9"></div>
			</div>
		</div>
	)	
}

export default Background;