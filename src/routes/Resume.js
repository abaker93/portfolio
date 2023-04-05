import { Link } from "react-router-dom";
import data from '../data/resume.json';
import { convertYear, convertMonth } from "../utilities/utilities";
import { gray } from "../utilities/colors";
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
						<h3 className="baseline-rule">Summary</h3>
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
		<div id="resume" className="">
			<div className="container-lg">
				<div className="row gx-5">
					<div className="col-lg-4">
						<ResumeNav />
					</div>
					<div className="col-lg-8">
						<div id="experience" className="row">
							<div className="col">
								<div id="industry-experience" className="row mb-3">
									<div className="col">
										<h3 className="h2 baseline-rule-end mb-4">Industry Experience</h3>
										{data.work
											.filter(f => f.type === "industry")
											.sort((a, b) => a.startDate - b.startDate)
											.map(d => (
												<ResumeExperience key={d.id} {...d} />
										))}
									</div>
								</div>
								<div id="teaching-experience" className="row">
									<div className="col">
										<h3 className="h2 baseline-rule-end mb-4">Teaching Experience</h3>
										{data.work
											.filter(f => f.type === "teaching")
											.sort((a, b) => a.startDate - b.startDate)
											.map(d => (
												<ResumeExperience key={d.id} {...d} />
										))}
									</div>
								</div>
							</div>
						</div>

						<div id="education" className="row">
							<div className="col">
								<h3 className="h2 baseline-rule-end mb-4">Education</h3>
							</div>
						</div>

						<div id="skills" className="row">
							<div className="col">
								<h3 className="h2 baseline-rule-end mb-4">Skills</h3>
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
		<ul className="nav flex-column sticky-top">
			<li className="nav-item h3">
				<Link
					className="nav-link"
					onClick={e => handleClick(e, "experience")}
				>
					Experience
				</Link>
				<ul className="nav flex-column ps-4">
					<li className="nav-item p large">
						<Link
							className="nav-link"
							onClick={e => handleClick(e, "industry-experience")}
						>
							Industry Experience
						</Link>
					</li>
					<li className="nav-item p large">
						<Link
							className="nav-link"
							onClick={e => handleClick(e, "teaching-experience")}
						>
							Teaching Experience
						</Link>
					</li>
				</ul>
			</li>
			<li className="nav-item h3">
				<Link
					className="nav-link"
					onClick={e => handleClick(e, "education")}
				>
					Education
				</Link>
			</li>
			<li className="nav-item h3">
				<Link
					className="nav-link"
					onClick={e => handleClick(e, "skills")}
				>
					Skills
				</Link>
			</li>
		</ul>
	)
}

const ResumeExperience = (p) => {
	return (
		<div className="experience">

			<div className="row gx-3 align-items-center mb-2">
				<div className="col-auto">
					<img src={p.logo} alt={`${p.name} logo`} style={{ backgroundColor: p.color }} />
				</div>
				<div className="col">
					<div className="row">
						<div className="col">
							<h4 className="p large m-0">{p.name}</h4>
						</div>
					</div>
					<div className="row gx-1 align-items-center">
						{p.present ? (
							<>
								<div className="col-auto pe-1">
									<div className="chip chip-primary-light chip-sm">Present</div>
								</div>
								<div className="col-auto pe-1">
									<p className="small m-0 text-600">{`${convertMonth(p.startDate)} ${convertYear(p.startDate)}`}</p>
								</div>
							</>
						) : (
							<div className="col-auto pe-1">
								<p className="small m-0 text-600">{convertMonth(p.startDate)} {convertYear(p.startDate)} &mdash; {convertMonth(p.endDate)} {convertYear(p.endDate)}</p>
							</div>
						)}
						<div className="col-auto d-flex">
							<GeoAltFill fill={gray[500]} />
						</div>
						<div className="col-auto">
							<p className="small m-0 text-600">{p.location}</p>
						</div>
					</div>
				</div>
			</div>

			<div id={`positions-${p.id}`}>
				{p.position.map(m => (
					<div key={m.id} className="position row gx-3">
						<div className="col-auto">
							<button
								className={`btn btn-toggle-outline-dark${p.present && m.present ? "" : " collapsed"}`}
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#details-${p.id}${m.id}`}
								aria-expanded={p.present && m.present ? "true" : "false"}
								aria-controls={`details-${p.id}${m.id}`}
							></button>
						</div>
						<div className="col pb-4">
							<div className="row mb-2">
								<div className="col">
									<h5 className="h3 m-0">{m.title}</h5>
									<p className="small text-600 m-0">{m.startDate ? (
										`${convertMonth(m.startDate)} ${convertYear(m.startDate)} — ${m.present ? "Present" : convertMonth(m.endDate)} ${convertYear(m.endDate)}`
									) : null}</p>
								</div>
							</div>
							<div className="row">
								<div id={`details-${p.id}${m.id}`} className={`col collapse${p.present && m.present ? " show" : ""}`} data-bs-parent={`positions-${p.id}`}>
									<ul className="small m-0">
										{m.summary.map((d, index) => (
											<li key={index}>{d}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Resume;