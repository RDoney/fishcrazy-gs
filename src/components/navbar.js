import React from "react";
import { Link } from "gatsby";

import "./style.scss";
import gatsbyLogo from "../images/gatsby-icon.png";

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
					>
						<img src={gatsbyLogo} alt="Logo-1" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<Link to="/" className="navbar-item">
							Home
						</Link>
						<Link to="/rates-and-info" className="navbar-item">
							Rates and Info
						</Link>
						<Link to="/meet-the-captain" className="navbar-item">
							Meet the Captain
						</Link>
						<Link to="/gallery" className="navbar-item">
							Gallery
						</Link>
						<span className="navbar-item">
							<Link to="/contact" className="button is-primary is-inverted">
								Contact
							</Link>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
