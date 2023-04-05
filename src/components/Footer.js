import { Link } from "react-router-dom"
import { Arrow, EnvelopePaperHeartBI } from "../assets/icons";

const Footer = () => {
	return (
		<footer id="Footer" className="mt-5 py-3">
			<div className="container">
				<div className="row my-3">
					<div className="col">
						<p className="display-6 text-lowercase baseline-rule">Let's get in touch!</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col">
						<p>
							<Link className="icon-link icon-link-hover" href="mailto:anna.baker.design@gmail.com">
								anna.baker.design@gmail.com
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
		</footer>
	)
}

export default Footer;