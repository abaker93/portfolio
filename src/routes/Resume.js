import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import data from '../data/resume.json';
import { convertYear, convertMonth } from "../utilities/utilities";
import { gray } from "../utilities/colors";
import { CertificateBI, GeoAltFillBI } from "../assets/icons";
import { AltmanHall, AnnaBakerDesign, Coursera, EpicWebStudios, HowardHanna, Mercyhurst, VertMarkets } from "../assets/logos";

const Resume = () => {
	const summary = data.basics.summary;

	return (
		<>
			<Background />
			<main data-template="resume">
				<div id="Hero" className="pt-10 pb-7">
					<div className="container-lg">
						<div className="row align-items-center">
							<div className="col-auto me-auto">
								<h1 className="display-6 a">anna baker</h1>
							</div>
							<div className="col-auto">
								<h2>
									<span className="a">creative developer</span>
									<span className="a">digital designer</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div id="Summary" className="overflow-x-hidden pb-8">
					<div className="container-lg">
						<div className="row justify-content-center">
							<div className="col-md-8">
								<h3 className="baseline-rule a">summary</h3>
							</div>
						</div>
					</div>
					<div className="container-lg">
						<div className="row justify-content-center">
							<div className="col-md-8">
								<p>{summary}</p>
							</div>
						</div>
					</div>
				</div>
				<ResumeContainer />
			</main>
		</>
	)
}

