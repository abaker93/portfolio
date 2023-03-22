import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const handleClick = (event, id) => {
		document.getElementById(id).scrollIntoView({behavior: "smooth"})
	}

	return (
		<nav className="navbar sticky-top navbar-expand-sm">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand me-auto">
					<h1 className="h4">anna baker</h1>
				</Link>
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
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									className="nav-link"
									data-bs-dismiss="offcanvas"
									data-bs-target="#navbarNav"
									onClick={e => handleClick(e, "about")}
									to="/#about"
								>
									<span>Info</span>
									<span>about me</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									data-bs-dismiss="offcanvas"
									data-bs-target="#navbarNav"
									onClick={e => handleClick(e, "portfolio")}
									to="/#portfolio"
								>
									<span>Portfolio</span>
									<span>some cases</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<a className="btn btn-outline-primary" href="/#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;