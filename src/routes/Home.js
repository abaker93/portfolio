import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import portfolioData from "../data/portfolio.json";
import Arrow from "../assets/Arrow";
import { GitHubBI, LinkedInBI } from "../assets/icons";

const Home = () => {
	const portfolio = portfolioData.portfolio;

	return (
		<>
			<Background />
			<main data-template="home">
				<Hero />
				<About />
				<div id="Portfolio" className="container-lg">
					{portfolio.filter(f => f.featured).map(p => (
						<PortfolioItem key={p.id} {...p} />
					))}
				</div>
				<Contact />
			</main>
		</>
	)
}

const Hero = () => {
	return (
		<div id="Hero">
			<div className="container-lg">
				<h1 className="display-1">
					<div className="row">
						<div className="col-auto offset-md-1">Creative</div>
						<div className="col-auto ms-auto">Developer</div>
						<div className="col-auto offset-md-2">
							<div className="row">
								<div className="col-auto">Digital</div>
								<div className="col-auto d-flex align-items-end">
									<span className="p text-uppercase pb-4">Crafting amazing web experiences.</span>
								</div>
							</div>
						</div>
						<div className="col-auto offset-md-3">Designer</div>

					</div>
				</h1>
				<div className="scroll-indicator">
					<Arrow direction="down" stroke="#302927" />
					<span className="h5">scroll</span>
				</div>
			</div>
		</div>
	)
}

const About = () => {
	return (
		<div id="About" className="container-md py-10">
			<div className="row">
				<div className="col-4 title">
					<h2 className="display-5 text-lowercase">Anna</h2>
					<p>(n) /ˈänə/</p>
				</div>
				<div className="col-8">
					<p>Hi, I'm Anna, a full stack designer with a passion for creating engaging digital experiences. I have a strong background in design, technology, and user-centered thinking and a track record of delivering user-friendly solutions that meet business goals and enhance user satisfaction. My expertise includes conducting user research, creating wireframes and prototypes, and conducting user testing.</p>
					<p>I use design programs such as Figma, Adobe XD, Photoshop, and Illustrator to create visually appealing and functional designs.</p>
					<p>As a developer, I have expertise in HTML, CSS, JavaScript, and frameworks such as React. I create dynamic and responsive user interfaces that are optimized for performance and accessibility. I stay up-to-date with the latest design and development trends to ensure my solutions are scalable and meet industry standards.</p>
					<p>Currently, I'm also a proud professor of Graphic Design at Mercyhurst University in Erie, Pennsylvania.</p>
					<div className="mt-5 d-flex justify-content-end">
						<a className="btn btn-outline-dark me-4" href="/resume">Resume</a>
						<a className="btn btn-icon btn-outline-dark me-4" href="https://www.linkedin.com/in/annabakerdesign/">
							<LinkedInBI />
							LinkedIn
						</a>
						<a className="btn btn-icon btn-outline-dark" href="https://github.com/abaker93/">
							<GitHubBI />
							GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

const PortfolioItem = p => {
	const [ transformOrigin, setTransformOrigin ] = useState('50% 50%');

	const handleMouseMove = e => {
		const { left, top, width, height } = e.target.getBoundingClientRect();
		const x = (e.clientX - left) / width * 100;
		const y = (e.clientY - top) / height * 100;
		setTransformOrigin(`${x}% ${y}%`)
	}

	return (
		<div className={`row gx-5 mb-8 card-portfolio portfolio-${p.id % 2 === 0 ? "left" : "right"}`}>
			<div className="col-lg-5 image">
				<figure className="image-container" onMouseMove={e => handleMouseMove(e)} onMouseLeave={() => setTransformOrigin('50% 50%')}>
					<Link to={`portfolio/${p.page}`}>
						<img src={`images/portfolio/${p.featured_img}`} alt={p.title} style={{ transformOrigin: transformOrigin }} />
					</Link>
				</figure>
			</div>
			<div className="col-lg-2"></div>
			<div className="col-lg-5 details">
				<h2 className="baseline-rule"><Link className="link-dark link-opacity-75-hover link-underline-opacity-0" to={`portfolio/${p.page}`}>{p.title}</Link></h2>
				<div className="tags mt-3 d-flex flex-wrap gap-2">
					{p.tags.map((t, index) => (
						<span key={index} className="chip chip-outline-dark">{t}</span>
					))}
				</div>
			</div>
		</div>
	)
}

const Contact = () => {
	return (
		<div id="Contact" className="container-lg">
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