const ResumeContainer = () => {
	const industryExperience =
		data.work
			.filter(f => f.type === "industry")
			.sort((a, b) => a.startDate > b.startDate ? 1 : b.startDate > a.startDate ? -1 : 0)
			.reverse();
	const teachingExperience =
		data.work
			.filter(f => f.type === "teaching")
			.sort((a, b) => a.startDate > b.startDate ? 1 : b.startDate > a.startDate ? -1 : 0)
			.reverse();
	const education =
		data.education
			.sort((a,b) => a.startDate > b.startDate ? 1 : b.startDate > a.startDate ? -1 : 0)
			.reverse();

	return (
		<div id="resume" className="">
			<div className="container-lg">
				<div className="row gx-5">
					<div className="col-lg-4">
						<ResumeNav />
					</div>
					<div
						className="col-lg-8"
						data-bs-spy="scroll"
						data-bs-target="#resume-nav"
						data-bs-root-margin="0px 0px -40%"
						data-bs-smooth-scroll="true"
						tabIndex="0"
					>
						<div id="experience" className="row resume-item">
							<div className="col">
								<div id="industry-experience" className="row mb-3">
									<div className="col">
										<h3 className="h2 baseline-rule-end mb-4 a">industry experience</h3>
										{industryExperience.map(m => (
											<div key={m.id} className="experience">
												<ResumeItemHeader {...m} />
												<div id={`positions-${m.id}`}>
													{m.position.map(p => (
														<ResumeExperience key={p.id} xpID={m.id} xpType={m.type} xpPresent={m.present} {...p} />
													))}
												</div>
											</div>
										))}
									</div>
								</div>
								<div id="teaching-experience" className="row">
									<div className="col">
										<h3 className="h2 baseline-rule-end mb-4 a">teaching experience</h3>
										{teachingExperience.map(m => (
											<div key={m.id} className="experience">
												<ResumeItemHeader {...m} />
												<div id={`positions-${m.id}`}>
													{m.position.map(p => (
														<ResumeExperience key={p.id} xpID={m.id} xpType={m.type} xpPresent={m.present} {...p} />
													))}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						<div id="education" className="row resume-item">
							<div className="col">
								<h3 className="h2 baseline-rule-end mb-4 a">education</h3>
								{education.map(m => (
									<div key={m.id} className="education">
										<ResumeItemHeader {...m} />
										<div id={`education-${m.id}`}>
											<ResumeEducation {...m} />
										</div>
									</div>
								))}
							</div>
						</div>

						<div id="skills" className="row resume-item">
							<div className="col">
								<h3 className="h2 baseline-rule-end mb-4 a">skills</h3>
								<div className="row">
									<div className="col-md-6">
										<div className="row mb-3">
											<div className="col">
												<h4 className="h3 a">development</h4>
											</div>
										</div>
										<div className="row mb-4">
											<div className="col">
												{data.skills
													.filter(f => f.category === "Development" && f.subcategory === "Conceptual")
													.map(m => (
														<div key={m.id} className="chip chip-light chip-sm me-2 mb-1 text-700">{m.name}</div>
												))}
											</div>
										</div>
										<div className="row mb-4">
											<div className="col">
												{data.skills
													.filter(f => f.category === "Development" && f.subcategory === "Tools")
													.map(m => (
														<div key={m.id} className="chip chip-light chip-sm me-2 mb-1 text-700">{m.name}</div>
												))}
											</div>
										</div>
									</div>

									<div className="col-md-6">
										<div className="row mb-3">
											<div className="col">
												<h4 className="h3 a">design</h4>
											</div>
										</div>
										<div className="row mb-4">
											<div className="col">
												{data.skills
													.filter(f => f.category === "Design" && f.subcategory === "Conceptual")
													.map(m => (
														<div key={m.id} className="chip chip-light chip-sm me-2 mb-1 text-700">{m.name}</div>
												))}
											</div>
										</div>
										<div className="row mb-4">
											<div className="col">
												{data.skills
													.filter(f => f.category === "Design" && f.subcategory === "Tools")
													.map(m => (
														<div key={m.id} className="chip chip-light chip-sm me-2 mb-1 text-700">{m.name}</div>
												))}
											</div>
										</div>
									</div>

								</div>
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
		<ul id="resume-nav" className="nav flex-column sticky-top">
			<li className="nav-item h3">
				<Link
					className="nav-link a"
					onClick={e => handleClick(e, "industry-experience")}
					to="#industry-experience"
				>
					experience
				</Link>
				<ul className="nav flex-column ps-4">
					<li className="nav-item p large">
						<Link
							className="nav-link"
							onClick={e => handleClick(e, "industry-experience")}
							to="#industry-experience"
						>
							Industry Experience
						</Link>
					</li>
					<li className="nav-item p large">
						<Link
							className="nav-link"
							onClick={e => handleClick(e, "teaching-experience")}
							to="#teaching-experience"
						>
							Teaching Experience
						</Link>
					</li>
				</ul>
			</li>
			<li className="nav-item h3">
				<Link
					className="nav-link a"
					onClick={e => handleClick(e, "education")}
					// to="#education"
				>
					education
				</Link>
			</li>
			<li className="nav-item h3">
				<Link
					className="nav-link a"
					onClick={e => handleClick(e, "skills")}
					to="#skills"
				>
					skills
				</Link>
			</li>
		</ul>
	)
}

const ResumeItemHeader = p => {
	const compontentMap = {
		AltmanHall: AltmanHall,
		AnnaBakerDesign: AnnaBakerDesign,
		Coursera: Coursera,
		EpicWebStudios: EpicWebStudios,
		HowardHanna: HowardHanna,
		Mercyhurst: Mercyhurst,
		VertMarkets: VertMarkets,
	}

	return (
		<div className="resume-item-header row gx-3 align-items-center mb-2">
			<div className="col-auto">
				{typeof compontentMap[p.logo] !== "undefined" ? React.createElement(compontentMap[p.logo], {background: p.color}) : null}
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
						<GeoAltFillBI fill={gray[500]} />
					</div>
					<div className="col-auto">
						<p className="small m-0 text-600">{p.location}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const ResumeExperience = (p) => {
	return (
		<div className="position row gx-3">
			<div className="col-auto">
				<button
					className={`btn btn-toggle-outline-dark${p.xpPresent && p.present && p.xpType === "industry" ? "" : " collapsed"}`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#details-${p.xpID}${p.id}`}
					aria-expanded={p.xpPresent && p.present && p.xpType === "industry" ? "true" : "false"}
					aria-controls={`details-${p.xpID}${p.id}`}
				></button>
			</div>
			<div className="col pb-4">
				<div className="row mb-2">
					<div className="col">
						<h5 className="h3 m-0 a">{p.title}</h5>
						<p className="small text-600 m-0">{p.startDate ? (
							`${convertMonth(p.startDate)} ${convertYear(p.startDate)} — ${p.present ? "Present" : convertMonth(p.endDate)} ${convertYear(p.endDate)}`
						) : null}</p>
					</div>
				</div>
				<div className="row">
					<div id={`details-${p.xpID}${p.id}`} className={`col collapse${p.xpPresent && p.present && p.xpType === "industry" ? " show" : ""}`} data-bs-parent={`positions-${p.xpID}`}>
						<ul className="small m-0">
							{p.summary.map((d, index) => (
								<li key={index}>{d}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

const ResumeEducation = (p) => {
	return (
		<div className="position row gx-3">
			<div className="col-auto">
				<button
					className={`btn btn-toggle-outline-dark${p.present ? "" : " collapsed"}`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#details-${p.id}`}
					aria-expanded={p.present ? "true" : "false"}
					aria-controls={`details-${p.id}`}
				></button>
			</div>
			<div className="col pb-4">
				<div className="row mb-2">
					<div className="col">
						<h5 className="h3 m-0 a">{p.area}</h5>
						<p className="small text-600 m-0">{p.startDate ? (
							`${convertMonth(p.startDate)} ${convertYear(p.startDate)} — ${p.present ? "Present" : convertMonth(p.endDate)} ${convertYear(p.endDate)}`
						) : null}</p>
					</div>
				</div>
				<div className="row">
					<div id={`details-${p.id}`} className={`col collapse${p.present ? " show" : ""}`} data-bs-parent={`positions-${p.id}`}>
						{p.url ? (
							<Link className="icon-link icon-link-hover" to={p.url} target="_blank">
								Professional Certificate
								<CertificateBI />
							</Link>
						) : null}
						{p.score ? (
							<p className="small">Average Grade Achieved: {p.score}</p>
						) : null}
						{p.courses.length > 0 ? (
							<>
								<h6 className="p"><small><strong>Course Certificates:</strong></small></h6>
								<ul className="small m-0">
									{p.courses
										.sort((a,b) => a.id - b.id)
										.reverse()
										.map((m, index) => (
										<li key={index}>
											<Link className="icon-link icon-link-hover" to={m.url} target="_blank">
												{m.name}
												<CertificateBI />
											</Link>
										</li>
									))}
								</ul>
							</>
						) : null}
						{p.minor ? (
							<p>Minor: {p.minor}</p>
						) : null}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume;