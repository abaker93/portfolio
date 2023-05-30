import { Link } from "react-router-dom"
import { Arrow, EnvelopePaperHeartBI } from "../assets/icons";
import ContactForm from "./ContactForm";

const Footer = () => {
	return (
		<footer id="Footer" className="overflow-x-hidden mt-5 py-3">

			<div id="contact" className="container-lg">
				<div className="row my-3">
					<div className="col">
						<p className="display-6 baseline-rule a">let's work together!</p>
						<p>Got ideas? Looking for a new team member? Want to meet up for coffee? Drop me a note below <Arrow direction="right-down" className="" /></p>
					</div>
				</div>

				<div className="row my-4 gap-4">
					<div className="col-auto">
						<a
							className="icon-link icon-link-hover"
							style={{ "--bs-icon-link-transform": "translate3d(0.125rem, -0.125rem, 0)" }}
							href="https://www.linkedin.com/in/annabakerdesign/"
							target="_blank"
							rel="noreferrer"
						>
							<Arrow direction="up-right" />
							LinkedIn
						</a>
					</div>
					<div className="col-auto">
						<a
							className="icon-link icon-link-hover"
							style={{ "--bs-icon-link-transform": "translate3d(0.15rem, -0.15rem, 0)" }}
							href="https://github.com/abaker93/"
							target="_blank"
							rel="noreferrer"
						>
							<Arrow direction="up-right" />
							GitHub
						</a>
					</div>
					<div className="col-auto">
						<a
							className="icon-link icon-link-hover"
							style={{ "--bs-icon-link-transform": "translate3d(0, -0.125rem, 0)" }}
							href="mailto:hello@annabaker.dev"
							target="_blank"
							rel="noreferrer"
						>
							<EnvelopePaperHeartBI />
							hello@annabaker.dev
						</a>
					</div>
				</div>

				<div className="row my-6">
					<div className="col-lg-6 col-md-8">
						<ContactForm />
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