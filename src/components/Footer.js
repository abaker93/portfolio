import { Link } from "react-router-dom"
import { Arrow, EnvelopePaperHeartBI } from "../assets/icons";

const Footer = () => {
	return (
		<footer id="Footer" className="mt-5 py-3">
			<div className="container-lg">
				<div className="row my-3">
					<div className="col">
						<p className="display-6 text-lowercase baseline-rule">Let's get in touch!</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col">
						<p>
							<Link className="icon-link icon-link-hover" href="mailto:hello@annabaker.dev">
								hello@annabaker.dev
								<EnvelopePaperHeartBI />
							</Link>
						</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-auto">
						<p>
							<Link
								className="icon-link icon-link-hover"
								style={{ "--bs-icon-link-transform": "translate3d(0.125rem, -0.125rem, 0)" }}
								href="https://www.linkedin.com/in/annabakerdesign/"
							>
								<Arrow direction="up-right" />
								LinkedIn
							</Link>
						</p>
					</div>
					<div className="col-auto">
						<p>
							<Link
								className="icon-link icon-link-hover"
								style={{ "--bs-icon-link-transform": "translate3d(0.125rem, -0.125rem, 0)" }}
								href="https://github.com/abaker93/"
							>
								<Arrow direction="up-right" />
								GitHub
							</Link>
						</p>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row justify-content-between mt-5 px-2 xxsmall">
					<div className="col-auto">
						<div className="row g-1">
							<div className="col-auto">
								{new Date().getFullYear()}
							</div>
							<div className="col-auto">
								&copy;
							</div>
							<div className="col-auto">
								Anna Baker
							</div>
						</div>
					</div>
					<div className="col-auto">
						<Link to="/privacy-policy" className="link-dark link-offset-2 link-opacity-75-hover link-underline-opacity-50-hover">Privacy Policy</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;