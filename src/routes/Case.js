import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import portfolioData from "../data/portfolio.json";

const Case = () => {
	const page = useParams().case;

	const [caseData, setCaseData] = useState([]);

	const getCaseData = page => {
		const data = portfolioData.portfolio.filter(f => f.page === page)
		setCaseData(data);
	}

	useEffect(() => {
		getCaseData(page)
	}, [page])
	
	console.log(caseData)

	if (caseData !== null) {
		return (
			caseData.map(m => (
				<main key={m.id} data-template="case">
					<div className="container-lg">
						<header className="pt-10">
							<h1 className="baseline-rule">{m.title}</h1>
							<p style={{ whiteSpace: "pre" }}>{m.tagline.long}</p>
						</header>

						<section id="logo" className="pt-10 d-flex justify-content-center">
							{m.logo.map(l => (
								<img key={l.id} src={`../images/portfolio/${l.img}`} alt={l.alt} />
							))}
						</section>

						<section id="overview" className="pt-10">
							<h2 className="h4 baseline-rule">
								<span className="pe-4 ff-serif-deco">01</span>
								overview
							</h2>
							<div className="row gap-5 mt-3 pt-4">
								<div className="col-lg-4">
									<h3 className="h4">{m.overview.title}</h3>
									<p className="pt-2">{m.overview.content}</p>
								</div>
								<div className="col-lg-4">
									<h3 className="h4">{m.goal.title}</h3>
									<p className="pt-2">{m.goal.content}</p>
								</div>
							</div>
							<div className="row mt-3 pt-4">
								<div className="col">
									<Link href={m.url} className="btn btn-outline-dark">view live website</Link>
								</div>
							</div>
						</section>

						{m.original ? (
							<section id="original" className="pt-10">
								<h2 className="h4 baseline-rule">
									<span className="pe-4 ff-serif-deco">02</span>
									original website
								</h2>
							</section>
						) : null}

						<section id="typography" className="pt-10">
							<h2 className="h4 baseline-rule">
								<span className="pe-4 ff-serif-deco">02</span>
								typography
							</h2>
							<div className="row gap-5 mt-3 pt-4">
								{m.typography.map(t => (
									<div className="col">
										<img src={`../images/portfolio/${t.img}`} alt={t.alt} />
									</div>
								))}
							</div>
						</section>

						<section id="color-palette" className="pt-10">
							<h2 className="h4 baseline-rule">
								<span className="pe-4 ff-serif-deco">03</span>
								color palette
							</h2>
							<div className="row mt-3 pt-4">
								{m.color_palette.map(c => (
									<div className="col-12 d-flex justify-content-between align-items-end pt-5 pb-3 ps-3 pe-3" style={{ backgroundColor: c.hex, color: c.color }}>
										<div className="col">
											<h3 className="mb-0 fs-5 ff-sans fw-bold">{c.name}</h3>
										</div>
										<div className="col text-end">
											<p className="mb-0 small">{c.hex}</p>
										</div>
									</div>
								))}
							</div>
						</section>

						<section id="wireframe" className="pt-10">
							<h2 className="h4 baseline-rule">
								<span className="pe-4 ff-serif-deco">04</span>
								wireframe
							</h2>
							<div className="row mt-3 pt-4">
								{m.wireframe.map(w => (
									<img key={w.id} src={`../images/portfolio/${w.img}`} alt={w.alt} />
								))}
							</div>
						</section>

						<section id="home" className="pt-10">
							<h2 className="h4 baseline-rule">
								<span className="pe-4 ff-serif-deco">05</span>
								home
							</h2>
							<div className="row mt-3 pt-4">
								{m.home.map(h => (
									<img key={h.id} src={`../images/portfolio/${h.img}`} alt={h.alt} />
								))}
							</div>
						</section>

						{m.interior.map(i => (
							<section key={i.id} className="interior">
								<h2 className="h4 baseline-rule">
									<span className="pe-4 ff-serif-deco">0{6 + i.id}</span>
									{i.title}
								</h2>
								<div className="row mt-3 pt-4">
									{i.img.map(x => (
										<img key={x.id} src={`../images/portfolio/${x.img}`} alt={x.alt} />
									))}
								</div>
							</section>
						))}

						<section id="tools-techniques" className="pt-5">
							<h2 className="h4 baseline-rule">
								<span className="pe-4 ff-serif-deco">07</span>
								tools & techniques
							</h2>
							<div className="row mt-3 pt-4">
								{m.tools.map(t => (
									<span className="chip chip-light chip-large">{t}</span>
								))}
							</div>
						</section>

						<section id="link" className="text-center pt-5 pb-5">
							<Link href={m.url} className="btn btn-outline-dark" target="_blank">view live website</Link>
						</section>
						
					</div>
				</main>
			))
		)
	}
}

export default Case;