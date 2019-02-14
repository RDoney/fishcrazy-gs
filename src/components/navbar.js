import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';

import './style.scss';
import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';

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
						<img src={bulmaLogo} alt="Logo-2" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<Link className="navbar-item" to="/rates-and-info/">Rates and Info</Link>
						<Link className="navbar-item" to="/gallery/">Gallery</Link>
						<Link className="navbar-item" to="/meet-the-captain/">Meet the Captain</Link>
						<Link className="navbar-item" to="/contact/">Contact</Link>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
