import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Background from "../components/Background";
import portfolioData from "../data/portfolio.json";
import Arrow from "../assets/Arrow";
import { GitHubBI, LinkedInBI } from "../assets/icons";

const Home = () => {
	const location = useLocation();
	const portfolio = portfolioData.portfolio;

	const handleClick = (e, id) => {
		document.getElementById(id).scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		if (location.hash) {
			let l = location.hash
			l = l.replace("#", "")
			document.getElementById(l).scrollIntoView({behavior: "smooth"})
		}
	}, [location])

	return (
		<>
			<Background />
			<main data-template="home">
				<Hero handleClick={handleClick}/>
				<About />
				<div id="portfolio" className="pt-10 overflow-x-hidden">
					<div className="container-md">
						{portfolio.filter(f => f.featured).map(p => (
							<PortfolioItem key={p.id} {...p} />
						))}
					</div>
				</div>
			</main>
		</>
	)
}

const Hero = p => {
	return (
		<div id="Hero" className="pt-8 pb-5 py-md-0">
			<div className="container-md">
				<h1 className="display-1">
					<div className="row">
						<div className="col col-md-auto offset-md-1 a">creative</div>
						<div className="col col-md-auto ms-auto a">developer</div>
						<div className="col col-md-auto offset-lg-1">
							<div className="row">
								<div className="col-auto a">digital</div>
								<div className="col d-none d-md-flex align-items-end">
									<p className="p tagline text-uppercase m-0 pb-lg-4">Crafting amazing web experiences.</p>
								</div>
							</div>
						</div>
						<div className="col col-md-auto offset-md-3 a">designer</div>
					</div>
				</h1>
				<p className="tagline d-md-none text-uppercase text-center small">Crafting amazing<br />web experiences.</p>
				<div className="scroll-indicator d-none d-md-inline ">
					<Link
						className="link-dark link-underline link-underline-opacity-0"
						onClick={e => p.handleClick(e, "about")}
					>
						<Arrow direction="down" stroke="#302927" />
						<span className="h5 a">scroll</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

const About = () => {
	return (
		<div id="about" className="container-md pt-0 pt-md-10">
			<div className="row">
				<div className="col-12 col-md-4">
					<h2 className="display-5 a">anna</h2>
					<p>(n) /ˈänə/</p>
				</div>
				<div className="col-12 col-md-8">
					<p>Hi, I'm Anna, a full stack designer with a passion for creating engaging digital experiences. I have a strong background in design, technology, and user-centered thinking and a track record of delivering user-friendly solutions that meet business goals and enhance user satisfaction. My expertise includes conducting user research, creating wireframes and prototypes, and conducting user testing.</p>
					<p>I use design programs such as Figma, Adobe XD, Photoshop, and Illustrator to create visually appealing and functional designs.</p>
					<p>As a developer, I have expertise in HTML, CSS, JavaScript, and frameworks such as React. I create dynamic and responsive user interfaces that are optimized for performance and accessibility. I stay up-to-date with the latest design and development trends to ensure my solutions are scalable and meet industry standards.</p>
					<p>Currently, I'm also a proud professor of Graphic Design at Mercyhurst University in Erie, Pennsylvania.</p>
					<div className="mt-5 d-flex flex-column flex-sm-row gap-3 justify-content-end">
						<a className="btn btn-icon btn-outline-dark me-sm-4 justify-content-center a" href="/resume">Resume</a>
						<a className="btn btn-icon btn-outline-dark me-sm-4 justify-content-center" href="https://www.linkedin.com/in/annabakerdesign/">
							<LinkedInBI />
							<span className="a">linkedin</span>
						</a>
						<a className="btn btn-icon btn-outline-dark justify-content-center" href="https://github.com/abaker93/">
							<GitHubBI />
							<span className="a">github</span>
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
		<div className={`row gx-5 card-portfolio portfolio-${p.id % 2 === 0 ? "left" : "right"}`}>
			<div className="col-lg-5 image">
				<figure className="image-container" onMouseMove={e => handleMouseMove(e)} onMouseLeave={() => setTransformOrigin('50% 50%')}>
					<Link to={`portfolio/${p.page}`}>
						<img src={`images/portfolio/${p.featured_img}`} alt={p.title} style={{ transformOrigin: transformOrigin }} />
					</Link>
				</figure>
			</div>
			<div className="col-lg-2"></div>
			<div className="col-lg-5 details">
				<h2 className="baseline-rule"><Link className="link-dark link-opacity-75-hover link-underline-opacity-0 a" to={`portfolio/${p.page}`}>{p.title}</Link></h2>
				<div className="tags mt-3 d-flex flex-wrap gap-2">
					{p.tags.map((t, index) => (
						<span key={index} className="chip chip-outline-dark">{t}</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home;