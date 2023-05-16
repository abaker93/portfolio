import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [scroll, setScroll] = useState();

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		})
	}, [])

	const handleClick = (event, id) => {
		document.getElementById(id).scrollIntoView({behavior: "smooth"})
	}

	return (
			<nav className={`navbar navbar-expand-sm${scroll ? " scroll" : ""}`}>
				<div className="container-fluid">
					<Link to="/" className="navbar-brand h4 mb-0 a">anna baker</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarNav">
						<div className="offcanvas-header">
							<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav align-items-center ms-auto">
								<li className="nav-item mx-sm-2">
									<Link
										className="nav-link"
										data-bs-dismiss="offcanvas"
										data-bs-target="#navbarNav"
										onClick={e => handleClick(e, "about")}
										to="/#about"
									>
										<span>Info</span>
										<span className="a">about me</span>
									</Link>
								</li>
								<li className="nav-item mx-sm-2">
									<Link
										className="nav-link"
										data-bs-dismiss="offcanvas"
										data-bs-target="#navbarNav"
										onClick={e => handleClick(e, "portfolio")}
										to="/#portfolio"
									>
										<span>Work</span>
										<span className="a">some cases</span>
									</Link>
								</li>
								<li className="nav-item mx-sm-2">
									<button type="button" className="btn btn-outline-dark a" onClick={e => handleClick(e, "contact")}>Contact</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
	)
}

export default Navbar;