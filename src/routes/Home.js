import Arrow from "../assets/Arrow";
import portfolioData from "../data/portfolio.json";

const Home = () => {
	const portfolio = portfolioData.portfolio;

	return (
		<main template="home">
			<Hero />

			<About />

			<Portfolio>
				{portfolio.map(p => (
					<PortfolioItem key={p.id} {...p} />
				))}
			</Portfolio>

			<Contact />
		</main>
	)
}

const Hero = () => {
	return (
		<div id="Hero" className="container-lg">
			<h1 className="display-1">
				<div className="row">
					<div className="col-auto offset-md-1">Creative</div>
					<div className="col-auto ms-auto">Developer</div>
					<div className="col-auto offset-md-2">
						<div className="row">
							<div className="col-auto">Digital</div>
							<div className="col-auto d-flex align-items-end">
								<span className="p text-uppercase pb-5">Crafting amazing web experiences.</span>
							</div>
						</div>
					</div>
					<div className="col-auto offset-md-3">Designer</div>

				</div>
			</h1>
			{/*<div className="row">
				<p>Passionate about creating amazing web experiences.</p>
				<p>scroll</p>
			</div>*/}
			<div className="scroll-indicator">
				<Arrow direction="down" stroke="#302927" />
				<span className="h5">scroll</span>
			</div>
		</div>
	)
}

const About = () => {
	return (
		<div id="about" className="container-md">
			<div className="row">
				<div className="col-4">
					<h2>Anna</h2>
					<p>(n) /ˈänə/</p>
				</div>
				<div className="col-8">
					<p>Hi, I'm Anna, a full stack designer with a passion for creating engaging digital experiences. I have a strong background in design, technology, and user-centered thinking and a track record of delivering user-friendly solutions that meet business goals and enhance user satisfaction. My expertise includes conducting user research, creating wireframes and prototypes, and conducting user testing.</p>
					<p>I use design programs such as Figma, Adobe XD, Photoshop, and Illustrator to create visually appealing and functional designs.</p>
					<p>As a developer, I have expertise in HTML, CSS, JavaScript, and frameworks such as React. I create dynamic and responsive user interfaces that are optimized for performance and accessibility. I stay up-to-date with the latest design and development trends to ensure my solutions are scalable and meet industry standards.</p>
					<p>Currently, I'm also a proud professor of Graphic Design at Mercyhurst University in Erie, Pennsylvania.</p>
					<div>
						<a className="btn btn-outline-dark" href="/resume">Resume</a>
						<a className="btn btn-outline-dark" href="https://www.linkedin.com/in/annabakerdesign/">LinkedIn</a>
						<a className="btn btn-outline-dark" href="https://github.com/abaker93/">GitHub</a>
					</div>
				</div>
			</div>
		</div>
	)
}

const Portfolio = (props) => {
	return (
		<div id="portfolio" className="container-fluid">
			{props.children}
		</div>
	)
}

const PortfolioItem = (props) => {
	//console.log(props)
	return (
		<div className="container-lg">
			<div className="row">
				<div className="col">
					Image
				</div>
				<div className="col">
					<h2>{props.title}</h2>
					<div className="tags">
						{props.tags.map((t, index) => (
							<span key={index} className="chip chip-sm chip-light">{t}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const Contact = () => {
	return (
		<div id="contact" className="container-lg">
			<div className="row">
				<div className="col">
					<form>
						<div className='form-floating mb-3'>
							<input type="text" className="form-control" id="nameInput" placeholder="John Smith" />
							<label htmlFor="nameInput">Your Name</label>
						</div>
						<div className='form-floating mb-3'>
							<input type="email" className="form-control" id="emailInput" placeholder="john.smith@email.com" />
							<label htmlFor="emailInput">Your Email</label>
						</div>
						<div className='form-floating mb-3'>
							<select className="form-select" defaultValue={0} aria-label="Select the subject of your message">
								<option value="0">Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
							<label htmlFor="subjectSelect">Message Subject</label>
						</div>
						<div className='form-floating mb-3'>
							<textarea className="form-control" id="messageTextarea" placeholder="Your message..."></textarea>
							<label htmlFor="messageTextarea" className="form-label">Your Message</label>
						</div>
						<button type="submit" className="btn btn-outline-dark">Submit</button>
					</form>
				</div>
			</div>
		</div>
		
	)
}

export default Home;