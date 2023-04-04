import { Link } from "react-router-dom";
import data from '../data/resume.json';
import { convertMonth } from "../utilities/utilities";
import { GeoAltFill } from "../assets/icons";

const Resume = () => {
	return (
		<main data-template="resume">
			<Hero />
			<Summary />

			<ResumeContainer />
		</main>
	)
}

const Hero = () => {
	return (
		<div id="Hero" className="pt-10 pb-7">
			<div className="container-lg">
				<div className="row align-items-center">
					<div className="col-auto me-auto">
						<h1 className="display-6">Anna Baker</h1>
					</div>
					<div className="col-auto">
						<h2>
							<span>Creative Developer</span>
							<span>Digital Designer</span>
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

const Summary = () => {
	return (
		<div id="Summary" className="overflow-x-hidden pb-8">
			<div className="container-lg">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<h3 className="heading-line">Summary</h3>
					</div>
				</div>
			</div>
			<div className="container-lg">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const ResumeContainer = () => {
	return (
		<div className="container-lg">
			<div className="row gx-5">
				<div className="col-lg-4">
					<ResumeNav />
				</div>
				<div className="col-lg-8">
					<div id="experience" className="row">
						<div className="col">
							<div id="industry-experience" className="row">
								<h3>Industry Experience</h3>
								{data.experience
									.filter(f => f.type === "industry")
									.sort((a, b) => a.start_date.year - b.start_date.year || a.start_date.month - b.start_date.month)
									.map(d => (
										<ResumeExperience key={d.id} {...d} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const ResumeNav = () => {
	const handleClick = (event, id) => {
		document.getElementById(id).scrollIntoView({behavior: "smooth"})
	}

	return (
		<ul className="nav flex-column">
			<li className="nav-item">
				<Link
					className="nav-link"
					onClick={e => handleClick(e, "experience")}
					to="#experience"
				>
					Experience
				</Link>
				<ul className="nav flex-column ps-4">
					<li className="nav-item">
						<Link
							className="nav-link"
							onClick={e => handleClick(e, "industry_experience")}
							to="#industry_experience"
						>
							Industry Experience
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							onClick={e => handleClick(e, "teaching_experience")}
							to="#teaching_experience"
						>
							Teaching Experience
						</Link>
					</li>
				</ul>
			</li>
			<li>
				<Link
					className="nav-link"
					onClick={e => handleClick(e, "education")}
					to="#education"
				>
					Education
				</Link>
			</li>
			<li>
				<Link
					className="nav-link"
					onClick={e => handleClick(e, "skills")}
					to="#skills"
				>
					Skills
				</Link>
			</li>
		</ul>
	)
}

const ResumeExperience = (p) => {
	//console.log(p);

	return (
		<div className="experience">
			<div className="row gx-3">
				<div className="col-auto">
					<img src={p.logo} alt={`${p.company} logo`} style={{ backgroundColor: p.color }} />
				</div>
				<div className="col-auto">
					<div className="row">
						<div className="col">
							<h4>{p.company}</h4>
						</div>
					</div>
					<div className="row">
						<div className="col">
							{p.present ? (
								<>
									<div className="chip chip-primary chip-sm">Present</div>
									<p>{convertMonth(p.start_date[0].month)} {p.start_date[0].year}</p>
								</>
							) : (
								<p>{convertMonth(p.start_date[0].month)} {p.start_date[0].year} &mdash; {convertMonth(p.end_date[0].month)} {p.end_date[0].year}</p>
							)}
							<GeoAltFill />
							<p>{p.location}</p>
						</div>
					</div>
				</div>
			</div>
			{p.positions.map(m => (
				<div className="row gx-3">
					<div className="col-auto">
					</div>
					<div className="col-auto">
						<div className="row">
							<div className="col">
								<h5>{m.title}</h5>
								<p>{m.start_date[0].month ? (
									`${convertMonth(m.start_date[0].month)} ${m.start_date[0].year} — ${m.present ? "Present" : convertMonth(m.end_date[0].month)} ${m.end_date[0].year}`
								) : null}</p>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<ul>
									{m.details.map(d => (
										<li>{d}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			))}
			
		</div>
	)
}

export default Resume;