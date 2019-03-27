import React from "react";
import { Link } from "gatsby";

import "./style.scss";
import gatsbyLogo from "../images/gatsby-icon.png";

// const burgerClick = e => {
// 	const burger = document.querySelector(".navbar-burger");
// 	const mobileNav = document.querySelector("#navMenu");

// 	burger.addClass();
// };

class Navbar extends React.Component {
	render() {
		return (
			<div className="hero-head">
				<nav className="navbar">
					<div className="container">
						<div className="navbar-brand">
							<a className="navbar-item" href="/">
								<img src={gatsbyLogo} alt="Logo-1" />
							</a>
							<a
								role="button"
								class="navbar-burger"
								data-target="navMenu"
								aria-label="menu"
								aria-expanded="false"
							>
								<span aria-hidden="true" />
								<span aria-hidden="true" />
								<span aria-hidden="true" />
							</a>
						</div>
						<div id="navMenu" className="navbar-menu">
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
	}
}

export default Navbar;
