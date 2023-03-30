const Background = () => {
	return (
		<div id="Background">
			<div className="bg-noise">
				{/* <Noise /> */}
			</div>
			<div className="bg-circles">
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

const Noise = () => {
	return (
		<svg viewBox='0 0 2000 2000' xmlns='http://www.w3.org/2000/svg'>
			<filter id='noiseFilter'>
				<feTurbulence 
					type='fractalNoise' 
					baseFrequency='0.65' 
					numOctaves='3' 
					stitchTiles='stitch'/>
			</filter>
			<rect width='100%' height='100%' filter='url(#noiseFilter)'/>
		</svg>
	)
}

export default Background;