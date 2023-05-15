import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Background from "../components/Background";
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
	
	// console.log(caseData)

	if (caseData !== null) {
		return (
			caseData.map(m => (
				<main key={m.id} data-template="case">

					<Background colors={m.gradient_colors} />

					<div className="container-lg">

						<header className="pt-10">
							<h1 className="baseline-rule">{m.title}</h1>
							<p style={{ whiteSpace: "pre" }}>{m.tagline.long}</p>
						</header>
						
						{m.sections.map(s => (
							<Section key={s.id} url={m.url} github={m.github} {...s} />
						))}

						<section className="buttons pt-10">
							<div className="row d-flex justify-content-center">
								<div className="col-auto">
									<a href={m.url} target="_blank" className="btn btn-outline-dark">view live website</a>
								</div>
								{m.github ? (
									<div className="col-auto">
										<a href={m.github} target="_blank" className="btn btn-outline-dark">github repository</a>
									</div>
								) : null}
							</div>
						</section>
						
					</div>
				</main>
			))
		)
	}
}

const Section = p => {
	// console.log(p)

	const formatNumber = x => {
		if (x < 10) {
			return (`0${x}`);
		}
		
		return (x)
	}

	if (p.template === "logo") {
		return (
			<section className="logo pt-10 d-flex justify-content-center">
				{p.logos.map(l => (
					<img key={l.id} src={`../images/portfolio/${l.img}`} alt={l.alt} />
				))}
			</section>
		)
	}

	if (p.template === "overview") {
		console.log(p)
		return (
			<section className="overview pt-10">
				<h2 className="h4 baseline-rule">
					<span className="pe-4 ff-serif-deco">{formatNumber(p.id)}</span>
					{p.title}
				</h2>
				<div className="row gap-5 mt-3 pt-4">
					{p.columns.map(c => (
						<div key={c.id} className={c.double_col ? "col-lg" : "col-lg-4"}>
							<h3 className="h4">{c.title}</h3>
							<p className="pt-2">{c.content}</p>
						</div>
					))}
				</div>
				<div className="row mt-3 pt-4">
					<div className="col-auto">
						<a href={p.url} target="_blank" className="btn btn-outline-dark">view live website</a>
					</div>
					{p.github ? (
						<div className="col-auto">
							<a href={p.github} target="_blank" className="btn btn-outline-dark">github repository</a>
						</div>
					) : null}
				</div>
			</section>
		)
	}

	if (p.template === "typography") {
		return (
			<section className="typography pt-10">
				<h2 className="h4 baseline-rule">
					<span className="pe-4 ff-serif-deco">{formatNumber(p.id)}</span>
					{p.title}
				</h2>
				<div className="row gap-5 mt-3 pt-4">
					{p.typography.map(t => (
						<div key={t.id} className="col">
							<img src={`../images/portfolio/${t.img}`} alt={t.alt} />
						</div>
					))}
				</div>
			</section>
		)
	}

	if (p.template === "color_palette") {
		return (
			<section className="color-palette pt-10">
				<h2 className="h4 baseline-rule">
					<span className="pe-4 ff-serif-deco">{formatNumber(p.id)}</span>
					{p.title}
				</h2>
				<div className="row mt-3 pt-4">
					{p.color_palette.map(c => (
						c.shades ? (
							<div key={c.id} className="row mx-0 px-0">
								<div className="col-6 d-flex justify-content-between align-items-end pt-5 pb-3 ps-3 pe-3" style={{ backgroundColor: c.hex, color: c.color }}>
									<div className="col">
										<h3 className="mb-0 fs-5 ff-sans fw-bold">{c.name}</h3>
									</div>
									<div className="col text-end">
										<p className="mb-0 small">{c.hex}</p>
									</div>
								</div>
								{c.shades.map(s => (
									<div className="col d-flex align-items-end pt-5 pb-3 ps-3 pe-3" style={{ backgroundColor: s.hex, color: s.color }}>
										<div className="col text-end">
											<p className="mb-0 small">{s.hex}</p>
										</div>
									</div>
								))}
							</div>
						) : (
							<div key={c.id} className="col-12 d-flex justify-content-between align-items-end pt-5 pb-3 ps-3 pe-3" style={{ backgroundColor: c.hex, color: c.color }}>
								<div className="col">
									<h3 className="mb-0 fs-5 ff-sans fw-bold">{c.name}</h3>
								</div>
								<div className="col text-end">
									<p className="mb-0 small">{c.hex}</p>
								</div>
							</div>
						)
					))}
				</div>
			</section>
		)
	}

	if (p.template === "single_col_img") {
		return (
			<section className="single-col-img pt-10">
				<h2 className="h4 baseline-rule">
					<span className="pe-4 ff-serif-deco">{formatNumber(p.id)}</span>
					{p.title}
				</h2>
				<div className="row mt-3 pt-4">
					{p.img.map(i => (
						<img key={i.id} src={`../images/portfolio/${i.img}`} alt={i.alt} />
					))}
				</div>
			</section>
		)
	}

	if (p.template === "tools") {
		return (
			<section className="tools-techniques pt-10">
				<h2 className="h4 baseline-rule">
					<span className="pe-4 ff-serif-deco">{formatNumber(p.id)}</span>
					{p.title}
				</h2>
				<div className="row mt-3 pt-4">
					<div className="col d-flex gap-3 flex-wrap">
						{p.tools.map(t => (
							<span key={t} className="chip chip-light-dark chip-lg">{t}</span>
						))}
					</div>
				</div>
			</section>
		)
	}

	return (
		<h1>hi</h1>
	)
}

export default Case;