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

export default Noise;