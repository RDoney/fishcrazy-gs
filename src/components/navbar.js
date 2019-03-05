<<<<<<< HEAD
import React from "react";
import { Link } from "gatsby";
=======
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';
>>>>>>> 08bdb312a7ca0069d0eb45a33fd7056075604eeb

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
<<<<<<< HEAD
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
=======
						<Link className="navbar-item" to="/rates-and-info/">Rates and Info</Link>
						<Link className="navbar-item" to="/gallery/">Gallery</Link>
						<Link className="navbar-item" to="/meet-the-captain/">Meet the Captain</Link>
						<Link className="navbar-item" to="/contact/">Contact</Link>
>>>>>>> 08bdb312a7ca0069d0eb45a33fd7056075604eeb
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
