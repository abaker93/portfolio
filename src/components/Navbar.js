import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const [ isHome, setIsHome ] = useState(false);
	const [scroll, setScroll] = useState();

	useEffect(() => {
		location.pathname === "/" ? setIsHome(true) : setIsHome(false)

		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		})
	}, [location])

	const handleClick = (event, id) => {
		const offcanvas = document.getElementById("navbarNav")

		if (offcanvas.classList.contains("show")) {
			offcanvas.addEventListener("hidden.bs.offcanvas", () => document.getElementById(id).scrollIntoView({behavior: "smooth"}))
		} else {
			document.getElementById(id).scrollIntoView({behavior: "smooth"})
		}
	}

	return (
		<nav className={`navbar navbar-expand-md py-4 px-md-4${scroll ? " scroll" : ""}`}>
			<div className="container-fluid px-3">
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
				<div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="navbarNav">
					<div className="offcanvas-header">
						<button type="button" className="btn-close mx-5 mt-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav align-items-sm-center mx-5 mx-sm-0 ms-sm-auto">
							<li className="nav-item my-2 my-sm-0 mx-sm-2">
								{isHome ? (
									<Link
										className="nav-link"
										data-bs-dismiss="offcanvas"
										data-bs-target="#navbarNav"
										onClick={e => handleClick(e, "about")}
									>
										<span>Info</span>
										<span className="a">about me</span>
									</Link>
								) : (
									<Link
										className="nav-link"
										to="/#about"
									>
										<span>Info</span>
										<span className="a">about me</span>
									</Link>
								)}
							</li>
							<li className="nav-item my-2 my-sm-0 mx-sm-2">
								{isHome ? (
									<Link
										className="nav-link"
										data-bs-dismiss="offcanvas"
										data-bs-target="#navbarNav"
										onClick={e => handleClick(e, "portfolio")}
									>
										<span>Work</span>
										<span className="a">some cases</span>
									</Link>
								) : (
									<Link
										className="nav-link"
										to="/#portfolio"
									>
										<span>Work</span>
										<span className="a">some cases</span>
									</Link>
								)}
				
							</li>
							<li className="nav-item my-2 my-sm-0 mx-sm-2">
								<Link type="button" className="btn btn-outline-dark a" onClick={e => handleClick(e, "Footer")}>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;